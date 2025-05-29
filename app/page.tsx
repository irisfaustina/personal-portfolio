
import Intro from '@/components/intro';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';
import NewsletterForm from '@/components/newsletter-form';
import RecentInvestments from '@/components/recent-investments';

export default function Home(){
  return (
    
    <section className="py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <RecentInvestments />
        <NewsletterForm />
      </div>
    </section>
  )
}
