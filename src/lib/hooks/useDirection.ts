import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return {
    changeLanguage,
    dir: i18n.dir(),
    lang: i18n.language,
  };
};
