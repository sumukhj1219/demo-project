"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const demoUsers = [
  { role: "admin", email: "admin@kdt.com.kw", password: "admin123" },
  { role: "management", email: "manager@kdt.com.kw", password: "manager123" },
  { role: "store", email: "store@kdt.com.kw", password: "store123" },
  { role: "engineer", email: "engineer@kdt.com.kw", password: "engineer123" },
  { role: "helpdesk", email: "helpdesk@kdt.com.kw", password: "helpdesk123" },
  { role: "customer", email: "customer@company.com", password: "customer123" },
]

export function LoginFormEmployee({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const user = demoUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      router.push(`/${user.role}`) // Redirect to /admin, /manager, etc.
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className={cn("space-y-6", className)}>
      <form onSubmit={handleLogin} className="flex flex-col gap-6" {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login as an employee</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>

      <div className="border-t pt-4 space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Demo Credentials
        </h3>
        <div className="grid gap-2">
          {demoUsers.map((user) => (
            <Button
              key={user.email}
              variant="outline"
              className="justify-between font-mono text-xs"
              onClick={() => {
                setEmail(user.email)
                setPassword(user.password)
              }}
            >
              {user.role}
              <span className="text-muted-foreground">
                {user.email} / {user.password}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
