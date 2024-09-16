"use client";
import React from 'react';
import BannerOne from '@/Components/Pages/Homes/Home/Banner';
import About from '@/Components/Pages/Homes/Home/About';
import Features from '@/Components/Pages/Homes/Home/Features';
import Portfolio from '@/Components/Pages/Homes/Home/Portfolio';
import Pricing from '@/Components/Pages/Homes/Home/Pricing';
import Blog from '@/Components/Pages/Homes/Home/Blog';
import Testimonial from '@/Components/Pages/Homes/Home/Testimonial';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from '../../common/scroll/scroll-to-top';
import ChooseUs from './choose-us';
import WorkArea from './work';


const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Technology' />
            <HeaderOne />
            <BannerOne />
            <About />
            <ChooseUs/>
            <Features />
            <Portfolio />
            <Pricing />
            <WorkArea/>
            <Testimonial />
            <Blog/>
            <FooterOne/>
            <ScrollToTop/>
        </div>
    );
};

export default HomeOne;