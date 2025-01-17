import Markdown from 'react-markdown'
interface MarkdownContentProps {
  body: string
}

export function MarkdownContent({ body }: MarkdownContentProps) {
  return (
    <Markdown className="prose prose-invert prose-a:text-brand-blue text-pretty max-w-full  prose-headings:font-bold prose-headings:text-base-title prose-p:text-base-text">
      {body}
    </Markdown>
  )
}
