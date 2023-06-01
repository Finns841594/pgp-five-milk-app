import { Milk, MilkResponse } from "./types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchMilk, fetchMilkByPage, fetchMilkBySearch, fetchMilkByType, fetchMilkByTypeAndPage } from "./components/utilities";

export interface MilkState {
  contents: MilkResponse;
  status: 'idle' | 'loading' | 'failed';
}

export interface MilkTypeState {
  contents: string;
  status: 'idle' | 'loading' | 'failed';
}

export const initialMilks = createAsyncThunk(
  'milks/updateMilks',
  async () => {
    const response = await fetchMilk();
    return response;
  }
)

export const updateMilksByPage = createAsyncThunk(
  'milks/updateMilks',
  async (page: number) => {
    const response = await fetchMilkByPage(page);
    return response;
  }
)

export const updateMilksByType = createAsyncThunk(
  'milks/updateMilks',
  async (milkType: string) => {
    const response = await fetchMilkByType(milkType);
    return response;
  }
)

export const updateMilksBySearch = createAsyncThunk(
  'milks/updateMilks',
  async (milkType: string) => {
    const response = await fetchMilkBySearch(milkType);
    console.log('😎response', response)
    return response;
  }
)

export const updateMilksByTypeAndPage = createAsyncThunk(
  'milks/updateMilks',
  async ({milkType, page}: {milkType: string, page: number}) => {
    const response = await fetchMilkByTypeAndPage(milkType, page);
    return response;
  }
)

const initialData: MilkResponse = {
  count:0,
  page:1,
  results: []
}

export const currentMilkTypeSlice = createSlice({
  name: "milkType",
  initialState: {
    contents: 'all',
    status: 'idle',
  } as MilkTypeState,
  reducers: {
    setMilkType: (state, action:PayloadAction<string>) => {
      state.contents = action.payload;
    }
  },
  }
)

export const milkSlice = createSlice({
  name: "milk",
  initialState: {
    contents: initialData,
    status: 'idle',
  } as MilkState,
  reducers: {
    setMilks: (state, action:PayloadAction<MilkResponse>) => {
      state.contents = action.payload;
    },
    setType: (state, action:PayloadAction<string>) => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateMilksByTypeAndPage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateMilksByTypeAndPage.fulfilled, (state, action) => {
        state.status = 'idle';
        state.contents = action.payload;
      })
      .addCase(updateMilksByTypeAndPage.rejected, (state) => {
        state.status = 'failed';
      })
  }
})

export const { setMilks } = milkSlice.actions
export const selectMilks = (state: RootState) => state.milk.contents
export default milkSlice.reducer