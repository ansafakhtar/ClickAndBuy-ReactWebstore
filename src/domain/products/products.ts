import { Product } from "./types";
import MinimalBlueLamp1 from "../../images/MinimalBlueLamp-1.png";
import MinimalBlueLamp2 from "../../images/MinimalBlueLamp-2.webp";
import MinimalBlueLamp3 from "../../images/MinimalBlueLamp-3.webp";
import Toaster1 from "../../images/toaster-1.jpg";
import Toaster2 from "../../images/toaster-2.jpg";
import Toaster3 from "../../images/toaster-3.jpg";
import LittleArmChair1 from "../../images/LittleArmChair-1.jpg";
import LittleArmChair2 from "../../images/LittleArmChair-2.jpg";
import LittleArmChair3 from "../../images/LittleArmChair-3.jpg";
import BlackAndWhite1 from "../../images/blackandwhite.jpg";
import BlackAndWhite2 from "../../images/blackandwhite1.webp";
import BlackAndWhite3 from "../../images/blackandwhite2.webp";
import BentleyArmChair1 from "../../images/bentley-armchair-1.webp";
import BentleyArmChair2 from "../../images/bentley-armchair-2.webp";
import BentleyArmChair3 from "../../images/bentley-armchair-3.jpg";
import BlackLamp1 from "../../images/blacklamp.jpg";
import BlackLamp2 from "../../images/blacklamp1.webp";
import BlackLamp3 from "../../images/blacklamp2.jpg";
import Vase1 from "../../images/vase.png";
import Vase2 from "../../images/vase1.webp";
import Vase3 from "../../images/vase2.webp";
import ClusterLights1 from "../../images/hanging-cluster-light.jpg";
import ClusterLights2 from "../../images/hanging-cluster-light-2.jpg";



