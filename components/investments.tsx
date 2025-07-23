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
    <ul className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
      {investments.map(investment => (
        <li key={investment.url} className='group relative'>
          <Link href={investment.url} target='_blank' rel='noopener noreferrer'>
            {investment.image && (
              <div className='mx-auto w-[140px] h-[140px] overflow-hidden rounded-2xl bg-muted aspect-square'>
                <Image
                  src={investment.image}
                  alt={investment.title || ''}
                  width={140} height={140}
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
