import { cn } from "@/lib/utils"

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn("h-14 px-4 flex items-center justify-between bg-blue-600 text-white", className)}
    >
      <h1 className="font-bold">MyApp</h1>
      <nav className="flex gap-4 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}
