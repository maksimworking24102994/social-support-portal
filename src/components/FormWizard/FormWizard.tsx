import { useState, useContext, useRef } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  PersonalInformation,
  FamilyFinancialInfo,
  SituationDescriptions,
  Submission,
} from "./Steps";
import { FormContext, type FormState } from "@/lib/context/FormContext";
import {
  getPersonalInformationSchema,
  getFamilyFinancialInfoSchema,
  getSituationDescriptionsSchema,
} from "@/lib/schemas/schemas";
import { type AnyObjectSchema } from "yup";
import { useFocusOnStepChange } from "@/lib/hooks/useFocusOnStepChange";

const steps = [
  "steps.personalInformation",
  "steps.familyFinancialInfo",
  "steps.situationDescriptions",
  "steps.submission",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <FamilyFinancialInfo />;
    case 2:
      return <SituationDescriptions />;
    case 3:
      return <Submission />;
    default:
      return <Typography>Unknown step</Typography>;
  }
}

export const FormWizard = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const { state, dispatch } = useContext(FormContext);
  const stepContentRef = useRef<HTMLDivElement>(null);

  useFocusOnStepChange(stepContentRef, activeStep);

  const validationSchema = [
    getPersonalInformationSchema(t),
    getFamilyFinancialInfoSchema(t),
    getSituationDescriptionsSchema(t),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm<FormState>({
    defaultValues: state,
    resolver: yupResolver(currentValidationSchema as AnyObjectSchema),
    mode: "onChange",
    shouldUnregister: false,
  });

  const handleNextStep = (data: FormState) => {
    const newState = { ...state, ...data };
    dispatch({ type: "SET_DATA", payload: data });
    localStorage.setItem("social-support-form", JSON.stringify(newState));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const hasNextStep = activeStep < steps.length - 1;

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        aria-label={t("formWizard.stepper")}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
              aria-label={t(label)}
              aria-current={activeStep === index ? "step" : undefined}
            >
              {t(label)}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNextStep)}>
          <Box sx={{ mt: 4, mb: 2 }} ref={stepContentRef}>
            {getStepContent(activeStep)}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep !== 0 && (
              <Button
                color="inherit"
                onClick={handleBackStep}
                sx={{ ml: 1 }}
                aria-label={t("buttons.back")}
              >
                {t("buttons.back")}
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />
            {hasNextStep && (
              <Button type="submit" aria-label={t("buttons.next")}>
                {t("buttons.next")}
              </Button>
            )}
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};
