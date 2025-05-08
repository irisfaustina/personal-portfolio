import { z } from 'zod'

export const ContactFormSchema = z.object({ /* contact form schema */
  name: z
    .string()
    .min(1, { message: 'Name is required.' })  /* name is required */
    .min(2, { message: 'Must be at least 2 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })  /* email is required */
    .email('Invalid email.'),
  message: z.string().min(1, { message: 'Message is required.' })  /* message is required */
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})