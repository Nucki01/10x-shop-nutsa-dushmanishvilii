import type { ReactNode } from 'react'

// Props interface using `ReactNode` for `children` (PRD Requirement A1.4: props.children composition).
// Note for Defense: `children` is a special React prop that lets a parent component wrap
// arbitrary JSX content inside it, like <Container><h1>Hello</h1></Container>.
export interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-6xl w-full mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}
