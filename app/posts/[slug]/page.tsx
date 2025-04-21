// The "slug" is a dynamic part of the URL (e.g., /posts/my-first-post) that corresponds to a specific MDX file. In a Next.js MDX blog, the slug enables dynamic routing and content fetching, allowing each MDX file to be rendered as its own page.
// The [slug] part tells Next.js to treat any value in that URL segment as a parameter called slug
// When a user visits /posts/my-first-post, Next.js extracts my-first-post as the slug.
// This slug is accessible in your page component via params.slug

import { getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

//components set up is in mdx-content.tsx

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

        <main className='prose dark:prose-invert mt-12'> {/* edit in globals.css or overwrite, invert gives us light and dark theme  */}
          <MDXContent source={content}/>
        </main>
      </div>
    </section>
  )
}
