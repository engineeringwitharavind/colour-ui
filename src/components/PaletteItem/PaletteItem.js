import React from 'react';
import { usePalette } from 'react-palette';

function PaletteItem({ imageUrl, onDominantColor }) {
  const { data, loading, error } = usePalette(imageUrl);
  const [processed, setProcessed] = React.useState(false); // Track whether the URL has been processed

  React.useEffect(() => {
    if (!processed && !loading && !error) {
      const dominantColor = data.lightVibrant;
      if (dominantColor) {
        onDominantColor(dominantColor);
      }
      setProcessed(true); // Mark the URL as processed
    }
  }, [data, loading, error, onDominantColor, imageUrl, processed]);

  if (loading || error) {
    return null;
  }

  return null;
}

export default PaletteItem;
