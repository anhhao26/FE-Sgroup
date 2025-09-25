import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn("h-12 flex items-center justify-center bg-gray-100 text-gray-500 text-sm", className)}
    >
      © 2025 MyApp. All rights reserved.
    </footer>
  )
}
