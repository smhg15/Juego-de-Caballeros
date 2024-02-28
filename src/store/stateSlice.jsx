import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'english',
  },
  reducers: {
    translateToCordobez: (state) => {
      state.value = 'cordobés'
    },
    translateToEnglish: (state) => {
      state.value = 'english'
    },
    translateToSpanish: (state) => {
      state.value = 'spanish'
    },
  },
})

export const { translateToCordobez, translateToEnglish, translateToSpanish} = languageSlice.actions

export default languageSlice.reducer