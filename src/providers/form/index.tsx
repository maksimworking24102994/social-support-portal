import React from "react";
import { FormProvider } from "@/lib/context/FormContext";

export function withForm(App: React.ReactNode) {
  return <FormProvider>{App}</FormProvider>;
}
