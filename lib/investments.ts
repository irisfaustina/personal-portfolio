import { InvestmentMetadata } from '@/components/investments'

const investments: InvestmentMetadata[] = [
  {
    title: 'Company A',
    summary: 'Early-stage investment in AI technology startup',
    image: '/images/investments/company-a.jpg',
    url: 'https://company-a.example.com',
    publishedAt: '2025-01-15'
  },
  {
    title: 'Company B',
    summary: 'Series B investment in sustainable energy solutions',
    image: '/images/investments/company-b.jpg',
    url: 'https://company-b.example.com',
    publishedAt: '2024-11-30'
  },
  {
    title: 'Company C',
    summary: 'Seed round investment in healthcare tech',
    image: '/images/investments/company-c.jpg',
    url: 'https://company-c.example.com',
    publishedAt: '2024-09-20'
  }
]

export async function getInvestments(limit?: number): Promise<InvestmentMetadata[]> {
  const sortedInvestments = [...investments].sort((a, b) => {
    if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
      return 1
    } else {
      return -1
    }
  })

  if (limit) {
    return sortedInvestments.slice(0, limit)
  }

  return sortedInvestments
}