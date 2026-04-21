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
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                Baseboards
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
              <p className="mt-1 text-sm text-gray-500">
                Interior & Exterior Doors
              </p>
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
                Full Renovations
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Kitchen · Bath · Whole Home
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
                src="/img/work-1.png"
                alt="Renovation project 1"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-2.png"
                alt="Renovation project 2"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-3.png"
                alt="Renovation project 3"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-4.png"
                alt="Renovation project 4"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-5.png"
                alt="Renovation project 5"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-6.png"
                alt="Renovation project 6"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-7.png"
                alt="Renovation project 7"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/img/work-8.png"
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
            {/* Testimonial 1 */}
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
                "Very professional, clean work, highly recommended"
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — Michael R.
              </p>
            </div>

            {/* Testimonial 2 */}
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
                "They finished my basement and painting, amazing job."
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — Sarah T.
              </p>
            </div>

            {/* Testimonial 3 */}
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
                "Fast, honest and good price"
              </p>
              <p className="mt-3 text-sm font-medium text-gray-800">
                — David L.
              </p>
            </div>
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
              Get a free estimate for your kitchen, bathroom, basement, painting, or full home project.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
            >
              Get My Free Estimate
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
