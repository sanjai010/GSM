'use client';
import styles from './services.module.css';
import Image from 'next/image';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';
// import Navigation from '@/app/components/Navigation';

import {
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaLayerGroup,
  FaSearch,
  FaBullhorn,
  FaCalendarAlt,
  FaVideo,
  FaPenNib,
  FaEnvelopeOpenText,
  FaChartBar,
  FaPalette,
  FaGlobe,
  FaPrint,
  FaObjectGroup,
  FaCameraRetro,
} from 'react-icons/fa';


export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = 'visible';

      const { words } = splitText(containerRef.current.querySelector('h1')!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <>
      {/* <Navigation /> */}

  

      <section className="container">
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
 
        <div className={styles.container1} ref={containerRef}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Services</h1>
              <p className="h1">
                We build digital experiences that deliver impact — from web to content and design.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/services-hero.jpg"
                alt="Our Services"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </section>

          {/* Web Development */}
          <section className={styles.serviceCard}>
            <div className={styles.left}>
              <h2><FaCode className={styles.iconHeading} /> Web Development</h2>
              <p className={styles.highlight}>
                We build fast, responsive, and SEO-optimized websites that elevate your brand.
              </p>
              <ul className={styles.breakdown}>
                <li>
                  <strong><FaCode className={styles.icon} /> Frontend & Backend</strong><br />
                  React, Next.js, Node, Express, Django.
                </li>
                <li>
                  <strong><FaCogs className={styles.icon} /> Custom Functionality</strong><br />
                  Auth, dashboards, Shopify, Stripe.
                </li>
                <li>
                  <strong><FaMobileAlt className={styles.icon} /> Responsive Design</strong><br />
                  Mobile-first, pixel-perfect UI.
                </li>
                <li>
                  <strong><FaLayerGroup className={styles.icon} /> CMS Integration</strong><br />
                  WordPress, Strapi, Sanity.
                </li>
                <li>
                  <strong><FaSearch className={styles.icon} /> SEO & Performance</strong><br />
                  Meta tags, fast loads, Core Web Vitals.
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div className={styles.rightSticky}>
                <Image
                  src="/images/web.jpg"
                  alt="Web Development"
                  className={styles.rightImg}
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </section>

          {/* Content Marketing */}
          <section className={styles.serviceCard}>
            <div className={styles.left}>
              <h2><FaBullhorn className={styles.iconHeading} /> Content Marketing</h2>
              <p className={styles.highlight}>
                We craft compelling content strategies and creatives that engage.
              </p>
              <ul className={styles.breakdown}>
                <li>
                  <strong><FaCalendarAlt className={styles.icon} /> Social Media Strategy</strong><br />
                  Calendars, hashtags, timing.
                </li>
                <li>
                  <strong><FaVideo className={styles.icon} /> Reels & Short-Form</strong><br />
                  Scripts, edits, IG Reels, Shorts.
                </li>
                <li>
                  <strong><FaPenNib className={styles.icon} /> SEO Blogs</strong><br />
                  Keyword research, topic clusters.
                </li>
                <li>
                  <strong><FaEnvelopeOpenText className={styles.icon} /> Email Campaigns</strong><br />
                  Mailchimp, Klaviyo, SendGrid.
                </li>
                <li>
                  <strong><FaChartBar className={styles.icon} /> Analytics</strong><br />
                  Monthly reports, insights.
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div className={styles.rightSticky}>
                <Image
                  src="/images/content.jpg"
                  alt="Content Marketing"
                  className={styles.rightImg}
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </section>

          {/* Graphic Designing */}
          <section className={styles.serviceCard}>
            <div className={styles.left}>
              <h2><FaPalette className={styles.iconHeading} /> Graphic Designing</h2>
              <p className={styles.highlight}>
                Designs that tell your story, build identity, and grab attention.
              </p>
              <ul className={styles.breakdown}>
                <li>
                  <strong><FaGlobe className={styles.icon} /> Branding & Identity</strong><br />
                  Logos, colors, guidelines.
                </li>
                <li>
                  <strong><FaPenNib className={styles.icon} /> Social Media Creatives</strong><br />
                  Carousels, banners, ads.
                </li>
                <li>
                  <strong><FaPrint className={styles.icon} /> Print Materials</strong><br />
                  Flyers, brochures, packages.
                </li>
                <li>
                  <strong><FaObjectGroup className={styles.icon} /> UX/UI Design</strong><br />
                  Web & app interfaces.
                </li>
                <li>
                  <strong><FaCameraRetro className={styles.icon} /> Visual Assets</strong><br />
                  Thumbnails, posters, templates.
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div className={styles.rightSticky}>
                <Image
                  src="/images/graphic.jpg"
                  alt="Graphic Design"
                  width={500}
                  height={350}
                  className={styles.rightImg}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
