import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface QRScannerProps {
  onScanSuccess: (ticketId: string) => void;
}

function QRScanner({ onScanSuccess }: QRScannerProps) {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  function startScan() {
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" }, // use back camera
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        onScanSuccess(decodedText);
        stopScan();
      },
      undefined
    );

    setScanning(true);
  }

  function stopScan() {
    scannerRef.current?.stop().then(() => {
      scannerRef.current?.clear();
      setScanning(false);
    });
  }

  // cleanup on unmount
  useEffect(() => {
    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, []);

  return (
    <div>
      <div id="qr-reader" style={{ width: "300px" }} />
      {!scanning ? (
        <button onClick={startScan}>Scan QR Code</button>
      ) : (
        <button onClick={stopScan}>Stop Scanning</button>
      )}
    </div>
  );
}

export default QRScanner;