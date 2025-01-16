import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <div className="bg-cover-pattern bg-cover w-full min-h-[296px]">
      <img
        src={logoImg}
        alt=""
        className="w-full max-w-[148px] mx-auto pt-16 "
      />
    </div>
  )
}
