import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "./stylesComponents.module.scss"
import {MOCK_DATA} from "../mock/mock";

function CarouselComponent() {

    const mockDataArrayImages = [...MOCK_DATA.arrayImages]

    return (
        <div className={styles.carousel}>
            <CarouselProvider
                naturalSlideWidth="100"
                naturalSlideHeight="124"
                totalSlides={mockDataArrayImages?.length}

            >
                <Slider>
                    {mockDataArrayImages.map((el, idx) => {
                        return (
                            <Slide key={idx} index={idx}>
                                <Image src={el.src} />
                            </Slide>
                        )
                    })}

                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

        </div>
    )
}


export default CarouselComponent;