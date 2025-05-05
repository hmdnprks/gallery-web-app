import { Artwork } from "@core/entities/Artwork";

const STORAGE_KEY = "saved_artworks";

export function getSavedArtworks(): Artwork[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveArtwork(artwork: Artwork) {
  const current = getSavedArtworks();
  const exists = current.find((a) => a.id === artwork.id);
  if (!exists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, artwork]));
  }
}

export function removeArtwork(id: number) {
  const current = getSavedArtworks().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function isArtworkSaved(id: number): boolean {
  return getSavedArtworks().some((a) => a.id === id);
}
