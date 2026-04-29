import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { saveTicket } from "../apis/ticketApi";

interface GenerateTicketProps {
  fullname: string;
}

function GenerateTicket({ fullname = "Jack Doe" }: GenerateTicketProps) {
  const { state } = useLocation();
  const name = state?.fullname || fullname;
  const age = state?.age || "";
  const treatment = state?.treatment || "";
  const ticketId = uuidv4();
  const date = new Date().toISOString();
  useEffect(() => {
    saveTicket(ticketId, name, age, treatment, date)
      .then(() => console.log("Success"))
      .catch((err) => console.error(err));
  });

  // rest of your code, replace fullname with name

  return (
    <>
      <div className="ticketContainer">
        <div className="ticket">
          <h1 className="ticketHeader">Ticket Generated Successfully</h1>
          <p>Show this ticket to the receptionist</p>
          <div className="ticketDetails">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Treatment:</strong> {treatment}
            </p>
            <p>
              <strong>Date:</strong> {new Date().toISOString()}
            </p>
            <p>
              <strong>Ticket ID:</strong> {uuidv4()}
            </p>
          </div>

          <div className="qrCode">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticketId}&bgcolor=#edf0eee&color=ffffff&format=png&qzone=1`}
              alt="QR Code"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default GenerateTicket;
