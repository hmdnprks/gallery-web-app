import SavedPage from "@component/presentation/features/Saved/SavedPage";
import BottomNavigation from "@component/presentation/ui/BottomNav/BottomNav";

export default function Saved() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-1 overflow-y-auto px-2 py-12 bg-white pt-0">
        <SavedPage />
      </main>

      <BottomNavigation />
    </div>
  );
}
