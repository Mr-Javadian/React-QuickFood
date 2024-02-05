//sadegh javadian
//https://github.com/Mr-Javadian

import './CardsS2.css';


function CardsS2({img,title,des}){

    return(
        <div className='CS2Container'>

            <div className='CS2imgcontainer'> 
                <img className='CS2image' src={img} alt=""/>
            </div>

            <div className='CS2title'>{title}</div>
            <div className='CS2des'>{des}</div>
            
        </div>

    );
}

export default CardsS2;