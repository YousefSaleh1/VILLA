import "./BestDeal.css";
import Deal1 from "../../assets/deal-01.jpg";
import Deal2 from "../../assets/deal-02.jpg";
import Deal3 from "../../assets/deal-03.jpg";
import TabPane from "../TabPane/TabPane";

const BestDeal = () => {
  const infoTabOne = [
    {
      title: "Total Flat Space ",
      description: "185 m2",
    },
    {
      title: "Floor number ",
      description: "26th",
    },
    {
      title: "Number of rooms ",
      description: "4",
    },
    {
      title: "Parking Available ",
      description: "Yes",
    },
    {
      title: "Payment Process ",
      description: "Bank",
    },
  ];
  const infoTabTwo = [
    {
      title: "Total Flat Space ",
      description: "250 m2",
    },
    {
      title: "Floor number ",
      description: "26th",
    },
    {
      title: "Number of rooms ",
      description: "5",
    },
    {
      title: "Parking Available ",
      description: "Yes",
    },
    {
      title: "Payment Process ",
      description: "Bank",
    },
  ];
  const infoTabThree = [
    {
      title: "Total Flat Space ",
      description: "320 m2",
    },
    {
      title: "Floor number ",
      description: "34th",
    },
    {
      title: "Number of rooms ",
      description: "6",
    },
    {
      title: "Parking Available ",
      description: "Yes",
    },
    {
      title: "Payment Process ",
      description: "Bank",
    },
  ];
  return (
    <div className="section best-deal">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h6>| Best Deal</h6>
              <h2>Find Your Best Deal Right Now!</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs-content">
              <div className="row">
                <div className="nav-wrapper ">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="appartment-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#appartment"
                        type="button"
                        role="tab"
                        aria-controls="appartment"
                        aria-selected="true"
                      >
                        Appartment
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="villa-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#villa"
                        type="button"
                        role="tab"
                        aria-controls="villa"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Villa House
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="penthouse-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#penthouse"
                        type="button"
                        role="tab"
                        aria-controls="penthouse"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Penthouse
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <TabPane
                    className="tab-pane fade active show ys-tab-pane"
                    id="appartment"
                    ariaLabelledby="appartment-tab"
                    image={Deal1}
                    infoTab={infoTabOne}
                    title="Extra Info About Property"
                    desc1="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, do eiusmod tempor pack incididunt ut labore et
                          dolore magna aliqua quised ipsum suspendisse."
                    desc2="When you need free CSS templates, you can simply type
                          TemplateMo in any search engine website. In addition,
                          you can type TemplateMo Portfolio, TemplateMo One Page
                          Layouts, etc."
                  />
                  <TabPane
                    className="tab-pane fade ys-tab-pane"
                    id="villa"
                    ariaLabelledby="villa-tab"
                    image={Deal2}
                    infoTab={infoTabTwo}
                    title="Detail Info About Villa"
                    desc1="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, do eiusmod tempor pack incididunt ut labore et
                    dolore magna aliqua quised ipsum suspendisse."
                    desc2="Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
                  />
                  <TabPane
                    className="tab-pane fade ys-tab-pane"
                    id="penthouse"
                    ariaLabelledby="penthouse-tab"
                    image={Deal3}
                    infoTab={infoTabThree}
                    title="Extra Info About Penthouse"
                    desc1="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, do eiusmod tempor pack incididunt ut labore et
                    dolore magna aliqua quised ipsum suspendisse."
                    desc2="Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
