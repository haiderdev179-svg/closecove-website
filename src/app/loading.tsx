export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 flex justify-center" aria-label="Loading">
            <div className="loader h-8 w-8" />
          </div>

          <div className="space-y-6">
            <div className="skeleton-line h-10 w-3/5 rounded-xl" />
            <div className="space-y-3">
              <div className="skeleton-line h-4 w-full rounded-lg" />
              <div className="skeleton-line h-4 w-11/12 rounded-lg" />
              <div className="skeleton-line h-4 w-4/5 rounded-lg" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <div className="skeleton-line mb-3 h-12 w-12 rounded-xl" />
                  <div className="skeleton-line mb-2 h-4 w-3/4 rounded-lg" />
                  <div className="skeleton-line mb-2 h-3 w-full rounded-lg" />
                  <div className="skeleton-line h-3 w-5/6 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