export const products: Product[] = [
    {
      id: 1,
      category: "lamp",
      image: MinimalBlueLamp1,
      name: "Minimal Blue Lamp",
      price: 986,
      otherImages: [MinimalBlueLamp2, MinimalBlueLamp3],
      description:
      "The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.",
      material: "Metal",
      weight: "1.5kg",
      size: "15cm x 10cm",
    },
    {
      id: 2,
      category: "kitchen",
      image: Toaster1,
      name: "Pop-Up Toaster",
      price: 45,
      otherImages: [Toaster2, Toaster3],
      description:
        " The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.",
      material: "Stainless Steel",
      weight: "3.5kg",
      size: "20xm x 10cm",
    },
    {
      id: 3,
      category: "chair",
      image: LittleArmChair1,
      name: "Little Armchair",
      price: 79,
      otherImages: [LittleArmChair2, LittleArmChair3],
      description:
      "Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.",
      material: "Nylon",
      weight: "12kg",
      size: "150cm x 75cm",
    },
    // {
    //   id: 4,
    //   category: "furniture",
    //   image: Img4,
    //   name: "Pulp Unit - 5 Compartments",
    //   price: 254,
    //   otherImages: [PulpUnit1, PulpUnit2],
    //   description:
    //     "Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.",
    //   material: "Wood",
    //   weight: "45kg",
    //   size: "250cm x 60cm",
    // },
    {
        id: 4,
        category: "chair",
        image: BentleyArmChair1,
        name: "Bentley Armchair",
        price: 254,
        otherImages: [BentleyArmChair2, BentleyArmChair3],
        description:
          "Lightweight and durable armchair. Designed with comfort in mind.",
        material: "Wood",
        weight: "15kg",
        size: "150cm x 60cm",
      },    
    // {
    //   id: 5,
    //   category: "lamp",
    //   image: Img5,
    //   name: "Golden Modern Light",
    //   price: 189,
    //   otherImages: [ModernGold1, ModernGold2],
    //   description:
    //     "Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.",
    //   material: "Plastic",
    //   weight: "3kg",
    //   size: "20cm x 20cm",
    // },
    {
        id: 5,
        category: "lamp",
        image: ClusterLights1,
        name: "Cluster Hanging Lights",
        price: 189,
        otherImages: [ClusterLights2],
        description:
          "Cluster hanging lights in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The lamp is almost transparent when its on and you can see the exciting play of colors.",
        material: "Glass and Metal",
        weight: "3kg",
        size: "20cm x 20cm",
      },    
    // {
    //   id: 6,
    //   category: "skin-care",
    //   image: Img6,
    //   name: "Body Oil 200ml",
    //   price: 67,
    //   otherImages: [CleaningOil1, CleaningOil2],
    //   description:
    //     "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water",
    //   material: "Liquid",
    //   weight: "200ml",
    //   size: "10cm x 5cm",
    // },
    {
      id: 7,
      category: "lamp",
      image: BlackAndWhite1,
      name: "Black and White Lamp",
      price: 220,
      otherImages: [BlackAndWhite2, BlackAndWhite3],
      description:
        "Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.",
      material: "Metal and Plastic",
      weight: "6kg",
      size: "20cm x 20cm",
    },
    // {
    //   id: 8,
    //   category: "furniture",
    //   image: Img8,
    //   name: "Gejst Shelf A Black Ash/Black",
    //   price: 115,
    //   otherImages: [Shelf1, Shelf2],
    //   description:
    //     "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.",
    //   material: "Wood",
    //   weight: "10kg",
    //   size: "60cm x 20cm",
    // },
    {
      id: 9,
      category: "furniture",
      image: Vase1,
      name: "Cube Vase Black",
      price: 161,
      otherImages: [Vase2, Vase3],
      description:
        "Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.",
      material: "Ceramics",
      weight: "12kg",
      size: "45cm x 15cm",
    },
    // {
    //   id: 10,
    //   category: "chair",
    //   image: Img10,
    //   name: "Traditional Armchair",
    //   price: 89,
    //   otherImages: [ChairBoom1, ChairBoom2],
    //   description:
    //     "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
    //   material: "Wood",
    //   weight: "8kg",
    //   size: "60cm x 40cm",
    // },
    {
      id: 11,
      category: "lamp",
      image: BlackLamp1,
      name: "Sun Pendant Black Lamp",
      price: 160,
      otherImages: [BlackLamp2, BlackLamp3],
      description:
        "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . ",
      material: "Plastic",
      weight: "4kg",
      size: "20cm x 20cm",
    },
    // {
    //   id: 12,
    //   category: "lamp",
    //   image: Img12,
    //   name: "Simple Golden Lamp",
    //   price: 220,
    //   otherImages: [GoldenLamp1, GoldenLamp2],
    //   description:
    //     "Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.",
    //   material: "Plastic",
    //   weight: "4kg",
    //   size: "15cm x 15cm",
    // },
    // {
    //   id: 13,
    //   category: "skin-care",
    //   image: Img13,
    //   name: "Unbleached Cotton Pads 180",
    //   price: 33,
    //   otherImages: [Cotton1, Cotton2],
    //   description:
    //     "Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.",
    //   material: "Cotton",
    //   weight: "180g",
    //   size: "20cm x 10cm",
    // },
    // {
    //   id: 14,
    //   category: "chair",
    //   image: Img14,
    //   name: "Oak Spanish Chair",
    //   price: 520,
    //   otherImages: [WoodChair1, WoodChair2],
    //   description:
    //     "When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
    //   material: "Wood",
    //   weight: "15kg",
    //   size: "60cm x 30cm",
    // },
    // {
    //   id: 15,
    //   category: "chair",
    //   image: Img15,
    //   name: "Copenhagen Armchair",
    //   price: 330,
    //   otherImages: [Copenhagen1, Copenhagen2],
    //   description:
    //     "Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. ",
    //   material: "Wood",
    //   weight: "14kg",
    //   size: "65cm x 35cm",
    // },
    // {
    //   id: 16,
    //   category: "electronic",
    //   image: Img16,
    //   name: "Anti Dark Light",
    //   price: 120,
    //   otherImages: [Cam1, Cam2],
    //   description:
    //     "Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling",
    //   material: "Metal",
    //   weight: "2kg",
    //   size: "15cm x 10cm",
    // },
    // {
    //   id: 17,
    //   category: "lamp",
    //   image: Img17,
    //   name: "Table Lamp",
    //   price: 75,
    //   otherImages: [TableLamp1, TableLamp2],
    //   description:
    //     "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
    //   material: "Metal",
    //   weight: "5kg",
    //   size: "25cm x 15cm",
    // },
    // {
    //   id: 18,
    //   category: "lamp",
    //   image: Img18,
    //   name: "Mat Black Lamp",
    //   price: 175,
    //   otherImages: [MatLamp1, MatLamp2],
    //   description:
    //     "Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.",
    //   material: "Metal",
    //   weight: "6kg",
    //   size: "20cm x 15cm",
    // },
    // {
    //   id: 19,
    //   category: "chair",
    //   image: Img19,
    //   name: "Comfy Chair",
    //   price: 119,
    //   otherImages: [Comfy1, Comfy2],
    //   description:
    //     "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
    //   material: "Comfy Material",
    //   weight: "25kg",
    //   size: "60cm x 30cm",
    // },
    // {
    //   id: 20,
    //   category: "skin-care",
    //   image: Img20,
    //   name: "Body Oil 50ml",
    //   price: 45,
    //   otherImages: [BodyOil1, BodyOil2],
    //   description:
    //     "Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.",
    //   material: "Liquid",
    //   weight: "50ml",
    //   size: "10cm x 5cm",
    // },
  ]