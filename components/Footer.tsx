import Image from 'next/image';
import Link from 'next/link';
import Logo from "../assets/Logo.svg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className=" flex items-center text-gray-200">
            <Link href="/">
              <button>
                <Image src={Logo} alt="Veda's Creation" className="w-16 h-auto mb-4" />
              </button>
            </Link>
            <p className="text-lg font-bold">Veda&apos;s Creation</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="text-md flex flex-col gap-5">
              <li>
                <Link href="/faq">
                  <button>FAQ</button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button>Contact Us</button>
                </Link>
              </li>
              <li>
                <Link href="/shipping">
                  <button>Shipping Information</button>
                </Link>
              </li>
              {/* Add more customer service links as needed */}
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-md  flex flex-col gap-5">
              <li>
                <Link href="/category/solapur-chadar">
                  <button>Solapur Chadar</button>
                </Link>
              </li>
              <li>
                <Link href="/category/solapur-satranji">
                  <button>Solapur Satranji</button>
                </Link>
              </li>
              <li>
                <Link href="/category/galicha">
                  <button>Galicha</button>
                </Link>
              </li>
              <li>
                <Link href="/category/turkish-towel">
                  <button>Turkish Towel</button>
                </Link>
              </li>
              {/* Add more category links as needed */}
            </ul>
          </div>
          <div className="text-white flex flex-col gap-8 items-center">

            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="text-sm flex space-x-4 gap-5">
              <li>
                <Link href="https://facebook.com/vedascreation">
                  <button className='text-4xl text-sky-800'>
                    <FaFacebook/>
                  </button>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/vedascreation">
                  <button className='text-4xl text-sky-400'>
                    <FaTwitter />
                  </button>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/vedascreation">
                  <button className='text-4xl'>
                    <FaInstagram />
                  </button>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/vedascreation">
                  <button className='text-4xl text-green-500 bg-white border-white rounded-lg'>
                    <IoLogoWhatsapp />
                  </button>
                </Link>
              </li>
              {/* Add more social media icons and links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4 text-bold">
        <p>&copy; {new Date().getFullYear()} Veda&apos;s Creation. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
