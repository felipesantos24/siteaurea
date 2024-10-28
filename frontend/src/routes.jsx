import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Aurea from './site-aurea/index.jsx';
import Anel from './site-aurea/site-aure-parte-joias/anel.jsx'
import Brincos from './site-aurea/site-aure-parte-joias/brincos.jsx'
import Pulseiras from './site-aurea/site-aure-parte-joias/pulseira.jsx';
import Colares from './site-aurea/site-aure-parte-joias/colares.jsx';

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Aurea />} />
                <Route path='/anel' element={<Anel />} />
                <Route path='/brincos' element={<Brincos />} />
                <Route path='/pulseira' element={<Pulseiras />} />
                <Route path='/colar' element={<Colares />} />
            </Routes>
        </BrowserRouter>
    )
}