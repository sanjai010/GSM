'use client'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // For FormSubmit.io - fallback submission handled by native form action
    console.log(data)
  }

  const name = watch('name')
  const message = watch('message')

  return (
    <section className="contact-form">
      <h2>Let’s Collaborate</h2>

      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="form-block"
      >
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: true })}
        />
        {errors.name && <span className="error">Name is required</span>}

        <input
          type="email"
          placeholder="Your Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span className="error">Valid email is required</span>}

        <textarea
          placeholder="Your Message"
          {...register('message', { required: true })}
        />
        {errors.message && <span className="error">Message is required</span>}

        {/* Email Submit */}
        <button type="submit" className="btn primary">Send via Email</button>

        {/* WhatsApp Trigger */}
        <a
          className="btn secondary"
          href={`https://wa.me/7559974470?text=${encodeURIComponent(
            `Hi, I'm ${name || '[Your Name]'} and I wanted to say: ${message || '[Your message]'}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send via WhatsApp
        </a>
      </form>
    </section>
  )
}
