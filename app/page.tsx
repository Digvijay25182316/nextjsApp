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
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Vestibulum a magna ac ligula bibendum tincidunt euismod ',
    price: 29.99,
    rating:5,
    image: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg',
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
