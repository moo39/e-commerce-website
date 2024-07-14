import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
    allCahlet: [],
    isLoading: false,
    error: null,
};

const getAllChalet = createAsyncThunk('get/chalet', async (_, thunkAPI) => {
    try {
        const response = await baseUrl.get(
            'api/Chalet/Get'
            //   , {
            //     headers: {
            //         Authorization:` Bearer ${token}` // Include token in the request headers
            //     }
            // }
        );
        console.log(response);
        return response;
    } catch (error) {
        return error
    }
});


const allChaletSlice = createSlice({
    name: 'chalet',

    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllChalet.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllChalet.fulfilled, (state, action) => {
                state.allCahlet = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllChalet.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })


    }
}
);
export { getAllChalet };

export default allChaletSlice.reducer;