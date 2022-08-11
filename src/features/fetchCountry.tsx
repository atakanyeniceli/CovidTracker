import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCountry = createAsyncThunk('fetchCountry', async () => {    
    return await axios.get(`${process.env.REACT_APP_COVID_API}countries`)
        .then((res) => res.data)
})