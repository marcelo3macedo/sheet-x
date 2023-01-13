import { container } from "tsyringe";

import { GoogleAPIProvider } from "./SheetProvider/implementations/GoogleAPIProvider";
import { ISheetProvider } from "./SheetProvider/ISheetProvider";

container.registerSingleton<ISheetProvider>(
    "GoogleAPIProvider",
    GoogleAPIProvider
);