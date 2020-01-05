export default {
  getMarcas: { method: 'get', url: 'marcas' },
  getMarcasDescricao: { method: 'get', url: 'marcas{/descricao}' },
  putMarcas: { method: 'put', url: 'marcas' },
  postMarcas: { method: 'post', url: 'marcas' },
  deleteMarcas: { method: 'delete', url: 'marcas' }
}

// import axios from 'axios'
// export async function getMarcas (pSearchTerm) {
//     const data =
//         await axios.get('http://localhost:3000/api/v1/autocom/marcas')
//             .then(res => {
//                 return res.data
//             })
//             .catch(error => {
//                 console.log('erro axios: ', error)
//                 return []
//             }
//         )
//     return data
// }

// export async function getMarcasDescricao (pSearchTerm) {
//     const data =
//         await axios.get('http://localhost:3000/api/v1/autocom/marcas/' + pSearchTerm)
//             .then(res => {
//                 return res.data
//             })
//             .catch(error => {
//                 console.log('erro axios: ', error)
//                 return []
//             }
//         )
//     return data
// }

// export async function putMarcas (pMarca) {
//     const data = await axios.put('http://localhost:3000/api/v1/autocom/marcas', pMarca)
//         .then(res => { return res.data })
//         .catch(error => {
//             console.log('erro axios: ', error)
//             return []
//         })
//     return data
// }

// export async function postMarcas (pMarca) {
//     const data = await axios.post('http://localhost:3000/api/v1/autocom/marcas', pMarca)
//         .then(res => { return res.data })
//         .catch(error => {
//             console.log('erro axios: ', error)
//             return []
//         })
//     return data
// }

// export async function deleteMarcas (pId) {
//     const data = { data: { id: pId } }
//     const resp = await axios.delete('http://localhost:3000/api/v1/autocom/marcas', data)
//         .then(res => { return res.data })
//         .catch(error => {
//             console.log('erro axios: ', error)
//             return []
//         })
//     return resp
// }
