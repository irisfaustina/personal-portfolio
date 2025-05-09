'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target) return
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    try {
      setIsSubmitting(true)
      const result = await sendEmail(formData)

      if (result?.error) {
        toast.error('An error occurred! Please try again.')
        return
      }

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('An error occurred! Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='relative isolate'>
      {/* Background pattern */}
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-64}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg
          x='50%'
          y={-64}
          className='overflow-visible fill-zinc-50 dark:fill-zinc-900/75'
        >
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg>{' '}
      {/* form background pattern */}
      {/* Form */}
      <div className='relative'>
        <form onSubmit={handleSubmit} className='mt-16 lg:flex-auto'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                autoComplete='given-name'
                required
                minLength={2}
              />
            </div>

            {/* Email */}
            <div>
              <Input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                autoComplete='email'
                placeholder='Email'
                required
              />
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            {' '}
            {/* button for submitting */}
            <Button
              type='submit'
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Contact Us'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
