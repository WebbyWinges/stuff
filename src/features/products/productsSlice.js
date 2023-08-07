import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import {BASE_URL} from "../../utils/constants"
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) => {
    try {
        
        const res = await axios(`${BASE_URL}/products`);
        return res.data
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})

const productSlice = createSlice({
    name:'products',
    initialState:{ 
        list: [],   
        isLodaing: false,
        filtered: [],
        related: []
    },
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price < payload);
        },
        getRelatedProducts: (state, {payload}) => {
            const list = state.list.filter(({category: { id }}) => id === payload);
            state.related = shuffle(list)}
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLodaing = true;
        })
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLodaing = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLodaing = false;
        })
    },

})
export const {filterByPrice, getRelatedProducts} = productSlice.actions;
export default productSlice.reducer;