import { Router } from "express";
import { sheetRoutes } from "./sheet.routes";

const router = Router();
router.use('/sheets', sheetRoutes);

export { router };