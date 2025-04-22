'use client' /* client side search to apply filters, need input need local state */

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'
import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('') /* hold local memory of search */
  const filtered = posts.filter(post => /* depends on what's typing filter posts by title */
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0 /* if user types, show reset button */
  function resetFilter() {
    setQuery('') /* reset search */
  }

  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)} /* everytime user types, update query with on change handler */
        />
        {isFiltered && ( /* only works with filtered */
          <Button /* hold local memory of search */
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      <Posts posts={filtered} /> {/* filtered posts */}
    </div>
  )
}