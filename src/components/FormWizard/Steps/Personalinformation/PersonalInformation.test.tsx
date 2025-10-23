import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInformation } from "./PersonalInformation";
import { I18nextProvider } from "react-i18next";
import i18n from "@/providers/i18n/i18n";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getPersonalInformationSchema } from "@/lib/schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const schema = getPersonalInformationSchema(i18n.t);
  const methods = useForm({
    defaultValues: {
      name: "",
      nationalId: "",
      dateOfBirth: "",
      gender: "male",
      address: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <I18nextProvider i18n={i18n}>
          <FormProvider {...methods}>{children}</FormProvider>
        </I18nextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

describe("PersonalInformation", () => {
  it("renders all form fields", () => {
    render(
      <Wrapper>
        <PersonalInformation />
      </Wrapper>
    );

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/National ID/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText(/Date of Birth/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });
});
