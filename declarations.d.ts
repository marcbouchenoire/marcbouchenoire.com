declare module "*/data.json" {
  const value: any

  export default value
}

declare module "tailwindcss" {
  export interface TailwindValues {
    readonly [key: string]: string
  }

  export interface TailwindValuesColor {
    readonly [key: string]: TailwindValues
  }

  export interface TailwindValuesFontFamily {
    readonly [key: string]: string[]
  }

  export interface TailwindValuesFontSize {
    readonly [key: string]: TailwindFontConfig
  }

  export interface TailwindTheme {
    /**
     * The theme's colors.
     */
    readonly colors: TailwindValuesColor

    /**
     * The theme's font families.
     */
    readonly fontFamily: TailwindValuesFontFamily

    /**
     * The theme's font sizes.
     */
    readonly fontSize: TailwindValuesFontSize

    /**
     * The theme's font weights.
     */
    readonly fontWeight: TailwindValues

    /**
     * The theme's letter spacings.
     */
    readonly letterSpacing: TailwindValues
  }
}

declare module "tailwindcss/resolveConfig" {
  export default function resolveConfig(config: any): {
    /**
     * The resolved Tailwind theme.
     */
    theme: import("tailwindcss").TailwindTheme
  }
}
