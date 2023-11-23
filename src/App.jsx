import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes"
import './App.css'

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIf0x0TXxbf1xzZFxMY1VbR3FPIiBoS35RdURiW35ccXdcRWddUEF/');


const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

export default App
