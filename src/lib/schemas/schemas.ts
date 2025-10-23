import * as yup from "yup";
import type { TFunction } from "i18next";

export const getPersonalInformationSchema = (t: TFunction) =>
  yup.object().shape({
    name: yup
      .string()
      .required(t("validation.required", { field: t("fields.name") })),
    nationalId: yup
      .string()
      .required(t("validation.required", { field: t("fields.nationalId") })),
    dateOfBirth: yup
      .string()
      .required(t("validation.required", { field: t("fields.dateOfBirth") })),
    gender: yup
      .string()
      .required(t("validation.required", { field: t("fields.gender") })),
    address: yup
      .string()
      .required(t("validation.required", { field: t("fields.address") })),
    city: yup
      .string()
      .required(t("validation.required", { field: t("fields.city") })),
    state: yup
      .string()
      .required(t("validation.required", { field: t("fields.state") })),
    country: yup
      .string()
      .required(t("validation.required", { field: t("fields.country") })),
    phone: yup
      .string()
      .required(t("validation.required", { field: t("fields.phone") })),
    email: yup
      .string()
      .email(t("validation.email"))
      .required(t("validation.required", { field: t("fields.email") })),
  });

export const getFamilyFinancialInfoSchema = (t: TFunction) =>
  yup.object().shape({
    maritalStatus: yup
      .string()
      .required(t("validation.required", { field: t("fields.maritalStatus") })),
    dependents: yup
      .number()
      .min(
        0,
        t("validation.minNumber", { field: t("fields.dependents"), min: 0 })
      )
      .required(t("validation.required", { field: t("fields.dependents") })),
    employmentStatus: yup
      .string()
      .required(
        t("validation.required", { field: t("fields.employmentStatus") })
      ),
    monthlyIncome: yup
      .number()
      .min(
        0,
        t("validation.minNumber", { field: t("fields.monthlyIncome"), min: 0 })
      )
      .required(t("validation.required", { field: t("fields.monthlyIncome") })),
    housingStatus: yup
      .string()
      .required(t("validation.required", { field: t("fields.housingStatus") })),
  });

export const getSituationDescriptionsSchema = (t: TFunction) =>
  yup.object().shape({
    currentFinancialSituation: yup.string().required(
      t("validation.required", {
        field: t("fields.currentFinancialSituation"),
      })
    ),
    employmentCircumstances: yup.string().required(
      t("validation.required", {
        field: t("fields.employmentCircumstances"),
      })
    ),
    reasonForApplying: yup
      .string()
      .required(
        t("validation.required", { field: t("fields.reasonForApplying") })
      ),
  });
