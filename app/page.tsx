import ProductsGrid from '@/components/ProductGrid';
import Hero from '@/components/Hero';


interface Items {
  id: number;
  name: string;
  price:Number;
  rating:number;
  description: string;
  image: string;
}


const products: Items[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 49.99,
    rating:4.5,
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Vestibulum a magna ac ligula bibendum tincidunt euismod ',
    price: 29.99,
    rating:5,
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Praesent feugiat metus non congue venenatis.',
    price: 39.99,
    rating:3,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Ut scelerisque, purus vitae venenatis tincidunt, elit ',
    price: 59.99,
    rating:4,
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'In at tortor egestas, vulputate quam nec, euismod nisl.',
    price: 19.99,
    rating:5,
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Home() {
  return (
    <div className={`text-3xl flex items-center  flex-col`} >
      <Hero/>
      {/* <Hero/> */}
      <div className='m-5 mb-10'>
      <ProductsGrid items={products}/>
      </div>
    </div>
  )
}
