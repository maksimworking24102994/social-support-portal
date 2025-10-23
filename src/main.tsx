import ReactDOM from "react-dom/client";
import App from "@/App";
import { applyProviders } from "@/providers";
import "@/providers/theme/style.css";
import "@/providers/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  applyProviders(<App />)
);
