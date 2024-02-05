//sadegh javadian
//https://github.com/Mr-Javadian

import './CardsS1.css'

function CardsS1({img,title}){
    return(
        <div>

            <figure className='CS1fig'>

                <img className='CS1img' src={img} alt="werfv" />

                <figcaption className='CS1figcap'>

                    <div>
                        <h2 className='CS1heading'>{title}</h2>
                    </div>

                </figcaption>

            </figure>

        </div>

    );
}

export default CardsS1;