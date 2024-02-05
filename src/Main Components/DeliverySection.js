//sadegh javadian
//https://github.com/Mr-Javadian
//estefadeh az code ha tanha ba rezayat saheb asar emkan pazir ast


import './DeliverySection.css'
import DSimg from "../IMG/DeliverySection/DeliverySectionimg.gif"
function DeliverySection(){
    return(
        <div className='DScontainer'>
            <figure className='DSfigure'>
                <img className='DSimg' src={DSimg} alt="werfv" />
            <figcaption className='DSfigcaption'>
                 <div className='DSmaintitle'>
                    <hr color='#8B6728'/> 
                    <h1 id='FirstH1'>تحویل رایگان </h1>
                    <hr color='8B6728'/> 
                </div>
                
                <h1 id='SecondH1'>روز ساندویچ</h1>
                <p className='DSparag'>ساندویچ</p>
                <p className='DSparag'>سالاد</p>
                <p className='DSparag'>نوشیدنی</p>
                <button id='DSbutton'>سفارش آنلاین</button>
               
            </figcaption>
            </figure>
        </div>

    );
}

export default DeliverySection;