import Gallery from "@presentation/features/Gallery/Gallery";
import BottomNavigation from "@presentation/ui/BottomNav/BottomNav";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto px-4 py-2">
        <Gallery />
      </main>

      <BottomNavigation />
    </div>
  );
}
