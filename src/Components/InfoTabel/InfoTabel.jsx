import './InfoTabel.css'
import InfoIcon1 from "../../assets/info-icon-01.png";
import InfoIcon2 from "../../assets/info-icon-02.png";
import InfoIcon3 from "../../assets/info-icon-03.png";
import InfoIcon4 from "../../assets/info-icon-04.png";

const InfoTabel = () => {

  const infoTabel = [
    {
      image: InfoIcon1,
      title: "250 m2",
      descreption: "Total Flat Space",
    },
    {
      image: InfoIcon2,
      title: "Contract",
      descreption: "Contract Ready",
    },
    {
      image: InfoIcon3,
      title: "Payment",
      descreption: "Payment Process",
    },
    {
      image: InfoIcon4,
      title: "Safety",
      descreption: "24/7 Under Control",
    },
  ];

  return (
    <div className="info-table">
              <ul>
                {infoTabel.map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.image} alt="" />
                      <h4>
                        {item.title}
                        <br />
                        <span>{item.descreption}</span>
                      </h4>
                    </li>
                  );
                })}
              </ul>
            </div>
  )
}

export default InfoTabel