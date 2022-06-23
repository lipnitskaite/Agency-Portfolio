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
        <div className="cards">
          <Card />
        </div>
      </section>
    </main>
  );
}

export default Main;