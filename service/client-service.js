//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((response) => response.json());

export const clientServices = {
  listaClientes,
};
