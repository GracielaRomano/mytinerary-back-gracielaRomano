import 'dotenv/config.js'
import { connect } from 'mongoose'
import Itinerary from '../Itinerary.js'
import City from '../City.js'

const itineraries = [{
    name: 'Angkor Wats Temple Complex',
    city_id: 'Siem Reap',
    price: 2,
    duration: 2,
    tags: ['#siemreap', '#adventure', '#budism'],
    photo: 'https://www.mundo-nomada.com/wp-content/uploads/2020/03/Templos-de-Angkor-Wat-e1590459718747-1200x900.jpg'
},{
    name: 'Temple of Water',
    city_id: 'Bali',
    price: 3,
    duration: 1,
    tags: ['#nature', '#temple', '#peace'],
    photo: 'https://images-ext-1.discordapp.net/external/hJTN2F_gs1ELLRWELD4hp6JH5HDQN8__NIhq_dQuAEg/https/theworldtravelguy.com/wp-content/uploads/2019/03/DSCF4529_1200.jpg?width=1014&height=676'
},{
    name: 'Mount Fuji',
    city_id: 'Honshu Island',
    price: 3,
    duration: 3,
    tags: ['#culture', '#snow', '#hikkinglove'],
    photo: 'https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg'
},{
    name: 'Matira beach',
    city_id: 'Bora Bora Island',
    price: 4,
    duration: 3,
    tags: ['#beach', '#adventure', '#sun'],
    photo: 'https://images-ext-2.discordapp.net/external/5JogXXNw2iYuKd0LqSkDidZ7UnJlGJEWDivz6zgb4_Q/https/media.kiwi.com/wp-content/uploads/2021/06/veligandu-island-beach-of-the-maldives-795x360.jpg'
},{
    name: 'Mount Otemanu',
    city_id: 'Bora Bora Island',
    price: 2,
    duration: 1.5,
    tags: ['#beach', '#adventure', '#treking','#nature'],
    photo: 'https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676'
},{
    name: 'National Park Roraima',
    city_id: 'Bolívar',
    price: 5,
    duration: 2.5,
    tags: ['#mountain', '#hiking', '#adventure','#beauty'],
    photo: 'https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg'
},{
    name: 'Angel Falls',
    city_id: 'Bolívar',
    price: 1,
    duration: 3.5,
    tags: ['#mountain', '#hiking', '#relax','#beauty'],
    photo: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSybaIKh9qn2LWwkRlWHc694clhB4kB7t-VxxbLMQd14usIcjB3XzKwQnz7huOfgXz1'
},{
    name: 'Honshu Tour',
    city_id: 'Honshu Island',
    price: 5,
    duration: 1.5,
    tags: ['#interesting', '#culture', '#croud'],
    photo: 'https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2699/43.jpg'
},{
    name: 'Tsunami Monument',
    city_id: 'Maldives Islands',
    price: 4,
    duration: 2,
    tags: ['#nature', '#beach', '#peace'],
    photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1'
},{
    name: 'Through the Fields',
    city_id: 'Bali',
    price: 3,
    duration: 1.5,
    tags: ['#nature', '#peace','#tranquillity','#relax'],
    photo: 'https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp'
},{
    name: 'Veligandu Island Beach',
    city_id: 'Maldives Islands',
    price: 3,
    duration: 3,
    tags: ['#nature', '#beach', '#peace','#beautiful'],
    photo: 'https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg'
},{ 
    name: 'Ubud',
    city_id: 'Bali',
    price: 5,
    duration: 3,
    tags: ['#nature', '#beach', '#peace'],
    photo: 'https://gadsventure.com/wp-content/uploads/2019/12/Webp.net-resizeimage-2019-12-18T144431.703-800x600.jpg'
},{
    name: 'Traditional', 
    city_id: 'Lusaka',
    price: 3,
    duration: 1,
    tags: ['#tradition', '#dance', '#happyness'],
    photo: 'https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2018/08/26141032/GPJNew_Zambia_PP_Crowds-1_Web.jpg'
},{
    name: 'Adventure Time',
    city_id: 'Lusaka',
    price: 4,
    duration: 2,
    tags: ['#nature', '#adrenaline', '#power'],
    photo: 'https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg'
},{
    name: 'Fauna and Flora',
    city_id: 'Lusaka',
    price: 3,
    duration: 2.5,
    tags: ['#nature', '#animals', '#peace'],
    photo: 'https://www.enkosiafrica.com/wp-content/uploads/2018/01/enkosi-africa-safari-zambia-lower-zambezi-sausage-tree-camp-.jpg'
},{
    name: 'Water, Sand and Air',
    city_id: 'Cairo Citadel',
    price: 4,
    duration: 1.5,
    tags: ['#nature', '#adventure', '#amazing'],
    photo: 'https://images.memphistours.com/large/495962174_Cairo%20City%20Tour.jpg'
},{
    name: 'City Food Tour',
    city_id: 'Cairo Citadel',
    price: 5,
    duration: 2,
    tags: ['#yummy!', '#restaurant', '#delicious'],
    photo: 'https://c.myholidays.com/blog/blog/content/images/2021/12/Citadel-View-Restaurant-Savoring-French-Cuisines-min.jpg'
},{
    name: 'Citadel Tour',
    city_id: 'Cairo Citadel',
    price: 2,
    duration: 1,
    tags: ['#culture', '#peace','#mystical','#reflection'],
    photo: 'https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png'
},{
    name: 'Enoteca Da Eliseo',
    city_id: 'Cinque Terre',
    price: 3,
    duration: 1.5,
    tags: ['#fun', '#food','#wine cellar','#friends'],
    photo: 'https://lh3.googleusercontent.com/p/AF1QipMFAJHVrg12fDgac23FbMIqcvGjjE2k22kSf3Ny=s1360-w1360-h1020'
},{
    name: 'Scalinata Lardarina',
    city_id: 'Cinque Terre',
    price: 2,
    duration: 1,
    tags: ['#climb', '#paradise','#aventure','#beauty'],
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/10/d5/4d/02/la-scalinata.jpg'
},{
    name: 'Jungle Island',
    city_id: 'Miami',
    price: 4,
    duration: 2,
    tags: ['#animal', '#beautiful','#nature','#exotic'],
    photo: 'https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.pnghttps://lh3.googleusercontent.com/p/AF1QipPU2xZYe2WNKh08k1edGdpX1S-IwZPWEHuWTlE=s1360-w1360-h1020'
},{
    name: 'Dolphin Mall',
    city_id: 'Miami',
    price: 5,
    duration: 4,
    tags: ['#shoping', '#food','#fun','#beauty'],
    photo: 'https://lh3.googleusercontent.com/p/AF1QipPU2xZYe2WNKh08k1edGdpX1S-IwZPWEHuWTlE=s1360-w1360-h1020'
}]

async function createItineraries(arrayItineraries) {
    try {
        await connect(process.env.LINK_DB)
        for (let itinerary of arrayItineraries) {
            let city = await City.findOne({ city:itinerary.city_id })  //busco la ciudad que coincida con la ciudad del objeto 
            let city_id = await city._id                               //Necesito el id de la ciudad 
            itinerary.city_id = city_id                                //Reasigno el valor de city_id de cada itinerario para cambiar la ciudad que viene por defecto POR EL ID.
            await Itinerary.create(itinerary)
        }
        console.log('done!');
    } catch (error) {
        console.log(error);
    }
}

createItineraries(itineraries)
