import React from 'react';
import Logo from "../assets/logo.png"

const Header = () => {

  const url = "https://coffee-roch-3.tiiny.site/";
  const download = async (url) => {
    try {
      // Fetch the file from the server
      const response = await fetch(url);
      const blob = await response.blob();
  
      // Create a download link
      const downloadLink = window.URL.createObjectURL(blob);
  
      // Create an anchor tag and trigger a click to start the download
      const aTag = document.createElement('a');
      aTag.href = downloadLink;
      aTag.setAttribute('download', 'resume.pdf');
      document.body.appendChild(aTag);
      aTag.click();
  
      // Remove the anchor tag
      document.body.removeChild(aTag);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  return <div className='py-8' >
    <div className=' container mx-auto'>
      <div className=' flex justify-between items-center'>
        <h2 className='  md:text-4xl text-2xl font-bold'>Zahid Hassan K.</h2>
        <a href='/resumee.pdf' download><button onClick={()=>{download(url)}} className=' btn btn-sm'>Download Resume</button></a>
      </div>

    </div>
  </div>;
};

export default Header;
