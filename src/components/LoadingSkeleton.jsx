export default function LoadingSkeleton({ type = 'card', count = 6 }) {
  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-green-100/50"
          >
            <div className="aspect-[4/3] bg-green-100 skeleton-pulse" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-green-100 rounded-lg w-3/4 skeleton-pulse" />
              <div className="h-3 bg-green-50 rounded-lg w-1/2 skeleton-pulse" />
              <div className="space-y-2">
                <div className="h-3 bg-green-50 rounded-lg w-full skeleton-pulse" />
                <div className="h-3 bg-green-50 rounded-lg w-5/6 skeleton-pulse" />
              </div>
              <div className="h-4 bg-green-100 rounded-lg w-1/3 skeleton-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'detail') {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="aspect-video bg-green-100 skeleton-pulse" />
          <div className="p-8 space-y-4">
            <div className="h-8 bg-green-100 rounded-xl w-1/2 skeleton-pulse" />
            <div className="h-4 bg-green-50 rounded-lg w-1/3 skeleton-pulse" />
            <div className="flex gap-2 mt-4">
              <div className="h-7 bg-green-100 rounded-full w-20 skeleton-pulse" />
              <div className="h-7 bg-green-100 rounded-full w-24 skeleton-pulse" />
              <div className="h-7 bg-green-100 rounded-full w-20 skeleton-pulse" />
            </div>
            <div className="space-y-2 mt-6">
              <div className="h-3 bg-green-50 rounded-lg w-full skeleton-pulse" />
              <div className="h-3 bg-green-50 rounded-lg w-full skeleton-pulse" />
              <div className="h-3 bg-green-50 rounded-lg w-4/5 skeleton-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
