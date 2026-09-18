import shoe1 from "../assets/shoe1.avif";
import shoe2 from "../assets/shoe2.avif";
import shoe3 from "../assets/shoe3.avif";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";
import shoe6 from "../assets/shoe6.jpg";
import shoe7 from "../assets/shoe7.jpg";
import shoe8 from "../assets/shoe8.jpg";
import shoe9 from "../assets/shoe9.jpg";
import shoe10 from "../assets/shoe10.jpg";
import shoe11 from "../assets/shoe11.jpg";
import shoe12 from "../assets/shoe12.jpg";
import shoe13 from "../assets/shoe13.jpg";
import shoe14 from "../assets/shoe14.jpg";
import shoe15 from "../assets/shoe15.jpg";
import shoe16 from "../assets/shoe16.jpg";
import shoe17 from "../assets/shoe17.jpg";
import shoe18 from "../assets/shoe18.jpg";
import shoe19 from "../assets/shoe19.jpg";
import shoe20 from "../assets/shoe20.jpg";


export type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "airflex-runner",
    image: shoe1,
    name: "AirFlex Runner",
    price: 89.0,
  },
  {
    id: "urban-street-pro",
    image: shoe2,
    name: "Urban Street Pro",
    price: 99.0,
  },
  {
    id: "classic-court-90s",
    image: shoe3,
    name: "Classic Court 90s",
    price: 79.0,
  },
  {
    id: "volt-edge",
    image: shoe4,
    name: "Volt Edge",
    price: 119.0,
  },
  {
    id: "zenith-flow",
    image: shoe5,
    name: "Zenith Flow",
    price: 129.0,
  },
  {
    id: "street-vibe-low",
    image: shoe6,
    name: "Street Vibe Low",
    price: 69.0,
  },
  {
    id: "nova-horizon",
    image: shoe7,
    name: "Nova Horizon",
    price: 109.0,
  },
  {
    id: "pulse-react",
    image: shoe8,
    name: "Pulse React",
    price: 99.0,
  },
  {
    id: "core-street-retro",
    image: shoe9,
    name: "Core Street Retro",
    price: 85.0,
  },
  {
    id: "aeroflex-lite",
    image: shoe10,
    name: "AeroFlex Lite",
    price: 75.0,
  },
{
  id: "aeroflex-pro",
  image: shoe11,
  name: "AeroFlex Pro",
  price: 95.0,
},
{
  id: "aeroflex-runner",
  image: shoe12,
  name: "AeroFlex Runner",
  price: 85.0,
},
{
  id: "aeroflex-max",
  image: shoe13,
  name: "AeroFlex Max",
  price: 110.0,
},
{
  id: "aeroflex-breeze",
  image: shoe14,
  name: "AeroFlex Breeze",
  price: 70.0,
},
{
  id: "aeroflex-carbon",
  image: shoe15,
  name: "AeroFlex Carbon",
  price: 130.0,
},
{
  id: "aeroflex-trail",
  image: shoe16,
  name: "AeroFlex Trail",
  price: 105.0,
},
{
  id: "nike-air-max-270",
  image: shoe17,
  name: "Nike Air Max 270",
  price: 145.0,
},
{
  id: "calzado-nike",
  image: shoe18,
  name: "Calzado Nike",
  price: 210.0,
},
{
  id: "adidas-tenis samba",
  image: shoe19,
  name: "Adidas Tenis Samba",
  price: 75.0,
},
{
  id: "new-balance-530",
  image: shoe20,
  name: "New Balance 530",
  price: 110.0,
},
];
