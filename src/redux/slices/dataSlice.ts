import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'


interface Idata {
    name: string,
    population: number,
    region: string,
    capital: string[],
    flag: string
}
interface ICountry {
    nativeName: string
    subregion: string[],
    tld?: string[],
    currencies: string,
    languages: string[],
    borders: string[]
}

type TCountry = ICountry & Idata

interface IinitialState {
    countries: Idata[]
    country: TCountry[]
    searchCountry: Idata[]
    regions: string[]
    loading: boolean
    error: string | null
}

interface IMap {
    name: {
        common: string
    }
    flags: {
        svg: string
    }
}

interface INativeName {
    [key: string]: {
        common: string,
        official: string
    }
}

type TCountryItem = TCountry & IMap & {
    name: {
        nativeName?: INativeName
    }
}



type TItem = Idata & IMap

export const fetchData = createAsyncThunk<Idata[], string>(
    'data/fetchData',
    async function (filter = 'all') {
        const respons = await fetch(`https://restcountries.com/v3.1/${filter}`)
        const data = await respons.json()
        return data.map((item: TItem) => ({
            name: item.name.common,
            population: item.population,
            region: item.region,
            capital: item.capital,
            flag: item.flags.svg
        }))
    }
)
export const fetchCountry = createAsyncThunk<TCountryItem[], string>(
    'data/fetchCountry',
    async function (countryName) {
        const respons = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        const data = await respons.json()
        return data.map((item: TCountryItem) => ({
            flag: item.flags.svg,
            name: item.name.common,
            nativeName: item.name.nativeName?.[Object.keys(item.name.nativeName)[0]]?.official,
            population: item.population,
            region: item.region,
            subregion: item.subregion,
            capital: item.capital,
            tld: item.tld,
            currencies: Object.keys(item.currencies)[0],
            languages: Object.values(item.languages),
            borders: item.borders
        }))
    }
)


const initialState: IinitialState = {
    countries: [],
    regions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    country: [
        {
            flag: '',
            name: '',
            nativeName: '',
            population: 0,
            region: '',
            capital: [],
            subregion: [],
            tld: [],
            currencies: '',
            languages: [],
            borders: []
        }
    ],
    searchCountry: [],
    loading: true,
    error: null
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        search(state, action) {
            state.searchCountry = state.countries.filter(item =>
                item.name.toLowerCase().startsWith(`${action.payload}`)
            )
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCountry.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.countries = action.payload
                state.loading = false
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.country = action.payload
                state.loading = false
            })

    }
})

export const { search } = dataSlice.actions

export const selectCount = (state: RootState) => state.data


export default dataSlice.reducer