import { theme } from "../style"; 

type ThemeInterface = typeof theme

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}