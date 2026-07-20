export default function BookingLoading() {
  return (
    <div className="min-h-screen py-8 sm:py-12 animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="w-32 h-4 bg-white/5 rounded mb-4" />
          <div className="w-64 h-8 bg-white/5 rounded" />
        </div>

        {/* Stepper Skeleton */}
        <div className="hidden lg:flex items-center justify-between max-w-xl mb-10">
          {[1, 2, 3, 4].map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              {i < 3 && <div className="w-20 h-0.5 mx-4 bg-white/5 rounded-full" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content Skeleton */}
          <div className="flex-1 space-y-8">
            <div className="w-full h-[400px] bg-white/5 rounded-2xl border border-white/10" />
            
            <div className="space-y-4">
              <div className="w-48 h-6 bg-white/5 rounded" />
              <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10" />
              <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10" />
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="hidden lg:block w-[380px] shrink-0">
            <div className="w-full h-[500px] bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col gap-6">
              <div className="w-40 h-6 bg-white/10 rounded" />
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="w-32 h-4 bg-white/10 rounded" />
                  <div className="w-16 h-4 bg-white/10 rounded" />
                </div>
                <div className="flex justify-between">
                  <div className="w-24 h-4 bg-white/10 rounded" />
                  <div className="w-16 h-4 bg-white/10 rounded" />
                </div>
                <div className="w-full h-px bg-white/10 my-4" />
                <div className="flex justify-between">
                  <div className="w-28 h-6 bg-white/20 rounded" />
                  <div className="w-24 h-6 bg-white/20 rounded" />
                </div>
              </div>

              <div className="mt-auto w-full h-14 bg-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
