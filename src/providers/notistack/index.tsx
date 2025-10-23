import { SnackbarProvider } from "notistack";

export function withNotistack(App: React.ReactNode) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {App}
    </SnackbarProvider>
  );
}
