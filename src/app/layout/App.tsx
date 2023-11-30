import { Routes, Route } from "react-router-dom";
import "./globals.css"
import LoginForm from "../../features/_auth/users/LoginForm.tsx";
import {Home} from "../../features/_root/pages";
import RegisterForm from "../../features/_auth/users/RegisterForm.tsx";
import AuthLayout from "../../features/_auth/users/AuthLayout.tsx";
import RootLayout from "../../features/_root/RootLayout.tsx";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>

                {/* private routes */}
                <Route element={<RootLayout/>}>
                    <Route index element={<Home/>} />
                </Route>
            </Routes>

            <Toaster />
        </main>
    )
}

export default App