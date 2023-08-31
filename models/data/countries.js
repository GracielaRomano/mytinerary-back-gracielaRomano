import 'dotenv/config.js'
import { connect } from 'mongoose'
import Country from '../Country.js'

const countries = [{
    name: "Camboya",
    currency: "Riel",
    language: "Jemer",
},{
    name: "Indonesia",
    currency: "Rupia Indonesia(RI)",
    language: "Bahasa Indonesia",
},{
    name: "Tahiti",
    currency: "Franco del Pacífico(XPF)",
    language: "French, Tahitian",
},{
    name: "Venezuela",
    currency: "Bolivar",
    language: "Spanish",
},{
    name: "Japan",
    currency: "Yen",
    language: "Japanese",
},{
    name: "Maldives Republic",
    currency: " Rufiyaa",
    language: "Maldivian o Dhivehi",
},{
    name: "Argentina",
    currency: "Argentine Peso",
    language: "Spanish",
},{
    name: "Australia",
    currency: "Australian Dollar",
    language: "English",
},{
    name: "Mexico",
    currency: "Mexican Peso",
    language: "Spanish",
},{
    name: "Chile",
    currency: "Chilean peso",
    language: "Spanish",
},{
    name: "Zambia",
    currency: "Kwacha zambiana(ZMK)",
    language: "English",
},{
    name: "Egypt",
    currency: "Egyptian pound(EGP)",
    language: "Arab",
},{
    name: "Italy",
    currency: "Euro (€,EUR)",
    language: "Italian",
},{
    name: "England",
    currency: "Pound sterling",
    language: "English",
},{
    name: "EE.UU",
    currency: "American dollar",
    language: "English",
}]

connect(process.env.LINK_DB)
    .then(()=>{
        Country.insertMany(countries)
        console.log('done!');
    })
    .catch(err=>console.log(err))