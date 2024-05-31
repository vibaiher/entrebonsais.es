/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SUU4hoSA0WC
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white dark:bg-gray-950 shadow">
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <TreesIcon className="w-6 h-6" />
            Bonsai Guide
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800"
                variant="ghost"
              >
                <MenuIcon className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48" sideOffset={12}>
              <DropdownMenuItem asChild>
                <Link
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  href="#"
                >
                  <BookIcon className="w-4 h-4" />
                  History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  href="#"
                >
                  <LeafIcon className="w-4 h-4" />
                  Types
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  href="#"
                >
                  <ScissorsIcon className="w-4 h-4" />
                  Care
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  href="#"
                >
                  <ImageIcon className="w-4 h-4" />
                  Gallery
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <section className="mb-12 md:mb-16 lg:mb-20" id="history">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">History of Bonsai</h2>
            <div className="prose prose-stone dark:prose-invert max-w-3xl">
              <p>
                Bonsai, the art of growing miniature trees, has a rich history that dates back centuries in Japan and
                China. The practice of bonsai originated in ancient China, where it was known as "penjing" or "penzai."
                The art then spread to Japan, where it was refined and developed into the distinct bonsai style we know
                today.
              </p>
              <p>
                The earliest known bonsai trees were grown in China as early as the sixth century AD. These small,
                potted trees were often used in religious and imperial settings, symbolizing harmony with nature and the
                cosmos. Over time, the art of bonsai evolved, with techniques and styles becoming more refined and
                diverse.
              </p>
              <p>
                In the 12th century, bonsai was introduced to Japan, where it quickly gained popularity among the
                aristocracy and Zen Buddhist monks. Japanese bonsai artists developed their own unique techniques and
                styles, such as the iconic upright, slanting, and cascade forms. Bonsai became deeply intertwined with
                Japanese culture, influencing art, architecture, and philosophy.
              </p>
            </div>
          </section>
          <section className="mb-12 md:mb-16 lg:mb-20" id="types">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Types of Bonsai</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Upright Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  The most common and classic bonsai style, featuring a single straight trunk with branches growing
                  outward and upward.
                </p>
                <img
                  alt="Upright Style Bonsai"
                  className="rounded-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Slanting Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  A bonsai with a trunk that grows at an angle, often to one side, creating a dynamic and asymmetrical
                  appearance.
                </p>
                <img
                  alt="Slanting Style Bonsai"
                  className="rounded-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Cascade Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  A bonsai with a cascading, waterfall-like appearance, where the trunk and branches grow downward,
                  mimicking the natural growth of trees on cliffs or mountainsides.
                </p>
                <img
                  alt="Cascade Style Bonsai"
                  className="rounded-lg"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
            </div>
          </section>
          <section className="mb-12 md:mb-16 lg:mb-20" id="care">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Bonsai Care and Maintenance</h2>
            <div className="prose prose-stone dark:prose-invert max-w-3xl">
              <p>
                Caring for a bonsai tree requires a delicate balance of watering, pruning, and environmental conditions.
                Here are some key considerations for maintaining a healthy bonsai:
              </p>
              <ul>
                <li>
                  <strong>Watering:</strong>
                  Bonsai trees have shallow root systems and require frequent watering, but be careful not to overwater.
                  Check the soil daily and water when the top inch becomes dry.
                </li>
                <li>
                  <strong>Pruning:</strong>
                  Regular pruning is essential to maintain the desired shape and size of a bonsai. Prune branches and
                  leaves to encourage new growth and prevent the tree from becoming overgrown.
                </li>
                <li>
                  <strong>Sunlight:</strong>
                  Bonsai trees require ample sunlight, typically 4-6 hours of direct sunlight per day. Adjust the tree's
                  placement as needed to ensure it receives the appropriate amount of light.
                </li>
                <li>
                  <strong>Repotting:</strong>
                  Bonsai trees need to be repotted every 2-3 years to provide fresh soil and allow for root growth.
                  Choose a pot that is slightly larger than the previous one.
                </li>
                <li>
                  <strong>Fertilizing:</strong>
                  Feed your bonsai tree with a balanced, slow-release fertilizer during the growing season to provide
                  essential nutrients for healthy growth.
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12 md:mb-16 lg:mb-20" id="gallery">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Bonsai Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <img
                alt="Bonsai Tree 1"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <img
                alt="Bonsai Tree 2"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <img
                alt="Bonsai Tree 3"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <img
                alt="Bonsai Tree 4"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <img
                alt="Bonsai Tree 5"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <img
                alt="Bonsai Tree 6"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2024 Bonsai Guide. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}


function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}
