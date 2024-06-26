import { Theme } from "../utils/types";

export const changeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'component-background',
      'card-background',
      'card-shadow',
      'text-color'
    ]

    components.forEach(component => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    })
}
