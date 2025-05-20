import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Register() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState("");
    const [exito, setExito] = useState("");

    const navigate = useNavigate();

    const manejarRegistro = async (e) => {
        e.preventDefault();

        if (!nombre || !correo || !usuario || !clave) {
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            // Simula una solicitud POST (ajusta la URL a tu backend real)
            // await axios.post("http://localhost:3000/api/registro", {
            //   nombre,
            //   correo,
            //   usuario,
            //   clave,
            // });

            setExito("Usuario registrado correctamente");
            setError("");

            // Redirige al login o a home si quieres
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (err) {
            setError("Error al registrar usuario");
            setExito("");
        }
    };

    return (
        <>
            <div className="container mt-3">
                <h2 className="mb-4">Registro de Usuario</h2>
                <form onSubmit={manejarRegistro} className="card p-4 shadow">
                    <div className="mb-3">
                        <label className="form-label">Nombre completo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}
                    {exito && <div className="alert alert-success">{exito}</div>}

                    <button type="submit" className="btn btn-primary w-100">
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    )
}
