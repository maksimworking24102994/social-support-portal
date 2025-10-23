import React, { createContext, useReducer, type Dispatch } from "react";

export interface FormState {
  name: string;
  nationalId: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  maritalStatus: string;
  dependents: number;
  employmentStatus: string;
  monthlyIncome: number;
  housingStatus: string;
  currentFinancialSituation: string;
  employmentCircumstances: string;
  reasonForApplying: string;
}

type FormAction = {
  type: "SET_DATA";
  payload: Partial<FormState>;
};

export const initialState: FormState = {
  name: "",
  nationalId: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: "",
  maritalStatus: "",
  dependents: 0,
  employmentStatus: "",
  monthlyIncome: 0,
  housingStatus: "",
  currentFinancialSituation: "",
  employmentCircumstances: "",
  reasonForApplying: "",
};

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const FormContext = createContext<{
  state: FormState;
  dispatch: Dispatch<FormAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState, () => {
    const localData = localStorage.getItem("social-support-form");
    return localData ? JSON.parse(localData) : initialState;
  });

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
