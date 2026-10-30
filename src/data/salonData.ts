export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: 'hair' | 'skin' | 'body' | 'nails';
  tag: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  description: string;
  service: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Masa Health Club",
  phone: "03078865865",
  phoneFormatted: "+92 307 8865865",
  whatsappUrl: "https://wa.me/923078865865?text=Hello%20Masa%20Health%20Club%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20book%20an%20appointment.",
  address: "The Orion, 8-G, Shop No 6 Jaranwala Rd, Kohinoor City Faisalabad.",
  email: "info@masahealthclub.com",
  hours: "Mon - Sat : 11: 00 AM – 9:00 PM",
  type: "Health and beauty shop",
  website: "https://masahealthclub.com/",
  gmbLink: "https://maps.app.goo.gl/VaghJsVdBmUwW4BC9",
  keywordGmbLink: "https://maps.app.goo.gl/6hZrbfsRf4qstzpM8",
  logo: "/assets/aistudio/Masa_Health_Club_60ff2c35.png",
  aboutUsDescription: "Welcome to Masa Health Club, a premier health and beauty shop located at The Orion in Kohinoor City Faisalabad, Punjab. We take pride in delivering elevated beauty salon experiences, restorative facial treatments, contemporary hair styling, professional waxing, soothing manicures, revitalizing body polishing, organic herbal facials, precision hair trimming, eyebrow threading, and nutritive hair oiling treatments. Refresh your personal aesthetic and feel genuinely restored in our tranquil, sanitized atmosphere.",
  footerDescription: "Masa Health Club is Kohinoor City Faisalabad's dedicated health and beauty sanctuary, offering bespoke haircuts, restorative herbal facials, therapeutic body polishing, and luxury manicures in a calming space."
};

export const BANNER_SLIDES = [
  {
    id: "slide-1",
    title: "Artisanal Hairstyling & Master Cuts",
    subtitle: "Precision, Elegance & Modern Aesthetics",
    description: "Transform your hair with tailored cuts, volumizing blowouts, and restorative oil therapies designed by certified hair artisans.",
    image: "https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ctaText: "Explore Hair Services",
    serviceTarget: "hair"
  },
  {
    id: "slide-2",
    title: "Therapeutic Pedicure & Foot Care",
    subtitle: "Pamper Your Feet with Clinical Hygiene",
    description: "Experience botanical foot soaks, gentle dead-skin exfoliation, cuticle repair, and deeply relaxing acupressure foot massage.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ctaText: "Discover Pedicures",
    serviceTarget: "nails"
  },
  {
    id: "slide-3",
    title: "Luxury Beauty Salon Services",
    subtitle: "Complete Head-to-Toe Self-Care",
    description: "Indulge in complete bridal makeovers, soothing body polishing, organic waxing, and rejuvenating wellness rituals in Faisalabad.",
    image: "https://plus.unsplash.com/premium_photo-1661963320607-aebac6fcb40d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ctaText: "View Full Menu",
    serviceTarget: "all"
  },
  {
    id: "slide-4",
    title: "Rejuvenating Facial Treatment Services",
    subtitle: "Radiant, Youthful & Clarified Complexion",
    description: "Deep pore extractions, organic herbal facials, lymphatic stimulation, and moisture-infusion treatments for enduring dermal glow.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    ctaText: "Book Facial Therapy",
    serviceTarget: "skin"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "service-1",
    title: "Hairstylin",
    image: "https://images.unsplash.com/photo-1673465766620-1f336d434bff?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Elevate your everyday appearance with custom hair styling, precision layered cuts, and bouncy blow-dries tailored to frame your facial contours gracefully with long-lasting silkiness.",
    category: "hair",
    tag: "Signature Styling"
  },
  {
    id: "service-2",
    title: "Pedicure",
    image: "https://plus.unsplash.com/premium_photo-1661499249417-c20d6b668469?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Revive tired soles with therapeutic foot scrubs, deep callus softening, cuticle care, herbal soaking salts, and an invigorating reflexology foot massage that restores light step comfort.",
    category: "nails",
    tag: "Foot Therapy"
  },
  {
    id: "service-3",
    title: "Beauty Salon Services",
    image: "https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Comprehensive head-to-toe grooming designed for contemporary men and women, featuring clean threading, tinting, bridal preparations, and tailored aesthetics inside a sterilized private lounge.",
    category: "body",
    tag: "Full Grooming"
  },
  {
    id: "service-4",
    title: "Facial Treatment Services",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Restore youthfulness and clarity with specialized deep cleansing, gentle extractions, botanical masks, and ultrasonic hydration that leave your complexion noticeably radiant, supple, and healthy.",
    category: "skin",
    tag: "Skin Renewal"
  },
  {
    id: "service-5",
    title: "Hair Styling Services",
    image: "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "From sleek iron straightening to romantic curls, up-dos, and voluminous blowouts, our certified stylists create picture-perfect party and event styles that maintain elegance for hours.",
    category: "hair",
    tag: "Event & Party"
  },
  {
    id: "service-6",
    title: "Professional Waxing Services",
    image: "https://images.unsplash.com/photo-1715848503470-9fa455906001?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Enjoy silky touchable skin with gentle organic peel waxes formulated for sensitive skin types, removing stubborn hairs cleanly from roots with minimal discomfort and lasting smoothness.",
    category: "body",
    tag: "Smooth Skin"
  },
  {
    id: "service-7",
    title: "Body Polishing Services",
    image: "https://plus.unsplash.com/premium_photo-1679522617451-30ad4b62cf84?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Indulge in a full-body crystal scrub and essential oil wrap that gently sheds dull skin cells, improves microcirculation, and infuses essential nutrients for an irresistible all-over glow.",
    category: "body",
    tag: "Spa Glow"
  },
  {
    id: "service-8",
    title: "Herbal Facial Treatment Services",
    image: "https://images.unsplash.com/photo-1713824096348-c1956e6da321?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description: "Harness time-tested botanical extracts, neem, aloe vera, and turmeric formulations to calm acne inflammation, balance excess oil, and unveil deeply nourished, luminous natural skin.",
    category: "skin",
    tag: "Organic Pure"
  }
];

