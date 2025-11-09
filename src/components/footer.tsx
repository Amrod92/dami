import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="relative">
        <footer className="bg-card/90 py-16 text-card-foreground transition-colors lg:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-y-10 px-4 xl:px-0">
            <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-x-3">
                <div className="relative h-8 w-8 flex-shrink-0">
                  <svg
                    className="h-full w-full text-foreground/80"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-label="Damī — Brackets and Slashes"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 10 V6 H9" />
                      <path d="M18 14 v4 h-3" />
                      <path d="M9.75 15 L13.25 9" />
                      <path d="M12.25 15 L15.75 9" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Damī</p>
                  <p className="mt-1 max-w-sm text-sm font-medium text-muted-foreground">
                    AI-built dummy data delivered as ready-to-download JSON
                    files. Validate your ideas with realistic datasets from the
                    very first sprint.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-sm font-medium text-muted-foreground md:items-end">
                <a
                  className="transition hover:text-foreground"
                  href="mailto:hello@dami.app"
                  title="Contact Damī"
                >
                  Contact
                </a>
                <Link
                  className="transition hover:text-foreground"
                  href="/privacy-policy"
                  title="Read the privacy policy"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="border-b border-border/60"></div>
            <div className="flex flex-col gap-y-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>
                <time>2025</time> · Damī · Crafted with care for builders who
                need better sample data.
              </p>
              <div className="flex items-center gap-x-4">
                <Link
                  className="transition hover:text-foreground"
                  href="/about"
                  title="Learn more about Damī"
                >
                  About
                </Link>
                <Link
                  className="transition hover:text-foreground"
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
