'use client'

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
    <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
      {investments.map(investment => (
        <li key={investment.url} className='group relative'>
          <Link href={investment.url} target='_blank' rel='noopener noreferrer'>
            {investment.image && (
              <div className='aspect-square w-full max-w-[200px] mx-auto overflow-hidden bg-muted rounded-2xl'>
                <Image
                  src={investment.image}
                  alt={investment.title || ''}
                  fill
                  className='rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
