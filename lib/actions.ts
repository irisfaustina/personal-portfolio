'use server' /* mark this file as server component, put all actions in one file here and use server to mark any function as server action to pass to client components, event handlers, data mutations, eliminate api layer*/

import { z } from 'zod'
import { Resend } from 'resend' 
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import { ContactFormEmail } from '@/email/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema> /* define schema once infer multiple times from infer */
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set')
}

if (!process.env.RESEND_AUDIENCE_ID) {
  throw new Error('RESEND_AUDIENCE_ID is not set')
}

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

export async function subscribe(data: NewsletterFormInputs) {
  try {
    const { email } = data

    if (!process.env.RESEND_AUDIENCE_ID) {
      throw new Error('RESEND_AUDIENCE_ID is not set')
    }

    const response = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID
    })

    if (!response.data || response.error) {
      console.error('Resend API error:', response.error)
      throw new Error(response.error?.message || 'Failed to subscribe')
    }

    return { success: true }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return { 
      error: process.env.NODE_ENV === 'development' 
        ? `Failed to subscribe: ${error instanceof Error ? error.message : 'Unknown error'}` 
        : 'Failed to subscribe to newsletter. Please try again.'
    }
  }
}