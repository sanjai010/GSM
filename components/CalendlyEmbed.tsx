'use client'
import { useEffect } from 'react'

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="calendly-section">
      <h2>Book a Discovery Call</h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/globalstudiomedia/new-meeting"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  )
}
