import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Aurea from './site-aurea/index.jsx';
import Anel from './site-aurea/site-aure-parte-joias/anel.jsx'
import Brincos from './site-aurea/site-aure-parte-joias/brincos.jsx'
import Pulseiras from './site-aurea/site-aure-parte-joias/pulseira.jsx';
import Colares from './site-aurea/site-aure-parte-joias/colares.jsx';
import Compra from './site-aurea/compra/compra.jsx';
import Compra2 from './site-aurea/compra/compra2.jsx';
import Compra3 from './site-aurea/compra/compra3.jsx';
import Compra4 from './site-aurea/compra/compra4.jsx';
import Compra5 from './site-aurea/compra/compra5.jsx';
import Compra6 from './site-aurea/compra/compra6.jsx';
import Compra7 from './site-aurea/compra/compra7.jsx';
import Compra8 from './site-aurea/compra/compra8.jsx';
import Compra9 from './site-aurea/compra/compra9.jsx';
import Compra10 from './site-aurea/compra/compra10.jsx';
import Compra11 from './site-aurea/compra/compra11.jsx';
import Compra12 from './site-aurea/compra/compra12.jsx';
import Compra13 from './site-aurea/compra/compra13.jsx';
import Compra14 from './site-aurea/compra/compra14.jsx';
import Compra15 from './site-aurea/compra/compra15.jsx';
import Compra16 from './site-aurea/compra/compra16.jsx';
import Compra17 from './site-aurea/compra/compra17.jsx';
import Compra18 from './site-aurea/compra/compra18.jsx';
import Compra19 from './site-aurea/compra/compra19.jsx';
import Compra20 from './site-aurea/compra/compra20.jsx';
import Compra21 from './site-aurea/compra/compra21.jsx';
import Compra22 from './site-aurea/compra/compra22.jsx';
import Compra23 from './site-aurea/compra/compra23.jsx';
import Compra24 from './site-aurea/compra/compra24.jsx';
import Login from './site-aurea/components/loginadm.jsx';
import Aureaadm from './site-aurea/adm.jsx'


export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Aurea />} />
                <Route path='/anel' element={<Anel />} />
                <Route path='/brincos' element={<Brincos />} />
                <Route path='/pulseira' element={<Pulseiras />} />
                <Route path='/colar' element={<Colares />} />
                <Route path='/compra' element={<Compra />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Aureaadm />} />
                <Route path='/compra2' element={<Compra2 />} />
                <Route path='/compra3' element={<Compra3 />} />
                <Route path='/compra4' element={<Compra4 />} />
                <Route path='/compra5' element={<Compra5 />} />
                <Route path='/compra6' element={<Compra6 />} />
                <Route path='/compra7' element={<Compra7 />} />
                <Route path='/compra8' element={<Compra8 />} />
                <Route path='/compra9' element={<Compra9 />} />
                <Route path='/compra10' element={<Compra10 />} />
                <Route path='/compra11' element={<Compra11 />} />
                <Route path='/compra12' element={<Compra12 />} />
                <Route path='/compra13' element={<Compra13 />} />
                <Route path='/compra14' element={<Compra14 />} />
                <Route path='/compra15' element={<Compra15 />} />
                <Route path='/compra16' element={<Compra16 />} />
                <Route path='/compra17' element={<Compra17 />} />
                <Route path='/compra18' element={<Compra18 />} />
                <Route path='/compra19' element={<Compra19 />} />
                <Route path='/compra20' element={<Compra20 />} />
                <Route path='/compra21' element={<Compra21 />} />
                <Route path='/compra22' element={<Compra22 />} />
                <Route path='/compra23' element={<Compra23 />} />
                <Route path='/compra24' element={<Compra24 />} />
             </Routes>
        </BrowserRouter>
    )
}