import React from 'react'
import Image from 'next/image';

const carsCollection = [
  {
    id: 1,
    name: "Toyota Corolla 2024",
    desc: "Fuel Efficient , Sleek Design , Reliable Performance",
    price: "Rs. 7,549,000",
    image: "/corolla.jpeg",
  },
  {
    id: 2,
    name: "Honda Civic 2023",
    desc: "Stylish & packed with Advanced Features",
    price: "Rs. 9,899,000",
    image: "/civic.jpeg",
  },
  {
    id: 3,
    name: "Toyota Fortuner 2022",
    desc: "Robust SUV with powerful performance and spacious interior",
    price: "Rs. 17,900,000",
    image: "/fortuner.jpeg",
  },
];

const Sale = () => {
  return (
    <section  className='py-10 bg-black'>
    <div data-aos="zoom-out"  id="sale" className="container pt-32">
      <h2 className="text-4xl text-red-600 font-bold font-sans underline">
        Our Luxury Lineup!!
      </h2>
    </div>
    <div data-aos="flip-up" className='pt-5 container mx-auto grid gap-8 grid-cols-2 lg:grid-cols-3 px-4'>
      {carsCollection.map((carsCollection) => (
        <div key={carsCollection.id} className='bg-slate-950 rounded-lg shadow-lg overflow-hidden'>
          <Image
          src={carsCollection.image}
          alt={carsCollection.name}
          height={400}
          width={250}
          className='w-full h-48 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-2xl text-red-600 underline font-bold'>{carsCollection.name}</h2>
            <p className='text-gray-400 mt-2'>{carsCollection.desc}</p>
            <p className='font-bold mt-4'>{carsCollection.price}</p>
            <button className='mt-4 w-full bg-red-600 text-black font-bold py-2 rounded-lg hover:bg-red-400'>
              Contact For Details
            </button>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Sale
