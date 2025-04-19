import { getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post({ params }: { params: { slug: string } }) { /* receive params from next.js */
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const { metadata, content } = post
    const { title, summary, image, author, publishedAt } = metadata

    return (
        <section className='pb-24 pt-32'>
        <div className='container max-w-3xl mx-auto px-4'>
          <Link
            href='/posts'
            className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
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
            <p className='mt-3 text-xs text-muted-foreground'>
              {author} / {formatDate(publishedAt ?? '')}
            </p>
          </header>
  
          <main className='prose mt-16 dark:prose-invert'>
            <MDXRemote source={content} />
          </main>
        </div>
      </section>
    )
}