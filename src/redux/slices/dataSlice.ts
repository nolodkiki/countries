import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface Idata {
    name: string,
    population: number,
    region: string,
    capital: string,
    city: string
}

interface IinitialState {
    countries: Idata[]
}

// export const fetchData = createAsyncThunk(
//     'data/fetchData',
//     async function () {
//         const respons = await fetch(`https://restcountries.com/v3.1/name/deutschland`)
//         const data = await respons.json()
//         return data
//     }
// )


const initialState: IinitialState = {
    countries: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        test(state, action: PayloadAction<string>) {
            state.countries.push({
                name: 'Berlin',
                population: 80000000,
                region: 'Eroup',
                capital: 'Berlin',
                city: action.payload
            })
        }
    },
})

export const { test } = dataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data


export default dataSlice.reducer