import React from 'react';
import Sofa1 from '../images/Sofa-Background.svg';

function Card() {
  const cards = [
    {
      name: 'Sofa',
      tag: 'Design',
      imageSrc: Sofa1,
      imageAlt: 'Background decorative image'
    }
  ];
  

  return (
    <article className='card page__card'>
      <img src={cards.imageSrc} alt={cards.imageAlt}></img>
      <button className='card__button'>Design</button>
      <h2 className='card__title'>Sofa</h2>
    </article>
  );
}

export default Card;
