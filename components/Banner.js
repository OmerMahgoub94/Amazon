import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
<link rel="stylesheet" href="carousel.css" />

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 pointer-events-none " />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="http://links.papareact.com/gi1" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="http://links.papareact.com/6ff" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="http://links.papareact.com/7ma" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
