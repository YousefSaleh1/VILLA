import "./Card.css";

const Card = ({
  image,
  category,
  price,
  title,
  bedrooms,
  bathrooms,
  area,
  floor,
  parcking,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="item">
        <a href="#">
          <img src={image} alt="" />
        </a>
        <span className="category">{category}</span>
        <h6>{price}</h6>
        <h4>
          <a href="#">{title}</a>
        </h4>
        <ul>
          <li>
            Bedrooms: 
            <span> {bedrooms}</span>
          </li>
          <li>
            Bathrooms: 
            <span> {bathrooms}</span>
          </li>
          <li>
            Area: 
            <span> {area}</span>
          </li>
          <li>
            Floor: 
            <span> {floor}</span>
          </li>
          <li>
            Parking: 
            <span> {parcking}</span>
          </li>
        </ul>
        <div className="main-button">
          <a href="#">Schedule a visit</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
