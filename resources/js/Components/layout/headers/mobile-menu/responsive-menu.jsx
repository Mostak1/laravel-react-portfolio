"use client"
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link className='link' href={route('home')}>Home</Link>
                    {/* <ul className='sub-menu' style={activeSubMenu("home")}>
                        <li><Link className='link' href={route('home')}>Home</Link></li>
                        <li><Link className='link' href="/home-two">Home 02</Link></li>
                        <li><Link className='link' href="/home-three">Home 03</Link></li>
                        <li><Link className='link' href="/home-four">Home 04</Link></li>
                        <li><Link className='link' href="/home-five">Home 05</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a> */}
                </li>  
                <li className='menu-item-has-children'>
                    <Link className='link' href={route('project')}>Project</Link>
                    {/* <ul className='sub-menu' style={activeSubMenu("pages")}>
                        <li><Link className='link' href="/about">About Us</Link></li>
                        <li><Link className='link' href="/testimonial">Testimonials</Link></li>
                        <li><Link className='link' href="/pricing-plan">Pricing Plan</Link></li>
                        <li className='menu-item-has-children'><Link className='link' href='#'>Teams</Link>
                            <ul className='sub-menu' style={activeSubMenus("team")}>
                                <li><Link className='link' href="/team">Team Style 01</Link></li>
                                <li><Link className='link' href="/team-two">Team Style 02</Link></li>
                            </ul>
                            <a className={`mean-expand ${activeIcons("team")}`} onClick={() => actives("team")}></a>
                        </li>
                            <li><Link className='link' href="/request-quote">Request Quote</Link></li>
                            <li><Link className='link' href="/404">404</Link></li>
                        </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a> */}
                </li>
                {/* <li className='menu-item-has-children'><Link className='link' href='#'>Services</Link>
                    <ul className='sub-menu' style={activeSubMenu("services")}>
                        <li><Link className='link' href="/services">Services 01</Link></li>
                        <li><Link className='link' href="/services-two">Services 02</Link></li>
                        <li><Link className='link' href="/services/data-analytics">Services Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
                </li>
                <li className='menu-item-has-children'><Link className='link' href='#'>Project</Link>
                    <ul className='sub-menu' style={activeSubMenu("project")}>
                        <li><Link className='link' href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link className='link' href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link className='link' href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
                </li>
                <li className='menu-item-has-children'><Link className='link' href='#'>Blog</Link>
                    <ul className='sub-menu' style={activeSubMenu("blog")}>
                        <li><Link className='link' href="/blog">Blog Grid</Link></li>
                        <li><Link className='link' href="/blog-standard">Blog Standard</Link></li>
                        <li><Link className='link' href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
                </li> */}
                <li><Link className='link' href={route('contact')}>Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;