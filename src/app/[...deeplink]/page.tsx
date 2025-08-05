'use client';

import { useEffect } from 'react';

export default function CatchAllDeeplinkPage() {
  useEffect(() => {
    window.location.href = "/AppDownloadPage.html";
  }, []);

  return null;
}
