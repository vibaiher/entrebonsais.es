import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 w-64 p-4 hidden lg:block">
        <div className="flex items-center gap-2 mb-6">
          <TreesIcon className="w-6 h-6" />
          <Link href="#" className="text-lg font-semibold" prefetch={false}>
            entre bonsáis
          </Link>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            prefetch={false}
          >
            <BookIcon className="w-4 h-4" />
            History
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            prefetch={false}
          >
            <LeafIcon className="w-4 h-4" />
            Types
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            prefetch={false}
          >
            <ScissorsIcon className="w-4 h-4" />
            Care
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            prefetch={false}
          >
            <ImageIcon className="w-4 h-4" />
            Gallery
          </Link>
        </nav>
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-950 shadow lg:hidden">
          <div className="container mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
            <TreesIcon className="w-6 h-6" />
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              entre bonsáis
            </Link>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800"
                  >
                    <MenuIcon className="w-5 h-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={12} className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      prefetch={false}
                    >
                      <BookIcon className="w-4 h-4" />
                      History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      prefetch={false}
                    >
                      <LeafIcon className="w-4 h-4" />
                      Types
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      prefetch={false}
                    >
                      <ScissorsIcon className="w-4 h-4" />
                      Care
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      prefetch={false}
                    >
                      <ImageIcon className="w-4 h-4" />
                      Gallery
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <header className="pb-10">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#history">History</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <section id="history" className="mb-12 md:mb-16 lg:mb-20">
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
          <section id="types" className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Types of Bonsai</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Upright Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  The most common and classic bonsai style, featuring a single straight trunk with branches growing
                  outward and upward.
                </p>
                <img
                  src="/placeholder.svg"
                  alt="Upright Style Bonsai"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Slanting Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  A bonsai with a trunk that grows at an angle, often to one side, creating a dynamic and asymmetrical
                  appearance.
                </p>
                <img
                  src="/placeholder.svg"
                  alt="Slanting Style Bonsai"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-2">Cascade Style</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  A bonsai with a cascading, waterfall-like appearance, where the trunk and branches grow downward,
                  mimicking the natural growth of trees on cliffs or mountainsides.
                </p>
                <img
                  src="/placeholder.svg"
                  alt="Cascade Style Bonsai"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
          <section id="care" className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Bonsai Care and Maintenance</h2>
            <div className="prose prose-stone dark:prose-invert max-w-3xl">
              <p>
                Caring for a bonsai tree requires a delicate balance of watering, pruning, and environmental conditions.
                Here are some key considerations for maintaining a healthy bonsai:
              </p>
              <ul>
                <li>
                  <strong>Watering:</strong> Bonsai trees have shallow root systems and require frequent watering, but
                  be careful not to overwater. Check the soil daily and water when the top inch becomes dry.
                </li>
                <li>
                  <strong>Pruning:</strong> Regular pruning is essential to maintain the desired shape and size of a
                  bonsai. Prune branches and leaves to encourage new growth and prevent the tree from becoming
                  overgrown.
                </li>
                <li>
                  <strong>Sunlight:</strong> Bonsai trees require ample sunlight, typically 4-6 hours of direct sunlight
                  per day. Adjust the tree's placement as needed to ensure it receives the appropriate amount of light.
                </li>
                <li>
                  <strong>Repotting:</strong> Bonsai trees need to be repotted every 2-3 years to provide fresh soil and
                  allow for root growth. Choose a pot that is slightly larger than the previous one.
                </li>
                <li>
                  <strong>Fertilizing:</strong> Feed your bonsai tree with a balanced, slow-release fertilizer during
                  the growing season to provide essential nutrients for healthy growth.
                </li>
              </ul>
            </div>
          </section>
          <section id="gallery" className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Bonsai Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <img src="/placeholder.svg" alt="Bonsai Tree 1" width={400} height={400} className="rounded-lg" />
              <img src="/placeholder.svg" alt="Bonsai Tree 2" width={400} height={400} className="rounded-lg" />
              <img src="/placeholder.svg" alt="Bonsai Tree 3" width={400} height={400} className="rounded-lg" />
              <img src="/placeholder.svg" alt="Bonsai Tree 4" width={400} height={400} className="rounded-lg" />
              <img src="/placeholder.svg" alt="Bonsai Tree 5" width={400} height={400} className="rounded-lg" />
              <img src="/placeholder.svg" alt="Bonsai Tree 6" width={400} height={400} className="rounded-lg" />
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; 2024 entre bonsáis. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function ScissorsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function TreesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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