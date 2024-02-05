//sadegh javadian
//https://github.com/Mr-Javadian

import "./Footer.css"

import mailimg from "./IMG/Icons/email.png"
import locimg from "./IMG/Icons/location.png"
import phoneimg from "./IMG/Icons/phonecall.png"


function Footer() {
  return (
    <div className="Main">

        <div className="datacontainer">

                <div className="footerdiv1">

                    <p className="maintext">اطلاعات</p>
                    <p className="text">فروشگاه های ما</p>
                    <p className="text">تماس با ما</p>
                    <p className="text">درباره ما</p>
                    <p className="text">وبلاگ</p>

                </div>


                <div className="footerdiv2">

                    <p className="maintext">منوی ما</p>
                    <p className="text">همبرگرها</p>
                    <p className="text">پیتزاها</p>
                    <p className="text">سالادها</p>
                    <p className="text">نوشیدنی ها</p>

                </div>


                <div className="footerdiv3">

                    <p className="maintext">اطلاعات فروشگاه</p>

                    <div className="iconcontainer">
                        <img className="footericon"  src={locimg}/>
                        <p id="address" className="text">تهران، آدرس دلخواه شما در اینجا قرار میگیرد..</p>
                    </div>
                    
                    <div className="iconcontainer">
                        <img className="footericon" src={phoneimg}/>
                        <p id="number" className="text">021-12345678</p>
                    </div>
                    
                    <div className="iconcontainer">
                        <img className="footericon"  src={mailimg}/>
                        <p id="email" className="text">info@gmail.com</p>
                    </div>

                </div>
                

        </div>
        <div className="right"> <p className="mr">All Rights reserved for <a href="https://github.com/Mr-Javadian" className="myname">Mr.Sadegh Javadian</a></p></div>
    </div>
  );
}

export default Footer;
