import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './stateSlice'

export default configureStore({
  reducer: {
    language: languageReducer,
  },
})

