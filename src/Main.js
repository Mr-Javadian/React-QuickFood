//sadegh javadian
//https://github.com/Mr-Javadian
//estefadeh az code ha tanha ba rezayat saheb asar emkan pazir ast



//##### Import Components ######
// CS represents for Card Section
import "./Main.css" // importing main css
import CardsS1 from "./Main Components/CardsS1"  // cardsS1.js
import CardsS2 from "./Main Components/CardsS2" // cardsS2.js
import CardsS3 from "./Main Components/CardsS3" // cardsS3.js
import DeliverySection from "./Main Components/DeliverySection" // DeliverySection
import ProductCarousel from "./Main Components/ProductCarousel"  // ProductCarousel

//########### Import Images #############

//Card Section 1 images
import CS1img1 from "./IMG/CardSection1/1-right.jpg"
import CS1img2 from "./IMG/CardSection1/2-right.jpg"
import CS1img3 from "./IMG/CardSection1/3-right.jpg"

//Card Section 2 images
import CS2img1 from "./IMG/CardSection2/cardimg1.svg"
import CS2img2 from "./IMG/CardSection2/cardimg3.svg"
import CS2img3 from "./IMG/CardSection2/cardimg4.svg"
import CS2img4 from "./IMG/CardSection2/cardimg2.svg"

//Card Section 3 images
import CS3img1 from "./IMG/CardSection3/s3img1.jpg"
import CS3img2 from "./IMG/CardSection3/s3img2.jpg"
import CS3img3 from "./IMG/CardSection3/s3img3.jpg"
import CS3img4 from "./IMG/CardSection3/s3img4.jpg"

//Delivery Section Image imported in its component

//Product Section images
import PSimg1 from "./IMG/ProductSection/Productimg1.png"
import PSimg2 from "./IMG/ProductSection/Productimg2.png"
import PSimg3 from "./IMG/ProductSection/Productimg3.png"
import PSimg4 from "./IMG/ProductSection/Productimg4.png"

//######################


function Main() {

    // Declare Data for Card Section 1 
  const CS1items = [
    {
        img: CS1img1,
        title: "برای گیاه خواران", 
    },
    {
        img: CS1img2,
        title: "سفارش آنلاین",
    },
    {
        img: CS1img3,
        title: "کیک ویژه",
    },
  ];


    // Declare Data for Card Section 2
  const CS2items = [
    {
        img: CS2img1,
        title: "تحویل سریع", 
        des: "غذایی که سفارش می دهید به سرعت به درب شما تحویل داده می شود.",
    },
    {
        img: CS2img2,
        title: "مواد غذایی ساده",
        des: "ما از بهترین مواد تشکیل دهنده برای تهیه غذای خوشمزه تازه استفاده می کنیم.",
    },
    {
        img: CS2img3,
        title: "شاهد تجربه",
        des: "کارکنان ما متشکل از سرآشپزها و آشپزانی با سالها تجربه هستند.",
    },
    {
        img: CS2img4,
        title: "انواع ظروف",
        des: "در منوی ما انواع مختلفی از ظروف، دسرها و نوشیدنی ها را می بینید.",
    },
];


    // Declare Data for Card Section 3
  const CS3items = [

    {img: CS3img1,},

    {img: CS3img2,},

    {img: CS3img3,},

    {img: CS3img4,},
    
    ];


    // Declare Data for Product Section 
  const PData = [
    { image: PSimg1, name: 'مینی برگر', price: 'تومان 10000', link: "https://github.com/Mr-Javadian"},
    { image: PSimg2, name: 'برگر مرغ', price: '15000 تومان',  link: "https://github.com/Mr-Javadian" },
    { image: PSimg3, name: 'دابل برگر', price: '18000 تومان',  link: "https://github.com/Mr-Javadian" },
    { image: PSimg4, name: 'ایران برگر ', price: '12000 تومان',  link: "https://github.com/Mr-Javadian" },
  
  ];


  return (
    <div className="Main">
      
            <br/>
            <br/>
            <br/>

                <div className="cardsS1">
                {CS1items.map((item) => (
                    <CardsS1 img={item.img} title={item.title} des={item.des} /> 
                    ))}
                </div>

            <br/>
            <br/>

                <div className="Pcompoent">
                    <br/>
                    <br/>
                    <h1 className="caroselmaintitle">منوی ما</h1>
                    <ProductCarousel products={PData} />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <DeliverySection/>  
            
            <br/>
            <br/>
            <br/>
            <br/>

                <div className="cardsS2">
                {CS2items.map((item) => (
                    <CardsS2 img={item.img} title={item.title} des={item.des} /> 
                    ))}
                </div>

            <br/>
            <br/>
            <br/>
            <br/>

                <div className="cardsS3">
                {CS3items.map((item) => (
                    <CardsS3 img={item.img}/> 
                    ))}
                </div>

    </div>
  );
}

export default Main;
