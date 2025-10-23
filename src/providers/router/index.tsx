import React from "react";
import { BrowserRouter } from "react-router-dom";

export function withRouter(App: React.ReactNode) {
  return <BrowserRouter>{App}</BrowserRouter>;
}
