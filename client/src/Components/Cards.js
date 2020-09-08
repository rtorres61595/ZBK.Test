import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the weather</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Information of Area'
              label='Clear' // this can be what we set to true or false
              path='/skate-map'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Information of Area'
              label='Clear' // this can be what we set to true or false
              path='/skate-map'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Information of Area'
              label='Clear' // this can be what we set to true or false
              path='/skate-map'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Information of Area'
              label='Clear' // this can be what we set to true or false
              path='/spots'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Information of Area'
              label='Clear' // this can be what we set to true or false
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
