import IListSheetProvider from "./dtos/IListSheetProvider"
import IUpdateSheetProvider from "./dtos/IUpdateSheetProvider";

interface ISheetProvider {
    read(data:IListSheetProvider): Promise<any>;
    post(data:IUpdateSheetProvider): Promise<void>;
}

export { ISheetProvider }