// This will be the main page of the hospital dashboard.
function TicketScanner() {
  return (
    <>
      <div className="side-panel">
        <div className="side-panel-topGroup">
          <ul>
            <li>Financial</li>
            <li>Data</li>

            <li>Patients</li>

          </ul>
        </div>
        <div className="side-panel-bottomGroup">
             <ul>
            <li>FAQS</li>
            <li>Contact</li>

            <li>Logout</li>

          </ul>
        </div>
      </div>

      <div className="leftBox"></div>
      <div className="rightBox"></div>
    </>
  );
}

export default TicketScanner;
