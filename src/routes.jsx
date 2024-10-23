import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Aurea from './site-aurea/index.jsx';
import Anel from './site-aurea/site-aure-parte-joias/anel.jsx'

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Aurea />} />
                <Route path='/anel' element={<Anel />} />
            </Routes>
        </BrowserRouter>
    )
}