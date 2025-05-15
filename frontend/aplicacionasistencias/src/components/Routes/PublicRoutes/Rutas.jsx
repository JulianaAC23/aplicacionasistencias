import { Routes,Route } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Menu } from "../../common/Menu/Menu"
import { Login } from "../../pages/Login/Login"
import Contacto from "../../pages/Contacto/Contacto"
import Nosotros from "../../pages/Nosotros/Nosotros"  
import AdminRoutes from "../PrivateRoutes/AdminRoutes"



export default function Rutas() {
  return (
    <>
    <Menu></Menu>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>

        {/* Rutas Privadas */}
        <Route path="/admin/*" element={<AdminRoutes/>}></Route>
      </Routes>
    </>
  )
}
