import React from "react";
import { render, screen } from "@testing-library/react";
import { Submission } from "./Submission";
import { I18nextProvider } from "react-i18next";
import i18n from "@/providers/i18n/i18n";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/theme/theme";
import { FormContext } from "@/lib/context/FormContext";

const mockState = {
  name: "John Doe",
  nationalId: "123456789",
  dateOfBirth: "1990-01-01",
  gender: "male",
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  country: "USA",
  phone: "1234567890",
  email: "jhon.doe@email.com",
  maritalStatus: "single",
  dependents: 0,
  employmentStatus: "employed",
  monthlyIncome: 5000,
  housingStatus: "own",
  currentFinancialSituation: "Stable",
  employmentCircumstances: "Full-time",
  reasonForApplying: "Support",
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <FormContext.Provider value={{ state: mockState, dispatch: () => {} }}>
          {children}
        </FormContext.Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

describe("Submission", () => {
  it("renders all submission data", () => {
    render(
      <Wrapper>
        <Submission />
      </Wrapper>
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("123456789")).toBeInTheDocument();
    expect(screen.getByText("1990-01-01")).toBeInTheDocument();
    expect(screen.getByText("jhon.doe@email.com")).toBeInTheDocument();
    expect(screen.getByText("Stable")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
