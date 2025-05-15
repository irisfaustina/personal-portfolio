import Image from 'next/image'
import authorImage from '@/public/images/authors/iris.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Welcome to my lab.</h1> {/* add titleto global css */}
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m Iris Liu, a tech founder and angel investor based in NYC. Lately, I've been iterating on building useful AI native productivity tools. I plan to update my progress here. Have questions or want to collab? Find me on social media or subscribe to my newsletter.
        </p>
      </div>
      <div className='relative'>
        <Image /* in public create images folder */
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Iris Liu'
          width={175}
          height={175}
          priority /* use priority to disable lazy loading */
        />
      </div>
    </section>
  )
}