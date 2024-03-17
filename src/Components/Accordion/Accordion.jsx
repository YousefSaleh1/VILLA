import "./Accordion.css";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2>
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Best useful links ?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Get
            <strong>the best villa</strong> website template in HTML CSS and
            Bootstrap for your business. TemplateMo provides you the best
            <a href="https://www.google.com/search?q=best+free+css+templates">
              free CSS templates
            </a>
            in the world. Please tell your friends about it.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2>
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            How does this work ?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit,
            sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur{" "}
            <code> adipiscing </code> elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2>
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Why is Villa Agency the best ?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit,
            sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur{" "}
            <code> adipiscing </code> elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
