import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-sky-500" />
            <span>Magaran Software</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#ideology" className="hover:text-indigo-600">Ideology</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#hire" className="hover:text-indigo-600">Hire us</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">Let's talk</a>
          </nav>
          <button className="md:hidden inline-flex items-center p-2 rounded border border-gray-300 text-gray-700">
            <span className="sr-only">Toggle navigation</span>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && <p className="text-indigo-600 font-semibold tracking-wide uppercase">{eyebrow}</p>}
      {title && <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>}
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-sky-500" />
              <span className="font-semibold">Magaran Software</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              We design and develop awesome apps for Web & Mobile
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We will help you design, build and iterate on your digital products. Using modern technologies for web and mobile our team expertly implements quality code that is cost effective to you and that will exceed your expectations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700">Let's talk</a>
              <a href="#services" className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700">Our Services</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-200 via-sky-200 to-teal-200" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Ideology() {
  const items = [
    {
      number: '01',
      title: 'Customer Satisfaction',
      desc: 'Our main goal is to deliver products that will make you happy and will meet your needs.',
    },
    {
      number: '02',
      title: 'Quality Work',
      desc: 'Our products and services conform to the highest quality code standards such as code reviews, testing and continuous integration/delivery.',
    },
    {
      number: '03',
      title: 'Agile Software Development',
      desc: 'By using agile our team delivers value much earlier than traditional project teams while making the process more transparent and adapted to your needs.',
    },
  ]

  return (
    <section id="ideology" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Our Ideology" title="How we work" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.number} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-indigo-600">{it.number}</span>
                <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionTitle eyebrow="Testimonials" title="What our clients say" />
        <blockquote className="mt-10 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <p className="text-xl text-gray-800">
            "Our experience with Magaran was very gratifying. We value working with a team of qualified professionals, capable of offering personalized attention and quality. We are very happy with the results."
          </p>
          <footer className="mt-4 text-gray-600">— Brenda Calderon, Estrella & Tupete</footer>
        </blockquote>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'Web applications',
      desc: 'Whether you need to build a custom web application from scratch or migrate your legacy backend, we can accomplish that efficiently and cost‑effectively.',
    },
    {
      title: 'Mobile applications',
      desc: 'We develop for both Android and iOS. As mobile usage grows rapidly, we can help you build and launch your application into this market.',
    },
    {
      title: 'Extend your team',
      desc: 'Increase the capacity of your in‑house development team using our resources. Reduce time‑to‑market by hiring our skilled staff.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="Services" title="What we offer" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="We love our clients"
          title="Partners of every size"
          subtitle="Whether you need us to build your product or extend your existing software team capacity, we can help."
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
          {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6'].map((c) => (
            <div key={c} className="py-6 rounded-lg border border-gray-200 bg-white text-gray-600">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="About" title="What we do" />
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">Others call it magic — we call it software.</h3>
            <p>
              We take pride in addressing your software needs with unique, custom solutions designed to your individual requirements. Our proven approach to design, implementation and continuous development allows us to perform the best for any business regardless of scope and industry.
            </p>
            <p>
              Magaran Software is a premier software development company, providing top‑notch solutions across multiple technology platforms. Whether you are creating a new custom application or extending your in‑house team, we help you increase capacity and achieve your goals.
            </p>
            <p>
              We specialize in building web and mobile applications (Android & iOS), and support clients in a wide variety of software needs. Our expertise spans modern stacks and we maintain strong partnerships to help our clients succeed.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-200 via-sky-200 to-teal-200 min-h-[280px]" />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '1', label: 'Automated tests' },
    { value: '1', label: 'Lines of code' },
    { value: '1', label: 'Employees' },
    { value: '1', label: 'Pizzas eaten' },
  ]
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl font-bold">The Count</h3>
        <p className="text-white/80">We have spent various amounts of time on activities.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="hire" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Hire Us"
          title="Tell us about your idea"
          subtitle="We'll contact you as soon as possible to organize a meeting."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <form id="contact" className="space-y-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700">Send</button>
          </form>
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl p-6 border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-900">Our Offices</h4>
            <p className="mt-2 text-gray-700">23 Sebastian Valverde St<br />Santiago, Dominican Republic 51000</p>
            <p className="mt-4 text-gray-700">
              We are located in Santiago, also known as the Heart City of Dominican Republic. Known for our warm and hospitable people, Dominican Republic is a destination like no other, featuring astounding nature, intriguing history and rich culture.
            </p>
            <div className="mt-4 space-y-1 text-gray-700">
              <p>
                <span className="font-medium">Email:</span> <a className="text-indigo-600 hover:underline" href="mailto:info@magaransoft.com">info@magaransoft.com</a>
              </p>
              <p>
                <span className="font-medium">Phone:</span> <a className="text-indigo-600 hover:underline" href="tel:+18093824261">+1 809-382-4261</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-sky-500" />
          <span>Magaran Software</span>
        </div>
        <p className="text-gray-500 text-sm">© Magaran Software</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Ideology />
        <Testimonial />
        <Services />
        <Clients />
        <About />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
