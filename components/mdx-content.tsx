import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

type ComponentProps = {
  children: React.ReactNode
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter,
  h1: ({ children }: ComponentProps) => <h1 className="text-3xl font-bold mt-8 mb-6">{children}</h1>,
  h2: ({ children }: ComponentProps) => <h2 className="text-2xl font-semibold mt-8 mb-6">{children}</h2>,
  h3: ({ children }: ComponentProps) => <h3 className="text-xl font-medium mb-2">{children}</h3>,
  p: ({ children }: ComponentProps) => <p className="mb-6">{children}</p>,
  pre: ({ children }: ComponentProps) => <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto">{children}</pre>,
}

export default function MDXContent( /* custom component we created */
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote /* any time parsing with code snippet, use Code component to highlight */
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
