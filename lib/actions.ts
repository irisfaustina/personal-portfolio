'use server' /* mark this file as server component, put all actions in one file here and use server to mark any function as server action to pass to client components, event handlers, data mutations, eliminate api layer*/

import { z } from 'zod'
import { Resend } from 'resend' 
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import { ContactFormEmail } from '@/email/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema> /* define schema once infer multiple times from infer */
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(formData: EmailData) {
  try {
    const { name, email, message } = formData
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['liuirisny@gmail.com'],
      replyTo: email,
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })

    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { error: 'Failed to send email' }
  }
}

export async function subscribe(data: NewsletterFormInputs) { /* for newsletter subscription, repository for all subscribe server actions */
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}