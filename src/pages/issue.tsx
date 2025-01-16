import { IssueHeader } from '../components/issue-header'

export function Issue() {
  return (
    <div className="mx-auto max-w-[864px] -mt-[88px] px-2 md:px-0">
      <IssueHeader />
      <article className="py-10 px-8">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </article>
    </div>
  )
}
