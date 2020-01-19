import React from 'react';
import {Link} from 'react-router-dom';

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Styles
import style from './CarouselLinks.module.scss';

const CarouselLinks = ({carousel}) => {
  return (
    <div className={style.food}>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        {carousel.map(({id, name, pageUrl, imgUrl}) => {
          return(
            <Link
              to={pageUrl}
              className={style.foodLink}
              title={name}
              key={id}
            >
              <img
                src={imgUrl}
                alt={`${name} icon`}
                className={style.foodImg}
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselLinks;
