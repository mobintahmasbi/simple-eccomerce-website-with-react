import axios from "axios"
export function getproduct() {
    return axios.get("http://localhost:3001/Products")
}
export function login(email) {
    return axios.get(`http://localhost:3001/Users?Email=${email}`)
}
export function getalluser() {
    return axios.get('http://localhost:3001/Users')
}
export function Register(Id, Name, familyname, email, password) {
    return axios.post('http://localhost:3001/Users', {
        id: Id,
        name: Name,
        fname: familyname,
        Emil: email,
        Password: password
    })
}
export function getProductbyid(id) {
    return axios.get(`http://localhost:3001/Products/${id}`)
}