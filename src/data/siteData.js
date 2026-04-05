export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Imba Manor Wedding & Conference Venue",
    legalName: "Imba Manor Wedding & Conference Venue",
    tagline: "Where Love Stories and Big Ideas Come to Life",
    description: "Imba Manor is Harare's beloved wedding and conference venue, set in manicured gardens with elegant indoor and outdoor event spaces. With over 136 reviews, we are one of Zimbabwe's most-reviewed venues.",
    phone: "+263 77 108 1903",
    phoneRaw: "+263771081903",
    whatsappNumber: "263771081903",
    email: "imbamanorweddingconferencevenue@gmail.com",
    address: "1 Worpleston Way, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 3.7,
    ratingRounded: 4,
    reviewCount: 136,
    established: "2016",
    yearsExperience: "9+",
    projectsCompleted: "500+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "imba-manor-wedding-conference-venue-cookie-consent",
    socialLinks: { facebook: "https://www.facebook.com/imbamanorweddingsandevents/videos/about-yesterdays-wedding/913249559548931/", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Imba", logoLine2: "Manor Wedding & Conference Venue" },

  hero: {
    badge: "Harare's Beloved Wedding & Conference Venue",
    titleParts: [
      { text: "WHERE DREAMS " },
      { text: "BECOME", highlight: true },
      { text: " REALITY." },
    ],
    subtitle: "500+ events hosted. 136 Google reviews. Set in beautiful gardens on Worpleston Way, Imba Manor is where Harare's most cherished moments unfold.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "350+ Events Styled",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "350+", label: "Events Styled" },
    { number: "7+", label: "Years of Excellence" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Corporate Partners" },
  ],

  servicesPreview: [
    { title: "Wedding Design", desc: "From intimate garden ceremonies to grand ballroom receptions, we craft wedding environments that celebrate your unique love story with elegance and creativity.", icon: "Heart" },
    { title: "Corporate Events", desc: "Elevate your brand presence with sophisticated event styling that communicates authority, innovation, and impeccable taste to every attendee.", icon: "Briefcase" },
    { title: "Birthday Celebrations", desc: "Whether a milestone 50th or a magical sweet sixteen, we create birthday atmospheres that make the guest of honour feel extraordinary.", icon: "Star" },
    { title: "Conference Styling", desc: "Transform conference halls into inspiring environments that energize delegates and reinforce your organizational narrative.", icon: "Buildings" },
    { title: "Floral Artistry", desc: "Our botanical artists compose living sculptures from cascading centerpieces to architectural installations that redefine what flowers can become.", icon: "Leaf" },
    { title: "Custom Installations", desc: "Bespoke structural designs for the extraordinary. Suspended gardens, light sculptures, and immersive entrance experiences.", icon: "Lightbulb" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Wedding Design", slug: "wedding-design", desc: "From intimate garden ceremonies to grand ballroom receptions, we craft wedding environments that celebrate your unique love story with elegance and creativity.", features: ["Ceremony Backdrops", "Reception Styling", "Bridal Table Design", "Aisle Decor", "Lighting Design", "Linen & Draping"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
      { title: "Corporate Events", slug: "corporate-events", desc: "Elevate your brand presence with sophisticated event styling that communicates authority, innovation, and impeccable taste to every attendee.", features: ["Brand Integration", "Stage Design", "VIP Lounges", "Networking Spaces", "Award Ceremonies", "Product Launches"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
      { title: "Birthday Celebrations", slug: "birthday-celebrations", desc: "Whether a milestone 50th or a magical sweet sixteen, we create birthday atmospheres that make the guest of honour feel extraordinary.", features: ["Theme Development", "Balloon Artistry", "Cake Table Styling", "Photo Zones", "Lighting Effects", "Party Favours"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" },
      { title: "Conference Styling", slug: "conference-styling", desc: "Transform conference halls into inspiring environments that energize delegates and reinforce your organizational narrative.", features: ["Registration Design", "Stage Backdrops", "Breakout Styling", "Exhibition Stands", "Delegate Kits", "Signage"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
      { title: "Floral Artistry", slug: "floral-artistry", desc: "Our botanical artists compose living sculptures from cascading centerpieces to architectural installations that redefine what flowers can become.", features: ["Bridal Bouquets", "Centerpiece Design", "Hanging Installations", "Arch Florals", "Venue Florals", "Corsages"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
      { title: "Custom Installations", slug: "custom-installations", desc: "Bespoke structural designs for the extraordinary. Suspended gardens, light sculptures, and immersive entrance experiences.", features: ["Suspended Gardens", "Light Sculptures", "Entrance Experiences", "Ceiling Installations", "Interactive Displays", "Draping"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Wedding", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Corporate", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Birthday", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Cultural", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Wedding", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Corporate", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Wedding Design", "Corporate Events"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "They transformed our wedding into something from a magazine. Every guest commented on how beautiful the decor was. The attention to detail was extraordinary.", name: "Tendai Moyo", role: "Bride, Harare Wedding", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "We have used them for three consecutive corporate dinners and each year they outdo themselves. The creativity and professionalism is unmatched.", name: "James Karonga", role: "CEO, Harare Holdings", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "My daughter's traditional wedding was the most beautiful ceremony our family has ever witnessed. They honoured our culture while adding modern elegance.", name: "Grace Chikwanha", role: "Mother of the Bride", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "The floral installations at our gala were living art. They understand that corporate events need sophistication without being stuffy.", name: "Patrick Mhembere", role: "Marketing Director", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "They transformed our wedding into something from a magazine. Every guest commented on how beautiful the decor was. The attention to detail was extraordinary.", name: "Tendai Moyo", role: "Bride, Harare Wedding", rating: 5 },
      { text: "We have used them for three consecutive corporate dinners and each year they outdo themselves. The creativity and professionalism is unmatched.", name: "James Karonga", role: "CEO, Harare Holdings", rating: 5 },
      { text: "My daughter's traditional wedding was the most beautiful ceremony our family has ever witnessed. They honoured our culture while adding modern elegance.", name: "Grace Chikwanha", role: "Mother of the Bride", rating: 5 },
      { text: "The floral installations at our gala were living art. They understand that corporate events need sophistication without being stuffy.", name: "Patrick Mhembere", role: "Marketing Director", rating: 5 },
      { text: "From concept to execution, they delivered beyond our expectations. The birthday party was absolutely magical.", name: "Rumbidzai Sande", role: "Birthday Celebrant", rating: 5 },
      { text: "Their ability to blend African aesthetics with modern event design is what sets them apart from every other company.", name: "Thomas Chirinda", role: "Event Planner", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Imba Manor was established in 2016 on Worpleston Way with a vision to create a venue worthy of life's most important moments. Our manicured gardens, elegant halls, and dedicated events team have made us one of Harare's most popular venues.",
      "With 136 Google reviews and a reputation for exceptional service, Imba Manor has hosted everything from intimate garden weddings to large-scale corporate conferences.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Imba Manor Wedding & Conference Venue on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "1 Worpleston Way, Harare, Zimbabwe", phone: "+263 77 108 1903", email: "imbamanorweddingconferencevenue@gmail.com" },
    ],
  },

  homeCta: {
    title: "BOOK YOUR\nPERFECT DAY",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Imba Manor Wedding & Conference Venue! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85",
  },

  footer: {
    description: "Imba Manor is Harare's beloved wedding and conference venue, set in manicured gardens with elegant indoor and outdoor ev...",
    copyright: "Imba Manor Wedding & Conference Venue",
  },
};

export default siteData;
