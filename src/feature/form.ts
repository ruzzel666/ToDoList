import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    inputValue: string
}

const initialState: FormState = {
    inputValue: '',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload
        },
        clearInputValue: (state) => {
            state.inputValue = ''
        },
    },
})

export const { setInputValue, clearInputValue } = formSlice.actions

export default formSlice.reducer
