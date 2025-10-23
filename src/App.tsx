import {
  CssBaseline,
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home } from "@/pages/Home";
import { useDirection } from "@/lib/hooks/useDirection";

function App() {
  const { t } = useTranslation();
  const { changeLanguage, lang } = useDirection();

  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 2, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" } }}
            component="h1"
          >
            {t("socialSupportApplication")}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
            <InputLabel id="language-select-label">
              {t("languagesLabel")}
            </InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={lang}
              label={t("languagesLabel")}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"ar"}>العربية</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
