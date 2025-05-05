export default function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="aspect-square w-full bg-gray-300 rounded" />

      <div className="flex justify-between items-center mb-2">
        <div className="h-4 w-40 bg-gray-300 rounded" />
        <div className="h-8 w-16 bg-gray-300 rounded-full" />
      </div>

      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-1">
          <div className="h-4 w-32 bg-gray-400 rounded" />
          <div className="h-3 w-full bg-gray-300 rounded" />
          <div className="h-3 w-[80%] bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  );
}
