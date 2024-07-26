import React, { useEffect, useState } from 'react'
import logo from "../images/begryp-logo.svg"
import "./Nav.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Button } from '@mui/material'



const Nav = () => {

    // USESTATES

    const [activeNav, setActiveNav] = useState(false)
    const [switchBurger, setSwitchBurger] = useState(false)

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // INITIALIZATIONS

    const theme = createTheme({
        palette: {
            primary: {
                main: "#5EA51D"
            },
            secondary: {
                main: "#06112A"
            }
        }
    })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // USEEFFECTS


    // INTERSECTION OBSERVERS

    useEffect(() => {
        const appearLefts = document.querySelectorAll('.appear-left')
        const appearRights = document.querySelectorAll('.appear-right')
        const appearDowns = document.querySelectorAll('.appear-down')
        const appearUps = document.querySelectorAll('.appear-up')


        const appearLeftsFull = document.querySelectorAll('.appear-left-full')
        const appearRightsFull = document.querySelectorAll('.appear-right-full')
        const appearDownsFull = document.querySelectorAll('.appear-down-full')


        const appearLeftOptions = {
            threshold: 0.2,
        }

        const appearLeftObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearLeftObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearLeftOptions)

        appearLefts.forEach(appearLeft => {
            appearLeftObserver.observe(appearLeft)
        })



        const appearRightOptions = {
            threshold: 0.2,
        }

        const appearRightObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearRightObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearRightOptions)

        appearRights.forEach(appearRight => {
            appearRightObserver.observe(appearRight)
        })

        const appearDownOptions = {
            threshold: 0.2,
        }

        const appearDownObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearDownObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearDownOptions)

        appearDowns.forEach(appearRight => {
            appearDownObserver.observe(appearRight)
        })




        const appearLeftFullOptions = {
            threshold: 0.2,
        }

        const appearLeftFullObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearLeftFullObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearLeftFullOptions)

        appearLeftsFull.forEach(appearLeft => {
            appearLeftFullObserver.observe(appearLeft)
        })

        const appearRightFullOptions = {
            threshold: 0.2,
        }

        const appearRightFullObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearRightFullObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearRightFullOptions)

        appearRightsFull.forEach(appearRight => {
            appearRightFullObserver.observe(appearRight)
        })

        const appearDownFullOptions = {
            threshold: 0.2,
        }

        const appearDownFullObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearDownFullObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearDownFullOptions)

        appearDownsFull.forEach(appearRight => {
            appearDownFullObserver.observe(appearRight)
        })

        const appearUpOptions = {
            threshold: 0.2,
        }

        const appearUpObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    appearDownFullObserver.unobserve(entry.target)
                } else {
                    return
                }
            })
        }, appearUpOptions)

        appearUps.forEach(appearUp => {
            appearUpObserver.observe(appearUp)
        })
    }, [])
    /////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////////////





    // CHANGE NAV BACKGROUND ON SCROLL

    const changeNavBg = () => {
        if (window.scrollY >= 50) {
            setActiveNav(true)
            setSwitchBurger(true)
        } else {
            setActiveNav(false)
            setSwitchBurger(false)
        }
    }


    window.addEventListener('scroll', changeNavBg)

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    // FUNCTIONS

    const burgerToggle = () => {

        const burger = document.querySelector('.nav-container .top-nav .burger')
        const ulDiv = document.querySelector('.nav-container .ul-div');
        const ulDivContainer = document.querySelector('.nav-container .ul-div .ul-div-container');
        const nav_links = document.querySelectorAll('.nav-container .ul-div .ul-div-container ul li');
        const navUl = document.querySelector('.nav-container .ul-div .ul-div-container ul');




        ulDiv.classList.toggle('active-ul-div')
        ulDivContainer.classList.toggle('active-ul-div-container')
        navUl.classList.toggle('active-nav-ul')


        nav_links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `nav-link-fade 0.5s ease forwards`; //${index / 7 + 0.3}s
            }
        });

        burger.classList.toggle('burger-toggle')

    }

    const scrollSection = () => {
        const calendlyContainer = document.querySelector('.home-container .cta-section .calendly-container')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = calendlyContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)

        const ulDiv = document.querySelector('.nav-container .ul-div');
        const ulDivContainer = document.querySelector('.nav-container .ul-div .ul-div-container');
        const navUl = document.querySelector('.nav-container .ul-div .ul-div-container ul');
        const burger = document.querySelector('.nav-container .top-nav .burger')


        ulDiv.classList.remove('active-ul-div')
        ulDivContainer.classList.remove('active-ul-div-container')
        navUl.classList.remove('active-nav-ul')
        burger.classList.remove('burger-toggle')

    }

    const scrollAbout = () => {
        const aboutContainer = document.querySelector('.home-container .about-section')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = aboutContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)

        const ulDiv = document.querySelector('.nav-container .ul-div');
        const ulDivContainer = document.querySelector('.nav-container .ul-div .ul-div-container');
        const navUl = document.querySelector('.nav-container .ul-div .ul-div-container ul');
        const burger = document.querySelector('.nav-container .top-nav .burger')


        ulDiv.classList.remove('active-ul-div')
        ulDivContainer.classList.remove('active-ul-div-container')
        navUl.classList.remove('active-nav-ul')
        burger.classList.remove('burger-toggle')
    }

    const scrollContact = () => {
        const contactContainer = document.querySelector('.home-container .contact-section')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = contactContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)

        const ulDiv = document.querySelector('.nav-container .ul-div');
        const ulDivContainer = document.querySelector('.nav-container .ul-div .ul-div-container');
        const navUl = document.querySelector('.nav-container .ul-div .ul-div-container ul');
        const burger = document.querySelector('.nav-container .top-nav .burger')


        ulDiv.classList.remove('active-ul-div')
        ulDivContainer.classList.remove('active-ul-div-container')
        navUl.classList.remove('active-nav-ul')
        burger.classList.remove('burger-toggle')
    }
    
    const scrollServices = () => {
        const servicesContainer = document.querySelector('.home-container .services-section')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = servicesContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)

        const ulDiv = document.querySelector('.nav-container .ul-div');
        const ulDivContainer = document.querySelector('.nav-container .ul-div .ul-div-container');
        const navUl = document.querySelector('.nav-container .ul-div .ul-div-container ul');
        const burger = document.querySelector('.nav-container .top-nav .burger')


        ulDiv.classList.remove('active-ul-div')
        ulDivContainer.classList.remove('active-ul-div-container')
        navUl.classList.remove('active-nav-ul')
        burger.classList.remove('burger-toggle')
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <ThemeProvider theme={theme}>
            <nav className={activeNav ? 'nav-container active' : 'nav-container'}>

                <div className="ribbon"></div>


                <div className="top-nav">
                    <div className="logo-ul">
                        <a href=''><img src={logo} className="logo" alt="Begryp Logo" loading='lazy' /></a>

                        <ul className="top-nav-ul">
                            <li onClick={scrollServices}><a className='major-a'>Services</a></li>
                            <li onClick={scrollAbout}><a className='major-a'>About</a></li>
                            <li onClick={scrollContact}><a className='major-a'>Contact</a></li>
                        </ul>
                    </div>

                    <div className="soc-burger">

                        <a onClick={scrollSection} className='cta-a appear-right'>Book <span>A</span> Call</a>


                        <svg className="burger" onClick={burgerToggle} width="55" height="29" viewBox="0 0 55 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5.96289" width="48.3333" height="5.37037" rx="2.68519" fill="currentColor" />
                            <rect x="0.592773" y="11.8148" width="48.3333" height="5.37037" rx="2.68519" fill="#011B25" />
                            <rect x="5.96289" y="23.6296" width="48.3333" height="5.37037" rx="2.68519" fill="#011B25" />
                        </svg>
                    </div>


                </div>

                <div style={{ position: "relative", width: "100%" }}>
                    <div className="ul-div">
                        <div className="ul-div-container">
                            <ul>
                                <li onClick={scrollServices}><a className='major-a'>Services</a></li>
                                <li onClick={scrollAbout}><a className='major-a'>About</a></li>
                                <li onClick={scrollContact}><a className='major-a'>Contact</a></li>
                                <li><Button variant='contained' color='primary' onClick={scrollSection} className='book-btn'>Book&nbsp;<span>A</span>&nbsp;Call</Button></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </nav>
        </ThemeProvider>
    )
}

export default Nav