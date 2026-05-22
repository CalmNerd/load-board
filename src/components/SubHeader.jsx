import ad from '../assets/ad1.png';
import { Link } from 'react-router-dom';
import fuelcard from '../assets/fuelcard.png';
import { Carousel, Image, Container } from 'react-bootstrap';

export const SubHeader = () => {
    return (
        <Container fluid className='text-center my-4'>
        <Carousel>
            <Carousel.Item>
                <Link to='https://example.com/' target="_blank" rel="noopener noreferrer">
                    <Image src={ad} alt="gsf ad" className='img-fluid radius-10' />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='https://example.com/' target="_blank" rel="noopener noreferrer">
                    <Image src={fuelcard} alt="fuel card ad" className='img-fluid radius-10' />
                </Link>
            </Carousel.Item>
        </Carousel>
    </Container>
    );
};