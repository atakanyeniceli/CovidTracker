import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryList } from "../Interfaces/countryList";
import { IinitialState } from "../Interfaces/covidSliceInitial";
import { ICustomHistory } from "../Interfaces/history";
import { IPayloadCountryHistory } from "../Interfaces/payloadCountryHistory";
import { IPayloadWorldHistory } from "../Interfaces/payloadWorldHistory";
import { IWorldSummary } from "../Interfaces/summary";
import { fetchByCountryHistory } from "./byCoutryHistory";
import { fetchCountry } from "./fetchCountry";
import { fetchGlobal } from "./fetchGlobal";
import { fetchWorldHistory } from "./fetchWorldHistory";

const initialState: IinitialState = {
    WorldSummary: {
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
    },
    countryList: [{
        Country: '',
        Slug: '',
        ISO2: ''
    }],
    history: [{
        Confirmed: 0,
        Recorved: 0,
        Death: 0,
        Date: ''
    }]
}

export const covidSlice = createSlice(
    {
        name: 'covidSlice',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchGlobal.fulfilled, (state, action: PayloadAction<IWorldSummary>) => {
                state.WorldSummary = { ...action.payload }
            });
            builder.addCase(fetchCountry.fulfilled, (state, action: PayloadAction<Array<ICountryList>>) => {
                state.countryList = [...action.payload.sort((a, b) => a.Country > b.Country ? 1 : -1)]
            });
            builder.addCase(fetchWorldHistory.fulfilled, (state, action: PayloadAction<Array<IPayloadWorldHistory>>) => {
                const tempHistory: Array<ICustomHistory> = action.payload.sort((a, b) => a.Date > b.Date ? 1 : -1).map((e) => {
                    return {
                        Confirmed: e.TotalConfirmed,
                        Recorved: e.TotalRecovered,
                        Death: e.TotalDeaths,
                        Date: e.Date
                    }
                })
                state.history = [...tempHistory]
            });
            builder.addCase(fetchByCountryHistory.fulfilled, (state, action: PayloadAction<Array<IPayloadCountryHistory>>) => {
                const tempHistory: Array<ICustomHistory> = action.payload.sort((a, b) => a.Date > b.Date ? 1 : -1).map((e) => {
                    return {
                        Confirmed: e.Confirmed,
                        Recorved: e.Recovered,
                        Death: e.Deaths,
                        Date: e.Date
                    }
                })
                state.history = [...tempHistory]
            });
        }
    }
)