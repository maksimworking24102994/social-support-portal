import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { SituationDescriptions } from "./SituationDescriptions";
import { I18nextProvider } from "react-i18next";
import i18n from "@/providers/i18n/i18n";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/theme/theme";
import { getSituationDescriptionsSchema } from "@/lib/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext, initialState } from "@/lib/context/FormContext";

jest.mock("@/services/openai", () => ({
  getAiSuggestion: jest.fn(),
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const schema = getSituationDescriptionsSchema(i18n.t);
  const methods = useForm({
    defaultValues: {
      currentFinancialSituation: "",
      employmentCircumstances: "",
      reasonForApplying: "",
    },
    resolver: yupResolver(schema),
  });

  const state = {
    ...initialState,
    employmentStatus: "unemployed",
    monthlyIncome: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <FormContext.Provider value={{ state, dispatch: () => {} }}>
          <FormProvider {...methods}>{children}</FormProvider>
        </FormContext.Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

describe("SituationDescriptions", () => {
  it("renders all form fields", () => {
    render(
      <Wrapper>
        <SituationDescriptions />
      </Wrapper>
    );

    expect(
      screen.getByRole("textbox", { name: "Current Financial Situation" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Employment Circumstances" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Reason for Applying" })
    ).toBeInTheDocument();
  });
});
