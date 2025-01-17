import { useContext, useEffect, useState } from 'react'
import { Card } from '../components/card'
import { Profile } from '../components/profile'
import { SearchBar } from '../components/search-bar'
import { api } from '../lib/axios'
import { repoContext } from '../contexts/repo-context'

interface UserProps {
  name: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  company: string
  followers: number
}

interface IssueInfoProps {
  number: number
  body: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

export function Home() {
  const [user, setUser] = useState({} as UserProps)
  const [issues, setIssues] = useState<IssueInfoProps[]>([])
  const [filter, setFilter] = useState('')

  const { userName, repoName } = useContext(repoContext)

  const issuesFiltered = !filter
    ? issues
    : issues.filter((issue) =>
        issue.title.toLowerCase().includes(filter.toLowerCase())
      )

  async function fetchUserInfo(userName: string) {
    try {
      const userData = (await (
        await api.get(`/users/${userName}`)
      ).data) as UserProps

      setUser(userData)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchIssuesList(userName: string, repoName: string) {
    try {
      const issuesData = (
        await api.get(`/repos/${userName}/${repoName}/issues`)
      ).data as IssueInfoProps[]

      setIssues(issuesData)
    } catch (error) {
      console.log(error)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchUserInfo(userName)
    fetchIssuesList(userName, repoName)
  }, [])

  return (
    <div className="mx-auto max-w-[864px] -mt-[88px] px-2 md:px-0">
      <Profile user={user} />
      <main className="mt-[72px] flex flex-col gap-12 pb-36">
        <SearchBar
          title="Publicações"
          publishNumber={issuesFiltered.length}
          placeholder="Buscar conteúdo"
          setFiltered={setFilter}
        />
        <section className="grid grid-cols-2 gap-8">
          {issuesFiltered.map((issue) => {
            return (
              <Card
                key={issue.number}
                title={issue.title}
                date={issue.created_at}
                description={issue.body}
                href={`/issue/${issue.number}`}
              />
            )
          })}
        </section>
      </main>
    </div>
  )
}
