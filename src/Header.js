//sadegh javadian
//https://github.com/Mr-Javadian


import "./Header.css"
import phoneicon from "./IMG/Icons/phonecall.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//importing header images
import BGimg1 from './IMG/Background/BGimg1.jpg'
import BGimg2 from './IMG/Background/BGimg2.jpg'
import BGimg3 from './IMG/Background/BGimg3.jpg'



function Header() {

 // Declare Data for backgound images
  const backimgs = [
    { image: BGimg1 },
    { image: BGimg2 },
    { image: BGimg3 },
  ];

  // Declare slider setting 
  const setting2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    autoplay:true,
    autoplaySpeed:2000,
    slidesToScroll: 1,
    pauseOnHover:true
  };


  return (

    <div className="container">  

        <div className="main">
        
          <div className="logo">
              <h1>غذای سریع</h1>
          </div>

          <ul className="nav"> 
                <li className="mainli">صفحه نخست</li>
                <p className="extractor">|</p>
                <li className="mainli">وبلاگ</li>
                <p className="extractor">|</p>
                <li className="mainli">تماس با ما</li>
                <p className="extractor">|</p>
                  <li id="test1" className="mainli">منو
                    <ul id="test"  className="secondul">
                      <li  className="subli">همبرگرها</li>
                      <li className="subli">پیتزاها</li>
                      <li className="subli">سالادها</li>
                      <li className="subli">نوشیدنی ها</li>
                    </ul>
                  </li>
          </ul>

          <div className="phone">
            <h1>021-12345678</h1>           
                <img src={phoneicon} className="phoneimg" alt="dtb"/>
          </div>

        </div>
              <div className="slidercont">
                <Slider {...setting2}>
                  <img className="backgroundimg" src={BGimg2}/>
                  <img className="backgroundimg" src={BGimg1}/>
                  <img className="backgroundimg" src={BGimg3}/>
               </Slider>
              </div>
    </div>
  );
}

export default Header;
