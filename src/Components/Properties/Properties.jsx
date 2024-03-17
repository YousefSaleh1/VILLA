import "./Properties.css";
import Card from "../Card/Card";
const Properties = ({visibilty, items}) => {
  

  return (
    <div className="properties section">
      <div className="container">
        <div className={(visibilty) ? 'row hidden': 'row'  }  >
          <div className="col-lg-4 offset-lg-4">
            <div className="section-heading text-center">
              <h6>| Properties</h6>
              <h2>We Provide The Best Property You Like</h2>
            </div>
          </div>
        </div>
        <ul className={(visibilty)? 'properties-filter' : 'properties-filter hidden'}>
          <li>
            <a className="is_active" href="#!" data-filter="*">Show All</a>
          </li>
          <li>
            <a href="#!" data-filter=".adv" className="">Apartment</a>
          </li>
          <li>
            <a href="#!" data-filter=".str" className="">Villa House</a>
          </li>
          <li>
            <a href="#!" data-filter=".rac" >Penthouse</a>
          </li>
        </ul>
        <div className="row">
          {items.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                category={item.category}
                price={item.price}
                title={item.title}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                area={item.area}
                floor={item.floor}
                parcking={item.parcking}
              />
            );
          })}
        </div>
        <div className={(visibilty)? 'row' : 'row hidden'}>
          <div className="col-lg-12">
            <ul className="pagination">
              <li><a href="#">1</a></li>
              <li><a className="is_active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&gt;&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Properties;
