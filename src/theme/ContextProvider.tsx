import React, { FC, useMemo, useState } from "react";
import { ThemeContext, ThemeType, local_storage_theme } from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(local_storage_theme) as ThemeType) || ThemeType.LIGHT;

const ContextProvider: React.FC = (props: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const defaultValues = useMemo(
    () => ({
      theme: defaultTheme,
      setTheme: setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
