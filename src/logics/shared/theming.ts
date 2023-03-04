import {
  ThemeInterFace,
  ThemeConfigInterface,
} from '../../core/interfaces/theme.interface'



export const themes: ThemeConfigInterface = {
  darkTheme: {
    'primary-color': '#455363',
    'background-color': '#1f2935',
    'text-color': '#fff',
  },
  lightTheme: {
    'primary-color': '#fff',
    'background-color': '#e5e5e5',
    'text-color': '#2d2d2d',
  },
}

const setTheme = (themeVal: ThemeInterFace) => {
  Object.keys(themeVal).forEach((el) => {
    document.documentElement.style.setProperty(`--${el}`, themeVal[el])
  })
}

export const changeTheme = (themeVal: string) => {
  setTheme(themes[themeVal])
}
