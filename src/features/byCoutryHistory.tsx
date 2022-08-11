import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchByCountryHistory = createAsyncThunk('fetchByCountryHistory', async (_country: string) => {
    return await axios.get(`${process.env.REACT_APP_COVID_API}country/${_country}`)
        .then((res) => res.data)
})