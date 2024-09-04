import React, { useState } from 'react';
import './Gallery.css'; 
// import { BsFillGridFill } from "react-icons/bs";
// import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';



const Gallery = () => {
  const [images, setImages] = useState([
    'image1_url',
    'image2_url',
    'image3_url'
  ]);

  const addImage = () => {
    const newImageUrl = prompt("Enter the image URL:");
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  return (
    <>

      <div className="gallery-container">
        <div className='container'>
          {/* top gallery */}
          <div className='flex'>
            <div>
              {/* <AiOutlineQuestionCircle className='icon' /> */}
              <FontAwesomeIcon icon={faCircleQuestion} className='icon'/>
              </div>
            <div className='gallery-top'>
              <span>Gallery</span>
              <div className='galler-right'>
                <button className="add-image-btn" onClick={addImage}>+ Add Image</button>
                <div className='icon'>
                <FontAwesomeIcon icon={faCircleLeft} />
                </div>
                <div className='icon'>
                <FontAwesomeIcon icon={faCircleRight} />
                </div>
              </div>

            </div>
          </div>

          {/* gallery */}
          <div className='flex'>
            <div>
              {/* <BsFillGridFill className='icon' /> */}
              <FontAwesomeIcon icon={faBorderAll} className='icon'/>
            </div>
            <div className="gallery">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery Image ${index}`} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Gallery;
