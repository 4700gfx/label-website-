import React from 'react';
import service1Img from './assets/images/cassette.jpg';
import service2Img from './assets/images/studio.jpg';
import service3Img from './assets/images/recording.jpg';
import service4Img from './assets/images/record-collection.jpg';

const MissionStatement = () => {
  return (
    <section className="mission-services-container">
      <div className="mission-statement">
        <h1 className='center'>Mission Statement</h1>
        <p>
          4700 Enteprisess is a Multi-Media Company focused on developing and distributing genre bending and envelope pushing content. We specialize in Music Distribution, Publishing and Promotion. Our Goal is to provide an ecosystem of quality music catalogs, content and products that continue to shape the current landscape of music. We work with artists, organizations, and labels of different types and create different initiatives and products that will continue to disrupt but grow the current music industry.
        </p>

        <br /> 

        <p>
          Our Mission is to provide services, product and music that will innovate music. Through our innovation, adaptability, and ingenuity we will create the next major record label of the future. We will continue to work and create value through our releases, products and services and let everything else follow from there.
        </p>


      </div>

      <h1>What Do We Offer</h1>
      
      
      <div className="service-container">

        <div className='service-card'>
          <img src={service1Img} alt="Service 1" />
          <div className="service-info">
            <h2>Music Distribution & Promotion</h2>
            <p>
              We offer Music Distribution Services to signees and other colloborators within the label. 
              Our team supports releases through creating content and our 90 Day promotion strategy.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className='service-card'>
          <img src={service2Img} alt="Service 2" />
          <div className="service-info">
            <h2>Catalog Management</h2>
            <p>
              Our team helps to manage catalogs that are within the 4700 Network through constant promotion.
              We also work to have our catalog placed through different sync opportunities and more.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className='service-card'>
          <img src={service3Img} alt="Service 3" />
          <div className="service-info">
            <h2>Audio Production</h2>
            <p>
              Our team of Producers are able to provide a variety of different sounds and genres to meet your needs and budgets. Our Production services are extented to artists, labels, and other businesses that may need Audio. 
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className='service-card'>
          <img src={service4Img} alt="Service 4" />
          <div className="service-info">
            <h2>Mixing and Mastering</h2>
            <p>
              Our Engineers offer a variety of Mix and Mastering services to signees and others that are looking to get their next record mixed and mastered. Our qualitty controls allows for less revisions and more time for promotion. 
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;