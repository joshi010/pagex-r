import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './contenidoPlantilla/slice';


export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    }
})