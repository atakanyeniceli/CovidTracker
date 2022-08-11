import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGlobal = createAsyncThunk('fetchGlobal', async () => {
    return await axios.get(`${process.env.REACT_APP_COVID_API}world/total`)
        .then((res) => res.data)
})