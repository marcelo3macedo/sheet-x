import { inject, injectable } from "tsyringe";
import { ISheetProvider } from "@shared/container/providers/SheetProvider/ISheetProvider";
import SheetFormatter from "@lib/SheetFormatter";

@injectable()
export default class ListSheetUseCases {
    constructor(
      @inject('GoogleAPIProvider')
      private googleAPIProvider: ISheetProvider,
    ) {}

    async execute({ spreadsheetId, range }): Promise<any> {
        const data = await this.googleAPIProvider.read({ spreadsheetId, range })
        
        return SheetFormatter.toJson(data)
   }
}