//sadegh javadian
//https://github.com/Mr-Javadian

import './CardsS3.css'

function CardsS3({img}){
    return(
        <div>

            <figure className='CS3figure'>

                <div className='CS3imgcontainer'> 
                    <img className='CS3image' src={img} alt="etge" />
                </div>

            </figure>

        </div>

    );
}

export default CardsS3;