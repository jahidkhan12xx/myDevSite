import { FaDownload } from "react-icons/fa";

const Header = () => {

  
  return <div className='py-8' >
    <div className=' container mx-auto'>
      <div className=' flex justify-between items-center'>
        <h2 className='  md:text-4xl text-2xl font-bold'>Zahid Hassan K.</h2>
        <a href='/resumee.pdf' download><button className=' btn btn-sm flex justify-center items-center gap-x-3'> <FaDownload/> <span>Resume</span></button></a>
      </div>

    </div>
  </div>;
};

export default Header;
