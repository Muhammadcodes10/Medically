// This will be the main page of the hospital dashboard.
import { useState } from "react";
import QRScanner from "./qrScanner";
import { lookupTicket } from "../Api/lookupTicketApi";
function TicketScanner() {
  const [scannedId, setScannedId] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [patientData, setPatientData] = useState("");
  const [scanStatus, setScanStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  async function handleScan(ticketId: string) {
    setScannedId(ticketId);
    try {
      const result = await lookupTicket(ticketId);
      setPatientData(result);
      setScanStatus("success");
    } catch (err) {
      setScanStatus("error");
    }
    setShowScanner(false);
  }
  console.log("Scanned ticket ID:", scannedId);
  console.log("Patient data:", patientData);

  return (
    <>
      <div className="container-homePage">
        <div className="sidepanel-container">
          <div></div>
          <div className="side-panel">
            <div className="side-panel-topGroup">
              <div>
                <i className="material-symbols-rounded">qr_code_scanner</i>
              </div>
              <div>
                <i className="material-symbols-rounded">dashboard</i>
              </div>
              <div>
                <i className="material-symbols-rounded">payments</i>
              </div>
              <div>
                <i className="material-symbols-rounded">group</i>
              </div>
            </div>
            <div className="side-panel-bottomGroup">
              <div>
                <i className="material-symbols-rounded">Settings</i>
              </div>
              <div>
                <i className="material-symbols-rounded">Logout</i>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-panel">
          <div className="ticketcontainer">
            <h1 className="ticket-header">
              <i className="material-symbols-rounded">qr_code_scanner</i>
              Ticket scanner
              <p className="ticket-subtext">
                {" "}
                Scan tickets to verify patient booking
              </p>
            </h1>
            <button onClick={() => setShowScanner(true)}>
              <div>
                <i className="material-symbols-rounded">replay</i>
              </div>{" "}
              Scan next ticket
            </button>
          </div>
          <div className="main-panel">
            <div className="leftBox">
              <div className="leftBox-heading">
                <h2> Camera Feed </h2>
                <p className="leftBox-heading-subtext">
                  {" "}
                  Position the QR code within the frame
                </p>
              </div>
              <div className="leftBox-prompt">
                <h3>Scanner paused</h3>
                <div className="leftBox-scannerContainer">
                  {showScanner ? (
                    <QRScanner onScanSuccess={handleScan} />
                  ) : (
                    <>
                      <i className="material-symbols-rounded">
                        qr_code_scanner
                      </i>
                      <a>Upload Ticket Image</a>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="rightBox">
              <div className="rightBox-heading">
                <h2>Verification result </h2>
              </div>
              <div className="rightBox-prompt">
                {scanStatus === "idle" && <p>No ticket scanned yet</p>}

                {scanStatus === "success" && (
                  <div className="scan-result-wrapper">
                  <div className="scan-result success">
                    <svg className="checkmark" viewBox="0 0 52 52">
                      <circle
                        className="checkmark-circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark-check"
                        fill="none"
                        d="M14 27l7 7 16-16"
                      />
                    </svg>
                    <h3>Ticket Verified!</h3>
                    <p>Patient successfully validated.</p>
                  </div>
                  </div>
                )}

                {scanStatus === "error" && (
                  <div className="scan-result error">
                    <svg className="crossmark" viewBox="0 0 52 52">
                      <circle
                        className="crossmark-circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="crossmark-cross"
                        fill="none"
                        d="M16 16 36 36 M36 16 16 36"
                      />
                    </svg>
                    <h3>Ticket Invalid!</h3>
                    <p>No matching ticket found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketScanner;
