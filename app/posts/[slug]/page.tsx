import { getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types'

type ComponentProps = {
  children: React.ReactNode
}

const components: MDXComponents = {
  h1: ({ children }: ComponentProps) => <h1 className="text-3xl font-bold mt-8 mb-6">{children}</h1>,
  h2: ({ children }: ComponentProps) => <h2 className="text-2xl font-semibold mt-8 mb-6">{children}</h2>,
  h3: ({ children }: ComponentProps) => <h3 className="text-xl font-medium mb-2">{children}</h3>,
  p: ({ children }: ComponentProps) => <p className="mb-6">{children}</p>,
  code: ({ children }: ComponentProps) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">{children}</code>,
  pre: ({ children }: ComponentProps) => <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto">{children}</pre>,
}

export default async function Post({ params }: { params: { slug: string } }) {
  /* receive params from next.js */
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, summary, image, author, publishedAt } = metadata

  return (
    <section className='pt-32 pb-24'>
      <div className='container mx-auto max-w-3xl px-4'>
        <Link
          href='/posts'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-xs'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXRemote source={content} components={components} />
        </main>
      </div>
    </section>
  )
}
