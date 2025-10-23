import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FormWizard } from "./FormWizard";
import { FormContext } from "@/lib/context/FormContext";
import { initialState } from "@/lib/context/FormContext";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/theme/theme";

// Mock the step components
jest.mock("./Steps", () => ({
  PersonalInformation: () => "Personal Information Step",
  FamilyFinancialInfo: () => "Family Financial Info Step",
  SituationDescriptions: () => "Situation Descriptions Step",
  Submission: () => "Submission Step",
}));

// Mock the schemas to be valid by default
jest.mock("@/lib/schemas/schemas", () => ({
  getPersonalInformationSchema: () => ({
    validate: jest.fn().mockResolvedValue(true),
  }),
  getFamilyFinancialInfoSchema: () => ({
    validate: jest.fn().mockResolvedValue(true),
  }),
  getSituationDescriptionsSchema: () => ({
    validate: jest.fn().mockResolvedValue(true),
  }),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={{ state: initialState, dispatch: () => {} }}>
        {ui}
      </FormContext.Provider>
    </ThemeProvider>
  );
};

describe("FormWizard", () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test("renders the first step initially", () => {
    renderWithProviders(<FormWizard />);
    expect(screen.getByText("Personal Information Step")).toBeInTheDocument();
  });

  test("navigates to the next step when Next button is clicked", async () => {
    renderWithProviders(<FormWizard />);
    expect(screen.getByText("Personal Information Step")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /buttons.next/i });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(
        screen.getByText("Family Financial Info Step")
      ).toBeInTheDocument();
    });
  });

  test("navigates to the previous step when Back button is clicked", async () => {
    renderWithProviders(<FormWizard />);
    const nextButton = screen.getByRole("button", { name: /buttons.next/i });

    // Go to the second step
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(
        screen.getByText("Family Financial Info Step")
      ).toBeInTheDocument();
    });

    // Go back to the first step
    const backButton = screen.getByRole("button", { name: /buttons.back/i });
    fireEvent.click(backButton);
    await waitFor(() => {
      expect(screen.getByText("Personal Information Step")).toBeInTheDocument();
    });
  });

  test("saves form data to localStorage on step change", async () => {
    renderWithProviders(<FormWizard />);
    const nextButton = screen.getByRole("button", { name: /buttons.next/i });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(localStorage.getItem("social-support-form")).not.toBeNull();
    });
  });

  test("shows the submission step at the end", async () => {
    renderWithProviders(<FormWizard />);
    const nextButton = screen.getByRole("button", { name: /buttons.next/i });

    // Navigate through all steps
    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(screen.getByText("Family Financial Info Step")).toBeInTheDocument()
    );
    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(
        screen.getByText("Situation Descriptions Step")
      ).toBeInTheDocument()
    );
    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(screen.getByText("Submission Step")).toBeInTheDocument()
    );

    // "Next" button should not be visible on the last step
    expect(screen.queryByRole("button", { name: /buttons.next/i })).toBeNull();
  });
});
