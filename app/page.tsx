'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import TestimonialsCarousel from '@/app/components/TestimonialsCarousel'
import CalendlyEmbed from '@/app/components/CalendlyEmbed'


export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  useEffect(() => {
    // === Card + Quote Observer ===
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          cardObserver.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.2
    })

    const cards = document.querySelectorAll('.card')
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.2}s`
      cardObserver.observe(card)
    })

    const quote = document.querySelector('.quote-observe')
    if (quote) {
      (quote as HTMLElement).style.animationDelay = `${cards.length * 0.2}s`
      cardObserver.observe(quote)
    }

    // === Gradient Observer ===
    const gradientObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, {
      threshold: 0.6
    })

    const gradients = document.querySelectorAll('.gradient')
    gradients.forEach((el) => {
      gradientObserver.observe(el)
    })

  }, [])

  return (
    <>
      {/* Header/Navbar */}
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="cursor-glow"></div>
            <div className="logo">GSM</div>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li className="hide-on-mobile"><a href="#">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
            <a href="https://wa.me/7559974470" target="_blank" rel="noopener noreferrer" className="quote-btn">
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>From Pixels to Presence <br /> We Make You Global</h1>
          <span className="mobile">
            At Global Studio Media, we don&rsquo;t just create content — we build digital experiences.
          </span>
          <p>
            From dynamic social media campaigns to high-converting websites and <br />
            full-scale brand strategies, we partner with businesses to turn bold ideas into impactful results.
          </p>
          <a
            href="https://wa.me/7559974470?text=Hi%20Global%20Studio%20Media%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20talk."
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button className="animated-button">
              <span>Let&rsquo;s Talk?</span>
              <span></span>
            </button>
          </a>
        </div>
      </section>

      {/* Trusted By - Logo Slider */}
      <div className="trusted">
        <h1>Trusted by</h1>
      </div>
      <div className="wrapper">
        <div className="slider-container1">
          <div className="slider-track1">
            {[
              'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png',
              'logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png'
            ].map((logo, index) => (
              <div className="logo2" key={index}>
                <Image
                  src={`/images/logos/${logo}`}
                  alt={`Logo ${index + 1}`}
                  width={80}
                  height={50}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <section className="our-process">
        <div className="process-heading">
          <h2>Where Strategy meets <span className="gradient">Swagger.</span></h2>
          <p>
            From scroll-stopping reels to websites that work like your best salesperson,
            we help brands show up, stand out, and scale up.
          </p>
        </div>

        {[
          {
            title: 'DISCOVER',
            content:
              'We begin by understanding your brand, goals, audience, and challenges. Through in-depth discovery sessions, we uncover what makes you unique and how we can amplify it.',
          },
          {
            title: 'STRATEGIZE',
            content:
              'We craft a custom creative strategy—defining content types, platforms, timelines, and messaging that align with your goals and target audience.',
          },
          {
            title: 'CREATE',
            content:
              'From scroll-stopping social media content to sleek websites and promo videos, our team brings ideas to life with design, storytelling, and precision.',
          },
          {
            title: 'LAUNCH',
            content:
              'We publish, schedule, or deploy your content with the right tools and timing to maximize reach, impact, and engagement.',
          },
          {
            title: 'AMPLIFY',
            content:
              'We monitor performance and use real-time data to refine strategies. Whether it&rsquo;s boosting ads, refining content, or A/B testing, we keep pushing your brand forward.',
          },
          {
            title: 'SCALE',
            content:
              'With proven results and deep insights, we help you scale sustainably—whether through new campaigns, brand extensions, or platform expansions.',
          },
        ].map((step, index) => (
          <React.Fragment key={index}>
            <div className="process-card">
              <div className="process-h">
                <h1>{step.title}</h1>
              </div>
              <div className="process-info">
                <p>{step.content}</p>
              </div>
            </div>
            <hr className="hr-left-bold" />
          </React.Fragment>
        ))}
      </section>

      {/* Services Section */}
      <section className="services">
        <h1 className="services-title autoDisplay">What we Do?</h1>
        <div className="service-cards">
          {[
            { title: 'Web Development', bg: 'web.jpg' },
            { title: 'Content Marketing', bg: 'content.jpg' },
            { title: 'Graphic Designing', bg: 'graphic.jpg' },
          ].map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundImage: `url('/images/${item.bg}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
        <div className="quote quote-observe" style={{ '--delay': '0.6s' } as React.CSSProperties}>
          <a href="https://wa.me/7559974470" target="_blank" rel="noopener noreferrer">
            <button className="animated-button2">
              <span>Get Quote</span>
              <span></span>
            </button>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h1 className="faq-title">Is this what you want to ask?</h1>
        {[
          {
            q: 'What services does Global Studio Media offer?',
            a: 'We provide end-to-end creative and digital solutions — including social media management, content creation, branding, website design & development, and full-scale digital marketing strategies.'
          },
          {
            q: 'How long does it take to build a website?',
            a: 'Timelines depend on the complexity and scope, but most websites are completed within 2 to 6 weeks.'
          },
          {
            q: 'Can you manage all our social media platforms?',
            a: 'Yes! We handle everything from content planning to posting and analytics — across Instagram, Facebook, LinkedIn, and more.'
          },
          {
            q: 'What makes Global Studio Media different from other companies?',
            a: 'We blend creative vision with digital strategy. Our small team gives personalized attention and bold execution without fluff.'
          },
          {
            q: 'How do we get started working with you?',
            a: 'Simple — drop us a message via contact form, WhatsApp, or email. We’ll schedule a call and tailor a plan for your brand.'
          }
        ].map((faq, index) => (
          <div className={`faq ${openFAQ === index ? 'open' : ''}`} key={index}>
            <div className="faq-question" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
              <span>{faq.q}</span>
              <i className="fas fa-chevron-down arrow-icon"></i>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </section>

      <TestimonialsCarousel />
      <CalendlyEmbed />




      {/* Book a Call Section */}
      <section className="footer-branding">
        <div className="footer-center">
          <h1 className="brand-logo">GLOBAL STUDIO MEDIA</h1>
          <p className="brand-sub">CONTENT · CODE · DESIGN</p>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-contact">
            <p>CONTACT</p>
            <a href="mailto:contact@globalstudiomedia.com">contact@globalstudiomedia.com</a>
          </div>

          <div className="footer-socials">
            <p>SOCIALS</p>
            <div className="icons">
              <a href="https://www.instagram.com/globalstudiomedia/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/globalstudio-media-1a8a1a370/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/globalstudiomedia/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
