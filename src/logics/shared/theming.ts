import {
  ThemeInterFace,
  ThemeConfigInterface,
} from '../../core/interfaces/theme.interface'

export const themes: ThemeConfigInterface = {
  darkTheme: {
    'primary-color': '#9d73ff',
    'background-color': '#1f0559',
    'text-color': '#fff',
    'secondary-color': 'fcc200',
    'tertiary-color': '00edff',
  },
  lightTheme: {
    'primary-color': '#500fe9',
    'secondary-color': 'fcc200',
    'tertiary-color': '00edff',
    'background-color': '#fff',
    'text-color': '#120334',
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
