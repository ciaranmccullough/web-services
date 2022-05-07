import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "./components/circularProgress/CircularProgress";
import { CustomThemeProvider } from "./contexts/theme/ThemeContext";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
    return (
        <Suspense fallback={<CircularProgress />}>
            <CustomThemeProvider>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </CustomThemeProvider>
        </Suspense>
    );
}

export default App;
