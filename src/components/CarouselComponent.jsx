import React, {useCallback, useEffect} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "./stylesComponents.module.scss"
import {MOCK_DATA} from "../mock/mock";
import {useDispatch, useSelector} from "react-redux";
import { addUsers } from "../store/slice/userSlice";




function CarouselComponent() {

    const dispatch = useDispatch()

    async function usersGetFromApi (){
        return await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(res =>  dispatch(addUsers({
                arrayData: res
            })))
    }

    useEffect(() => {
        usersGetFromApi();
    },[])

    let arrayImages = [];
        arrayImages = useSelector(state => state?.user?.url.arrayData?.slice(0, 10));

    const mockDataArrayImages = [...MOCK_DATA.arrayImages]

    return (
        <div className={styles.carousel}>
            <CarouselProvider
                naturalSlideWidth="100"
                naturalSlideHeight="124"
                totalSlides={arrayImages?.length}

            >
                <Slider>
                    {arrayImages?.map((el, idx) => {
                        return (
                            <Slide key={idx} index={idx}>
                                <Image src={el.url} />
                            </Slide>
                        )
                    })}

                </Slider>
                <ButtonBack>Back</ButtonBack>
                <div style={{right: "45px"}}>

                    <ButtonNext>Next</ButtonNext>
                </div>


            </CarouselProvider>

        </div>
    )
}


export default CarouselComponent;