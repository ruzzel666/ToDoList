import { Theme, Themes } from '../models/theme';

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: 'rgb(237, 240, 241)'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#1a1a2e',
        backgroundSecondary: '#16213e'
    }
}

const ocean: Theme = {
    name: 'ocean',
    colors: {
        backgroundPrimary: '#0077b6',
        backgroundSecondary: '#caf0f8'
    }
}

const sunset: Theme = {
    name: 'sunset',
    colors: {
        backgroundPrimary: '#6a0572',
        backgroundSecondary: '#ff9a3c'
    }
}

export const themes: Themes = { light, dark, ocean, sunset }

export const themeOrder = ['light', 'dark', 'ocean', 'sunset']