import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[calc(100vh-128px)] w-full">
        <Image
          src="/img/banner-1.png"
          alt="Beautiful home renovation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 lg:px-20">
          <h1 className="max-w-2xl text-4xl font-light italic text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Basement Development
            <br />
            Done Right
          </h1>
          <p className="mt-4 max-w-md text-base text-white/90 drop-shadow-md sm:text-lg">
            Transform your basement into
            <br />a functional, high-end living space.
          </p>
          <Link
            href="/quote"
            className="mt-8 w-fit rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
          >
            Get a Free Basement Quote
          </Link>

          {/* Rating & Licensed */}
          <div className="mt-6 flex items-center gap-4 text-white drop-shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-[#D6B98C]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm font-medium">4.9</span>
            </div>
            <span className="text-white/70">•</span>
            <span className="text-sm">Licensed & Insured</span>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="scroll-mt-32 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Title with line */}
          <div className="flex flex-col items-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-normal text-gray-800 sm:text-4xl">
              Our Services
            </h2>
            <div className="mt-4 h-px w-full max-w-4xl bg-gray-200" />
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {/* Service 1 - Painting */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/icon-1.png"
                alt="Painting"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Painting
              </h3>
              <p className="mt-1 text-sm text-gray-500">Interior & Exterior</p>
            </div>

            {/* Service 2 - Baseboards */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/icon-2.png"
                alt="Baseboards"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Baseboards & Casings
              </h3>
              <p className="mt-1 text-sm text-gray-500">Install & Replace</p>
            </div>

            {/* Service 3 - Door Installation */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/icon-3.png"
                alt="Door Installation"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Door Installation
              </h3>
              <p className="mt-1 text-sm text-gray-500">Interior</p>
            </div>

            {/* Service 4 - Full Renovations */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/icon-4.png"
                alt="Full Renovations"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Full Renovation
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Kitchen · Bath · Whole Home
              </p>
            </div>

            {/* Service 5 - Basement Development */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/icon-6.png"
                alt="Basement Development"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Basement Development
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Full Finishing & Suites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="gallery" className="scroll-mt-32 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Line and Title */}
          <div className="flex flex-col items-center">
            <div className="mb-4 h-px w-full max-w-4xl bg-gray-200" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-normal text-gray-800 sm:text-4xl">
              Our Work
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-1.jpg"
                alt="Renovation project 1"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-2.jpg"
                alt="Renovation project 2"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-17.jpg"
                alt="Renovation project 3"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-18.jpg"
                alt="Renovation project 4"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-5.jpg"
                alt="Renovation project 5"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-9.jpg"
                alt="Renovation project 6"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-7.jpg"
                alt="Renovation project 7"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/img-8.jpg"
                alt="Renovation project 8"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/gallery"
              className="rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="scroll-mt-32 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Line and Title */}
          <div className="flex flex-col items-center">
            <div className="mb-4 h-px w-full max-w-4xl bg-gray-300" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-normal italic text-gray-800 sm:text-4xl">
              What our clients say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Testimonial 1 - Emma Tremblay */}
            <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                &quot;I&apos;m very satisfied with the work they did. The
                quality is impeccable and the attention to detail shows. They
                are professional, responsible, and deliver exactly what they
                promise. Highly recommended!&quot;
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — Emma Tremblay
              </p>
            </div>

            {/* Testimonial 2 - Andres Rodriguez */}
            <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                &quot;Very happy and satisfied with my basement renovation. They
                are professional and trustworthy. Easy to work with, friendly,
                and the price was very reasonable. I will definitely recommend
                them!&quot;
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — Andres Rodriguez
              </p>
            </div>

            {/* Testimonial 3 - Paula Tineo */}
            <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                &quot;I highly recommend Bella House Renovation for their
                excellent work and professionalism. They did an exceptional job
                with my floors, baseboards, painting, and cabinet installation.
                Impressive attention to detail!&quot;
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — Paula Tineo
              </p>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://share.google/yrPGgJspesn3CEqJJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#C8A97E]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              See all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="scroll-mt-32 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#f5f3f0] px-8 py-16 text-center sm:px-16 sm:py-20">
            <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
              Ready to start your renovation?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-gray-600">
              Get a free estimate for your kitchen, bathroom, basement,
              painting, or full home project.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #D6B98C, #C8A97E)",
              }}
            >
              Get My Free Estimate
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
