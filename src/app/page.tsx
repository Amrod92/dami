import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <section className="py-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center text-center">
            <div className="items-center justify-center rounded-full text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] inline-flex bg-slate-900 text-white px-2.5 py-1 mt-8 md:mt-12 xl:mt-16">
              Introducing Damī
            </div>
            <figure className="relative h-52 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white sm:h-80 md:after:left-4 md:after:right-4 lg:h-96 lg:after:left-8 lg:after:right-8 xl:after:left-10 xl:after:right-10">
              <img
                className="absolute -bottom-6 left-1/2 h-60 w-11/12 -translate-x-1/2 rounded-md border-4 border-slate-900/5 object-cover object-left-top shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] sm:h-80 sm:w-5/6 lg:h-96 lg:w-2/3 lg:rounded-2xl"
                src="https://tailkits.com/ui/iframe/assets/img/browser-mock-up-1.png"
                alt="Browser mockup"
              />
            </figure>

            <div className="bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl mt-4 sm:mx-auto sm:w-2/3 lg:mt-6 lg:leading-tight">
              AI Dummy Data Tailored to Your Product
            </div>
            <p className="mt-4 font-medium text-slate-600 sm:mx-auto sm:w-2/3 md:w-1/2 lg:mx-0 lg:mt-6 lg:w-2/5">
              Skip static placeholders. Damī generates production-like datasets
              that mirror your schema, tone, and edge cases, then packages them
              into downloadable JSON files so every prototype, test, and demo
              feels real.
            </p>
            <Link href="/dummy" replace>
              <Button className="mt-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-robot"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                </svg>
                Start Now. Free!
              </Button>
            </Link>
          </div>
        </section>
        <section className="pt-6 lg:pt-6 relative pb-6 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center">
            <div className="items-center justify-center rounded-full text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] inline-flex bg-white text-neutral-700 px-2.5 py-1">
              Platform Overview
            </div>
            <div className="bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl mt-6 text-center sm:mx-auto sm:w-1/2 md:mt-8 md:w-2/5 lg:w-1/2 lg:leading-tight xl:mt-9 xl:w-2/5">
              Design Dummy Resources for SaaS Success
            </div>
            <div className="mt-12 grid gap-y-6 md:px-4 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0 lg:px-8">
              <article className="flex flex-col items-start sm:mx-auto sm:w-2/3 lg:mx-0 lg:w-4/5 xl:w-2/3">
                <figure>
                  <svg
                    className="h-6 text-slate-400 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <div className="mt-4 font-bold text-neutral-700 md:text-lg lg:mt-6 xl:text-xl">
                  Schema-Aware Generation
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-500">
                  Upload or describe your models and Damī fills every field with
                  believable values that respect formats, relationships, and
                  validation rules.
                </p>
              </article>
              <article className="flex flex-col items-start sm:mx-auto sm:w-2/3 lg:mx-0 lg:w-4/5 xl:w-2/3">
                <figure>
                  <svg
                    className="h-6 text-slate-400 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <div className="mt-4 font-bold text-neutral-700 md:text-lg lg:mt-6 xl:text-xl">
                  Edge Cases on Demand
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-500">
                  Surface the tricky scenarios early. Generate outliers,
                  localized values, and time-based narratives, all bundled into
                  the same JSON export so you can test how your product behaves
                  under pressure.
                </p>
              </article>
              <article className="flex flex-col items-start sm:mx-auto sm:w-2/3 lg:mx-0 lg:w-4/5 xl:w-2/3">
                <figure>
                  <svg
                    className="h-6 text-slate-400 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path
                      fillRule="evenodd"
                      d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </figure>
                <div className="mt-4 font-bold text-neutral-700 md:text-lg lg:mt-6 xl:text-xl">
                  Shareable Presets
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-500">
                  Capture your best configurations once, then reuse and adapt
                  them across teams, clients, and environments—every run gives
                  you a fresh JSON file ready to share.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
