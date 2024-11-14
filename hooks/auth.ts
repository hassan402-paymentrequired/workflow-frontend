'use client'
import { useEffect } from "react";
import { axios } from "@/lib/axios";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import toast from "react-hot-toast";
import { setToken } from "../lib/axios";


type  props = {
    middleware?: string,
    redirectIfAuthenticated?: string
}


export const useAuth = ({ middleware, redirectIfAuthenticated }:props = {}) => {

  const router = useRouter();

  const { data: user, error, mutate } = useSWR('/api/user', () =>
    axios
        .get('/api/user')
        .then(res => res.data)
        .catch(error => {
            if (error.response.status !== 409) throw error

            router.push('/verify-email')
        }),
)

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ ...props }) => {
    await csrf();
    axios
      .post("/login", props)
      .then((res) => {
        mutate()
        toast.success(res.data.message)
        setToken(res.data.token)
        console.log(res);
        router.push('/dashboard')
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const logout = async() => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }
        window.location.pathname = '/login'
  };

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
        router.push(redirectIfAuthenticated)



    if (middleware === 'auth' && error) logout()
}, [user, error])


  return {
    user,
    login,
    logout,
  };
};
