export default function AboutPage() {
  return (
    <div>
      <div className="relative">
        <section className="pt-12 lg:pt-16 pb-6 lg:pb-16">
          <div className="max-w-7xl mx-auto px-4 xl:px-0">
            <div className="flex flex-col items-start md:px-4 lg:items-start lg:px-8">
              <div className="mt-8 bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent sm:w-2/3 md:w-1/2 lg:mt-9 lg:text-4xl lg:leading-tight xl:w-2/3">
                Generate Dummy Data
              </div>
              <p className="text-sm font-medium text-slate-600 leading-normal lg:leading-normal lg:text-base mt-4 sm:w-2/3 md:w-1/2 xl:w-2/5">
                Turn vague requirements into rich, realistic datasets. Our AI
                generator mirrors the structure of your application so you can
                validate features with data that behaves like the real thing.
              </p>
            </div>
            <div className="mt-4 border-b border-b-neutral-100 lg:mt-6"></div>
            <div className="mt-6 space-y-0.5 md:px-4 lg:mt-9 lg:px-8">
              <details className="group open:bg-slate-50 divide-y divide-neutral-100 focus:shadow-[0_0px_2px_0px_rgba(0,0,0,0.10)] open:mt-3 open:rounded-2xl hover:rounded-2xl">
                <summary className="group/question flex cursor-pointer hover:opacity-90 transition-all items-center justify-between gap-x-4 rounded-t-2xl p-4">
                  <div className="font-semibold text-neutral-700 md:text-lg xl:text-xl">
                    How does the AI know what to generate?
                  </div>
                  <figure className="hidden shrink-0 items-center gap-x-3 whitespace-nowrap rounded-full bg-slate-200 py-1.5 pl-3 pr-1.5 text-sm text-slate-600 transition-all group-open:flex">
                    Collapse
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                  <figure className="flex shrink-0 items-center justify-center transition-all rounded-full bg-slate-200 p-1.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] group-open:hidden">
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                </summary>
                <p className="text-neutral-500 px-4 pb-4">
                  Feed the generator your schema, field hints, and tone. Our
                  models blend that context with curated patterns to craft data
                  that matches your structure and stays consistent across
                  records.
                </p>
              </details>
              <details className="group open:bg-slate-50 divide-y divide-neutral-100 focus:shadow-[0_0px_2px_0px_rgba(0,0,0,0.10)] open:mt-3 open:rounded-2xl hover:rounded-2xl">
                <summary className="group/question flex cursor-pointer hover:opacity-90 transition-all items-center justify-between gap-x-4 rounded-t-2xl p-4">
                  <div className="font-semibold text-neutral-700 md:text-lg xl:text-xl">
                    Can I trust the data to reflect real-world scenarios?
                  </div>
                  <figure className="hidden shrink-0 items-center gap-x-3 whitespace-nowrap rounded-full bg-slate-200 py-1.5 pl-3 pr-1.5 text-sm text-slate-600 transition-all group-open:flex">
                    Collapse
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                  <figure className="flex shrink-0 items-center justify-center transition-all rounded-full bg-slate-200 p-1.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] group-open:hidden">
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                </summary>
                <p className="text-neutral-500 px-4 pb-4">
                  We emphasize edge cases, nested relationships, and temporal
                  variation so your QA and demos surface the issues static data
                  misses. You can tweak personas and behaviors to fit your
                  workflows.
                </p>
              </details>
              <details className="group open:bg-slate-50 divide-y divide-neutral-100 focus:shadow-[0_0px_2px_0px_rgba(0,0,0,0.10)] open:mt-3 open:rounded-2xl hover:rounded-2xl">
                <summary className="group/question flex cursor-pointer hover:opacity-90 transition-all items-center justify-between gap-x-4 rounded-t-2xl p-4">
                  <div className="font-semibold text-neutral-700 md:text-lg xl:text-xl">
                    What format does the generated data use?
                  </div>
                  <figure className="hidden shrink-0 items-center gap-x-3 whitespace-nowrap rounded-full bg-slate-200 py-1.5 pl-3 pr-1.5 text-sm text-slate-600 transition-all group-open:flex">
                    Collapse
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                  <figure className="flex shrink-0 items-center justify-center transition-all rounded-full bg-slate-200 p-1.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] group-open:hidden">
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                </summary>
                <p className="text-neutral-500 px-4 pb-4">
                  Every run downloads a neatly structured JSON file. Import it
                  into your mocks, seed routines, or documentation workflows—JSON
                  support is first-class today, with more formats on the way.
                </p>
              </details>
              <details className="group open:bg-slate-50 divide-y divide-neutral-100 focus:shadow-[0_0px_2px_0px_rgba(0,0,0,0.10)] open:mt-3 open:rounded-2xl hover:rounded-2xl">
                <summary className="group/question flex cursor-pointer hover:opacity-90 transition-all items-center justify-between gap-x-4 rounded-t-2xl p-4">
                  <div className="font-semibold text-neutral-700 md:text-lg xl:text-xl">
                    What happens when my schema changes?
                  </div>
                  <figure className="hidden shrink-0 items-center gap-x-3 whitespace-nowrap rounded-full bg-slate-200 py-1.5 pl-3 pr-1.5 text-sm text-slate-600 transition-all group-open:flex">
                    Collapse
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                  <figure className="flex shrink-0 items-center justify-center transition-all rounded-full bg-slate-200 p-1.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] group-open:hidden">
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                </summary>
                <p className="text-neutral-500 px-4 pb-4">
                  Update a field, adjust relationships, and regenerate in a few
                  clicks. Your previous datasets stay versioned so you can roll
                  back or compare outputs as your product evolves.
                </p>
              </details>
              <details className="group open:bg-slate-50 divide-y divide-neutral-100 focus:shadow-[0_0px_2px_0px_rgba(0,0,0,0.10)] open:mt-3 open:rounded-2xl hover:rounded-2xl">
                <summary className="group/question flex cursor-pointer hover:opacity-90 transition-all items-center justify-between gap-x-4 rounded-t-2xl p-4">
                  <div className="font-semibold text-neutral-700 md:text-lg xl:text-xl">
                    Can my team collaborate and reuse setups?
                  </div>
                  <figure className="hidden shrink-0 items-center gap-x-3 whitespace-nowrap rounded-full bg-slate-200 py-1.5 pl-3 pr-1.5 text-sm text-slate-600 transition-all group-open:flex">
                    Collapse
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                  <figure className="flex shrink-0 items-center justify-center transition-all rounded-full bg-slate-200 p-1.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] group-open:hidden">
                    <svg
                      className="h-5 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </figure>
                </summary>
                <p className="text-neutral-500 px-4 pb-4">
                  Save presets with your schema, relationship rules, and tone.
                  Share them across workspaces so teammates can spin up fresh
                  datasets for every prototype without rewriting instructions.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
