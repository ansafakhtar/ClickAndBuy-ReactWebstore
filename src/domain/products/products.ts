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
import ClusterLights3 from "../../images/hanging-cluster-light-3.jpg";
import RockingChair1 from "../../images/rocking-chair-1.jpg";
import RockingChair2 from "../../images/rocking-chair-2.jpg";
import RockingChair3 from "../../images/rocking-chair-3.webp";
import CoffeeTable1 from "../../images/coffee-table1.jpg";
import CoffeeTable2 from "../../images/coffee-maker-1.jpg";
import CoffeeTable3 from "../../images/coffee-table-3.webp";
import CoffeeMaker1 from "../../images/coffee-maker-1.jpg";
import CoffeeMaker2 from "../../images/coffee-maker-2.webp";
import CoffeeMaker3 from "../../images/coffee-maker-3.webp";
import Grill1 from "../../images/grill-1.webp";
import Grill2 from "../../images/grill-2.jpg";
import Grill3 from "../../images/grill-3.jpg";
import Trimmer1 from "../../images/trimmer-1.jpg";
import Trimmer2 from "../../images/trimmer-2.jpg";
import Trimmer3 from "../../images/trimmer-3.jpg";
import Filter1 from "../../images/filter-1.jpg";
import Filter2 from "../../images/filter-2.jpg";
import Filter3 from "../../images/filter-3.jpg";

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
  {
    id: 5,
    category: "lamp",
    image: ClusterLights1,
    name: "Cluster Hanging Lights",
    price: 189,
    otherImages: [ClusterLights2, ClusterLights3],
    description:
      "Cluster hanging lights in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The lamp is almost transparent when its on and you can see the exciting play of colors.",
    material: "Glass and Metal",
    weight: "3kg",
    size: "20cm x 20cm",
  },
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
  {
    id: 10,
    category: "chair",
    image: RockingChair1,
    name: "Solid Wood Rocking Chair",
    price: 115,
    otherImages: [RockingChair2, RockingChair3],
    description:
      "Designed by Amberville, Acrylic finishes are highly durable, providing a tough protective layer against scratches and withstanding daily wear and tear. They have strong UV resistance, preventing fading and discoloration caused by sun exposure.",
    material: "Wood",
    weight: "10kg",
    size: "H 94cm x W 56cm x D 94cm",
  },
  {
    id: 6,
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
  {
    id: 8,
    category: "furniture",
    image: CoffeeTable1,
    name: "Alex Coffee Table",
    price: 149,
    otherImages: [CoffeeTable2, CoffeeTable3],
    description:
      "Water resistant, fungus, termite & scratch proof. Premium-quality sturdy and stable engineered wood coffee table for home decor. Tested for distributed loading capacity of 112 kg for table top and 52 kg for each shelf",
    material: "Engineered Wood",
    weight: "15kg",
    size: "H 43cm x W 60cm x D 60cm",
  },
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
  {
    id: 12,
    category: "kitchen",
    image: CoffeeMaker1,
    name: "Coffee Maker",
    price: 420,
    otherImages: [CoffeeMaker2, CoffeeMaker3],
    description:
      "Robust stainless steel housing for commercial use.Pressure gauge to track the coffee bar pressure.Universal 58 mm Portafilter and group head.Warming rack to keep your coee cups ready for use.",
    material: "Stainless Steel",
    weight: "10kg",
    size: "Length: 25, Width: 20, Height: 25",
  },
  {
    id: 13,
    category: "kitchen",
    image: Grill1,
    name: "Sandwich Maker",
    price: 99,
    otherImages: [Grill2, Grill3],
    description:
      "Comes with ergonomic hinges and an easy lock. Non-stick coated grill plates. 180-degree open grill and Temperature control knob.",
    material: "Stainless Steel",
    weight: "3.9kg",
    size: "40 Cm (L) x 16 Cm (B) x 30 Cm (H)",
  },
  {
    id: 14,
    category: "electronics",
    image: Filter1,
    name: "Smart Air Purifier",
    price: 520,
    otherImages: [Filter2, Filter3],
    description:
      "Removes Air Pollutant & Dust Particles with H 11 HEPA Filter.Suitable for Home & office. Coverage Area: 430 Sq. Ft. ",
    material: "Plastic",
    weight: "6kg",
    size: "37 Cm (L) x 33 Cm (B) x 33 Cm (H)",
  },
  {
    id: 15,
    category: "electronics",
    image: Trimmer1,
    name: "Groomiist Trimmer",
    price: 330,
    otherImages: [Trimmer2, Trimmer3],
    description:
      "Its shaver has three smart touch flexible floating heads, with self-sharpening blades of Japanese Technology, adjust to the contours or your face as they effortlessly glide along it thus rendering your face baby smooth in a single stroke without going back for a once over.",
    material: "Plastic",
    weight: "0.3kg",
    size: "Length: 9, Width: 4, Height: 10",
  },
];
