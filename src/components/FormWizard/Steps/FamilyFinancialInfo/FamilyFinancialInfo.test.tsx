import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { FamilyFinancialInfo } from "./FamilyFinancialInfo";
import { I18nextProvider } from "react-i18next";
import i18n from "@/providers/i18n/i18n";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/theme/theme";
import { getFamilyFinancialInfoSchema } from "@/lib/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const schema = getFamilyFinancialInfoSchema(i18n.t);
  const methods = useForm({
    defaultValues: {
      maritalStatus: "Single",
      dependents: 0,
      employmentStatus: "Unemployed",
      monthlyIncome: 0,
      housingStatus: "Tenant",
    },
    resolver: yupResolver(schema),
  });
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <FormProvider {...methods}>{children}</FormProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

describe("FamilyFinancialInfo", () => {
  it("renders all form fields", () => {
    render(
      <Wrapper>
        <FamilyFinancialInfo />
      </Wrapper>
    );

    expect(screen.getByLabelText("Marital Status")).toBeInTheDocument();
    expect(screen.getByLabelText("Dependents")).toBeInTheDocument();
    expect(screen.getByLabelText("Employment Status")).toBeInTheDocument();
    expect(screen.getByLabelText("Monthly Income")).toBeInTheDocument();
    expect(screen.getByLabelText("Housing Status")).toBeInTheDocument();
  });
});
