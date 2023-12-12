import React from 'react';
import Logo from "../assets/logo.png"

const Header = () => {

  const url = "https://drive.google.com/file/d/1PcIy6E7KemgUS7Ujso11ZQS53uY8WdGu/view?usp=sharing";
  const download = (url) =>{
    const aTag = document.createElement("a");
    aTag.href= url;
    aTag.setAttribute('download','Md. Zahid Hasan Khan - Web Developer')
    document.body.appendChild(aTag)
    aTag.click()
  }
  return <div className='py-8' >
    <div className=' container mx-auto'>
      <div className=' flex justify-between items-center'>
        <h2 className='  md:text-4xl text-2xl font-bold'>Zahid Hassan K.</h2>
        <button onClick={()=>{download(url)}} className=' btn btn-sm'>Download Resume</button>
      </div>

    </div>
  </div>;
};

export default Header;
