import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Aurea from './site-aurea/index.jsx';

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Aurea />} />
            </Routes>
        </BrowserRouter>
    )
}