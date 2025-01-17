import { formatDistanceToNow } from 'date-fns'

interface CardProps extends React.HTMLProps<HTMLAnchorElement> {
  title: string
  date: string
  description: string
}

export function Card({ title, date, description, ...rest }: CardProps) {
  return (
    <a
      className="p-8 flex flex-col gap-5 bg-base-post border-2 border-base-post rounded-[10px] hover:transition-all hover:duration-300 hover:border-base-label cursor-pointer"
      {...rest}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base-title font-bold text-xl text-pretty">
          {title}
        </h3>
        <span className="text-base-span text-xs text-nowrap">
          {formatDistanceToNow(new Date(date))}
        </span>
      </div>
      <p className="text-base leading-[160%] line-clamp-4 text-pretty">
        {description}
      </p>
    </a>
  )
}
