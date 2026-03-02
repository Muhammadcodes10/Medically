function About() {
  return (
    <>
      <h1>About us</h1>
      <h3>Background and purpose</h3>
      <p className="aboutText">
        Medico is a healthcare technology service built in Q1, 2026 in Abuja.
        <br />
        <br />
        At Medico, our purpose is to bridge the gap that exists between
        Healthcare and Technology. The Healthcare sector in Nigeria remains one
        of the most neglected around the world, and we are here to fix that.
        <br />
        <br />
        As a healthTech service, we believed everyone deserves good healthcare.
        Our partnerships with regional healthcare providers and our creative
        pricing models allow us to increase access to treatments where they're
        needed most.
        <br />
        <br />
        Medico was developed to answer three important questions:
        <strong>
          {" "}
          Which hospital? Where is it? How much does it cost?.{" "}
        </strong>{" "}
        Medico was built with the people in mind. Our product was made to help
        people with limited resources access proper medical care from the start
        to finish.
        <br />
        <br />
        As a patient-oriented service, we aim to extend the healthcare umbrella
        to cover those at the edges, making healthcare accessible to all.
      </p>
      <h3> Our responsibilities </h3>
      <p className="aboutText">
        {" "}
        At Medico, we ensure full patient confidentiality. Patients' medical
        history are not stored on any of our databases.
        <br />
        <br />
        As providers of healthcare technology, we adopt an ethical code that
        prohibits the generation of revenue through selling of user data for
        targeted ads.
      </p>
    </>
  );
}

export default About;