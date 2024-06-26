import { useState } from "react"
import { TProvider, Theme } from "../utils/types"
import { ThemeContext } from "./ThemeContext"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

export const ThemeProvider = ({ children, ...props }: TProvider) => {
  const [value, setValue] = useState<Theme>(Theme.LIGHT);

  const changeValue = (theme: Theme) => {
    setValue(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        value,
        changeValue,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
