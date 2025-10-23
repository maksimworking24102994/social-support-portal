import { Controller, useFormContext } from "react-hook-form";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  maritalStatusOptions,
  employmentStatusOptions,
  housingStatusOptions,
} from "@/lib/constants/options";

export const FamilyFinancialInfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth error={!!errors.maritalStatus}>
          <InputLabel id="maritalStatus-label">
            {t("fields.maritalStatus")}
          </InputLabel>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId="maritalStatus-label"
                id="maritalStatus"
                label={t("fields.maritalStatus")}
                aria-invalid={!!errors.maritalStatus}
                aria-describedby="maritalStatus-helper-text"
              >
                {maritalStatusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {t(option.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText id="maritalStatus-helper-text">
            {errors.maritalStatus?.message as string}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="dependents"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="dependents"
              label={t("fields.dependents")}
              type="number"
              fullWidth
              aria-invalid={!!errors.dependents}
              aria-describedby="dependents-helper-text"
              error={!!errors.dependents}
              helperText={errors.dependents?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth error={!!errors.employmentStatus}>
          <InputLabel id="employmentStatus-label">
            {t("fields.employmentStatus")}
          </InputLabel>
          <Controller
            name="employmentStatus"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId="employmentStatus-label"
                id="employmentStatus"
                label={t("fields.employmentStatus")}
                aria-invalid={!!errors.employmentStatus}
                aria-describedby="employmentStatus-helper-text"
              >
                {employmentStatusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {t(option.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText id="employmentStatus-helper-text">
            {errors.employmentStatus?.message as string}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="monthlyIncome"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="monthlyIncome"
              label={t("fields.monthlyIncome")}
              type="number"
              fullWidth
              aria-invalid={!!errors.monthlyIncome}
              aria-describedby="monthlyIncome-helper-text"
              error={!!errors.monthlyIncome}
              helperText={errors.monthlyIncome?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth error={!!errors.housingStatus}>
          <InputLabel id="housingStatus-label">
            {t("fields.housingStatus")}
          </InputLabel>
          <Controller
            name="housingStatus"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId="housingStatus-label"
                id="housingStatus"
                label={t("fields.housingStatus")}
                aria-invalid={!!errors.housingStatus}
                aria-describedby="housingStatus-helper-text"
              >
                {housingStatusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {t(option.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText id="housingStatus-helper-text">
            {errors.housingStatus?.message as string}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};
