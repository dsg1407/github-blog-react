import { useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { useParams } from 'react-router-dom'
import { repoContext } from '../contexts/repo-context'

import { IssueHeader } from '../components/issue-header'

interface IssueInfoProps {
  number: number
  title: string
  user: {
    login: string
  }
  created_at: string
  html_url: string
  body: string
  comments: number
}

export function Issue() {
  const [issue, setIssue] = useState({} as IssueInfoProps)

  const { userName, repoName } = useContext(repoContext)
  const { id } = useParams()

  async function fetchIssuesInfo(id: string) {
    try {
      const data = (
        await api.get(`/repos/${userName}/${repoName}/issues/${id}`)
      ).data as IssueInfoProps

      setIssue(data)
    } catch (error) {
      console.log(error)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (id) {
      fetchIssuesInfo(id)
    }
  }, [id])

  return (
    <div className="mx-auto max-w-[864px] -mt-[88px] px-2 md:px-0">
      {issue.title && (
        <>
          <IssueHeader
            title={issue.title}
            comments={issue.comments}
            login={issue.user.login}
            created_at={issue.created_at}
            git_url={issue.html_url}
          />
          <article className="py-10 px-8">{issue.body}</article>
        </>
      )}
    </div>
  )
}
