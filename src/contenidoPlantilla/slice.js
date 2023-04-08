import { createSlice } from "@reduxjs/toolkit";
import { DATA } from './data';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: DATA,
    },
    reducers: {}
});

export const selectedData = (state) => state.data.data;
export const filterData = (query, data) => Object.values(data).filter(data => data.section.toLowerCase().includes(query.toLowerCase()));
export default dataSlice.reducer;