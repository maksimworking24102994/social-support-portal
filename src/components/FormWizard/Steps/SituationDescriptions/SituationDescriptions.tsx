import { Controller, useFormContext } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HelpMeWrite } from "../../../HelpMeWrite";
import { useContext } from "react";
import { FormContext } from "@/lib/context/FormContext";

export const SituationDescriptions = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { state } = useContext(FormContext);

  const generatePrompt = (fieldName: keyof typeof state) => {
    const employmentStatusKey = `options.employmentStatus.${
      state.employmentStatus?.toLowerCase() || "unemployed"
    }`;

    return t("prompts.situationDescription", {
      employmentStatus: t(employmentStatusKey),
      monthlyIncome: state.monthlyIncome,
      fieldName: t(`fields.${fieldName}`),
    });
  };

  const handleAccept = (fieldName: keyof typeof state, text: string) => {
    setValue(fieldName, text);
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="currentFinancialSituation"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="currentFinancialSituation"
              label={t("fields.currentFinancialSituation")}
              multiline
              rows={4}
              fullWidth
              aria-invalid={!!errors.currentFinancialSituation}
              aria-describedby="currentFinancialSituation-helper-text"
              error={!!errors.currentFinancialSituation}
              helperText={errors.currentFinancialSituation?.message as string}
            />
          )}
        />
        <HelpMeWrite
          prompt={generatePrompt("currentFinancialSituation")}
          onAccept={(text) => handleAccept("currentFinancialSituation", text)}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="employmentCircumstances"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="employmentCircumstances"
              label={t("fields.employmentCircumstances")}
              multiline
              rows={4}
              fullWidth
              aria-invalid={!!errors.employmentCircumstances}
              aria-describedby="employmentCircumstances-helper-text"
              error={!!errors.employmentCircumstances}
              helperText={errors.employmentCircumstances?.message as string}
            />
          )}
        />
        <HelpMeWrite
          prompt={generatePrompt("employmentCircumstances")}
          onAccept={(text) => handleAccept("employmentCircumstances", text)}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="reasonForApplying"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="reasonForApplying"
              label={t("fields.reasonForApplying")}
              multiline
              rows={4}
              fullWidth
              aria-invalid={!!errors.reasonForApplying}
              aria-describedby="reasonForApplying-helper-text"
              error={!!errors.reasonForApplying}
              helperText={errors.reasonForApplying?.message as string}
            />
          )}
        />
        <HelpMeWrite
          prompt={generatePrompt("reasonForApplying")}
          onAccept={(text) => handleAccept("reasonForApplying", text)}
        />
      </Grid>
    </Grid>
  );
};
