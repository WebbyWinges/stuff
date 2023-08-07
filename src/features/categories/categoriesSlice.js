import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import thunk from "redux-thunk";
import {BASE_URL} from "../../utils/constants"

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{ 
        list: [],   
        isLodaing: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLodaing = true;
        })
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLodaing = false;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLodaing = false;
        })
    },

})

export default categoriesSlice.reducer;