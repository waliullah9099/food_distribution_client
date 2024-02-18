import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/feathers/store.ts";
import ScrollBar from "./components/shared/ScrollBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ScrollBar />
    </Provider>
  </React.StrictMode>
);
