import Gallery from "@presentation/features/Gallery/Gallery";
import BottomNavigation from "@presentation/ui/BottomNav/BottomNav";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-1 overflow-y-auto px-2 py-2 bg-white pt-0">
        <Gallery />
      </main>

      <BottomNavigation />
    </div>
  );
}
