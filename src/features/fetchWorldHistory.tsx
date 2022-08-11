import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWorldHistory = createAsyncThunk('fetchWorldHistory', async () => {
    return await axios.get(`${process.env.REACT_APP_COVID_API}world`)
        .then((res) => res.data)
})