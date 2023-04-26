import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface Idata {
    name: string,
    population: number,
    region: string,
    capital: string[],
}

interface IinitialState {
    countries: Idata[]
    loading: boolean
    error: string | null
}

interface IMap {
    name: {
        common: string
    }
}

type TItem = Idata & IMap

export const fetchData = createAsyncThunk<Idata[], undefined>(
    'data/fetchData',
    async function () {
        const respons = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await respons.json()
        return data.map((item: TItem) => ({ name: item.name.common, population: item.population, region: item.region, capital: item.capital }))
    }
)


const initialState: IinitialState = {
    countries: [],
    loading: false,
    error: null
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.countries = action.payload
            })
    }
})

export const { } = dataSlice.actions

export const selectCount = (state: RootState) => state.data


export default dataSlice.reducer