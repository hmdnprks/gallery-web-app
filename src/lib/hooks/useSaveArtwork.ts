import { useState, useEffect } from "react";
import { Artwork } from "@core/entities/Artwork";
import { isArtworkSaved, saveArtwork, removeArtwork } from "../storage/artwork";

export function useSaveArtwork(artwork?: Artwork) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (artwork?.id) {
      setSaved(isArtworkSaved(artwork.id));
    }
  }, [artwork?.id]);

  const toggleSave = () => {
    if (!artwork) return;

    if (saved) {
      removeArtwork(artwork.id);
    } else {
      saveArtwork(artwork);
    }
    setSaved(!saved);
  };

  return { saved, toggleSave };
}
