import { container } from 'tsyringe';
import { Request, Response } from 'express';
import logger from '@lib/LogManager';
import ListSheetUseCases from './ListSheetUseCases';

export class ListSheetController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { spreadsheetId, range } = request.params

      const listSheetUseCases = container.resolve(ListSheetUseCases)
      const data = await listSheetUseCases.execute({ spreadsheetId, range })

      return response.json(data)
    } catch (error) {
      logger.error(`[ListSheetController] ${error.message}`)
      return response.status(error.statusCode).json({ error: error.message })
    }
  }
}