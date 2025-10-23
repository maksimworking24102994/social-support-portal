import { withTranslations } from "./i18n";
import { withForm } from "./form";
import { withRouter } from "./router";
import { withNotistack } from "./notistack";

const providers = [withNotistack, withTranslations, withForm, withRouter];

export function applyProviders(App: React.ReactNode) {
  return providers.reduce(
    (CurrentApp, withProvider) => withProvider(CurrentApp),
    App
  );
}
