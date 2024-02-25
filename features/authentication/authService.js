import axios from "axios"
const API_URL = '/api/user/'

 const register = async(formdata) => {
    const response = await axios.post(API_URL + "register", formdata)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}

const login = async(formdata) => {
try {
    const response = axios.post(API_URL + "login", formdata)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data 
} catch (error) {
    throw new Error(error.response.data.message);
}
}


const authService = {
    register,
    login,
}

export default authService;