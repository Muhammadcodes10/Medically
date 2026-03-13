import "@react-google-maps/api";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  useMapsLibrary,
  // Pin,
  // InfoWindow
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import { checkTreatment } from "../apis/api";
interface mapsProps {
  treatment: string;
}

// Done with the map design for now, back to the frontend interface itself/ [12/02/26].
function Intro({ treatment }: mapsProps) {
  const [Orderselected, setOrderselected] = useState(false);
  const [paymentClicked, setPaymentClicked] = useState(false);
  const [selectedTreatmentDay, setSelectedTreatmentDay] = useState("immediate");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [hospitalName, setHospitalName] = useState();
  const { location, loading, error } = useGeolocation();
  const position = { lat: location.lat, lng: location.lng };
  function Directions() {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] =
      useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] =
      useState<google.maps.DirectionsRenderer>();

    useEffect(() => {
      if (!routesLibrary || !map) return;

      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    useEffect(() => {
      if (!directionsService || !directionsRenderer) return;
      if (hospitalName !== undefined)
        directionsService
          .route({
            origin: { lat: 9.06, lng: 7.4899 },
            destination: { lat: hospitalName[1], lng: hospitalName[2] },
            travelMode: google.maps.TravelMode.DRIVING,
          })
          .then((response) => directionsRenderer.setDirections(response));
    }, [directionsService, directionsRenderer]);

    return null;
  }
  useEffect(() => {
    async function handleCheck() {
      try {
        const result = await checkTreatment(position, treatment);
        setHospitalName(result.nearestHospital);
      } catch (err) {
        console.log("Handlecheck has an error");
        console.error(err);
      }
    }

    handleCheck();
  }, []);

  if (loading) return <div>Getting your location...</div>;
  if (error) return <div>{error}</div>;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          defaultZoom={4}
          defaultCenter={{ lat: 9.06, lng: 7.4899 }}
          fullscreenControl={false}
          streetViewControl={false}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <Directions />
          <AdvancedMarker
            position={{ lat: location.lat, lng: location.lng }}
          ></AdvancedMarker>
          <AdvancedMarker
            position={{ lat: 9.06, lng: 7.4899 }}
          ></AdvancedMarker>
        </Map>

        {!Orderselected && (
          <div
            style={{
              position: "relative",
              width: "70%",
              background: "white",
              opacity: 0.94,
              padding: "20px",
              zIndex: 2,
              marginTop: "-17%",
              marginLeft: "10%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
            }}
          >
            {hospitalName === null && (
              <h1>
                <strong style={{ color: "green" }}>{treatment}</strong>{" "}
                treatment is not available anywhere at the moment.
              </h1>
            )}
            {hospitalName !== null && hospitalName !== undefined && (
              <h1>
                <strong style={{ color: "green" }}>{treatment}</strong>{" "}
                treatment is available at {hospitalName[0]}
              </h1>
            )}
            <h3>
              Background: Belam Medicals is a medical center located in Abuja
              with a rating of 4.5/5
            </h3>

            <button
              style={{
                width: "fit-content",
                padding: "10px 12px",
                background: "black",
                color: "white",
                fontFamily: "Raleway",
                border: "none",
                textAlign: "left",
                borderRadius: "8px",
              }}
              onClick={() => {
                setOrderselected(true);
              }}
            >
              Complete payment
            </button>
          </div>
        )}
        {Orderselected && paymentClicked === false && (
          <div
            style={{
              position: "relative",
              width: "70%",
              background: "white",
              opacity: 0.94,
              padding: "20px",
              zIndex: 2,
              marginTop: "-27%",
              marginLeft: "10%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h1>
              <strong style={{ color: "green" }}>{treatment}</strong> treatment
              costs #40,000 at Belam Medicals
            </h1>
            <label> Full name: </label>
            <input type="text" placeholder="Enter your full name" />

            <div>
              <h3>When do you want your treatment?</h3>

              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  className="radioStyles"
                  type="radio"
                  name="payment"
                  onChange={() => setSelectedTreatmentDay("Immediate")}
                />
                Immediately
              </label>

              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  className="radioStyles"
                  type="radio"
                  name="payment"
                  onChange={() => setSelectedTreatmentDay("Later date")}
                />
                On a later date
                {selectedTreatmentDay === "Later date" && <input type="date" />}
              </label>
            </div>

            <button
              style={{
                width: "fit-content",
                marginTop: "1%",
                padding: "10px 12px",
                background: "black",
                color: "white",
                fontFamily: "Raleway",
                border: "none",
                textAlign: "left",
                borderRadius: "8px",
              }}
              onClick={() => {
                setPaymentClicked(true);
              }}
            >
              Pay
            </button>
          </div>
        )}
        {Orderselected && paymentClicked && (
          <div
            style={{
              background: "white",
              opacity: 0.94,
              width: "50%",
              padding: "20px",
              zIndex: 2,
              marginTop: "-33%",
              marginLeft: "20%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h3>How do you want to pay?</h3>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <input
                className="radioStyles"
                type="radio"
                name="typeofPayment"
                onChange={() => setPaymentMethod("Cash")}
              />
              Pay cash at the counter
            </label>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <input
                className="radioStyles"
                type="radio"
                name="typeofPayment"
                onChange={() => setPaymentMethod("Card")}
              />
              Pay with card now [10% discount]
              {paymentMethod === "Cash" && (
                <div>
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "black",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      marginTop: "15px",
                      cursor: "pointer",
                      fontFamily: "Raleway",
                    }}
                  >
                    Finalize order
                  </button>
                </div>
              )}
              {paymentMethod === "Card" && (
                <div>
                  <h3>Payment Details</h3>

                  {/* Card Number */}
                  <input
                    style={{ marginBottom: "20px" }}
                    type="text"
                    placeholder="Card Number"
                    maxLength={19}
                  />

                  {/* Cardholder Name */}
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    style={{ marginBottom: "20px" }}
                  />

                  {/* Expiry + CVV row */}
                  <div style={{ display: "flex", gap: "20px" }}>
                    <input type="text" placeholder="MM/YY" maxLength={5} />

                    <input type="password" placeholder="CVV" maxLength={4} />
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "black",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      marginTop: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </label>
          </div>
        )}
      </div>
    </APIProvider>
  );
}

export default Intro;
