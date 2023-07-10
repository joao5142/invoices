import "styled-components";
import { light as defaultTheme } from "@/styles/theme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
