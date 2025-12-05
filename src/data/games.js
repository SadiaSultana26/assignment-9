// src/data/games.js
import pubgImg from "../assets/toy-1.jpg";
import callImg from "../assets/toy-2.jpg";
import freeFire from "../assets/toy-3.jpg";


export const games = [
  {
    id: "1",
    title: "A Cartoon-style Scooter: Moped Toy",
    prize:"17$",
    coverPhoto: pubgImg,
    category: "",
    downloadLink: "https://www.pubgmobile.com/en-US/home.shtml",
    description:
      "A sturdy and lightweight mini bike designed for kids, featuring easy balance, smooth wheels, and a fun sporty look.",
    ratings: "4.7",
    developer: "21",
    img: pubgImg
  },
  {
    id: "2",
    title: "Mini Orange-Haired Doll:Little Pony",
    prize:"17$",
    coverPhoto: callImg,
    category: "FPS",
    downloadLink: "https://www.callofduty.com/mobile",
    description:
      "A cute and charming doll with soft hair and detailed features, perfect for imaginative play and gentle cuddles.",
    ratings: "4.5",
    developer: "13",
    img: callImg
  },
  {
    id: "3",
    title: "Soft Toy:White Bear",
    prize:"17$",
    coverPhoto: freeFire,
    category: "Battle Royale",
    downloadLink: "https://ff.garena.com/en/",
    description:
      "This adorable teddy bear features a gentle smile and fluffy fur, making it a lovable gift for kids.",
    ratings: "4.3",
    developer: "32",
    img: freeFire
  }
];