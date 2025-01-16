import {
  FaBuilding,
  FaGithub,
  FaUpRightFromSquare,
  FaUserGroup,
} from 'react-icons/fa6'
import { Link } from './link'

export function Profile() {
  return (
    <section className="w-full p-8 rounded-[10px] bg-base-profile flex items-center gap-8">
      <img
        src="https://github.com/rocketseat-education.png"
        alt=""
        className="w-[148px] h-[148px] object-cover rounded-lg ml-2"
      />

      <div className="h-[148px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold leading-[130%] text-base-title my-2">
              Rocketseat Education
            </h1>
            <Link href="/" target="_blank">
              Github <FaUpRightFromSquare className="leading-[0]" />
            </Link>
          </div>
          <p className="">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaGithub className="text-base-label" />
            cameronwll
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaBuilding className="text-base-label" />
            Rocketseat
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <FaUserGroup className="text-base-label" />
            32 seguidores
          </span>
        </div>
      </div>
    </section>
  )
}
