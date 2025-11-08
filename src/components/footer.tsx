import Image from "next/image";
import Link from "next/link";
import logo from "../../public/dami_logo.png";

export default function Footer() {
  return (
    <div>
      <div className="relative">
        <footer className="bg-neutral-50 py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-x-3">
                <Image
                  className="h-10 w-10"
                  src={logo}
                  alt="Damī logo"
                  width={80}
                  height={80}
                  priority
                />
                <div>
                  <p className="text-lg font-semibold text-neutral-800">Damī</p>
                  <p className="mt-1 max-w-sm text-sm font-medium text-neutral-500">
                    AI-built dummy data delivered as ready-to-download JSON
                    files. Validate your ideas with realistic datasets from the
                    very first sprint.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-sm font-medium text-neutral-500 md:items-end">
                <a
                  className="transition hover:text-neutral-700"
                  href="mailto:hello@dami.app"
                  title="Contact Damī"
                >
                  Contact
                </a>
                <Link
                  className="transition hover:text-neutral-700"
                  href="/privacy-policy"
                  title="Read the privacy policy"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="border-b border-neutral-200"></div>
            <div className="flex flex-col gap-y-4 text-sm font-medium text-neutral-500 md:flex-row md:items-center md:justify-between">
              <p>
                <time>2025</time> · Damī · Crafted with care for builders who
                need better sample data.
              </p>
              <div className="flex items-center gap-x-4">
                <Link
                  className="transition hover:text-neutral-700"
                  href="/about"
                  title="Learn more about Damī"
                >
                  About
                </Link>
                <Link
                  className="transition hover:text-neutral-700"
                  href="/changelog"
                  title="Track product updates"
                >
                  Changelog
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
