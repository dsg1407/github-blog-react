import {
  FaBuilding,
  FaGithub,
  FaUpRightFromSquare,
  FaUserGroup,
} from 'react-icons/fa6'
import { Link } from './link'

type ProfileProps = {
  user: {
    name: string
    login: string
    avatar_url: string
    html_url: string
    bio: string
    company: string
    followers: number
  }
}

export function Profile({ user }: ProfileProps) {
  return (
    <section className="w-full p-8 rounded-[10px] bg-base-profile flex items-center gap-8">
      <img
        src={user.avatar_url}
        alt=""
        className="w-[148px] h-[148px] object-cover rounded-lg ml-2"
      />

      <div className="h-[148px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold leading-[130%] text-base-title my-2">
              {user.name}
            </h1>
            <Link href={user.html_url} target="_blank">
              Github <FaUpRightFromSquare className="leading-[0]" />
            </Link>
          </div>
          <p className="">{user.bio}</p>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaGithub className="text-base-label" />
            {user.login}
          </span>
          {user.company && (
            <span className="flex items-center gap-2 text-base-subtitle">
              <FaBuilding className="text-base-label" />
              {user.company}
            </span>
          )}
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaUserGroup className="text-base-label" />
            {user.followers} seguidores
          </span>
        </div>
      </div>
    </section>
  )
}
