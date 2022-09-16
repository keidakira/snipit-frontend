// Inbuilt components
import React from 'react';

// External libraries
import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";

// Custom Pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import CreateSnippetPage from "./pages/CreateSnippet";
import AuthService from "./services/auth.service";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";

let authorized = false;

if (AuthService.isUserLoggedIn())
    authorized = true;

function App() {
    return (
        <BrowserRouter>
            {
                authorized && (
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="create-snippet" element={<CreateSnippetPage />} />
                        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                        <Route path="/signup" element={<Navigate to="/dashboard" replace/>}/>
                        <Route path="/logout" element={<Logout />} />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                )
            }
            {
                !authorized && (
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route
                            path="*"
                            element={
                                <main style={{padding: "1rem"}}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                )
            }
        </BrowserRouter>
    );
}

export default App;
