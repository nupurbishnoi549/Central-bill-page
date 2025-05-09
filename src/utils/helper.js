import Card1 from '../assets/images/webp/card1.webp';
import Card2 from '../assets/images/webp/card2.webp';
import Card3 from '../assets/images/webp/card3.webp';
import Card4 from '../assets/images/webp/card4.webp';
import firstEnergy from '../assets/images/webp/first-energy-logo.webp';
import blueNrgLogo from '../assets/images/webp/blue-nrg-logo.webp';
import dodoLogo from '../assets/images/webp/dodo-logo.webp';
import originLogo from '../assets/images/webp/origin-logo.webp';
import ovoLogo from '../assets/images/webp/ovo-logo.webp';
import sumoLogo from '../assets/images/webp/sumo-logo.webp';
import aglLogo from '../assets/images/webp/agl-logo.webp';
import electricitySvg from '../assets/images/svg/electricity.svg';
import gasSvg from '../assets/images/svg/gas.svg';
import internetSvg from '../assets/images/svg/interplan.svg';
import bundleSvg from '../assets/images/svg/bundle.svg';
import starLikeIcon from '../assets/images/svg/starlike.svg';
import simplifiedIcon from '../assets/images/svg/simplified.svg';
import timeIcon from '../assets/images/svg/time.svg';
import noServiceIcon from '../assets/images/svg/no-service.svg';
import supportIcon from '../assets/images/svg/support.svg';
import cameronImage from '../assets/images/svg/cameron.svg';
import ronaldImage from '../assets/images/svg/ronald.svg';
import jayShahImage from '../assets/images/svg/jay-shah.svg';
import LinkDin from '../assets/images/svg/linkdin.svg';
import insta from '../assets/images/svg/insta.svg';
import facebook from '../assets/images/svg/facebook.svg';
import twitter from '../assets/images/svg/twitter.svg';

export const HEADER_LIST = [
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'How It Works',
        link: '#how-it-works'
    },
    {
        title: 'Services',
        link: '#services'
    },
    {
        title: 'Testimonials',
        link: '#testimonials'
    },
    {
        title: 'Why Us',
        link: '#why-us'
    },
    {
        title: 'FAQ',
        link: '#faq'
    },
];

export const LOGOS = [
    { img: firstEnergy, alt: 'first-energy' },
    { img: blueNrgLogo, alt: 'blue-nrg' },
    { img: dodoLogo, alt: 'dodo-logo' },
    { img: originLogo, alt: 'origin-logo' },
    { img: ovoLogo, alt: 'ovo-logo' },
    { img: sumoLogo, alt: 'sumo-logo' },
    { img: aglLogo, alt: 'agl-logo' },
];

export const BENEFITS = [
    'Save money by finding cheaper deals.',
    'Get better customer service.',
    'Explore greener, more sustainable energy options.',
];

export const SIMPLE_STEPS_LIST = [
    {
        img: Card1,
        alt: 'step-location',
        imgContent: '1. Enter Your Location and Preferences',
        title: '1. Your Location',
        description: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },
    {
        img: Card2,
        alt: 'step-compare',
        imgContent: '2. Compare Providers',
        title: '2. Compare',
        description: 'Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum'
    },
    {
        img: Card3,
        alt: 'step-switch-easily',
        imgContent: '3. Switch Easily',
        title: '3. Switch Easily',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
    {
        img: Card4,
        alt: 'step-best-plan',
        imgContent: '4. Choose the Best Plan',
        title: '4. Best Plan',
        description: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },
];
export const planComparisons = [
    {
        id: 1,
        title: 'Electricity Plan Comparisons',
        description: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
        img: electricitySvg,
        marginClass: 'ml-[106px] max-xl:ml-[53px] max-sm:ml-0 max-lg:ml-[253px]',
    },
    {
        id: 2,
        title: 'Gas Plan Comparisons',
        description: 'Compare gas plans to find the best rates and providers for your needs.',
        img: gasSvg,
        marginClass: 'ml-[163px] max-xl:ml-[113px] max-sm:ml-[11px] max-lg:ml-[313px]',
    },
    {
        id: 3,
        title: 'Internet Plan Comparisons',
        description: 'Find the best internet plans with fast speeds and great customer support.',
        img: internetSvg,
        marginClass: 'ml-[127px] max-xl:ml-[78px] max-sm:ml-0 max-lg:ml-[277px]',
    },
    {
        id: 4,
        title: 'Bundle Packages',
        description: 'Get the best value by bundling utilities and services together.',
        img: bundleSvg,
        marginClass: 'ml-[220px] max-xl:ml-[175px] max-sm:ml-[61px] max-lg:ml-[375px]',
    },
];

export const cardData = [
    {
        id: 1,
        img: starLikeIcon,
        title: 'Tailored Recommendations',
        description:
            'Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.',
        isBlueBackground: true,
    },
    {
        id: 2,
        img: simplifiedIcon,
        title: 'Simplified Comparison Process',
        description:
            'Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.',
    },
    {
        id: 3,
        img: timeIcon,
        title: 'Save Time and Money',
        description:
            'With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.',
    },
    {
        id: 4,
        img: noServiceIcon,
        title: 'No Service Interruptions',
        description:
            'We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.',
    },
    {
        id: 5,
        img: supportIcon,
        title: 'Comprehensive Support',
        description:
            'Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.',
    },
];

export const testimonialsData = [
    {
        name: 'Camron',
        username: '@cameron',
        img: cameronImage,
        description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        name: 'Ronald',
        username: '@ronald',
        img: ronaldImage,
        description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        name: 'Jay Shah',
        username: '@jayshah',
        img: jayShahImage,
        description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        name: 'Ronald',
        username: '@ronald',
        img: ronaldImage,
        description: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.',
    },
];


export const faqData = [
    {
        id: 1,
        question: "Can I switch providers if I’m currently in a contract?",
        answer:
            "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        id: 2,
        question: "Will my service be interrupted if I switch providers?",
        answer:
            "Switching is usually seamless, but we recommend coordinating the changeover to avoid any downtime.",
    },
    {
        id: 3,
        question: "How long does it take to switch providers?",
        answer:
            "It typically takes 1–3 business days depending on your location and provider.",
    },
    {
        id: 4,
        question: "Is there a fee for switching providers?",
        answer:
            "Some providers may charge a small fee. Check with both your current and new provider for specifics.",
    },
];

export const quickLinks = [
    "About",
    "How It Works",
    "Services",
    "Testimonials",
    "Why Us",
    "FAQ",
];
export const servicesData = [
    "Privacy Policy",
    "Terms of Services",
];

export const socialLinks = [
    {
        link: "https://in.linkedin.com/",
        img: LinkDin,
        alt: "LinkedIn",
    },
    {
        link: "https://www.instagram.com/",
        img: insta,
        alt: "Instagram",
    },
    {
        link: "https://www.facebook.com/",
        img: facebook,
        alt: "Facebook",
    },
    {
        link: "https://www.twitter.com/",
        img: twitter,
        alt: "Twitter",
    },
]
