import { useState } from "react"
import { TProvider, Theme } from "../utils/types"
import { ThemeContext } from "./ThemeContext"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

export const ThemeProvider = ({ children, ...props }: TProvider) => {
  const [value, setValue] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

  changeCssRootVariables(value);
  const changeValue = (value: Theme) => {
    storage.setItem('theme', value);
    setValue(value);
    changeCssRootVariables(value);
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
