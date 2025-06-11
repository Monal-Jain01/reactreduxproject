import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import StatusCode from '../StatusCode'

const initialState = {
    data: [], // Correct initial state
    status: StatusCode.IDLE,
}

const productSlice = createSlice({
    name: 'products',
    initialState, // Use the correct initial state
    reducers: { //to handle synchronous tasks
        // fetchProducts(state, action){
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => { //to handle asynchronous tasks
        // Add extra reducers here
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })

    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result
});

// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products');
//         const result = await data.json(); // Await the json call
//         dispatch(fetchProducts(result));
//     }
// }