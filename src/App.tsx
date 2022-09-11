// Inbuilt components
import React from 'react';

// External libraries
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Custom Pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import CreateSnippetPage from "./pages/CreateSnippet";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-snippet" element={<CreateSnippetPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
