import { CreateSheetController } from '@modules/sheets/useCases/createSheet/CreateSheetController';
import { ListSheetController } from '@modules/sheets/useCases/listSheet/ListSheetController';
import { Router } from 'express';

const sheetRoutes = Router();

const listSheetController = new ListSheetController()
const createSheetController = new CreateSheetController()

sheetRoutes.get('/:spreadsheetId/:range', listSheetController.handle);
sheetRoutes.post('/:spreadsheetId/:sheet', createSheetController.handle);

export { sheetRoutes };