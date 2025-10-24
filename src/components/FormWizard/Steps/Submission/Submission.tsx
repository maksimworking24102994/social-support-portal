import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useContext, useState } from "react";
import { FormContext } from "@/lib/context/FormContext";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { formatValue } from "@/lib/utils/formatters";

export const Submission = () => {
  const { t } = useTranslation();
  const { state } = useContext(FormContext);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // simulate api call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      enqueueSnackbar(t("messages.applicationSubmitted"), {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(t("messages.submissionFailed"), { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t("steps.submission")}
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(state).map(
          ([key, value]) =>
            typeof value !== "function" && (
              <Grid size={{ xs: 12, sm: 6 }} key={key}>
                <Typography>
                  <strong>{t(`fields.${key}`)}:</strong> {formatValue(value)}
                </Typography>
              </Grid>
            )
        )}
      </Grid>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mt: 2 }}
          startIcon={
            loading ? <CircularProgress size={20} color="inherit" /> : null
          }
        >
          {t("buttons.submit")}
        </Button>
      </Box>
    </Paper>
  );
};
