import Investments from '@/components/investments'
import { getInvestments } from '@/lib/investments'

export default async function InvestmentsPage() {
  const investments = await getInvestments()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl px-4 mx-auto'>
        <h1 className='title mb-8'>Selected angel portfolio</h1>

        <p className='mt-3 font-light text-muted-foreground pb-10'>
          I actively invest in pre-seed and seed-stage startups. I've invested in over 10 companies since 2022 and I focus on vertical AI, AI infrastructure, and developer tools.
        </p>

        <Investments investments={investments} />
      </div>
    </section>
  )
}