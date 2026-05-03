import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface QRScannerProps {
  onScanSuccess: (ticketId: string) => void;
}

function QRScanner({ onScanSuccess }: QRScannerProps) {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isProcessing = useRef(false);

  function startScan() {
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        if (isProcessing.current) return;
        isProcessing.current = true;
        onScanSuccess(decodedText);
      },
      undefined,
    );

    setScanning(true);
  }

  function stopScan() {
    scannerRef.current
      ?.stop()
      .then(() => {
        scannerRef.current?.clear();
        setScanning(false);
      })
      .catch(() => {});
  }

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .catch(() => {})
          .finally(() => {
            scannerRef.current?.clear();
          });
      }
    };
  }, []);

  return (
    <div className="qr-reader-container">
      <div id="qr-reader" />
      {!scanning ? (
        <button onClick={startScan}>Scan QR Code</button>
      ) : (
        <button onClick={stopScan}>Stop Scanning</button>
      )}
    </div>
  );
}

export default QRScanner;
