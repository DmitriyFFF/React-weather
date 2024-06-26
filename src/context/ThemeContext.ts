import { createContext } from "react";
import { TThemeContext, Theme } from "../utils/types";

// interface Props {
//   theme: string;
//   changeTheme: (theme: string) => void;
// }


export const ThemeContext = createContext<TThemeContext>({
  value: Theme.LIGHT,
  changeValue: () => {},
});
