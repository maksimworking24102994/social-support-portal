import React from "react";
import { DirectionProvider } from "./DirectionProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function withTranslations(App: React.ReactNode) {
  return (
    <DirectionProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <I18nextProvider i18n={i18n}>{App}</I18nextProvider>
      </LocalizationProvider>
    </DirectionProvider>
  );
}
