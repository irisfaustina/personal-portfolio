import Investments from '@/components/investments'
import { getInvestments } from '@/lib/investments'

export default async function InvestmentsPage() {
  const investments = await getInvestments()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl px-4 mx-auto'>
        <h1 className='title mb-12'>Investment portfolio</h1>

        <Investments investments={investments} />
      </div>
    </section>
  )
}