import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "./components/circularProgress/CircularProgress";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
    return (
        <Suspense fallback={<CircularProgress />}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
