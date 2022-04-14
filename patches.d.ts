import { ReactNode } from "react"

// TODO: Remove when next-themes fixes this @types/react^18.0.0-related change
declare module "next-themes" {
  export interface ThemeProviderProps {
    /**
     * A set of children.
     */
    children?: ReactNode
  }
}
