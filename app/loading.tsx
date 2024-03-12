import { Skeleton } from "@/components/ui/skeleton";

function LoadingResults() {
  return (
    <section>
      <p className="text-center">We are loading your&apos;s task....</p>
      <div className="space-y-2 p-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex gap-3 bg-white p-3 rounded items-center justify-between mb-2 "
          >
            <Skeleton className="h-24 w-full rounded-lg z-0" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoadingResults;
