import { FaUpRightFromSquare } from 'react-icons/fa6'

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  description: string
}

export function Link({ description, ...rest }: LinkProps) {
  return (
    <a
      className="flex items-center gap-2 uppercase text-brand-blue text-xs font-bold  border-b border-transparent hover:border-brand-blue hover:transition-all hover:duration-300"
      {...rest}
    >
      {description} <FaUpRightFromSquare className="leading-[0]" />
    </a>
  )
}
