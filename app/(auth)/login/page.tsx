'use client'
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { GitHubLogoIcon , DiscordLogoIcon } from "@radix-ui/react-icons";
import { useAuth } from "@/hooks/auth";


const Login = () => {
    const {login} = useAuth({middleware: 'guest', redirectIfAuthenticated: '/dashboard'})
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login({email, password})

    }


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
      <div className="w-full">
        <Image
          alt=""
          src="/assets/images/hero.png"
          width={2}
          height={2}
          className="w-full h-full rounded-md"
        />
      </div>

      {/* form */}
      <div className="w-full">
        <div className="w-full p-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={50}
            height={28}
            priority
          />
        </div>

        <div className="flex px-20 py-10 flex-col w-full  m-auto">
          <div className="flex flex-col space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Welcome back 👋</h2>
            <p>
            Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
            </p>
          </div>
            <form className=" space-y-6 mt-7 w-full" onSubmit={handleLogin}>
              {/* inputs */}
              <FormInput
                title="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                title="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="#" className="text-sm text-red-500 text-right my-2">Forgot password</Link>
              <Button type="submit" variant="default" className="w-full">
                Login
              </Button>
            </form>

<div className="flex flex-col gap-3 mt-5">
    <Button variant="ghost" className="border">
        <GitHubLogoIcon />
        Continue with Github
    </Button>
    <Button variant="ghost" className="border">
        <DiscordLogoIcon />
        Continue with Discord
    </Button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Login;
