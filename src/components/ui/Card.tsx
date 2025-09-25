import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
}

export const Card = ({ className, children, header, footer, ...props }: CardProps) => {
  return (
    <div
      className={cn("rounded-2xl border bg-white shadow-sm p-4 flex flex-col gap-3", className)}
      {...props}
    >
      {header && <div className="font-semibold text-lg">{header}</div>}
      <div>{children}</div>
      {footer && <div className="text-sm text-gray-500">{footer}</div>}
    </div>
  )
}
