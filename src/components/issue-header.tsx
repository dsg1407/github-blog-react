import {
  FaGithub,
  FaChevronLeft,
  FaUpRightFromSquare,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa6'
import { Link } from './link'

export function IssueHeader() {
  return (
    <section className="w-full p-8 rounded-[10px] bg-base-profile flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <FaChevronLeft />
          Voltar
        </Link>
        <Link href="/" target="_blank">
          Ver no GitHub
          <FaUpRightFromSquare className="leading-[0]" />
        </Link>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="text-2xl font-bold leading-[130%] text-base-title my-2">
          JavaScript data types and data structures
        </h1>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaGithub className="text-base-label" />
            cameronwll
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaCalendarDay className="text-base-label" />
            Há 1 dia
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaComment className="text-base-label" />5 comentários
          </span>
        </div>
      </div>
    </section>
  )
}
