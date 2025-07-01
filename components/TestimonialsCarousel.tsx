'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect} from 'react'

const testimonials = [
  {
    name: 'Riya N.',
    company: 'Sketcha Studios',
    quote: 'GSM helped our brand go global. The reels & website combo was 🔥.',
  },
  {
    name: 'Adil Khan',
    company: 'Mokobara',
    quote: 'These guys deliver fast and with style. Highly recommended!',
  },
  {
    name: 'Neha S.',
    company: 'Loco',
    quote: 'Top-notch strategy + slick design. Great communication too!',
  },
  {
    name: 'Arun V.',
    company: 'ETS',
    quote: 'Great ROI and incredible attention to detail. Solid agency!',
  },
  {
    name: 'Fatima P.',
    company: 'Netflix',
    quote: 'Creative energy and professional delivery. Highly satisfied.',
  },
  {
    name: 'Ravi Menon',
    company: 'Loco',
    quote: 'Engaging content, timely delivery, and brand understanding.',
  },
]

export default function TestimonialsCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section className="testimonials">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, i) => (
          <div className="keen-slider__slide testimonial-card" key={i}>
            <p className="quote">“{t.quote}”</p>
            <div className="author">
              <strong>{t.name}</strong> — <span>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
