import type { PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mui/stylis-plugin-rtl";

export const DirectionProvider = ({ children }: PropsWithChildren) => {
  const { i18n } = useTranslation();

  const theme = createTheme({
    direction: i18n.dir(),
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: i18n.dir() === "rtl" ? [rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};
