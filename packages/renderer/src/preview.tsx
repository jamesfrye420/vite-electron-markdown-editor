import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-Parse'
import remarkGfm from 'remark-Gfm'
import remarkReact from 'remark-React'
import 'github-markdown-css/github-markdown.css'
import './preview.css'

interface Props {
  doc: string
}

const Preview: React.FC<Props> = props => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.doc).result

  return <div className="preview markdown-body">{md}</div>
}

export default Preview
