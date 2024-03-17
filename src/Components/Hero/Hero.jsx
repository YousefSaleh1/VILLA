import './Hero.css'

const Hero = ({sectionName}) => {
  return (
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className='breadcrumb'>
              <a href="#">Home</a>
              / {sectionName}
            </span>
            <h3>{sectionName}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero