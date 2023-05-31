import { Milk, MilkResponse } from "./types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchMilkByType } from "./components/utilities";

export interface MilkState {
  contents: MilkResponse;
  status: 'idle' | 'loading' | 'failed';
}

export const updateMilks = createAsyncThunk(
  'milks/updateMilks',
  async (milkType: string) => {
    const response = await fetchMilkByType(milkType);
    return response.json();
  }
)

const initialData: MilkResponse = {
  count:1,
  page:1,
  results: [{
  "name": "Dillion's unequaled cashew milk",
  "type": "Cashew milk",
  "storage": 99,
  "id": "initialData",
  }]
}

export const milkSlice = createSlice({
  name: "milk",
  initialState: {
    contents: initialData,
    status: 'idle',
  } as MilkState,
  reducers: {
    setMilks: (state, action:PayloadAction<MilkResponse>) => {
      state.contents = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateMilks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateMilks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.contents = action.payload;
      })
      .addCase(updateMilks.rejected, (state) => {
        state.status = 'failed';
      })
  }
})

export const { setMilks } = milkSlice.actions
export const selectMilks = (state: RootState) => state.milk.contents
export default milkSlice.reducer