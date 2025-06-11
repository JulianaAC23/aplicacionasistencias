import { Link, Navigate, useNavigate } from "react-router-dom";
import { Footer } from '../../common/Footer/Footer';
import { useForm } from "react-hook-form"; //manejo de formulario
import datos from "./../../../assets/data.json"; //datos fitcios
import { useAuth } from "../../../context/AuthProvider";
import { getRoutes } from "../../common/GetRoutes/getRoutes";

export function Login() {
    let {login} = useAuth();
    let navigate = useNavigate();
    console.log(datos.users);
    let { register, handleSubmit, } = useForm();
    const onSubmit = (dataForm)=>{
        console.log("form user",dataForm);
        //logica para verificar un usuario
        let userVerify =datos.users.find((u)=>{
            return u.email == dataForm.email && u.password == dataForm.password
        });
        console.log("usuario: ",userVerify);
        //guardar el usuario en localStorage y redirigir a una ruta correspondiente
        if(userVerify){
            login(userVerify);
           navigate(getRoutes(userVerify.rol));
            
        }else{
            alert("Credenciales incorrectas o usuario no encontrado")
        }
    }
  return (
    <>
       <div className="container">

        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                    
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido</h1>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="user">
                                        <div className="form-group">
                                            <input {...register("email", {required: true})}
                                                type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Correo..."/>
                                        </div>
                                        <div className="form-group">
                                            <input {...register("password", {required: true})}
                                                type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña..."/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Recordar</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                            Iniciar Sesion
                                        </button>
                                        <hr/>
                                        <a href="#" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Inciar sesion con Google
                                        </a>
                                        <a href="#" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Inciar sesion con Facebook
                                        </a>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">¿Olvidaste la contraseña?</a>
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to="/registro">Crear cuenta</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    <Footer />
    </>
  );
  
}

