import React, { useState } from 'react';
import { Home, Share, Download } from "./cards"

function App() {
  const [ page, setPage ] = useState(0)
  const toDownloadState = () => setPage(1)
  const toShareState = () => setPage(2)
  switch (page) {
    case 1:
      return <Share />
    case 2:
      return <Download />
    default:
        return <Home toShare={toShareState} toDownload={toDownloadState} />
  }
}

export default App;
