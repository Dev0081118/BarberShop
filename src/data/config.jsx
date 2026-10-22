import g1 from "../../public/gallery/gallery-1.jpg";
import g2 from "../../public/gallery/gallery-2.jpg";
import g3 from "../../public/gallery/gallery-3.jpg";
import g4 from "../../public/gallery/gallery-4.jpg";

// Hammoudi Assets
import logo2 from "../assets/logo/logo2.png";
import heroImage2 from "../assets/hero2.png";

// Who we are assets
import cutPng from "../../public/cut.png";
import beardPng from "../../public/beard.png";
import towelPng from "../../public/towel.png";
import barberShopPng from "../../public/barber-shop.png";

// Scroll Window & Packages assets
import trimmerAvif from "../../public/scrollwindow/trimmer.avif";
import settingAvif from "../../public/scrollwindow/setting.avif";
import joshuaPackageImage from "../../public/scrollwindow/joshua-lawrence-dU6eE_j2My8-unsplash.jpg";

// Team assets
import teamImage1 from "../assets/Team/emp1.png";
import teamImage2 from "../assets/Team/emp2.png";
import teamImage4 from "../assets/Team/emp4.png";
import teamImage5 from "../assets/Team/emp5.png";


const hammoudiData = {
  slug: "hammoudi",
  businessName: "Hammoudi Barber Shop",
  location: "Perth",
  state: "Western Australia",
  shortLocation: "Perth",
  logo: logo2,
  facebookLink: "https://www.facebook.com/p/Hammoudi-barber-shop-100063867472962",
  googleSearchLink: "https://www.google.com/search?q=Hammoudi+Barber+Shop+Perth",
  hero: {
    image: heroImage2,
    subtitle: "Premium Grooming",
    titleLine1: "HAMMOUDI",
    titleLine2: "BARBER SHOP",
    description: "The art of traditional barbering,\nrefined for the modern gentleman."
  },
  marqueeServices: [
    { iconType: "lucide-scissors", label: "Haircut" },
    { iconType: "image", imageSrc: beardPng, label: "Beard Trim" },
    { iconType: "image", imageSrc: cutPng, label: "Fade" },
    { iconType: "image", imageSrc: towelPng, label: "Hot Towel Shave" },
    { iconType: "image", imageSrc: barberShopPng, label: "Styling" },
    { iconType: "lucide-soap", label: "Skin Care" },
  ],
  about: {
    subtitle: "Who We Are",
    headingLine1: "More than a haircut.",
    headingLine2: "It's an experience.",
    textParagraphs: [
      "Nestled in central Perth, our shop offers far more than standard trims, delivering a refined grooming experience.",
      "We blend classic techniques, exceptional attention to detail, and top-tier products for men focused on elevating their personal style.",
      "Every touchpoint goes beyond routine grooming. We cultivate sharp confidence, distinct character, and calibre service crafted to the highest standards."
    ],
    closingLine1: "Welcome to Hammoudi Barber.",
    closingLine2: "Where tradition meets innovation.",
    established: "Est. Perth"
  },
  splitContent: {
    left: {
      subtitle: "Hammoudi Barber Shop",
      headingLine1: "Experience the art of",
      headingLine2: "traditional grooming.",
      description: "Step into a space designed for the modern gentleman. We combine classic barbering techniques with contemporary styling to deliver an unmatched experience. Every cut, trim and shave is executed with precision and care.",
      image: settingAvif
    },
    right: {
      subtitle: "Where tradition meets modern style",
      headingLine1: "Crafted with precision.",
      headingLine2: "Defined by style.",
      description: "Premium grooming, timeless style and a relaxing atmosphere. From precision cuts to traditional shaves, every service is crafted with attention to detail and tailored to you.",
      image: trimmerAvif
    }
  },
  services: [
    { number: "01", name: "Classic Haircut", description: "A timeless cut tailored to your face, style and personality.", price: "$35" },
    { number: "02", name: "Skin Fade", description: "A precise fade blended seamlessly from skin to your desired length.", price: "$40" },
    { number: "03", name: "Beard Trim", description: "Shape, trim and define your beard for a clean, refined finish.", price: "$25" },
    { number: "04", name: "Hair & Beard", description: "Our complete grooming experience. Haircut paired with a detailed beard trim.", price: "$55" },
    { number: "05", name: "Hot Towel Shave", description: "Traditional straight-razor shave with a warm, relaxing towel treatment.", price: "$35" },
    { number: "06", name: "Hair Styling", description: "Professional styling and finishing for any occasion.", price: "$25" },
    { number: "07", name: "Kids Haircut", description: "Gentle, patient service for our younger gentlemen (under 12).", price: "$25" },
    { number: "08", name: "Seniors Haircut", description: "Classic grooming with a respectful discount for seniors.", price: "$25" },
  ],
  packages: [
    {
      number: "01",
      name: "Silver",
      price: "$55",
      image: joshuaPackageImage,
      description: "Everything you need for a clean, refined look without overcomplicating it.",
      services: ["Classic Haircut", "Beard Trim", "Hair Styling", "Hot Towel Finish"],
      accent: "bg-[#e8e8e8]",
    },
    {
      number: "02",
      name: "Gold",
      price: "$85",
      image: joshuaPackageImage,
      description: "Our complete grooming experience, combining precision, relaxation and style.",
      services: ["Premium Haircut", "Skin Fade", "Beard Sculpting", "Hot Towel Shave", "Hair Styling"],
      accent: "bg-[#d6b36a]",
    },
  ],
  team: [
    { id: "01", name: "Joshua Lawrence", role: "Master Barber", image: teamImage5 },
    { id: "02", name: "Marcus Miller", role: "Senior Barber", image: teamImage1 },
    { id: "03", name: "Daniel Smith", role: "Barber & Stylist", image: teamImage2 },
    { id: "04", name: "Ryan Wilson", role: "Senior Stylist", image: teamImage4 },
  ],
  reviews: [
    { name: "John Gallager", date: "3 weeks ago", review: "Top notch. Enough said. Give a little extra if you appreciate quality." },
    { name: "Michael Kempe", date: "1 month ago", review: "Still the best hairdresser in Perth by far. Great barber shop, friendly quality service and reasonably priced." },
    { name: "SK Krishnan", date: "1 month ago", review: "Haircut was good." },
    { name: "Abu Omar", date: "1 month ago", review: "Good haircut with affordable price. Till I'm in Perth I will go there." },
    { name: "Gabriele", date: "1 month ago", review: "Best barber in town." },
  ],
  gallery: {
    title: "Inside Hammoudi",
    images: [
      { id: 1, src: g1, alt: "Barber Shop Interior 1", colSpan: "col-span-12 md:col-span-8", height: "h-[300px] md:h-[600px]", description: "The Station." },
      { id: 2, src: g2, alt: "Barber Shop Interior 2", colSpan: "col-span-12 md:col-span-4", height: "h-[300px] md:h-[600px]", description: "Tools." },
      { id: 3, src: g3, alt: "Barber Shop Interior 3", colSpan: "col-span-12 md:col-span-5", height: "h-[300px] md:h-[500px]", description: "Details." },
      { id: 4, src: g4, alt: "Barber Shop Interior 4", colSpan: "col-span-12 md:col-span-7", height: "h-[300px] md:h-[500px]", description: "Atmosphere." },
    ],
    closingLine1: "Experience it for yourself.",
    closingLine2: "More from Hammoudi."
  },
  footer: {
    sloganLine1: "Good hair.",
    sloganLine2: "Good mood.",
    sloganLine3: "Good times.",
    addressLine1: "123 Barber Street",
    addressLine2: "Perth, WA 6000",
    phone: "+61 412 345 678",
    email: "hello@hammoudibarber.com",
    hours: [
      { day: "Mon - Wed", time: "9:00 AM - 6:00 PM" },
      { day: "Thu - Fri", time: "9:00 AM - 8:00 PM" },
      { day: "Saturday", time: "8:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  privacy: {
    companyName: "Hammoudi Barber Shop",
    lastUpdated: "October 10, 2023",
    email: "privacy@hammoudibarber.com"
  }
};

const dapperGentData = {
  slug: "dapper-gent",
  businessName: "The Dapper Gent",
  location: "Sydney",
  state: "New South Wales",
  shortLocation: "Sydney",
  logo: null,
  facebookLink: "#",
  googleSearchLink: "#",
  hero: {
    image: g4,
    subtitle: "Classic Cuts",
    titleLine1: "THE DAPPER",
    titleLine2: "GENTLEMAN",
    description: "Refined grooming for the modern man."
  },
  marqueeServices: [
    { iconType: "lucide-scissors", label: "Haircut" },
    { iconType: "lucide-scissors", label: "Fade" },
  ],
  about: {
    subtitle: "Our Story",
    headingLine1: "Quality styling.",
    headingLine2: "Classic vibes.",
    textParagraphs: [
      "Located in the heart of Sydney."
    ],
    closingLine1: "Welcome to The Dapper Gent.",
    closingLine2: "Look sharp.",
    established: "Est. Sydney"
  },
  splitContent: null, // Test missing split content
  services: [
    { number: "01", name: "Standard Cut", description: "Just a cut.", price: "$40" }
  ],
  packages: [], // Test empty packages
  team: [], // Test empty team
  reviews: [], // Test empty reviews
  gallery: {
    title: "Inside Dapper Gent",
    images: [
      { id: 1, src: g1, alt: "Shop", colSpan: "col-span-12", height: "h-[300px]", description: "The Shop." }
    ],
    closingLine1: "Visit us.",
    closingLine2: "More from Dapper Gent."
  },
  footer: {
    sloganLine1: "Stay sharp.",
    sloganLine2: "Look good.",
    sloganLine3: "Feel great.",
    addressLine1: "456 Main St",
    addressLine2: "Sydney, NSW 2000",
    phone: "555-0100",
    email: "hello@dappergent.com",
    hours: [
      { day: "Mon - Fri", time: "10:00 AM - 7:00 PM" }
    ]
  },
  privacy: {
    companyName: "The Dapper Gent",
    lastUpdated: "January 1, 2024",
    email: "privacy@dappergent.com"
  }
};

const fadeAndCoData = {
  slug: "fade-co",
  businessName: "Fade & Co.",
  location: "Melbourne",
  state: "Victoria",
  shortLocation: "Melbourne",
  logo: null,
  facebookLink: "#",
  googleSearchLink: "#",
  hero: {
    image: g3,
    subtitle: "Street Style",
    titleLine1: "FADE",
    titleLine2: "& CO.",
    description: "Fresh fades and sharp lines."
  },
  marqueeServices: [
    { iconType: "lucide-scissors", label: "Haircut" }
  ],
  about: {
    subtitle: "About Us",
    headingLine1: "Melbourne's finest.",
    headingLine2: "Precision fades.",
    textParagraphs: [
      "We specialize in fades."
    ],
    closingLine1: "Fade & Co.",
    closingLine2: "Stay fresh.",
    established: "Est. Melbourne"
  },
  splitContent: null,
  services: [
    { number: "01", name: "Skin Fade", description: "Zero fade.", price: "$45" }
  ],
  packages: [],
  team: [],
  reviews: [],
  gallery: null,
  footer: {
    sloganLine1: "Fades.",
    sloganLine2: "Lines.",
    sloganLine3: "Style.",
    addressLine1: "789 Fade Ave",
    addressLine2: "Melbourne, VIC 3000",
    phone: "555-0101",
    email: "fade@fadeandco.com",
    hours: [
      { day: "Mon - Sat", time: "9:00 AM - 5:00 PM" }
    ]
  },
  privacy: {
    companyName: "Fade & Co.",
    lastUpdated: "Feb 1, 2024",
    email: "fade@fadeandco.com"
  }
};

export const configs = {
  "hammoudi": hammoudiData,
  "dapper-gent": dapperGentData,
  "fade-co": fadeAndCoData
};

export const getDefaultConfig = () => hammoudiData;
