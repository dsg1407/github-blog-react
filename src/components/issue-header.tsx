import { formatDistanceToNow } from 'date-fns'

import {
  FaGithub,
  FaChevronLeft,
  FaUpRightFromSquare,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { Link } from './link'

interface IssueHeaderProps {
  title: string
  git_url: string
  login: string
  comments: number
  created_at: string
}

export function IssueHeader({
  title,
  git_url,
  login,
  comments,
  created_at,
}: IssueHeaderProps) {
  return (
    <section className="w-full p-8 rounded-[10px] bg-base-profile flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <FaChevronLeft />
          Voltar
        </Link>
        <Link href={git_url} target="_blank">
          Ver no GitHub
          <FaUpRightFromSquare className="leading-[0]" />
        </Link>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="text-2xl font-bold leading-[130%] text-base-title my-2">
          {title}
        </h1>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaGithub className="text-base-label" />
            {login}
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaCalendarDay className="text-base-label" />
            {formatDistanceToNow(new Date(created_at))}
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaComment className="text-base-label" />
            {comments} comentários
          </span>
        </div>
      </div>
    </section>
  )
}
