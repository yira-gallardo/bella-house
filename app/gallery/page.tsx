"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
  { src: "/img/img-1.jpg", alt: "Kitchen renovation project" },
  { src: "/img/img-2.jpg", alt: "Modern living space" },
  { src: "/img/img-3.jpg", alt: "Basement development" },
  { src: "/img/img-4.jpg", alt: "Flooring installation" },
  { src: "/img/img-5.jpg", alt: "Interior painting" },
  { src: "/img/img-6.jpg", alt: "Home renovation" },
  { src: "/img/img-7.jpg", alt: "Custom cabinetry" },
  { src: "/img/img-8.jpg", alt: "Full home renovation" },
  { src: "/img/img-9.jpg", alt: "Bathroom remodel" },
  { src: "/img/img-17.jpg", alt: "Living room transformation" },
  { src: "/img/img-11.jpg", alt: "Basement finishing" },
  { src: "/img/img-12.jpg", alt: "Kitchen upgrade" },
  { src: "/img/img-13.jpeg", alt: "Interior design" },
  { src: "/img/img-14.jpg", alt: "Home improvement" },
  { src: "/img/img-15.jpg", alt: "Room renovation" },
  { src: "/img/img-16.jpg", alt: "Complete makeover" },
  { src: "/img/img-18.jpg", alt: "Complete makeover" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-[calc(100vh-128px)] bg-white">
      {/* Header */}
      <section className="bg-[#f5f3f0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-normal italic text-gray-800 sm:text-5xl">
              Our Work
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Browse through our portfolio of completed renovation projects.
              From basements to kitchens, we take pride in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E] focus:ring-offset-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f3f0] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
            Ready to transform your space?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            Get a free estimate for your next renovation project.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
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
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-h-[90vh] max-w-5xl">
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
