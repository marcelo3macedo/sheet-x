import IListSheetProvider from "./dtos/IListSheetProvider"

interface ISheetProvider {
    read(data:IListSheetProvider):void;
}

export { ISheetProvider }