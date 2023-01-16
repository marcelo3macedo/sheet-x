import { CreateSheetController } from '@modules/sheets/useCases/createSheet/CreateSheetController';
import { ListSheetController } from '@modules/sheets/useCases/listSheet/ListSheetController';
import { UpdateSheetController } from '@modules/sheets/useCases/updateSheet/UpdateSheetController';
import { Router } from 'express';

const sheetRoutes = Router();

const listSheetController = new ListSheetController()
const createSheetController = new CreateSheetController()
const updateSheetController = new UpdateSheetController()

sheetRoutes.get('/:spreadsheetId/:range', listSheetController.handle);
sheetRoutes.post('/:spreadsheetId/:sheet', createSheetController.handle);
sheetRoutes.put('/:spreadsheetId/:sheet', updateSheetController.handle);

export { sheetRoutes };