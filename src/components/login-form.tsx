import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Lock, LogIn, Chrome } from "lucide-react"

interface LoginFormProps extends React.ComponentProps<"div"> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md rounded-2xl border border-slate-200 shadow-xl"
            header={
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back 👋</h2>
                <p className="text-slate-600">Sign in to your account !!!^.^</p>
              </div>
            }
      >
        <div className="p-0">
          <form className="space-y-6">
            {/* Email Field */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="pl-9"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm text-slate-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="pl-9"
                />
              </div>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-200" />
              <span className="mx-2 text-xs text-slate-400">OR</span>
              <div className="flex-grow border-t border-slate-200" />
            </div>

            {/* Social Login */}
            <Button variant="outline" className="w-full">
              <Chrome className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </form>

          {/* Signup Link */}
          <div className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-slate-900 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
