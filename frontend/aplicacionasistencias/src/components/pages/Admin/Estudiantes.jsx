import { useAuth } from "../../../context/AuthProvider"

export default function Estudiantes() {
    let { user } = useAuth();
    return (
        <>
            <style>{`
                .bg-fucsia {
                    background-color: #e91e63;
                    color: white;
                }
                .text-fucsia {
                    color: #e91e63;
                }
                .table-fucsia thead {
                    background-color: #e91e63;
                    color: white;
                }
                .btn-fucsia {
                    background-color: #e91e63;
                    color: white;
                    border: none;
                }
                .btn-fucsia:hover {
                    background-color: #c2185b;
                }
            `}</style>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        {/* Logo y encabezado */}
                        <div className="text-end">
                            <p><strong>Estudiante: {user.username} </strong></p>
                            <p><strong>Documento: {user.id} </strong></p>
                            <p><strong>Correo: {user.email} </strong></p>
                        </div>

                        <div className="bg-fucsia p-2 mb-3 rounded"></div>

                        <p><strong>Grupo: 11A </strong></p>
                        <p><strong>Periodo académico: 2025-1</strong></p>

                        <h4 className="text-center fw-bold mb-4">Datos del Estudiante</h4>

                        <div className="table-responsive">
                            <table className="table table-bordered table-fucsia text-center align-middle">
                                <thead>
                                    <tr>
                                        <th rowSpan="2">Periodo</th>
                                        <th rowSpan="2">Faltas</th>
                                        <th colSpan="3">Medio de Transporte</th>
                                        <th colSpan="4">Estrato</th>
                                    </tr>
                                    <tr>
                                        <th>Metro</th>
                                        <th>Bus</th>
                                        <th>Bici</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2025-1</td>
                                        <td>0</td>
                                        <td>✔️</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>2025-2</td>
                                        <td>2</td>
                                        <td>✔️</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>✔️</td>
                                    </tr>
                                    <tr>
                                        <td>2025-3</td>
                                        <td>1</td>
                                        <td>✔️</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>✔️</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="d-grid mt-4">
                            <button className="btn btn-fucsia btn-lg">DESCARGAR PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

