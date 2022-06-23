import React from 'react';
import Card from '../components/Card';

function Main() {
  return (
    <main className='content'>
      <section className='lead'>
        <h1 className='lead__title'>Portfolio</h1>
        <p className='lead__paragraph'>Agency provides a full service range including technical skills, design, business understanding.</p>
      </section>
      <section className='main'>
        <select className='cards-filter'>
          <option className='cards-filter__item'>Show All</option>
          <option className='cards-filter__item'>Design</option>
          <option className='cards-filter__item'>Branding</option>
          <option className='cards-filter__item'>Illustration</option>
          <option className='cards-filter__item'>Motion</option>
        </select>
        <div className="cards">
          <Card />
        </div>
      </section>
    </main>
  );
}

export default Main;