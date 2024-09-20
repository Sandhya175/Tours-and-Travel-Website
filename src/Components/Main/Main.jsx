import React, {useEffect}  from "react";
import './main.css'

// import icons
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LuClipboardCheck } from "react-icons/lu"

// import the images
import img from '../../Assets/Kerala Tour.jpg'
import img2 from '../../Assets/Goa Tour.jpg'
import img3 from '../../Assets/Lakshadweep.jpg'
import img4 from '../../Assets/Somnath.jpg'
import img5 from '../../Assets/char dham yatra.jpg'
import img6 from '../../Assets/jagannath.jpg'
import img7 from '../../Assets/himalayas.jpg'
import img8 from '../../Assets/Jaisalmer.jpg'
import img9 from '../../Assets/manali.jpg'
import img10 from '../../Assets/ayodhya.jpeg'
import img11 from '../../Assets/kedarnath.jpg'
import img12 from '../../Assets/Rameshwaram.jpeg'


import Aos from "aos";
import'aos/dist/aos.css'

// the array named data
const Data=[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Kerala Tour',
        location: 'India',
        duration : '7 Nights / 8 Days',
        fees: '₹20,000',
        destination : 'Munnar, Kochi, Kumarakom, Alleppey, Trivandrum, Kanyakumari, Kovalam, Jewish Synagogue. '
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Goa Tour',
        location: 'India',
        duration : '3 Nights / 4 Days',
        fees: '₹7,950',
        destination : 'Goa City, Beaches and Islands.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Lakshadweep Tour',
        location: 'India',
        duration : '3 Nights / 4 Days',
        fees: '₹30,000',
        destination : 'Bangaram Island, Minicoy Island, Agatti Islands, Kalpeni Island, Kavaratti. '
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Dwarka - Somnath Tour',
        location: 'India',
        duration : '4 Nights / 5 Days',
        fees: '₹6,000',
        destination : 'Ahmedabad, Jamnagar, Porbandar, Somnath, Junagadh, Somnath, Rajkot, Gandhi Ashram, Bala Hanuman Temple, Kirti Mandir. '
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Char Dham Yatra Tour',
        location: 'India',
        duration : '11 Nights / 12 Days',
        fees: '₹21,700',
        destination : 'New Delhi, Rishikesh, Barkot, Uttarkashi, Guptakashi, Kedarnath, Badrinath, Srinagar, Badrinath Temple. '
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Jagannath Tour',
        location: 'India',
        duration : '7 Nights / 8 Days',
        fees: '₹30,000',
        destination : 'Kolkata, Konark, Puri, Jamshedpur, Pipli, Kali Temple, Fort William, Belur Math, Puri Beach, Konark Sun Temple, Jagannath Temple. '
    },

    {
        id:7,
        imgSrc: img7,
        destTitle: 'Himalaya Splendid Tour To Hills Tour',
        location: 'India',
        duration : '7 Nights / 8 Days',
        fees: '₹40,000',
        destination : 'Darjeeling, Gangtok, Lachung, Enchey Monastery. '
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'Rajasthan Marwad Tour',
        location: 'India',
        duration : '6 Nights / 7 Days',
        fees: '₹20,000',
        destination : 'Bikaner, Jaisalmer, Jodhpur, Lalgarh Palace, Junagarh Fort, Mehrangarh Fort, Prachina Museum, Jaswant Thada. '
    },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Manali - Shimla Volvo Package',
        location: 'India',
        duration : '6 Nights / 7 Days',
        fees: '₹30,000',
        destination : 'Manali, Shimla, Kufri, Rohtang Pass, Manu Temple.'
    },

    {
        id:10,
        imgSrc: img10,
        destTitle: 'Kashi-Ayodhya Tour',
        location: 'India',
        duration : '8 Nights / 9 Days',
        fees: '₹20,000',
        destination : 'Prayagraj, Ayodhya, Varanasi, Gaya, Kashi-Vishwanath Temple.'
    },

    {
        id:11,
        imgSrc: img11,
        destTitle: 'Kedarnath Tour',
        location: 'India',
        duration : '6 Days/5 Nights',
        fees: '₹30,000',
        destination : 'Prayagraj, Ayodhya, Varanasi, Gaya, Kashi-Vishwanath Temple.'
    },

    {
        id:12,
        imgSrc: img12,
        destTitle: 'Rameshwaram - Kanyakumari',
        location: 'India',
        duration : '4 Nights / 5 Days',
        fees: '₹11,000',
        destination : 'Kanyakumari, Rameshwaram, Madurai, Tiruchendur, Suchindram, Meenakshi Temple.'
    },

]


// destination covered 
const Main = () => {
    // creating a react hook to add a scroll animation.........
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* So here we are going to use high order array method(map). To do that we shall use a list of object in one array. I'm going to create an array named data and from that we shall map() array to fetch each desitnation at once. I hope this will make sence to you!*/}

                {
                    Data.map(({id, imgSrc, destTitle, location, duration, fees, destination })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/*Here it will return single id from the map array */}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="duration">
                                            <span>Duration: {duration}</span>
                                        </div>
                                        <div className="price">
                                            <h5>Price:{fees}<small>pp</small></h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>Destination Covered: {destination}</p>
                                    </div>

                                    <button className="btn flex">
                                        BOOK NOW<LuClipboardCheck className="icon"/>
                                    </button>
                                </div>

                            </div>
                    )

                    })
                }
            </div>


        </section>
    )
}

export default Main