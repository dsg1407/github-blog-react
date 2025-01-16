interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export function Link({ children, ...rest }: LinkProps) {
  return (
    <a
      className="flex items-center gap-2 uppercase text-brand-blue text-xs font-bold  border-b border-transparent hover:border-brand-blue hover:transition-all hover:duration-300"
      {...rest}
    >
      {children}
    </a>
  )
}
