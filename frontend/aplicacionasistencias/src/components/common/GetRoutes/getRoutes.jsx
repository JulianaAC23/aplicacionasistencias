

export function getRoutes(rol) {
    switch (rol) {
                case "admin": return "/dashboard/admin";
                case "profesor": return "/dashboard/profesor";
                case "estudiante": return "/dashboard/estudiante";
                default: return "/";
            }
}
