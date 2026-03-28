import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/theme'
import { themes, themeOrder } from '../styles/themes'

export interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: themes['light']
}

export const themeSlice = createSlice({
    name: 'themeList',
    initialState,
    reducers: {
        toggleThemeAction: (state) => {
            const currentIndex = themeOrder.indexOf(state.theme.name)
            const nextIndex = (currentIndex + 1) % themeOrder.length
            state.theme = themes[themeOrder[nextIndex]]
        },
    },
})

export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer