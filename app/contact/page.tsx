//render a server component 

import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl mx-auto px-4'>
        <h2 className='title'>Get in touch with Iris</h2>

        <ContactForm />
      </div>
    </section>
  )
}