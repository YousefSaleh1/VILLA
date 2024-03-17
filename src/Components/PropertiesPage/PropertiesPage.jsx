import Hero from '../Hero/Hero';
import Properties from '../Properties/Properties';
import './PropertiesPage.css';
import image1 from "../../assets/property-01.jpg";
import image2 from "../../assets/property-02.jpg";
import image3 from "../../assets/property-03.jpg";
import image4 from "../../assets/property-04.jpg";
import image5 from "../../assets/property-05.jpg";
import image6 from "../../assets/property-06.jpg";

const PropertiesPage = () => {

  const items = [
    {
      image: image1,
      category: "Luxury Villa",
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
      bedrooms: "8",
      bathrooms: "8",
      area: "545m2",
      floor: "3",
      parcking: "6 spots",
    },
    {
      image: image2,
      category: "Luxury Villa",
      price: "$1.180.000",
      title: "54 Mid Street Florida, OR 27001",
      bedrooms: "6",
      bathrooms: "5",
      area: "450m2",
      floor: "3",
      parcking: "8 spots",
    },
    {
      image: image3,
      category: "Luxury Villa",
      price: "$1.460.000",
      title: "26 Old Street Miami, OR 38540",
      bedrooms: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parcking: "10 spots",
    },
    {
      image: image4,
      category: "Apartment",
      price: "$584.500",
      title: "12 New Street Miami, OR 12650",
      bedrooms: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parcking: "2 cars",
    },
    {
      image: image5,
      category: "Penthouse",
      price: "$925.600",
      title: "34 Beach Street Miami, OR 42680",
      bedrooms: "4",
      bathrooms: "4",
      area: "180m2",
      floor: "38th",
      parcking: "2 cars",
    },
    {
      image: image6,
      category: "Modern Condo",
      price: "$450.000",
      title: "22 New Street Portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parcking: "165m2",
    },
  ];

  return (
    <>
    <Hero sectionName='Properties'/>
    <Properties items={items} visibilty={true} />
    </>
  )
}

export default PropertiesPage