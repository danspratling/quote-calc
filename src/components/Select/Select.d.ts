export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name?: string
  label?: string
  hint?: string
  error?: any
  options?: string[]
  placeholder?: string
  selected?: string
  defaultValue?: string
  value?: string
  onChange?: (e: any) => void
}

export type SelectOptionProps = {
  value: string
  children: React.ReactNode
  Icon?: React.ReactElement
}
