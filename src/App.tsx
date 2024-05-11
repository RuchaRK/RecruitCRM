import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routeName } from "./App.routes";
import { PageWrapper } from "./Components/PageWrapper";
import { lightTheme } from "./Theme/LightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <PageWrapper>
        <Routes>
          {routeName.map((page) => (
            <Route path={page.path} element={page.component} />
          ))}
        </Routes>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
