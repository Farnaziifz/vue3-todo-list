import { themeItem } from '../../core/types/theme.type'

export interface ThemeInterFace {
  [index: string]: string
}

export interface ThemeConfigInterface {
  [index: string]: themeItem
}
