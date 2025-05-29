import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'

export interface InvestmentMetadata {
  title: string
  summary: string
  image?: string
  url: string
  publishedAt?: string
}

export default function Investments({
  investments
}: {
  investments: InvestmentMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {investments.map(investment => (
        <li key={investment.url} className='group relative'>
          <Link href={investment.url} target='_blank' rel='noopener noreferrer'>
            {investment.image && (
              <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  src={investment.image}
                  alt={investment.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {investment.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {investment.summary}
              </p>
              <p className='text-xs font-light text-muted-foreground'>
                {investment.publishedAt && formatDate(investment.publishedAt)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}