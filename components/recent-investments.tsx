import Link from 'next/link'
import { getInvestments } from '@/lib/investments'
import Investments from '@/components/investments'

export default async function RecentInvestments() {
  const investments = await getInvestments(6) /* only need top 4 recent investments */

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent investments</h2>
        <Investments investments={investments} />
        <Link
          href='/investments'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All investments</span>
        </Link>
      </div>
    </section>
  )
}