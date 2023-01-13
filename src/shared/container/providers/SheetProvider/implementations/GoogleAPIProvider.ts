import { authenticate } from "@google-cloud/local-auth";
import { google } from "googleapis";
import { ISheetProvider } from "../ISheetProvider";

const path = require('path');
const fs = require('fs').promises;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'credentials/token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials/credentials.json');

class GoogleAPIProvider implements ISheetProvider {
    async read({ spreadsheetId, range }): Promise<any> {
        const auth = await this.authorize()

        const sheets = google.sheets({version: 'v4', auth});
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        
        return res.data.values
    }

    async authorize() {
        let client = await this.loadSavedCredentialsIfExist();
        if (client) {
            return client;
        }
        client = await authenticate({
            scopes: SCOPES,
            keyfilePath: CREDENTIALS_PATH,
        });
        if (client.credentials) {
            await this.saveCredentials(client);
        }
        return client;
    }

    async loadSavedCredentialsIfExist():Promise<any> {
        try {
          const content = await fs.readFile(TOKEN_PATH);
          const credentials = JSON.parse(content);
          return google.auth.fromJSON(credentials);
        } catch (err) {
          return null;
        }
    }

    async saveCredentials(client) {
        const content = await fs.readFile(CREDENTIALS_PATH);
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
          type: 'authorized_user',
          client_id: key.client_id,
          client_secret: key.client_secret,
          refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(TOKEN_PATH, payload);
    }
}

export { GoogleAPIProvider };