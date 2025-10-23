import { Controller, useFormContext } from "react-hook-form";
import { TextField, Grid, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="name"
              label={t("fields.name")}
              fullWidth
              aria-invalid={!!errors.name}
              aria-describedby="name-helper-text"
              error={!!errors.name}
              helperText={errors.name?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="nationalId"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="nationalId"
              label={t("fields.nationalId")}
              fullWidth
              aria-invalid={!!errors.nationalId}
              aria-describedby="nationalId-helper-text"
              error={!!errors.nationalId}
              helperText={errors.nationalId?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={t("fields.dateOfBirth")}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => field.onChange(date)}
              slotProps={{
                textField: {
                  id: "dateOfBirth",
                  fullWidth: true,
                  "aria-invalid": !!errors.dateOfBirth,
                  "aria-describedby": "dateOfBirth-helper-text",
                  error: !!errors.dateOfBirth,
                  helperText: errors.dateOfBirth?.message as string,
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="gender"
              label={t("fields.gender")}
              select
              fullWidth
              aria-invalid={!!errors.gender}
              aria-describedby="gender-helper-text"
              error={!!errors.gender}
              helperText={errors.gender?.message as string}
            >
              <MenuItem value="male">{t("options.gender.male")}</MenuItem>
              <MenuItem value="female">{t("options.gender.female")}</MenuItem>
              <MenuItem value="prefer_not_to_say">
                {t("options.gender.prefer_not_to_say")}
              </MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="address"
              label={t("fields.address")}
              fullWidth
              aria-invalid={!!errors.address}
              aria-describedby="address-helper-text"
              error={!!errors.address}
              helperText={errors.address?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="city"
              label={t("fields.city")}
              fullWidth
              aria-invalid={!!errors.city}
              aria-describedby="city-helper-text"
              error={!!errors.city}
              helperText={errors.city?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="state"
              label={t("fields.state")}
              fullWidth
              aria-invalid={!!errors.state}
              aria-describedby="state-helper-text"
              error={!!errors.state}
              helperText={errors.state?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="country"
              label={t("fields.country")}
              fullWidth
              aria-invalid={!!errors.country}
              aria-describedby="country-helper-text"
              error={!!errors.country}
              helperText={errors.country?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                field.onChange(value);
              }}
              id="phone"
              label={t("fields.phone")}
              fullWidth
              aria-invalid={!!errors.phone}
              aria-describedby="phone-helper-text"
              error={!!errors.phone}
              helperText={errors.phone?.message as string}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="email"
              label={t("fields.email")}
              fullWidth
              aria-invalid={!!errors.email}
              aria-describedby="email-helper-text"
              error={!!errors.email}
              helperText={errors.email?.message as string}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
