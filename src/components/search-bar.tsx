interface SearchBarProps extends React.HTMLProps<HTMLInputElement> {
  title: string
  publishNumber: number
  // setFiltered: () => void
}

export function SearchBar({ title, publishNumber, ...rest }: SearchBarProps) {
  function handleTextChanged(newText: string) {
    console.log(newText)
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-base-subtitle">{title}</h2>
        <span className="text-base-span text-sm">
          {publishNumber}
          {publishNumber === 1 ? ' publicação' : ' publicações'}
        </span>
      </div>
      <input
        type="text"
        className="py-3 px-4 bg-base-input rounded-md border border-base-border placeholder:text-base-label  focus:outline-none focus:border-brand-blue"
        onChange={(e) => handleTextChanged(e.target.value)}
        {...rest}
      />
    </section>
  )
}
