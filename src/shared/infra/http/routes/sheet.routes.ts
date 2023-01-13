import { ListSheetController } from '@modules/sheets/useCases/listSheet/ListSheetController';
import { Router } from 'express';

const sheetRoutes = Router();

const listSheetController = new ListSheetController()

sheetRoutes.get('/:spreadsheetId/:range', listSheetController.handle);

export { sheetRoutes };