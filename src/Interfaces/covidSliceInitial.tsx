import { ICountryList } from "./countryList";
import { ICustomHistory } from "./history";
import { IWorldSummary } from "./summary";



export interface IinitialState {
    WorldSummary: IWorldSummary,
    countryList: Array<ICountryList>,
    history: Array<ICustomHistory>
}