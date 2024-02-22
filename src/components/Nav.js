import { useState, useEffect } from 'react'
import logo from "../images/begryp-logo.svg"
import logoWhite from "../images/logo-white.svg"
import "./Nav.css"

const Nav = () => {
    // USESTATES

    const [activeNav, setActiveNav] = useState(false)

    ////////////////////////////////////////////////////////////////////////////////////////////////

    // INITIALIZATIONS




    ///////////////////////////////////////////////////////////////////////////////////////////////////////


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
        }, appearDownFullOptions)

        appearUps.forEach(appearUp => {
            appearUpObserver.observe(appearUp)
        })
    }, [])

    /////////////////////////////////////////////////////////////////




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // FUNCTIONS

    // FIX NAV ON SCROLL

    const changeNavBg = () => {
        if (window.scrollY >= 50) {
            setActiveNav(true)
        } else {
            setActiveNav(false)
        }
    }


    window.addEventListener('scroll', changeNavBg)

    const scrollSection = () => {
        const calendlyContainer = document.querySelector('.home-container .cta-section .calendly-container')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = calendlyContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <nav className={activeNav ? 'nav-container active' : 'nav-container'}>
            <img src={activeNav ? logo : logo} alt="" className="logo appear-up" />

            <a onClick={scrollSection} className='appear-right'>Claim <span>Free</span> AI Audit</a>

        </nav>
    )
}

export default Nav