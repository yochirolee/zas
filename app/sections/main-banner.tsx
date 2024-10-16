export const MainBanner = () => {
  return (
    <div
      id="pricing"
      className="relative overflow-hidden bg-slate-50 pb-20 pt-24 lg:pb-24 xl:pb-32"
    >
      <img
        src="/plus/img/beams-pricing.png"
        alt=""
        className="absolute left-1/2 top-0 -ml-[40rem] w-[90.4375rem] max-w-none"
      />
      <div className="absolute inset-x-0 bottom-0 h-96 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pricing-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
        </svg>
      </div>
      <div className="max-w-container relative mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[40rem] lg:max-w-none">
          <div className="max-w-3xl pr-12">
            <h2 className="text-base font-semibold leading-7 text-sky-500">
              Pricing
            </h2>
            <p className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900">
              Buy once, use forever.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
              Every component package includes lifetime access, free updates,
              and examples in React, Vue, and plain HTML.
            </p>
            <div className="mt-9 flex flex-wrap" aria-hidden="true">
              {/* ... (rest of the content) ... */}
            </div>
          </div>
          {/* ... (rest of the content) ... */}
        </section>
        {/* ... (rest of the content) ... */}
      </div>
    </div>
  );
};
