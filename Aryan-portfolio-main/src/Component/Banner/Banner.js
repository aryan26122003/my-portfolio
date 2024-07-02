import React from 'react'
import './Banner.scss'

import TextTransition, { presets } from 'react-text-transition';
// import { TypeAnimation } from 'react-type-animation';
const TEXTS = [''];

export default function Banner() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

  return (
    <>
       <div className='container-fluid p-0' id="banner-c-f">
            <div className='container-fluid' id="banner-wrap">
                <div className='container'>
                    <div className='col-lg-6 col-md-6 col-sm-12' id="banner-item">
                      <h2><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}I'm Aryan Gupta !</TextTransition></h2>
                      {/* <p>We do all the research, strategy, design, and execution so you can focus on your product.</p> */}
                      {/* <p>I am full stack web devloper. I have skills in programming languages and Android Development.</p> */}
                      <p><>Development | UI & UX | Creativity</></p>
                    </div>
                </div>
            </div>
       </div>
       {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am yogenda Hamsters',
        1000,
        'hello Hi Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /> */}
    </>
    )
}
