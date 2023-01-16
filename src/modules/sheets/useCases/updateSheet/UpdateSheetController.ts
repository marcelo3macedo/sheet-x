import { container } from 'tsyringe';
import { Request, Response } from 'express';
import logger from '@lib/LogManager';
import UpdateSheetUseCases from './UpdateSheetUseCases';

export class UpdateSheetController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { spreadsheetId, sheet } = request.params
      const data = request.body;

      const updateSheetUseCases = container.resolve(UpdateSheetUseCases)
      await updateSheetUseCases.execute({ spreadsheetId, sheet, data })

      return response.status(200)
    } catch (error) {
      logger.error(`[CreateSheetController] ${error.message}`)
      return response.status(error.statusCode).json({ error: error.message })
    }
  }
}