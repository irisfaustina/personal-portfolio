import { InvestmentMetadata } from '@/components/investments'

const investments: InvestmentMetadata[] = [
  {
    title: 'Anthropic',
    summary: 'Early-stage investment in AI technology startup',
    image: '/images/investments/anthropic.jpg',
    url: 'https://anthropic.com',
    publishedAt: '2025-01-15'
  },
  {
    title: 'Shield AI',
    summary: 'Series B investment in sustainable energy solutions',
    image: '/images/investments/shieldai.jpg',
    url: 'https://shield.ai',
    publishedAt: '2024-11-30'
  },
  {
    title: 'Canva',
    summary: 'Series B investment in design and creative platform',
    image: '/images/investments/canva.jpg',
    url: 'https://canva.com',
    publishedAt: '2024-11-20'
  },
  {
    title: 'Kyte',
    summary: 'Seed round investment in AI technology startup',
    image: '/images/investments/kyte.jpg',
    url: 'https://kyte.com',
    publishedAt: '2024-09-20'
  },
  {
    title: 'Greenlit',
    summary: 'Seed round investment in AI technology startup',
    image: '/images/investments/greenlit.jpg',
    url: 'https://getgreenlit.xyz/',
    publishedAt: '2024-06-20'
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