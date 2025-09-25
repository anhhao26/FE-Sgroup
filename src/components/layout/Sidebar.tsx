import { cn } from "@/lib/utils"

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("w-56 h-full bg-gray-50 border-r p-4 flex flex-col gap-3", className)}>
      <a href="#" className="hover:text-blue-600">Dashboard</a>
      <a href="#" className="hover:text-blue-600">Users</a>
      <a href="#" className="hover:text-blue-600">Settings</a>
    </aside>
  )
}
