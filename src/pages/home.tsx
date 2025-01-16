import { Profile } from '../components/profile'
import { SearchBar } from '../components/search-bar'

export function Home() {
  return (
    <div className="mx-auto max-w-[864px] -mt-[88px] px-2 md:px-0">
      <Profile />
      <main className="mt-[72px]">
        <SearchBar
          title="Publicações"
          publishNumber={6}
          placeholder="Buscar conteúdo"
        />
      </main>
    </div>
  )
}
