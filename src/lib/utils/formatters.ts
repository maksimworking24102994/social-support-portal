const isDate = (value: unknown): value is string => {
  if (typeof value !== "string") {
    return false;
  }
  return !Number.isNaN(Date.parse(value));
};

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString();
};

export const formatValue = (value: unknown) => {
  if (isDate(value)) {
    return formatDate(value);
  }
  return String(value);
};