export const ABOUT_US_IMAGE = "https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
export const WHY_CHOOSE_US_IMAGE = "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
export const FAQ_IMAGE = "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    name: "Ayesha Tariq",
    location: "Kohinoor City, Faisalabad",
    rating: 5,
    service: "Herbal Facial & Body Polishing",
    description: "Masa Health Club provides the most relaxing beauty experience in Faisalabad. The herbal facial left my skin clear and glowing for weeks. The salon is spotless, and their staff is extremely polite and hygienic."
  },
  {
    id: "review-2",
    name: "Bilal Ahmed",
    location: "Canal Road, Faisalabad",
    rating: 5,
    service: "Hair Styling & Hair Oiling",
    description: "Superb hair trimming and traditional oil massage treatment. The ambiance at The Orion is quiet and upscale. You can immediately feel the difference in the quality of products they use on your scalp."
  },
  {
    id: "review-3",
    name: "Fatima Zahra",
    location: "People's Colony, Faisalabad",
    rating: 5,
    service: "Pedicure & Manicure",
    description: "The best pedicure I have had in Kohinoor City. Every single instrument was sterilized right before use, and the massage chairs are so comfortable. Truly five-star service at honest prices!"
  },
  {
    id: "review-4",
    name: "Usman Ali",
    location: "Jaranwala Road, Faisalabad",
    rating: 5,
    service: "Facial Treatment & Grooming",
    description: "I booked an appointment before my brother's wedding and was blown away. The facial treatment cleaned out all blackheads without leaving any red marks. Their team knows dermatology and skin types well."
  },
  {
    id: "review-5",
    name: "Hina Salman",
    location: "Madina Town, Faisalabad",
    rating: 5,
    service: "Professional Waxing & Threading",
    description: "Very smooth and virtually painless waxing session. The aesthetician took her time and made sure I felt comfortable throughout. Masa Health Club has become my go-to salon in Kohinoor City."
  },
  {
    id: "review-6",
    name: "Hamza Malik",
    location: "D-Ground, Faisalabad",
    rating: 5,
    service: "Body Polishing & Reflexology",
    description: "Exceptional body polishing and therapeutic relaxation. It melted away all work stress. The location at The Orion is easy to access with great parking. Highly recommended to everyone!"
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What beauty and health services are offered at Masa Health Club in Faisalabad?",
    answer: "Masa Health Club provides a complete spectrum of head-to-toe wellness and grooming services including modern hair styling, organic herbal facials, deep cleansing dermal facials, therapeutic pedicures, manicures, professional waxing, full body polishing, precision eyebrow threading, and herbal hair oiling treatments."
  },
  {
    id: "faq-2",
    question: "Where is Masa Health Club located and what are the opening hours?",
    answer: "We are located at The Orion, 8-G, Shop No 6 Jaranwala Rd, Kohinoor City Faisalabad. Our business hours are Monday through Saturday from 11:00 AM to 9:00 PM. We are closed on Sundays."
  },
  {
    id: "faq-3",
    question: "Do I need to book an advance appointment or do you accept walk-in clients?",
    answer: "While we warmly welcome walk-in visitors subject to salon chair availability, we strongly recommend booking your slot in advance via phone call (03078865865) or WhatsApp message to guarantee zero waiting time and personalized dedicated attention from our senior specialists."
  },
  {
    id: "faq-4",
    question: "What hygiene and sanitation protocols are practiced at Masa Health Club?",
    answer: "Client safety and cleanliness are our highest priorities. All metal instruments undergo clinical medical-grade ultraviolet and heat sterilization between sessions. Disposable sheets, sanitized towels, and single-use applicator kits are utilized for all waxing and facial procedures."
  },
  {
    id: "faq-5",
    question: "Are your facial treatments and body polishing suitable for sensitive skin?",
    answer: "Yes, our certified skin specialists conduct a complimentary skin assessment prior to every treatment. We use hypoallergenic, dermatologist-tested, and organic botanical extracts specifically formulated to soothe redness, prevent irritation, and nourish delicate skin barriers."
  },
  {
    id: "faq-6",
    question: "How can I get a custom price quote or corporate group booking?",
    answer: "You can click any 'Get a Free Quote' or 'Get A Quote' button on our website to access our Google Business listing, or submit our online Request A Quote form. You can also chat directly with our manager on WhatsApp at 03078865865 for bridal and package rates."
  }
];

export const STATS_COUNTERS = [
  { value: "2,500+", label: "Happy Clients", iconName: "Users" },
  { value: "15+", label: "Expert Beauticians", iconName: "Award" },
  { value: "25+", label: "Health & Beauty Services", iconName: "Sparkles" },
  { value: "8+", label: "Years of Excellence", iconName: "Clock" }
];
