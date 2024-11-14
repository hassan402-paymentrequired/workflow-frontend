import Axios from "axios"

const axios = Axios.create({
    baseURL:process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

const setToken = (token:string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export {axios, setToken}