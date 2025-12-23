import React from "react"

export default function CTA2() {
  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] bg-primary p-4 text-primary-foreground sm:p-6 md:p-8">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-primary-foreground/12" />
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-primary-foreground/10" />
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-primary-foreground/8" />
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-primary-foreground/6" />
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-primary-foreground/5" />
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-primary-foreground/8" />
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:mb-3 md:text-5xl">
          Bulk Orders Made Simple.
        </h1>
        <p className="mb-4 max-w-md text-base text-primary-foreground/90 sm:text-lg md:mb-5">
          Looking to place high-volume orders? We offer customized pricing,
          reliable supply, and dedicated support tailored for bulk and
          enterprise requirements.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button
            className="flex w-full items-center justify-between rounded-full bg-primary-foreground px-5 py-3 text-primary shadow-sm transition-colors hover:bg-primary-foreground/90 sm:w-[240px]"
            type="button"
          >
            <span className="font-medium">Request Bulk Quote</span>
            <span className="h-5 w-5 shrink-0 rounded-full bg-primary" />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-full bg-primary-foreground px-5 py-3 text-primary shadow-sm transition-colors hover:bg-primary-foreground/90 sm:w-[240px]"
            type="button"
          >
            <span className="font-medium">Talk to Sales Team</span>
            <span className="h-5 w-5 shrink-0 rounded-full bg-primary" />
          </button>
        </div>
      </div>
    </div>
  )
}
