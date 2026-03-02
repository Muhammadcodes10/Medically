function FAQs() {
  return (
    <>
      <h1> FAQs:</h1>
      <details>
        <summary>
          <strong className="faqText">
            {" "}
            Can I pay for my treatment on Medico?
          </strong>
        </summary>
        <div className="faqAnswer"> Yes you can.</div>
      </details>
      <br></br>
      <details>
        <summary>
          <strong className="faqText">
            Does Medico offer an Internal wallet?
          </strong>
        </summary>
        <div className="faqAnswer">
          {" "}
          At the moment we do not provide this but we are working towards its
          integration.
        </div>
      </details>
      <br></br>
      <details>
        <summary>
          <strong className="faqText">Do I need to sign up?</strong>
        </summary>
        <div className="faqAnswer">
          {" "}
          No. At Medico, we are focused on providing healthcare services to
          everyone, instantly.
        </div>
      </details>
    </>
  );
}

export default FAQs;