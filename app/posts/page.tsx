import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts() /* await data in server component, don't need apis like client components */

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl px-4 mx-auto'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}