import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../../Data/Image/Abul Khair H 29 Jul 2021.png'
import img2 from '../../Data/Image/ACI Offer H1 11 Jul 2021.png'
import img3 from '../../Data/Image/Face mask H 9 Jan 2022.jpg'
import img4 from '../../Data/Image/Lifestyle H1 25 May 2021.jpg'
import img5 from '../../Data/Image/Mr White H 15 Dec 2021.jpg'
import img6 from '../../Data/Image/PLB H 24 Aug 2021.jpg'
import img7 from '../../Data/Image/RB H1 21 Dec 2021.jpg'
import img8 from '../../Data/Image/Rok H1 4 Jan 2022.jpg'
import img9 from '../../Data/Image/Shwapno Queries H 5 Oct 2021.jpg'
import img10 from '../../Data/Image/SHWAPNO-1025x340.jpg'

const Carusels = () => {
  const navigate = useNavigate()
  return (
    <div className="my-4">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            onClick={() => navigate('/allProduct')}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            onClick={() => navigate('/allProduct')}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
            onClick={() => navigate('/allProduct')}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img7}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img8}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img9}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img10}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            onClick={() => navigate('/allProduct')}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>
      <div>
        <marquee className="text-white bg-danger" behavior="scroll" direction="left" onmouseout="this.start();" onmouseover="this.stop();">
          * All prices are approximate. Products will be delivered at current store/body price &amp; availability. For any changes,
          you will get a call from 16469 before delivery. Please place your complaints (if any) within 24hrs of receiving your delivery.
        </marquee>
      </div>
    </div>
  );
};


export default Carusels;
