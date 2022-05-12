
import React, { CSSProperties } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestimonialBox from './TestimonialBox';

const TestimonialSection = () => {
  
  return (
      <div className='bg-white py-10 px-4 mx-auto'>
        <h1 className='text-center  text-2xl md:text-4xl font-bold'style={{fontFamily:"Poppins"}}> Testimonials</h1>
        
        <Carousel  showThumbs={false} stopOnHover={true} 
        useKeyboardArrows={true} swipeable={true} centerMode={true} showStatus={false }
        autoPlay={true} selectedItem={0} showArrows={false} infiniteLoop={true} 
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
              return (
                  <li
                      style={{ ...indicatorStyles, background: '#7bc1a9' }}
                      
                  />
              );
          }
          return (
              <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
              />
          );
      }}
      >
          <div className='mx-5'>

<TestimonialBox/>
</div>
              <div className='mx-5'>

                <TestimonialBox/>
              </div>

              <div className='mx-5'>

<TestimonialBox/>
</div>

              </Carousel>
     
    </div>

  )
}

export default TestimonialSection


   

  const indicatorStyles: CSSProperties = {
      background: '#cfd3d2',
      width: 12,
      height: 12,
      display: 'inline-block',
      borderRadius:"5px",
      margin: '-15px 8px',
  }