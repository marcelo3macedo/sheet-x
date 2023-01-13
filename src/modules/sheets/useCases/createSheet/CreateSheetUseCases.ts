import { inject, injectable } from "tsyringe";
import { ISheetProvider } from "@shared/container/providers/SheetProvider/ISheetProvider";
import SheetFormatter from "@lib/SheetFormatter";

@injectable()
export default class CreateSheetUseCases {
    constructor(
      @inject('GoogleAPIProvider')
      private googleAPIProvider: ISheetProvider,
    ) {}

    async execute({ spreadsheetId, sheet, data }): Promise<any> {
        const body = SheetFormatter.toUpdateRequest(sheet, data)
        if (!body) return 

        return this.googleAPIProvider.post({ spreadsheetId, data: body })
   }
}