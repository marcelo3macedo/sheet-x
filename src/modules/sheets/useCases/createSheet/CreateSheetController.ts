import { container } from 'tsyringe';
import { Request, Response } from 'express';
import logger from '@lib/LogManager';
import CreateSheetUseCases from './CreateSheetUseCases';

export class CreateSheetController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { spreadsheetId, sheet } = request.params
      const data = request.body;

      const createSheetUseCases = container.resolve(CreateSheetUseCases)
      const d = await createSheetUseCases.execute({ spreadsheetId, sheet, data })

      return response.status(200).json(d)
    } catch (error) {
      logger.error(`[CreateSheetController] ${error.message}`)
      return response.status(error.statusCode).json({ error: error.message })
    }
  }
}