import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { nikethor, nikehulk, nikeironman, customer1, customer2, customer3, nikeloki, nikeblackpanther, nikegroot, nikespiderman } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: nikethor,
        bigShoe: nikethor,
    },
    {
        thumbnail: nikehulk,
        bigShoe: nikehulk,
    },
    {
        thumbnail: nikeironman,
        bigShoe: nikeironman,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: nikeloki,
        name: "Nike Loki",
        price: "$299.99",
    },
    {
        imgURL: nikeblackpanther,
        name: "Nike BlackPanther",
        price: "$299.99",
    },
    {
        imgURL: nikegroot,
        name: "Nike Groot",
        price: "$299.99",
    },
    {
        imgURL: nikespiderman,
        name: "Nike SpiderMan",
        price: "$299.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.9,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer3,
        customerName: 'Dr. Bruce Banner',
        rating: 5,
        feedback: "The comfort and support they provide are remarkable, especially during my calmer, non-Hulk moments."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+1 909-677-8888", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

