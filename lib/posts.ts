/* reads content from local file and passes to react */
import fs from 'fs';
import matter from 'gray-matter'; /* Parse front-matter from a string or file. */
import path from "path";

const rootDir = path.join(process.cwd(), 'app','content', 'posts') /* content/posts */

export type Post ={ /* post contains metadata and content */
    metadata: PostMetadata
    content: string
}

export type PostMetadata ={ /* front matter */
    title?:string
    summary?:string
    image?:string
    author?:string
    publishedAt?:string
    slug?:string
}

export async function getPostBySlug(slug: string): Promise< Post | null> { /* return promise which is post or null */
    try {
        const filePath = path.join(rootDir, `${slug}.mdx`) /* get file path, joining working dir with the same slug name in the dynamic route */
        const fileContents = fs.readFileSync(filePath, 'utf-8')/* reads file content */
        const {data, content} = matter(fileContents) /* get front matter/meta data and content */
        return {metadata:{...data, slug}, content} /* return front matter in object format, add slug to know where to navigate or link to include, and content */
    } catch (error) {
        console.error('Error reading post file:', error)
        return null
    }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDir) /* read content of all root directory */
  
    const posts = files
      .map(file => getPostMetadata(file)) /* call on that file */
      .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) { /* sorting the post based on date */
          return 1
        } else {
          return -1
        }
      })
  
    if (limit) {
      return posts.slice(0, limit)
    }
  
    return posts
  }
  
  export function getPostMetadata(filepath: string): PostMetadata { /* get file, read front matter, return meta data */
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDir, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
  }