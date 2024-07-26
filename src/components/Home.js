import { useState, useEffect } from 'react'
import "./Home.css"
import Nav from "./Nav.js"
import funkyLines from "../images/funky-lines.png"
import { Button, TextField } from '@mui/material'
import callIcon from '../images/call-icon.png'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import begrypGrowthWatermark from "../images/begryp-growth-watermark.png"
import doodle1 from "../images/doodle1.png"
import doodle2 from "../images/doodle2.png"
import doodle3 from "../images/doodle3.png"
import curvyAbstract from "../images/curvy-abstract.png"
import peeping from "../images/peeping.png"
import { InlineWidget } from "react-calendly";
import sendIcon from "../images/send-icon.png"
import plainLogo from "../images/plain-logo.png"
import emailIcon from "../images/email-icon.png"
import aiMesh from "../images/ai-mesh.svg"



const Home = () => {


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


    // TYPEWRITING EFFECT

    useEffect(() => {
        const dynamicText = document.querySelector(".home-container .hero-section .hero-content .hero-title .typewriter");
        const words = ['Technology', 'AI', 'Automations', 'Systems'];

        // Variables to track the position and deletion status of the word
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        let i = 0

        const typeEffect = () => {

            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.classList.add("stop-blinking");

            if (!isDeleting && charIndex < currentWord.length) {
                // If condition is true, type the next character
                charIndex++;
                setTimeout(typeEffect, 100);
            } else if (isDeleting && charIndex > 0) {
                // If condition is true, remove the previous character
                charIndex--;
                setTimeout(typeEffect, 100);
            } else if (isDeleting && charIndex == 0) {
                // If word is deleted then switch to the next word
                i++
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking");

                dynamicText.textContent = '|';

                // setTimeout(() => {
                //     dynamicText.textContent = '';
                // }, 1200);


                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(() => {
                    typeEffect()
                }, 1200);

            } else {
                // If word is deleted then switch to the next word
                i++
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking");

                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(() => {
                    typeEffect()
                }, 1200);

            }



        }




        typeEffect();
    }, [])


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


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // FUNCTIONS

    const scrollSection = () => {
        const calendlyContainer = document.querySelector('.home-container .cta-section .calendly-container')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = calendlyContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight;

        window.scrollTo(0, verticalPosition - navHeight)
    }


    const scrollChat = () => {
        const serviceContainer = document.querySelector('.home-container .services-section .services-container .service1')
        console.log("Here's the service container: ",serviceContainer)
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = serviceContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight + 15;

        window.scrollTo(0, verticalPosition - navHeight)
    }

    const scrollPhone = () => {
        const serviceContainer = document.querySelector('.home-container .services-section .services-container .service2')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = serviceContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight + 15;

        window.scrollTo(0, verticalPosition - navHeight)
    }

    const scrollAutomations = () => {
        const serviceContainer = document.querySelector('.home-container .services-section .services-container .service3')
        const bodyRect = document.body.getBoundingClientRect()
        const elementRect = serviceContainer.getBoundingClientRect()

        const navContainer = document.querySelector('.nav-container')

        let verticalPosition = elementRect.top - bodyRect.top
        let navHeight = navContainer.offsetHeight + 15;

        window.scrollTo(0, verticalPosition - navHeight)
    }

    





    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <ThemeProvider theme={theme}>
            <div className='home-container' style={{ background: `url(${funkyLines}), repeat`, backgroundSize: "200px" }}>
                <Nav />

                <section className="section hero-section">

                    <img src={begrypGrowthWatermark} alt="" className="hero-watermark" />
                    <svg width="591" height="517" viewBox="0 0 591 517" className="hero-growth" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 19">
                            <g id="leaf1">
                                <path id="Vector" d="M425.634 510.031C416.641 502.432 411.179 490.428 412.611 478.743C414.044 467.057 422.916 456.314 434.424 453.833C445.933 451.351 459.052 458.221 462.548 469.463C464.471 447.788 466.688 425.206 478.212 406.748C488.646 390.035 506.718 378.076 526.305 375.936C545.891 373.797 566.513 381.877 578.728 397.337C590.944 412.796 593.935 435.271 585.379 453.019C579.077 466.094 567.466 475.824 555.3 483.74C515.988 509.105 468.839 519.42 422.528 512.787" fill="#F2F2F2" />
                                <path id="Vector_2" d="M559.36 382.325C543.199 395.489 528.373 410.211 515.096 426.279C494.318 451.34 477.504 479.438 465.24 509.593C464.342 511.793 467.915 512.751 468.803 510.576C488.868 461.566 520.901 418.37 561.972 384.938C563.817 383.436 561.189 380.836 559.36 382.325Z" fill="white" />
                            </g>
                            <path id="rect1" d="M99.8376 515.232H48.8376C47.1143 515.23 45.4622 514.544 44.2436 513.326C43.0251 512.107 42.3396 510.455 42.3376 508.732V402.732C42.3396 401.008 43.0251 399.356 44.2436 398.138C45.4622 396.919 47.1143 396.234 48.8376 396.232H99.8376C101.561 396.234 103.213 396.919 104.432 398.138C105.65 399.356 106.336 401.008 106.338 402.732V508.732C106.336 510.455 105.65 512.107 104.432 513.326C103.213 514.544 101.561 515.23 99.8376 515.232Z" fill="#5EA51D" />
                            <path id="rect2" d="M220.838 516.232H169.838C167.849 516.229 165.943 515.439 164.537 514.033C163.131 512.626 162.34 510.72 162.338 508.732V302.732C162.34 300.743 163.131 298.837 164.537 297.431C165.943 296.025 167.849 295.234 169.838 295.232H220.838C222.826 295.234 224.733 296.025 226.139 297.431C227.545 298.837 228.336 300.743 228.338 302.732V508.732C228.336 510.72 227.545 512.626 226.139 514.033C224.733 515.439 222.826 516.229 220.838 516.232ZM169.838 297.232C168.38 297.233 166.982 297.813 165.951 298.844C164.92 299.875 164.34 301.273 164.338 302.732V508.732C164.34 510.19 164.92 511.588 165.951 512.619C166.982 513.65 168.38 514.23 169.838 514.232H220.838C222.296 514.23 223.694 513.65 224.725 512.619C225.756 511.588 226.336 510.19 226.338 508.732V302.732C226.336 301.273 225.756 299.875 224.725 298.844C223.694 297.813 222.296 297.233 220.838 297.232H169.838Z" fill="#3F3D56" />
                            <path id="rect3" d="M341.838 516.232H290.838C288.849 516.229 286.943 515.439 285.537 514.033C284.131 512.626 283.34 510.72 283.338 508.732V171.732C283.34 169.743 284.131 167.837 285.537 166.431C286.943 165.025 288.849 164.234 290.838 164.232H341.838C343.826 164.234 345.733 165.025 347.139 166.431C348.545 167.837 349.335 169.743 349.338 171.732V508.732C349.335 510.72 348.545 512.626 347.139 514.033C345.733 515.439 343.826 516.229 341.838 516.232ZM290.838 166.232C289.379 166.233 287.981 166.813 286.95 167.844C285.919 168.875 285.339 170.273 285.338 171.732V508.732C285.339 510.19 285.919 511.588 286.95 512.619C287.981 513.65 289.379 514.23 290.838 514.232H341.838C343.296 514.23 344.694 513.65 345.725 512.619C346.756 511.588 347.336 510.19 347.338 508.732V171.732C347.336 170.273 346.756 168.875 345.725 167.844C344.694 166.813 343.296 166.233 341.838 166.232H290.838Z" fill="#3F3D56" />
                            <path id="rect4" d="M463.967 515.732H412.967C411.244 515.73 409.592 515.044 408.373 513.826C407.154 512.607 406.469 510.955 406.467 509.232V34.2316C406.469 32.5083 407.154 30.8562 408.373 29.6376C409.592 28.4191 411.244 27.7336 412.967 27.7316H463.967C465.69 27.7336 467.342 28.4191 468.561 29.6376C469.78 30.8562 470.465 32.5083 470.467 34.2316V509.232C470.465 510.955 469.78 512.607 468.561 513.826C467.342 515.044 465.69 515.73 463.967 515.732Z" fill="#5EA51D" />
                            <path id="Vector_3" d="M62.201 389.377L74.461 389.376L80.293 342.088L62.199 342.089L62.201 389.377Z" fill="#A0616A" />
                            <path id="Vector_4" d="M98.1055 400.759L59.5747 400.761L59.5741 385.874L83.2179 385.873C87.1662 385.873 90.9528 387.441 93.7447 390.233C96.5367 393.025 98.1053 396.811 98.1055 400.759Z" fill="#2F2E41" />
                            <path id="Vector_5" d="M99.021 204.941C99.021 204.941 105.021 262.941 90.021 302.941L79.021 378.941H60.021L62.021 288.941L55.021 208.941C55.021 208.941 69.021 172.941 99.021 204.941Z" fill="#2F2E41" />
                            <g id="leg1">
                                <path id="Vector_6" d="M9.81592 351.113L19.7169 358.342L52.3119 323.589L37.6979 312.92L9.81592 351.113Z" fill="#A0616A" />
                                <path id="Vector_7" d="M32.101 381.478L0.981099 358.758L9.75901 346.735L28.8554 360.676C32.0442 363.004 34.1777 366.504 34.7863 370.405C35.395 374.306 34.4291 378.289 32.101 381.478Z" fill="#2F2E41" />
                                <path id="Vector_8" d="M34.021 208.94L54.021 277.94L15.021 339.94L34.521 356.44L79.021 286.94L66.021 201.94L34.021 208.94Z" fill="#2F2E41" />
                            </g>
                            <path id="Vector_9" d="M64.5209 63.4405C64.5209 63.4405 79.5209 53.4405 96.5209 75.4405L101.021 213.94C101.021 213.94 88.0209 195.94 61.0209 212.94C34.0209 229.94 28.0209 210.94 28.0209 210.94C28.0209 210.94 9.02089 67.9405 64.5209 63.4405Z" fill="#CCCCCC" />
                            <g id="arm1">
                                <path id="Vector_10" d="M146.779 222.358C146.965 220.9 146.828 219.419 146.378 218.019C145.929 216.619 145.178 215.335 144.179 214.257C143.179 213.179 141.956 212.333 140.594 211.779C139.232 211.224 137.766 210.976 136.298 211.05L118.521 178.44L114.521 192.44L126.7 222.326C126.988 224.785 128.167 227.052 130.015 228.699C131.863 230.345 134.25 231.257 136.725 231.261C139.201 231.265 141.591 230.361 143.444 228.72C145.297 227.079 146.484 224.816 146.779 222.358Z" fill="#A0616A" />
                                <path id="Vector_11" d="M95.3109 75.0913C99.625 75.3245 103.7 77.1448 106.753 80.2019C109.806 83.2591 111.621 87.3372 111.848 91.6516L115.021 151.94L136.021 208.941L124.021 218.941L85.0208 150.94L77.036 95.0474C76.6701 92.4856 76.8766 89.8745 77.6408 87.402C78.405 84.9296 79.7079 82.6574 81.4556 80.7489C83.2033 78.8405 85.3524 77.3432 87.7482 76.3649C90.144 75.3866 92.7268 74.9516 95.3109 75.0913Z" fill="#CCCCCC" />
                            </g>
                            <g id="head1">
                                <path id="Vector_12" d="M85.0249 54.2141C98.5896 54.2141 109.586 43.2178 109.586 29.6531C109.586 16.0884 98.5896 5.09207 85.0249 5.09207C71.4602 5.09207 60.4639 16.0884 60.4639 29.6531C60.4639 43.2178 71.4602 54.2141 85.0249 54.2141Z" fill="#A0616A" />
                                <path id="Vector_13" d="M66.9777 48.0764C70.9929 52.3535 78.4498 50.0574 78.973 44.2143C79.0141 43.7606 79.0111 43.3041 78.9642 42.851C78.694 40.2627 77.1987 37.9129 77.5569 35.1801C77.638 34.4999 77.8914 33.8517 78.2931 33.2969C81.4928 29.0123 89.0037 35.2133 92.0234 31.3346C93.8751 28.9563 91.6985 25.2117 93.1194 22.5534C94.9948 19.045 100.55 20.7758 104.033 18.8544C107.909 16.7166 107.677 10.7701 105.126 7.15318C102.014 2.74218 96.559 0.388425 91.1717 0.0491752C85.7844 -0.290075 80.4343 1.16626 75.4047 3.12632C69.6902 5.35332 64.0234 8.43113 60.5067 13.4559C56.2301 19.5667 55.8186 27.7819 57.9574 34.9273C59.2585 39.2739 63.6988 44.5836 66.9777 48.0764Z" fill="#2F2E41" />
                            </g>
                        </g>
                    </svg>
                    <svg width="384" height="607" className='hero-phone' viewBox="0 0 384 607" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 20">
                            <path id="Vector" d="M332.63 606.19H139.51C111.42 606.19 88.5701 583.34 88.5701 555.25V50.94C88.5701 22.85 111.42 0 139.51 0H332.63C360.72 0 383.57 22.85 383.57 50.94V555.25C383.57 583.34 360.72 606.19 332.63 606.19Z" fill="#DADBDC" />
                            <path id="Vector_2" d="M332.77 592.4H139.37C118.58 592.4 101.66 575.48 101.66 554.69V50.51C101.66 29.72 118.58 12.8 139.37 12.8H332.77C353.56 12.8 370.48 29.72 370.48 50.51V554.69C370.48 575.48 353.56 592.4 332.77 592.4Z" fill="white" />
                            <path id="Vector_3" d="M263.42 46.36H208.73C201.51 46.36 195.64 40.49 195.64 33.27C195.64 26.05 201.51 20.18 208.73 20.18H263.42C270.64 20.18 276.51 26.05 276.51 33.27C276.51 40.49 270.64 46.36 263.42 46.36Z" fill="#DADBDC" />
                            <path id="hero-phone-line1" d="M319.23 200.32H159.2C156.03 200.32 153.45 197.04 153.45 193.02C153.45 189 156.03 185.72 159.2 185.72H319.23C322.4 185.72 324.98 189 324.98 193.02C324.98 197.04 322.4 200.32 319.23 200.32Z" fill="#DADBDC" />
                            <path id="hero-phone-line2" d="M319.23 232.67H159.2C156.03 232.67 153.45 229.39 153.45 225.37C153.45 221.35 156.03 218.07 159.2 218.07H319.23C322.4 218.07 324.98 221.35 324.98 225.37C324.98 229.39 322.4 232.67 319.23 232.67Z" fill="#DADBDC" />
                            <path id="hero-phone-line3" d="M273.34 265.02H159.2C156.03 265.02 153.45 261.74 153.45 257.72C153.45 253.7 156.03 250.42 159.2 250.42H273.34C276.51 250.42 279.09 253.7 279.09 257.72C279.09 261.74 276.51 265.02 273.34 265.02Z" fill="#DADBDC" />
                            <g id="tick-circle">
                                <path id="Vector_4" d="M236.07 455.22C273.797 455.22 304.38 424.637 304.38 386.91C304.38 349.183 273.797 318.6 236.07 318.6C198.343 318.6 167.76 349.183 167.76 386.91C167.76 424.637 198.343 455.22 236.07 455.22Z" fill="#5EA51D" />
                                <path id="Vector_5" d="M217.9 388.33C221.43 395.24 224.96 402.16 228.49 409.07C229.5 411.06 232.47 410.43 233.06 408.47C237.69 393.03 246.29 378.96 257.88 367.77C260.2 365.53 256.66 362 254.34 364.23C242.14 376.01 233.11 390.9 228.23 407.14L232.8 406.54C229.27 399.63 225.74 392.71 222.21 385.8C220.75 382.93 216.43 385.46 217.89 388.32H217.9V388.33Z" fill="white" />
                            </g>
                            <path id="Vector_6" d="M51.9201 304.28L35.3601 309.93L35.1001 286.02L50.1701 285.85L51.9201 304.28Z" fill="#F3A3A6" />
                            <g id="head2">
                                <path id="Vector_7" d="M37.04 292.62C46.1858 292.62 53.6 285.206 53.6 276.06C53.6 266.914 46.1858 259.5 37.04 259.5C27.8941 259.5 20.48 266.914 20.48 276.06C20.48 285.206 27.8941 292.62 37.04 292.62Z" fill="#F3A3A6" />
                                <path id="Vector_8" d="M41.5701 274.37C38.8001 274.32 36.9501 271.54 35.8401 268.99C34.7301 266.45 33.5901 263.52 31.0201 262.49C28.9101 261.65 25.2701 267.52 23.5901 265.99C21.8401 264.39 23.4401 256.05 25.2601 254.54C27.0801 253.03 29.5901 252.71 31.9501 252.57C37.7201 252.24 43.5201 252.64 49.1901 253.76C52.6901 254.45 56.3101 255.51 58.8601 258.01C62.0901 261.18 62.9601 266.01 63.2401 270.53C63.5301 275.15 63.3101 280 61.1101 284.08C58.9001 288.15 54.2301 291.19 49.7001 290.21C49.2201 287.76 49.6501 285.24 49.8001 282.74C49.9501 280.25 49.7301 277.56 48.1901 275.59C46.6501 273.62 43.3901 272.87 41.6401 274.65" fill="#2F2E43" />
                                <path id="Vector_9" d="M62 279.88C63.64 278.65 65.61 277.61 67.65 277.84C69.86 278.08 71.74 279.88 72.33 282.02C72.92 284.16 72.31 286.53 70.97 288.3C69.63 290.07 67.62 291.25 65.48 291.85C64.24 292.2 62.89 292.35 61.7 291.85C59.95 291.12 58.99 288.91 59.65 287.13" fill="#2F2E43" />
                            </g>
                            <path id="uuid-aacd27ab-43c3-4d3d-aa57-4e8c94c3c81e-528" d="M0.380011 436.33C-0.659988 441.78 1.41001 446.73 5.02001 447.38C8.62001 448.03 12.39 444.13 13.43 438.68C13.88 436.51 13.78 434.26 13.14 432.13L25.88 346.72L8.72001 343.69L3.07001 430.32C1.69001 432.09 0.760011 434.15 0.380011 436.34V436.33Z" fill="#F3A3A6" />
                            <path id="Vector_10" d="M35.06 298.96L23.37 299.09C15.12 300.43 12.92 304.87 11.14 313.03C8.40996 325.48 4.92997 342.07 5.65997 342.3C6.82997 342.68 26.83 351.82 36.95 349.56L35.06 298.96Z" fill="#5EA51D" />
                            <path id="Vector_11" d="M49.4155 570.411L33.8564 570.585L34.103 592.653L49.662 592.48L49.4155 570.411Z" fill="#F3A3A6" />
                            <path id="Vector_12" d="M19.06 606.19C17.42 606.21 15.97 606.19 14.87 606.1C10.73 605.77 6.75996 602.76 4.74996 601C3.84996 600.21 3.54996 598.93 3.99996 597.83C4.31996 597.04 4.97996 596.44 5.79996 596.19L16.69 592.95L34.24 580.82L34.44 581.17C34.52 581.3 36.29 584.41 36.89 586.52C37.12 587.32 37.07 587.99 36.74 588.51C36.51 588.87 36.19 589.08 35.93 589.21C36.25 589.54 37.26 590.21 40.36 590.67C44.87 591.34 45.78 586.65 45.81 586.45L45.84 586.29L45.97 586.2C48.1 584.79 49.41 584.15 49.87 584.28C50.16 584.36 50.63 584.5 52.05 597.22C52.18 597.62 53.11 600.54 52.53 603.35C51.9 606.41 38.57 605.5 35.91 605.29C35.83 605.3 25.87 606.12 19.04 606.19H19.06Z" fill="#2F2E43" />
                            <path id="Vector_13" d="M93.5251 552.542L80.415 560.923L92.3025 579.518L105.412 571.137L93.5251 552.542Z" fill="#F3A3A6" />
                            <path id="Vector_14" d="M76.5101 602.52C74.6801 602.54 73.0001 602.34 71.8001 602.14C70.6201 601.94 69.6901 601.02 69.4901 599.84C69.3401 598.99 69.5901 598.14 70.1501 597.5L77.6701 588.99L86.1401 569.41L86.5001 569.6C86.6301 569.67 89.7801 571.37 91.4101 572.84C92.0301 573.4 92.3401 573.99 92.3401 574.61C92.3401 575.04 92.1801 575.39 92.0201 575.63C92.4701 575.74 93.6801 575.77 96.5501 574.52C100.73 572.7 99.0201 568.24 98.9401 568.06L98.8801 567.91L98.9501 567.77C100.01 565.45 100.79 564.21 101.24 564.07C101.53 563.99 102 563.85 109.94 573.89C110.26 574.16 112.6 576.14 113.59 578.83C114.67 581.76 102.89 588.04 100.51 589.27C100.44 589.33 88.1301 598.48 83.0701 601.1C81.0601 602.14 78.6701 602.48 76.4901 602.5L76.5101 602.52Z" fill="#2F2E43" />
                            <path id="Vector_15" d="M58.79 385.68L15.23 386.16L11.73 426.72L30.69 576.26L52.93 576.01L43.08 489.63L80.02 567.31L99.63 553.25L70.65 480.67C70.65 480.67 80.01 417.06 71.93 401.33C63.85 385.6 58.8 385.66 58.8 385.66V385.68H58.79Z" fill="#2F2E43" />
                            <path id="Vector_16" d="M80.48 387.91L11.3 388.68L31.06 299.01L61.21 298.67L80.48 387.91Z" fill="#5EA51D" />
                            <path id="uuid-36382701-bf34-46f2-bbf2-9fa794ab079f-529" d="M87.24 435.37C88.4 440.8 86.44 445.79 82.85 446.52C79.26 447.25 75.41 443.44 74.25 438.01C73.75 435.85 73.8 433.6 74.39 431.45L59.75 346.34L76.84 342.93L84.41 429.42C85.83 431.16 86.8 433.2 87.24 435.38V435.37Z" fill="#F3A3A6" />
                            <path id="Vector_17" d="M49.52 298.8L61.21 298.67C69.49 299.83 71.78 304.22 73.75 312.34C76.75 324.73 80.6 341.23 79.88 341.48C78.71 341.88 58.93 351.46 48.76 349.43L49.53 298.8H49.52Z" fill="#5EA51D" />
                        </g>
                    </svg>




                    <div className="hero-content">
                        <h1 className="hero-title appear-left">Exponentially <span className='hero-title-span'>GR<span className='o-span'>O</span>W</span> With Cutting Edge <span className="typewriter">...</span> <span className="cursor"></span></h1>
                        <p className="hero-p section-p appear-down">Unlock the hidden potential within your business with our bespoke AI solutions.</p>
                        <Button onClick={scrollSection} variant='contained' className='cta-btn appear-left' color='secondary'>
                            <span>Book&nbsp;<span className='a-span'>A</span>&nbsp;Call</span>
                            <img src={callIcon} alt="" className='call-icon' />
                        </Button>
                    </div>
                </section>

                <section className="section services-section">
                    <img src={aiMesh} className='services-watermark1 services-watermark' alt="" />
                    <img src={aiMesh} className='services-watermark2 services-watermark' alt="" />
                    <div className="services-nav">
                        <h1 className="section-title">Our <span>Services</span></h1>
                        <ul className="services-nav-ul">
                            <li onClick={scrollChat}><span>Chatbot Development</span></li>
                            <li onClick={scrollPhone}><span>AI Phone Agents</span></li>
                            <li onClick={scrollAutomations}><span>Workflow Automations </span></li>
                        </ul>
                    </div>


                    <div className="services-container">
                        <div className="service service1">
                            <div className="service-left service-content">
                                <h1 className="service-title">Chatbot <span>Development</span></h1>
                                <p className="section-p">We build you bespoke AI Chatbots that not only handle over 80% of your customer support, but also a myriad of various tasks e.g saving info to CRM, booking meetings, lead qualification e.t.c all based on your unique business needs</p>
                            </div>
                            <div className="service-right">
                                <svg width="454" height="382" className='robot-svg' viewBox="0 0 454 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 21">
                                        <path id="Vector" d="M415.519 215.99C436.505 215.99 453.519 198.977 453.519 177.99C453.519 157.003 436.505 139.99 415.519 139.99C394.532 139.99 377.519 157.003 377.519 177.99C377.519 198.977 394.532 215.99 415.519 215.99Z" fill="#F2F2F2" />
                                        <path id="Vector_2" d="M415.519 187.99C421.041 187.99 425.519 183.513 425.519 177.99C425.519 172.467 421.041 167.99 415.519 167.99C409.996 167.99 405.519 172.467 405.519 177.99C405.519 183.513 409.996 187.99 415.519 187.99Z" fill="#E6E6E6" />
                                        <path id="Vector_3" d="M413.691 178.204C417.903 181.64 419.187 187.056 418.403 192.286C417.44 198.022 414.464 203.227 410.009 206.967C405 211.419 398.89 214.428 392.995 217.508C387.578 220.273 382.372 223.433 377.419 226.963C358.459 240.744 344.134 260.366 335.936 282.263C327.752 304.123 325.556 328.935 331.775 351.59C334.852 362.799 341.077 374.893 352.673 379.111C361.917 382.473 374.537 380.308 379.244 370.781C384.3 360.547 377.246 349.043 368.159 343.963C356.381 337.377 342.312 342.19 331.718 348.856C320.055 356.195 310.68 366.726 298.503 373.304C293.022 376.358 286.923 378.138 280.659 378.509C274.907 378.736 269.166 377.849 263.75 375.897C252.514 371.803 242.841 364.295 236.089 354.426C228.354 343.183 224.892 329.401 224.261 315.901C222.848 285.695 234.781 257.436 244.355 229.423C249.5 214.836 253.355 199.825 255.874 184.564C258.269 169.225 259.122 153.684 258.419 138.175C257.785 124.462 256.433 110.121 250.38 97.5965C245.058 86.5832 235.331 77.5693 223.034 75.2968C217.49 74.2089 211.746 74.8687 206.594 77.1852C204.84 77.9854 206.363 80.5718 208.108 79.7756C218.991 74.811 231.854 79.6415 239.892 87.6574C249.279 97.018 252.726 110.841 254.256 123.596C257.695 153.824 254.985 184.436 246.288 213.589C237.941 241.941 224.812 269.11 221.782 298.815C220.4 312.369 221.11 326.382 225.443 339.38C229.16 350.957 236.13 361.221 245.521 368.945C254.363 376.094 265.241 380.964 276.692 381.507C289.546 382.116 300.819 376.385 310.791 368.762C321.473 360.597 331.3 350.523 344.238 345.945C350.137 343.858 356.855 342.884 362.912 344.893C368.107 346.668 372.515 350.212 375.364 354.905C377.995 359.279 378.965 364.747 376.564 369.446C374.308 373.864 369.902 376.419 365.134 377.294C360.084 378.187 354.881 377.303 350.41 374.792C345.186 371.808 341.363 366.801 338.685 361.511C333.345 350.961 331.55 338.403 331.278 326.694C331.04 315.256 332.505 303.847 335.626 292.841C341.837 270.577 354.374 250.593 371.716 235.312C376.085 231.506 380.758 228.065 385.69 225.023C391.07 221.707 396.813 219.057 402.297 215.928C407.694 212.85 413.013 209.171 416.729 204.105C419.897 199.763 421.608 194.529 421.616 189.154C421.673 186.682 421.182 184.228 420.178 181.968C419.175 179.708 417.684 177.698 415.812 176.082C414.329 174.872 412.194 176.982 413.691 178.204Z" fill="#CCCCCC" />
                                        <path id="Vector_4" d="M58.9385 352.99C72.2257 361.578 87.5963 366.397 103.409 366.93C103.126 367.599 102.809 368.253 102.458 368.89C100.618 372.287 98.0169 375.214 94.8584 377.44C91.1187 380.072 86.728 381.626 82.1653 381.933C77.6027 382.241 73.0432 381.289 68.9844 379.182C64.9256 377.075 61.5233 373.894 59.1487 369.986C56.7741 366.078 55.5184 361.593 55.5186 357.02V352.99H58.9385Z" fill="#3F3D56" />
                                        <path id="Vector_5" d="M152.208 354.17V357.02C152.211 362.568 150.364 367.959 146.96 372.341C143.557 376.723 138.79 379.846 133.413 381.217C128.037 382.587 122.357 382.127 117.271 379.909C112.185 377.692 107.983 373.842 105.329 368.97C104.963 368.318 104.632 367.647 104.338 366.96C105.068 366.98 105.789 366.99 106.519 366.99C122.639 367.009 138.451 362.572 152.208 354.17Z" fill="#3F3D56" />
                                        <path id="Vector_6" d="M185.849 52.7901C185.099 52.6801 184.338 52.6101 183.579 52.5601C192.215 72.4629 192.813 94.9358 185.249 115.27C186.009 115.18 186.759 115.06 187.509 114.92C194.832 113.501 201.414 109.529 206.084 103.712C210.753 97.8942 213.207 90.6085 213.007 83.1516C212.808 75.6946 209.969 68.5503 204.996 62.9904C200.022 57.4306 193.237 53.816 185.849 52.7901Z" fill="#3F3D56" />
                                        <path id="Vector_7" d="M29.4585 52.5601C28.6988 52.6101 27.9385 52.68 27.1885 52.79C19.7997 53.8159 13.0147 57.4305 8.0414 62.9904C3.06805 68.5502 0.229058 75.6945 0.0298031 83.1515C-0.169452 90.6085 2.28399 97.8942 6.95333 103.712C11.6227 109.529 18.2049 113.501 25.5283 114.92C26.2783 115.06 27.0283 115.18 27.7886 115.27C20.224 94.9358 20.8225 72.4629 29.4585 52.5601Z" fill="#3F3D56" />
                                        <path id="Vector_8" d="M185.848 52.79C177.61 33.1099 162.35 17.1946 143.034 8.13624C123.718 -0.922153 101.724 -2.47692 81.3252 3.77399C60.9266 10.0249 43.5798 23.6352 32.6549 41.9606C21.73 60.2861 18.007 82.0183 22.2093 102.935C26.4115 123.852 38.2389 142.46 55.3937 155.145C72.5485 167.829 93.8058 173.683 115.036 171.571C136.266 169.459 155.953 159.53 170.272 143.714C184.591 127.899 192.52 107.325 192.518 85.99C192.514 74.5909 190.247 63.3061 185.848 52.79ZM185.248 115.27C177.933 134.934 163.523 151.147 144.853 160.72C126.183 170.292 104.607 172.529 84.3706 166.992C64.1342 161.454 46.7034 148.542 35.5091 130.798C24.3148 113.053 20.1678 91.7611 23.8843 71.1124C27.6007 50.4637 38.9115 31.954 55.5904 19.2263C72.2693 6.49854 93.1081 0.474776 114.005 2.34055C134.903 4.20633 154.345 13.8265 168.505 29.3076C182.666 44.7888 190.518 65.0095 190.518 85.99C190.515 95.9856 188.73 105.901 185.248 115.27Z" fill="#3F3D56" />
                                        <path id="robot-eye" d="M150.519 66.49H62.5186C57.8773 66.49 53.4261 68.3337 50.1442 71.6156C46.8623 74.8975 45.0186 79.3487 45.0186 83.99C45.0186 88.6313 46.8623 93.0825 50.1442 96.3643C53.4261 99.6462 57.8773 101.49 62.5186 101.49H150.519C155.16 101.49 159.611 99.6462 162.893 96.3643C166.175 93.0825 168.019 88.6313 168.019 83.99C168.019 79.3487 166.175 74.8975 162.893 71.6156C159.611 68.3337 155.16 66.49 150.519 66.49Z" fill="#5EA51D" />
                                        <path id="Vector_9" d="M106.518 188.99C83.0084 189.001 60.436 198.211 43.6293 214.65C26.8225 231.089 17.1159 253.452 16.5854 276.956C16.055 300.46 24.7429 323.238 40.7909 340.419C56.8389 357.6 78.9727 367.819 102.458 368.89C103.408 368.94 104.368 368.97 105.328 368.97C105.728 368.99 106.118 368.99 106.518 368.99C130.388 368.99 153.28 359.508 170.158 342.63C187.036 325.751 196.518 302.859 196.518 278.99C196.518 255.12 187.036 232.229 170.158 215.35C153.28 198.472 130.388 188.99 106.518 188.99ZM152.208 354.17C138.451 362.572 122.639 367.009 106.518 366.99C105.788 366.99 105.068 366.98 104.338 366.96C104.028 366.96 103.718 366.95 103.408 366.93C82.2766 366.195 62.1149 357.881 46.608 343.507C31.1011 329.132 21.2847 309.658 18.9529 288.642C16.6212 267.627 21.9297 246.474 33.9084 229.05C45.8871 211.625 63.7359 199.094 84.1926 193.745C104.649 188.396 126.348 190.587 145.322 199.917C164.297 209.248 179.28 225.095 187.533 244.562C195.787 264.029 196.759 285.817 190.273 305.942C183.787 326.067 170.276 343.186 152.208 354.17Z" fill="#3F3D56" />
                                        <path id="Vector_10" d="M169.686 256.823H130.352C127.611 256.823 124.983 255.735 123.045 253.797C121.107 251.859 120.019 249.231 120.019 246.49C120.019 243.749 121.107 241.121 123.045 239.183C124.983 237.245 127.611 236.156 130.352 236.156H169.686C172.426 236.156 175.055 237.245 176.992 239.183C178.93 241.121 180.019 243.749 180.019 246.49C180.019 249.231 178.93 251.859 176.992 253.797C175.055 255.735 172.426 256.823 169.686 256.823Z" fill="#3F3D56" />
                                        <path id="robot-circle1" d="M132.974 251.734C135.87 251.734 138.218 249.386 138.218 246.49C138.218 243.594 135.87 241.246 132.974 241.246C130.078 241.246 127.729 243.594 127.729 246.49C127.729 249.386 130.078 251.734 132.974 251.734Z" fill="#F2F2F2" />
                                        <path id="robot-circle2" d="M150.018 251.734C152.915 251.734 155.263 249.386 155.263 246.49C155.263 243.594 152.915 241.246 150.018 241.246C147.122 241.246 144.774 243.594 144.774 246.49C144.774 249.386 147.122 251.734 150.018 251.734Z" fill="#F2F2F2" />
                                        <path id="robot-circle3" d="M167.063 251.734C169.959 251.734 172.307 249.386 172.307 246.49C172.307 243.594 169.959 241.246 167.063 241.246C164.166 241.246 161.818 243.594 161.818 246.49C161.818 249.386 164.166 251.734 167.063 251.734Z" fill="#5EA51D" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="service service2">
                            <div className="service-left">
                                <svg width="363" height="728" className='phone-svg' viewBox="0 0 363 728" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 22">
                                        <path id="Vector" d="M362.908 172.947H358.909V63.4019C358.909 46.5867 352.229 30.4602 340.339 18.57C328.449 6.67987 312.323 2.65218e-05 295.507 2.01908e-10H63.4206C55.0945 -2.10113e-05 46.85 1.6399 39.1577 4.82612C31.4654 8.01234 24.4761 12.6825 18.5886 18.5699C12.7012 24.4573 8.03105 31.4466 4.84479 39.1389C1.65853 46.8311 0.0185731 55.0756 0.0185547 63.4017V664.376C0.0185481 672.702 1.65848 680.947 4.84471 688.639C8.03095 696.331 12.7011 703.321 18.5885 709.208C24.4759 715.095 31.4653 719.766 39.1575 722.952C46.8498 726.138 55.0943 727.778 63.4204 727.778H295.507C312.322 727.778 328.449 721.098 340.339 709.208C352.229 697.318 358.909 681.191 358.909 664.376V250.923H362.908V172.947Z" fill="#E6E6E6" />
                                        <path id="Vector_2" d="M298.066 16.495H267.771C269.164 19.9106 269.696 23.6165 269.319 27.286C268.943 30.9556 267.67 34.4763 265.612 37.538C263.555 40.5997 260.776 43.1084 257.52 44.8431C254.265 46.5777 250.633 47.4852 246.944 47.4855H113.984C110.295 47.4852 106.663 46.5777 103.408 44.8431C100.152 43.1084 97.3732 40.5997 95.3156 37.538C93.258 34.4763 91.9849 30.9556 91.6085 27.286C91.2321 23.6164 91.7639 19.9105 93.1571 16.4949H64.8615C52.3041 16.4949 40.261 21.4833 31.3815 30.3627C22.5021 39.2421 17.5137 51.2852 17.5137 63.8426V663.935C17.5137 670.153 18.7384 676.31 21.1178 682.055C23.4972 687.799 26.9849 693.019 31.3815 697.415C35.7781 701.812 40.9977 705.299 46.7422 707.679C52.4867 710.058 58.6436 711.283 64.8615 711.283H298.066C304.284 711.283 310.441 710.058 316.185 707.679C321.93 705.299 327.149 701.812 331.546 697.415C335.942 693.019 339.43 687.799 341.81 682.055C344.189 676.31 345.414 670.153 345.414 663.935V63.8427C345.414 57.6249 344.189 51.4679 341.809 45.7235C339.43 39.979 335.942 34.7594 331.546 30.3627C327.149 25.9661 321.93 22.4785 316.185 20.0991C310.441 17.7196 304.284 16.4949 298.066 16.495Z" fill="white" />
                                        <path id="phone-line1" d="M46.4629 298.928C46.1977 298.928 45.9433 298.823 45.7558 298.635C45.5682 298.448 45.4629 298.193 45.4629 297.928V262.928C45.4629 262.663 45.5682 262.409 45.7558 262.221C45.9433 262.034 46.1977 261.928 46.4629 261.928C46.7281 261.928 46.9825 262.034 47.17 262.221C47.3575 262.409 47.4629 262.663 47.4629 262.928V297.928C47.4629 298.193 47.3575 298.448 47.17 298.635C46.9825 298.823 46.7281 298.928 46.4629 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line2" d="M53.4629 304.428C53.1977 304.428 52.9433 304.323 52.7558 304.135C52.5682 303.948 52.4629 303.693 52.4629 303.428V257.428C52.4629 257.163 52.5682 256.909 52.7558 256.721C52.9433 256.534 53.1977 256.428 53.4629 256.428C53.7281 256.428 53.9824 256.534 54.17 256.721C54.3575 256.909 54.4629 257.163 54.4629 257.428V303.428C54.4629 303.693 54.3575 303.948 54.17 304.135C53.9824 304.323 53.7281 304.428 53.4629 304.428Z" fill="#CCCCCC" />
                                        <path id="phone-line3" d="M60.4629 307.928C60.1977 307.928 59.9433 307.823 59.7558 307.635C59.5682 307.448 59.4629 307.193 59.4629 306.928V253.928C59.4629 253.663 59.5682 253.409 59.7558 253.221C59.9433 253.034 60.1977 252.928 60.4629 252.928C60.7281 252.928 60.9824 253.034 61.17 253.221C61.3575 253.409 61.4629 253.663 61.4629 253.928V306.928C61.4629 307.193 61.3575 307.448 61.17 307.635C60.9824 307.823 60.7281 307.928 60.4629 307.928Z" fill="#CCCCCC" />
                                        <path id="phone-line4" d="M67.4629 316.928C67.1977 316.928 66.9433 316.823 66.7558 316.635C66.5682 316.448 66.4629 316.193 66.4629 315.928V244.928C66.4629 244.663 66.5682 244.409 66.7558 244.221C66.9433 244.034 67.1977 243.928 67.4629 243.928C67.7281 243.928 67.9824 244.034 68.17 244.221C68.3575 244.409 68.4629 244.663 68.4629 244.928V315.928C68.4629 316.193 68.3575 316.448 68.17 316.635C67.9824 316.823 67.7281 316.928 67.4629 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line5" d="M74.4629 330.428C74.1977 330.428 73.9433 330.323 73.7558 330.135C73.5682 329.948 73.4629 329.693 73.4629 329.428V231.428C73.4629 231.163 73.5682 230.909 73.7558 230.721C73.9433 230.534 74.1977 230.428 74.4629 230.428C74.7281 230.428 74.9824 230.534 75.17 230.721C75.3575 230.909 75.4629 231.163 75.4629 231.428V329.428C75.4629 329.693 75.3575 329.948 75.17 330.135C74.9824 330.323 74.7281 330.428 74.4629 330.428Z" fill="#CCCCCC" />
                                        <path id="phone-line6" d="M81.4629 316.928C81.1977 316.928 80.9433 316.823 80.7558 316.635C80.5682 316.448 80.4629 316.193 80.4629 315.928V244.928C80.4629 244.663 80.5682 244.409 80.7558 244.221C80.9433 244.034 81.1977 243.928 81.4629 243.928C81.7281 243.928 81.9824 244.034 82.17 244.221C82.3575 244.409 82.4629 244.663 82.4629 244.928V315.928C82.4629 316.193 82.3575 316.448 82.17 316.635C81.9824 316.823 81.7281 316.928 81.4629 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line7" d="M88.4629 323.428C88.1977 323.428 87.9433 323.323 87.7558 323.135C87.5682 322.948 87.4629 322.693 87.4629 322.428V238.428C87.4629 238.163 87.5682 237.909 87.7558 237.721C87.9433 237.534 88.1977 237.428 88.4629 237.428C88.7281 237.428 88.9824 237.534 89.17 237.721C89.3575 237.909 89.4629 238.163 89.4629 238.428V322.428C89.4629 322.693 89.3575 322.948 89.17 323.135C88.9824 323.323 88.7281 323.428 88.4629 323.428Z" fill="#CCCCCC" />
                                        <path id="phone-line8" d="M95.4629 306.428C95.1977 306.428 94.9433 306.323 94.7558 306.135C94.5682 305.948 94.4629 305.693 94.4629 305.428V255.428C94.4629 255.163 94.5682 254.909 94.7558 254.721C94.9433 254.534 95.1977 254.428 95.4629 254.428C95.7281 254.428 95.9824 254.534 96.17 254.721C96.3575 254.909 96.4629 255.163 96.4629 255.428V305.428C96.4629 305.693 96.3575 305.948 96.17 306.135C95.9824 306.323 95.7281 306.428 95.4629 306.428Z" fill="#CCCCCC" />
                                        <path id="phone-line9" d="M102.463 310.428C102.198 310.428 101.943 310.323 101.756 310.135C101.568 309.948 101.463 309.693 101.463 309.428V251.428C101.463 251.163 101.568 250.909 101.756 250.721C101.943 250.534 102.198 250.428 102.463 250.428C102.728 250.428 102.982 250.534 103.17 250.721C103.358 250.909 103.463 251.163 103.463 251.428V309.428C103.463 309.693 103.358 309.948 103.17 310.135C102.982 310.323 102.728 310.428 102.463 310.428Z" fill="#CCCCCC" />
                                        <path id="phone-line10" d="M109.463 298.928C109.198 298.928 108.943 298.823 108.756 298.635C108.568 298.448 108.463 298.193 108.463 297.928V262.928C108.463 262.663 108.568 262.409 108.756 262.221C108.943 262.034 109.198 261.928 109.463 261.928C109.728 261.928 109.982 262.034 110.17 262.221C110.358 262.409 110.463 262.663 110.463 262.928V297.928C110.463 298.193 110.358 298.448 110.17 298.635C109.982 298.823 109.728 298.928 109.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line11" d="M115.463 298.928C115.198 298.928 114.943 298.823 114.756 298.635C114.568 298.448 114.463 298.193 114.463 297.928V262.928C114.463 262.663 114.568 262.409 114.756 262.221C114.943 262.034 115.198 261.928 115.463 261.928C115.728 261.928 115.982 262.034 116.17 262.221C116.358 262.409 116.463 262.663 116.463 262.928V297.928C116.463 298.193 116.358 298.448 116.17 298.635C115.982 298.823 115.728 298.928 115.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line12" d="M122.463 304.428C122.198 304.428 121.943 304.323 121.756 304.135C121.568 303.948 121.463 303.693 121.463 303.428V257.428C121.463 257.163 121.568 256.909 121.756 256.721C121.943 256.534 122.198 256.428 122.463 256.428C122.728 256.428 122.982 256.534 123.17 256.721C123.358 256.909 123.463 257.163 123.463 257.428V303.428C123.463 303.693 123.358 303.948 123.17 304.135C122.982 304.323 122.728 304.428 122.463 304.428Z" fill="#CCCCCC" />
                                        <path id="phone-line13" d="M129.463 307.928C129.198 307.928 128.943 307.823 128.756 307.635C128.568 307.448 128.463 307.193 128.463 306.928V253.928C128.463 253.663 128.568 253.409 128.756 253.221C128.943 253.034 129.198 252.928 129.463 252.928C129.728 252.928 129.982 253.034 130.17 253.221C130.358 253.409 130.463 253.663 130.463 253.928V306.928C130.463 307.193 130.358 307.448 130.17 307.635C129.982 307.823 129.728 307.928 129.463 307.928Z" fill="#CCCCCC" />
                                        <path id="phone-line14" d="M136.463 316.928C136.198 316.928 135.943 316.823 135.756 316.635C135.568 316.448 135.463 316.193 135.463 315.928V244.928C135.463 244.663 135.568 244.409 135.756 244.221C135.943 244.034 136.198 243.928 136.463 243.928C136.728 243.928 136.982 244.034 137.17 244.221C137.358 244.409 137.463 244.663 137.463 244.928V315.928C137.463 316.193 137.358 316.448 137.17 316.635C136.982 316.823 136.728 316.928 136.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line15" d="M143.463 346.428C143.198 346.428 142.943 346.323 142.756 346.135C142.568 345.948 142.463 345.693 142.463 345.428V215.428C142.463 215.163 142.568 214.909 142.756 214.721C142.943 214.534 143.198 214.428 143.463 214.428C143.728 214.428 143.982 214.534 144.17 214.721C144.358 214.909 144.463 215.163 144.463 215.428V345.428C144.463 345.693 144.358 345.948 144.17 346.135C143.982 346.323 143.728 346.428 143.463 346.428Z" fill="#CCCCCC" />
                                        <path id="phone-line16" d="M150.463 316.928C150.198 316.928 149.943 316.823 149.756 316.635C149.568 316.448 149.463 316.193 149.463 315.928V244.928C149.463 244.663 149.568 244.409 149.756 244.221C149.943 244.034 150.198 243.928 150.463 243.928C150.728 243.928 150.982 244.034 151.17 244.221C151.358 244.409 151.463 244.663 151.463 244.928V315.928C151.463 316.193 151.358 316.448 151.17 316.635C150.982 316.823 150.728 316.928 150.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line17" d="M157.463 323.428C157.198 323.428 156.943 323.323 156.756 323.135C156.568 322.948 156.463 322.693 156.463 322.428V238.428C156.463 238.163 156.568 237.909 156.756 237.721C156.943 237.534 157.198 237.428 157.463 237.428C157.728 237.428 157.982 237.534 158.17 237.721C158.358 237.909 158.463 238.163 158.463 238.428V322.428C158.463 322.693 158.358 322.948 158.17 323.135C157.982 323.323 157.728 323.428 157.463 323.428Z" fill="#CCCCCC" />
                                        <path id="phone-line18" d="M164.463 306.428C164.198 306.428 163.943 306.323 163.756 306.135C163.568 305.948 163.463 305.693 163.463 305.428V255.428C163.463 255.163 163.568 254.909 163.756 254.721C163.943 254.534 164.198 254.428 164.463 254.428C164.728 254.428 164.982 254.534 165.17 254.721C165.358 254.909 165.463 255.163 165.463 255.428V305.428C165.463 305.693 165.358 305.948 165.17 306.135C164.982 306.323 164.728 306.428 164.463 306.428Z" fill="#CCCCCC" />
                                        <path id="phone-line19" d="M171.463 310.428C171.198 310.428 170.943 310.323 170.756 310.135C170.568 309.948 170.463 309.693 170.463 309.428V251.428C170.463 251.163 170.568 250.909 170.756 250.721C170.943 250.534 171.198 250.428 171.463 250.428C171.728 250.428 171.982 250.534 172.17 250.721C172.358 250.909 172.463 251.163 172.463 251.428V309.428C172.463 309.693 172.358 309.948 172.17 310.135C171.982 310.323 171.728 310.428 171.463 310.428Z" fill="#CCCCCC" />
                                        <path id="phone-line20" d="M178.463 298.928C178.198 298.928 177.943 298.823 177.756 298.635C177.568 298.448 177.463 298.193 177.463 297.928V262.928C177.463 262.663 177.568 262.409 177.756 262.221C177.943 262.034 178.198 261.928 178.463 261.928C178.728 261.928 178.982 262.034 179.17 262.221C179.358 262.409 179.463 262.663 179.463 262.928V297.928C179.463 298.193 179.358 298.448 179.17 298.635C178.982 298.823 178.728 298.928 178.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line21" d="M184.463 298.928C184.198 298.928 183.943 298.823 183.756 298.635C183.568 298.448 183.463 298.193 183.463 297.928V262.928C183.463 262.663 183.568 262.409 183.756 262.221C183.943 262.034 184.198 261.928 184.463 261.928C184.728 261.928 184.982 262.034 185.17 262.221C185.358 262.409 185.463 262.663 185.463 262.928V297.928C185.463 298.193 185.358 298.448 185.17 298.635C184.982 298.823 184.728 298.928 184.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line22" d="M191.463 304.428C191.198 304.428 190.943 304.323 190.756 304.135C190.568 303.948 190.463 303.693 190.463 303.428V257.428C190.463 257.163 190.568 256.909 190.756 256.721C190.943 256.534 191.198 256.428 191.463 256.428C191.728 256.428 191.982 256.534 192.17 256.721C192.358 256.909 192.463 257.163 192.463 257.428V303.428C192.463 303.693 192.358 303.948 192.17 304.135C191.982 304.323 191.728 304.428 191.463 304.428Z" fill="#CCCCCC" />
                                        <path id="phone-line23" d="M198.463 307.928C198.198 307.928 197.943 307.823 197.756 307.635C197.568 307.448 197.463 307.193 197.463 306.928V253.928C197.463 253.663 197.568 253.409 197.756 253.221C197.943 253.034 198.198 252.928 198.463 252.928C198.728 252.928 198.982 253.034 199.17 253.221C199.358 253.409 199.463 253.663 199.463 253.928V306.928C199.463 307.193 199.358 307.448 199.17 307.635C198.982 307.823 198.728 307.928 198.463 307.928Z" fill="#CCCCCC" />
                                        <path id="phone-line24" d="M205.463 316.928C205.198 316.928 204.943 316.823 204.756 316.635C204.568 316.448 204.463 316.193 204.463 315.928V244.928C204.463 244.663 204.568 244.409 204.756 244.221C204.943 244.034 205.198 243.928 205.463 243.928C205.728 243.928 205.982 244.034 206.17 244.221C206.358 244.409 206.463 244.663 206.463 244.928V315.928C206.463 316.193 206.358 316.448 206.17 316.635C205.982 316.823 205.728 316.928 205.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line25" d="M212.463 330.428C212.198 330.428 211.943 330.323 211.756 330.135C211.568 329.948 211.463 329.693 211.463 329.428V231.428C211.463 231.163 211.568 230.909 211.756 230.721C211.943 230.534 212.198 230.428 212.463 230.428C212.728 230.428 212.982 230.534 213.17 230.721C213.358 230.909 213.463 231.163 213.463 231.428V329.428C213.463 329.693 213.358 329.948 213.17 330.135C212.982 330.323 212.728 330.428 212.463 330.428Z" fill="#CCCCCC" />
                                        <path id="phone-green-line" d="M217.463 374.678C217.198 374.678 216.943 374.573 216.756 374.385C216.568 374.198 216.463 373.943 216.463 373.678V187.178C216.463 186.913 216.568 186.659 216.756 186.471C216.943 186.284 217.198 186.178 217.463 186.178C217.728 186.178 217.982 186.284 218.17 186.471C218.358 186.659 218.463 186.913 218.463 187.178V373.678C218.463 373.943 218.358 374.198 218.17 374.385C217.982 374.573 217.728 374.678 217.463 374.678Z" fill="#5EA51D" />
                                        <path id="phone-line26" d="M219.463 316.928C219.198 316.928 218.943 316.823 218.756 316.635C218.568 316.448 218.463 316.193 218.463 315.928V244.928C218.463 244.663 218.568 244.409 218.756 244.221C218.943 244.034 219.198 243.928 219.463 243.928C219.728 243.928 219.982 244.034 220.17 244.221C220.358 244.409 220.463 244.663 220.463 244.928V315.928C220.463 316.193 220.358 316.448 220.17 316.635C219.982 316.823 219.728 316.928 219.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line27" d="M226.463 323.428C226.198 323.428 225.943 323.323 225.756 323.135C225.568 322.948 225.463 322.693 225.463 322.428V238.428C225.463 238.163 225.568 237.909 225.756 237.721C225.943 237.534 226.198 237.428 226.463 237.428C226.728 237.428 226.982 237.534 227.17 237.721C227.358 237.909 227.463 238.163 227.463 238.428V322.428C227.463 322.693 227.358 322.948 227.17 323.135C226.982 323.323 226.728 323.428 226.463 323.428Z" fill="#CCCCCC" />
                                        <path id="phone-line28" d="M233.463 306.428C233.198 306.428 232.943 306.323 232.756 306.135C232.568 305.948 232.463 305.693 232.463 305.428V255.428C232.463 255.163 232.568 254.909 232.756 254.721C232.943 254.534 233.198 254.428 233.463 254.428C233.728 254.428 233.982 254.534 234.17 254.721C234.358 254.909 234.463 255.163 234.463 255.428V305.428C234.463 305.693 234.358 305.948 234.17 306.135C233.982 306.323 233.728 306.428 233.463 306.428Z" fill="#CCCCCC" />
                                        <path id="phone-line29" d="M240.463 310.428C240.198 310.428 239.943 310.323 239.756 310.135C239.568 309.948 239.463 309.693 239.463 309.428V251.428C239.463 251.163 239.568 250.909 239.756 250.721C239.943 250.534 240.198 250.428 240.463 250.428C240.728 250.428 240.982 250.534 241.17 250.721C241.358 250.909 241.463 251.163 241.463 251.428V309.428C241.463 309.693 241.358 309.948 241.17 310.135C240.982 310.323 240.728 310.428 240.463 310.428Z" fill="#CCCCCC" />
                                        <path id="phone-line30" d="M247.463 298.928C247.198 298.928 246.943 298.823 246.756 298.635C246.568 298.448 246.463 298.193 246.463 297.928V262.928C246.463 262.663 246.568 262.409 246.756 262.221C246.943 262.034 247.198 261.928 247.463 261.928C247.728 261.928 247.982 262.034 248.17 262.221C248.358 262.409 248.463 262.663 248.463 262.928V297.928C248.463 298.193 248.358 298.448 248.17 298.635C247.982 298.823 247.728 298.928 247.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line31" d="M253.463 298.928C253.198 298.928 252.943 298.823 252.756 298.635C252.568 298.448 252.463 298.193 252.463 297.928V262.928C252.463 262.663 252.568 262.409 252.756 262.221C252.943 262.034 253.198 261.928 253.463 261.928C253.728 261.928 253.982 262.034 254.17 262.221C254.358 262.409 254.463 262.663 254.463 262.928V297.928C254.463 298.193 254.358 298.448 254.17 298.635C253.982 298.823 253.728 298.928 253.463 298.928Z" fill="#CCCCCC" />
                                        <path id="phone-line32" d="M260.463 304.428C260.198 304.428 259.943 304.323 259.756 304.135C259.568 303.948 259.463 303.693 259.463 303.428V257.428C259.463 257.163 259.568 256.909 259.756 256.721C259.943 256.534 260.198 256.428 260.463 256.428C260.728 256.428 260.982 256.534 261.17 256.721C261.358 256.909 261.463 257.163 261.463 257.428V303.428C261.463 303.693 261.358 303.948 261.17 304.135C260.982 304.323 260.728 304.428 260.463 304.428Z" fill="#CCCCCC" />
                                        <path id="phone-line33" d="M267.463 307.928C267.198 307.928 266.943 307.823 266.756 307.635C266.568 307.448 266.463 307.193 266.463 306.928V253.928C266.463 253.663 266.568 253.409 266.756 253.221C266.943 253.034 267.198 252.928 267.463 252.928C267.728 252.928 267.982 253.034 268.17 253.221C268.358 253.409 268.463 253.663 268.463 253.928V306.928C268.463 307.193 268.358 307.448 268.17 307.635C267.982 307.823 267.728 307.928 267.463 307.928Z" fill="#CCCCCC" />
                                        <path id="phone-line34" d="M274.463 316.928C274.198 316.928 273.943 316.823 273.756 316.635C273.568 316.448 273.463 316.193 273.463 315.928V244.928C273.463 244.663 273.568 244.409 273.756 244.221C273.943 244.034 274.198 243.928 274.463 243.928C274.728 243.928 274.982 244.034 275.17 244.221C275.358 244.409 275.463 244.663 275.463 244.928V315.928C275.463 316.193 275.358 316.448 275.17 316.635C274.982 316.823 274.728 316.928 274.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line35" d="M281.463 346.428C281.198 346.428 280.943 346.323 280.756 346.135C280.568 345.948 280.463 345.693 280.463 345.428V215.428C280.463 215.163 280.568 214.909 280.756 214.721C280.943 214.534 281.198 214.428 281.463 214.428C281.728 214.428 281.982 214.534 282.17 214.721C282.358 214.909 282.463 215.163 282.463 215.428V345.428C282.463 345.693 282.358 345.948 282.17 346.135C281.982 346.323 281.728 346.428 281.463 346.428Z" fill="#CCCCCC" />
                                        <path id="phone-line36" d="M288.463 316.928C288.198 316.928 287.943 316.823 287.756 316.635C287.568 316.448 287.463 316.193 287.463 315.928V244.928C287.463 244.663 287.568 244.409 287.756 244.221C287.943 244.034 288.198 243.928 288.463 243.928C288.728 243.928 288.982 244.034 289.17 244.221C289.358 244.409 289.463 244.663 289.463 244.928V315.928C289.463 316.193 289.358 316.448 289.17 316.635C288.982 316.823 288.728 316.928 288.463 316.928Z" fill="#CCCCCC" />
                                        <path id="phone-line37" d="M295.463 323.428C295.198 323.428 294.943 323.323 294.756 323.135C294.568 322.948 294.463 322.693 294.463 322.428V238.428C294.463 238.163 294.568 237.909 294.756 237.721C294.943 237.534 295.198 237.428 295.463 237.428C295.728 237.428 295.982 237.534 296.17 237.721C296.358 237.909 296.463 238.163 296.463 238.428V322.428C296.463 322.693 296.358 322.948 296.17 323.135C295.982 323.323 295.728 323.428 295.463 323.428Z" fill="#CCCCCC" />
                                        <path id="phone-line38" d="M302.463 306.428C302.198 306.428 301.943 306.323 301.756 306.135C301.568 305.948 301.463 305.693 301.463 305.428V255.428C301.463 255.163 301.568 254.909 301.756 254.721C301.943 254.534 302.198 254.428 302.463 254.428C302.728 254.428 302.982 254.534 303.17 254.721C303.358 254.909 303.463 255.163 303.463 255.428V305.428C303.463 305.693 303.358 305.948 303.17 306.135C302.982 306.323 302.728 306.428 302.463 306.428Z" fill="#CCCCCC" />
                                        <path id="phone-line39" d="M309.463 310.428C309.198 310.428 308.943 310.323 308.756 310.135C308.568 309.948 308.463 309.693 308.463 309.428V251.428C308.463 251.163 308.568 250.909 308.756 250.721C308.943 250.534 309.198 250.428 309.463 250.428C309.728 250.428 309.983 250.534 310.17 250.721C310.358 250.909 310.463 251.163 310.463 251.428V309.428C310.463 309.693 310.358 309.948 310.17 310.135C309.983 310.323 309.728 310.428 309.463 310.428Z" fill="#CCCCCC" />
                                        <path id="phone-line40" d="M316.463 298.928C316.198 298.928 315.943 298.823 315.756 298.635C315.568 298.448 315.463 298.193 315.463 297.928V262.928C315.463 262.663 315.568 262.409 315.756 262.221C315.943 262.034 316.198 261.928 316.463 261.928C316.728 261.928 316.983 262.034 317.17 262.221C317.358 262.409 317.463 262.663 317.463 262.928V297.928C317.463 298.193 317.358 298.448 317.17 298.635C316.983 298.823 316.728 298.928 316.463 298.928Z" fill="#CCCCCC" />
                                        <path id="Vector_3" d="M74.4629 540.451V576.151L102.463 558.301L74.4629 540.451Z" fill="#3F3D56" />
                                        <path id="Vector_4" d="M193.621 572.462C201.42 564.67 201.403 552.009 193.584 544.183C185.765 536.357 173.104 536.328 165.305 544.12C157.507 551.911 157.523 564.572 165.342 572.398C173.162 580.225 185.822 580.253 193.621 572.462Z" fill="#5EA51D" />
                                        <path id="Vector_5" d="M266.753 574.291H259.903C258.995 574.291 258.124 573.931 257.481 573.289C256.838 572.648 256.475 571.779 256.473 570.871V545.731C256.475 544.822 256.838 543.951 257.48 543.308C258.123 542.665 258.994 542.303 259.903 542.301H266.753C267.662 542.301 268.535 542.662 269.178 543.305C269.821 543.948 270.183 544.821 270.183 545.731V570.881C270.181 571.33 270.092 571.774 269.919 572.189C269.745 572.603 269.492 572.979 269.174 573.296C268.855 573.613 268.478 573.863 268.062 574.034C267.647 574.205 267.202 574.292 266.753 574.291ZM288.463 570.881V545.731C288.463 544.823 288.103 543.952 287.462 543.309C286.82 542.666 285.951 542.303 285.043 542.301H278.183C277.274 542.303 276.403 542.665 275.76 543.308C275.118 543.951 274.755 544.822 274.753 545.731V570.881C274.755 571.789 275.118 572.658 275.761 573.299C276.404 573.941 277.275 574.301 278.183 574.301H285.043C285.492 574.301 285.937 574.212 286.351 574.04C286.766 573.868 287.143 573.616 287.461 573.299C287.779 572.981 288.03 572.604 288.202 572.189C288.374 571.774 288.463 571.33 288.463 570.881Z" fill="#3F3D56" />
                                        <path id="Vector_6" d="M269.11 401.442H93.8161C93.5009 401.441 93.199 401.315 92.9764 401.092C92.7539 400.869 92.6289 400.566 92.6289 400.251C92.6289 399.936 92.7539 399.634 92.9764 399.411C93.199 399.187 93.5009 399.061 93.8161 399.061H269.11C269.426 399.061 269.729 399.186 269.952 399.409C270.175 399.633 270.301 399.935 270.301 400.251C270.301 400.567 270.175 400.87 269.952 401.093C269.729 401.316 269.426 401.442 269.11 401.442Z" fill="#CCCCCC" />
                                        <path id="Vector_7" d="M269.11 161.442H93.8161C93.5009 161.441 93.199 161.315 92.9764 161.092C92.7539 160.869 92.6289 160.566 92.6289 160.251C92.6289 159.936 92.7539 159.634 92.9764 159.411C93.199 159.187 93.5009 159.061 93.8161 159.061H269.11C269.425 159.061 269.727 159.187 269.95 159.411C270.172 159.634 270.297 159.936 270.297 160.251C270.297 160.566 270.172 160.869 269.95 161.092C269.727 161.315 269.425 161.441 269.11 161.442Z" fill="#CCCCCC" />
                                    </g>
                                </svg>

                            </div>
                            <div className="service-right service-content">
                                <h1 className="service-title">AI <span>Phone</span> Agents</h1>
                                <p className="section-p">Our AI phone systems can automate business calls by handling routine inquiries, scheduling appointments, and providing information without any human intervention.</p>
                            </div>
                        </div>
                        <div className="service service3">
                            <div className="service-left service-content">
                                <h1 className="service-title">Workflow <span>Automations</span></h1>
                                <p className="section-p">We build you bespoke AI Chatbots that not only handle over 80% of your customer support, but also a myriad of various tasks e.g saving info to CRM, booking meetings, lead qualification e.t.c all based on your unique business needs</p>
                            </div>
                            <div className="service-right">
                                <svg width="471" height="635" className='task-svg' viewBox="0 0 471 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 23">
                                        <path id="Vector" d="M437.632 369H179.632C170.883 368.99 162.495 365.51 156.309 359.324C150.122 353.137 146.642 344.749 146.632 336V33C146.642 24.2509 150.122 15.863 156.309 9.67639C162.495 3.48983 170.883 0.00988299 179.632 0H419.659L470.632 40.6289V336C470.622 344.749 467.142 353.137 460.956 359.324C454.769 365.51 446.381 368.99 437.632 369Z" fill="#E6E6E6" />
                                        <path id="Vector_2" d="M179.632 9.5C173.402 9.50702 167.429 11.9852 163.023 16.3907C158.617 20.7963 156.139 26.7696 156.132 33V336C156.139 342.23 158.617 348.204 163.023 352.609C167.429 357.015 173.402 359.493 179.632 359.5H437.632C443.863 359.493 449.836 357.015 454.242 352.609C458.647 348.204 461.125 342.23 461.132 336V45.2056L416.336 9.5H179.632Z" fill="white" />
                                        <path id="Vector_3" d="M387.451 97.6043H269.988C269.266 97.6043 268.551 97.4621 267.885 97.186C267.218 96.9098 266.612 96.505 266.102 95.9947C265.591 95.4844 265.187 94.8786 264.911 94.2119C264.634 93.5452 264.492 92.8306 264.492 92.1089C264.492 91.3872 264.634 90.6727 264.911 90.0059C265.187 89.3392 265.591 88.7334 266.102 88.2231C266.612 87.7128 267.218 87.308 267.885 87.0318C268.551 86.7557 269.266 86.6135 269.988 86.6135H387.451C388.173 86.6135 388.888 86.7557 389.554 87.0318C390.221 87.308 390.827 87.7128 391.337 88.2231C391.848 88.7334 392.252 89.3392 392.528 90.0059C392.805 90.6727 392.947 91.3872 392.947 92.1089C392.947 92.8306 392.805 93.5452 392.528 94.2119C392.252 94.8786 391.848 95.4844 391.337 95.9947C390.827 96.505 390.221 96.9098 389.554 97.186C388.888 97.4621 388.173 97.6043 387.451 97.6043Z" fill="#CCCCCC" />
                                        <path id="Vector_4" d="M410.12 116.151H269.988C268.53 116.151 267.132 115.572 266.102 114.542C265.071 113.511 264.492 112.113 264.492 110.656C264.492 109.198 265.071 107.801 266.102 106.77C267.132 105.739 268.53 105.16 269.988 105.16H410.12C411.577 105.16 412.975 105.739 414.006 106.77C415.036 107.801 415.615 109.198 415.615 110.656C415.615 112.113 415.036 113.511 414.006 114.542C412.975 115.572 411.577 116.151 410.12 116.151Z" fill="#CCCCCC" />
                                        <path id="Vector_5" d="M387.451 180.722H269.988C268.53 180.722 267.132 180.143 266.102 179.112C265.071 178.082 264.492 176.684 264.492 175.227C264.492 173.769 265.071 172.371 266.102 171.341C267.132 170.31 268.53 169.731 269.988 169.731H387.451C388.909 169.731 390.307 170.31 391.337 171.341C392.368 172.371 392.947 173.769 392.947 175.227C392.947 176.684 392.368 178.082 391.337 179.112C390.307 180.143 388.909 180.722 387.451 180.722Z" fill="#CCCCCC" />
                                        <path id="Vector_6" d="M410.12 199.269H269.988C268.53 199.269 267.132 198.69 266.102 197.659C265.071 196.629 264.492 195.231 264.492 193.773C264.492 192.316 265.071 190.918 266.102 189.888C267.132 188.857 268.53 188.278 269.988 188.278H410.12C411.577 188.278 412.975 188.857 414.006 189.888C415.036 190.918 415.615 192.316 415.615 193.773C415.615 195.231 415.036 196.629 414.006 197.659C412.975 198.69 411.577 199.269 410.12 199.269Z" fill="#CCCCCC" />
                                        <path id="Vector_7" d="M387.451 263.84H269.988C268.53 263.84 267.132 263.261 266.102 262.23C265.071 261.199 264.492 259.802 264.492 258.344C264.492 256.887 265.071 255.489 266.102 254.458C267.132 253.428 268.53 252.849 269.988 252.849H387.451C388.909 252.849 390.307 253.428 391.337 254.458C392.368 255.489 392.947 256.887 392.947 258.344C392.947 259.802 392.368 261.199 391.337 262.23C390.307 263.261 388.909 263.84 387.451 263.84Z" fill="#CCCCCC" />
                                        <path id="Vector_8" d="M410.12 282.387H269.988C268.53 282.387 267.132 281.808 266.102 280.777C265.071 279.746 264.492 278.349 264.492 276.891C264.492 275.434 265.071 274.036 266.102 273.005C267.132 271.975 268.53 271.396 269.988 271.396H410.12C411.577 271.396 412.975 271.975 414.006 273.005C415.036 274.036 415.615 275.434 415.615 276.891C415.615 278.349 415.036 279.746 414.006 280.777C412.975 281.808 411.577 282.387 410.12 282.387Z" fill="#CCCCCC" />
                                        <path id="task-circle1" d="M221.073 120.806C231.8 120.806 240.496 112.109 240.496 101.382C240.496 90.6553 231.8 81.9592 221.073 81.9592C210.346 81.9592 201.65 90.6553 201.65 101.382C201.65 112.109 210.346 120.806 221.073 120.806Z" fill="#5EA51D" />
                                        <path id="task-tick1" d="M219.148 108.792C218.711 108.793 218.286 108.651 217.936 108.389L217.915 108.373L213.35 104.881C212.923 104.553 212.644 104.07 212.574 103.537C212.504 103.004 212.648 102.465 212.976 102.038C213.303 101.611 213.786 101.332 214.319 101.261C214.852 101.191 215.391 101.334 215.818 101.661L218.775 103.928L225.762 94.8135C225.924 94.6022 226.126 94.4249 226.356 94.2916C226.587 94.1584 226.841 94.0719 227.105 94.037C227.369 94.0021 227.637 94.0196 227.895 94.0884C228.152 94.1572 228.393 94.276 228.604 94.438L228.562 94.4987L228.606 94.4385C229.033 94.7661 229.311 95.2495 229.382 95.7826C229.452 96.3157 229.308 96.8549 228.981 97.2819L220.763 107.998C220.573 108.245 220.329 108.445 220.049 108.582C219.769 108.719 219.462 108.79 219.15 108.789L219.148 108.792Z" fill="white" />
                                        <path id="task-circle2" d="M223.073 203.806C233.8 203.806 242.496 195.109 242.496 184.382C242.496 173.655 233.8 164.959 223.073 164.959C212.346 164.959 203.65 173.655 203.65 184.382C203.65 195.109 212.346 203.806 223.073 203.806Z" fill="#CCCCCC" />
                                        <path id="task-tick2" d="M221.148 191.792C220.711 191.793 220.286 191.651 219.936 191.389L219.915 191.373L215.35 187.881C214.923 187.553 214.644 187.07 214.574 186.537C214.504 186.004 214.648 185.465 214.976 185.038C215.303 184.611 215.786 184.332 216.319 184.261C216.852 184.191 217.391 184.334 217.818 184.661L220.775 186.928L227.762 177.814C227.924 177.602 228.126 177.425 228.356 177.292C228.587 177.158 228.841 177.072 229.105 177.037C229.369 177.002 229.637 177.02 229.895 177.088C230.152 177.157 230.393 177.276 230.604 177.438L230.562 177.499L230.606 177.438C231.033 177.766 231.311 178.25 231.382 178.783C231.452 179.316 231.308 179.855 230.981 180.282L222.763 190.998C222.573 191.245 222.329 191.445 222.049 191.582C221.769 191.719 221.462 191.79 221.15 191.789L221.148 191.792Z" fill="#CCCCCC" />
                                        <path id="task-circle3" d="M221.073 286.806C231.8 286.806 240.496 278.109 240.496 267.382C240.496 256.655 231.8 247.959 221.073 247.959C210.346 247.959 201.65 256.655 201.65 267.382C201.65 278.109 210.346 286.806 221.073 286.806Z" fill="#CCCCCC" />
                                        <path id="task-tick3" d="M219.148 274.792C218.711 274.793 218.286 274.651 217.936 274.389L217.915 274.373L213.35 270.881C212.923 270.553 212.644 270.07 212.574 269.537C212.504 269.004 212.648 268.465 212.976 268.038C213.303 267.611 213.786 267.332 214.319 267.261C214.852 267.191 215.391 267.334 215.818 267.661L218.775 269.928L225.762 260.814C225.924 260.602 226.126 260.425 226.356 260.292C226.587 260.158 226.841 260.072 227.105 260.037C227.369 260.002 227.637 260.02 227.895 260.088C228.152 260.157 228.393 260.276 228.604 260.438L228.562 260.499L228.606 260.438C229.033 260.766 229.311 261.25 229.382 261.783C229.452 262.316 229.308 262.855 228.981 263.282L220.763 273.998C220.573 274.245 220.329 274.445 220.049 274.582C219.769 274.719 219.462 274.79 219.15 274.789L219.148 274.792Z" fill="#CCCCCC" />
                                        <path id="Vector_9" d="M469.64 41.9365H429.711C426.796 41.9365 424.001 40.7786 421.94 38.7174C419.878 36.6562 418.72 33.8607 418.72 30.9458V1.45476C418.72 1.32564 418.757 1.19913 418.825 1.08975C418.894 0.980372 418.992 0.892543 419.108 0.836334C419.225 0.780125 419.354 0.757812 419.483 0.771957C419.611 0.786102 419.733 0.83613 419.834 0.916305L470.067 40.7111C470.179 40.7997 470.26 40.9208 470.3 41.0578C470.34 41.1948 470.336 41.3407 470.289 41.4754C470.242 41.6101 470.154 41.7269 470.038 41.8095C469.922 41.8921 469.783 41.9365 469.64 41.9365Z" fill="#E6E6E6" />
                                        <path id="Vector_10" d="M199.348 425.772L46.702 457.947C42.2907 458.872 37.6928 458.009 33.917 455.548C30.1411 453.087 27.4958 449.228 26.5612 444.819L0.367424 320.55C-0.557212 316.138 0.305713 311.541 2.76688 307.765C5.22805 303.989 9.08647 301.343 13.4956 300.409L166.142 268.234C170.553 267.309 175.151 268.172 178.927 270.633C182.702 273.094 185.348 276.953 186.282 281.362L212.476 405.632C213.401 410.043 212.538 414.641 210.077 418.417C207.615 422.192 203.757 424.838 199.348 425.772Z" fill="white" />
                                        <path id="Vector_11" d="M199.348 425.772L46.702 457.947C42.2907 458.872 37.6928 458.009 33.917 455.548C30.1411 453.087 27.4958 449.228 26.5612 444.819L0.367424 320.55C-0.557212 316.138 0.305713 311.541 2.76688 307.765C5.22805 303.989 9.08647 301.343 13.4956 300.409L166.142 268.234C170.553 267.309 175.151 268.172 178.927 270.633C182.702 273.094 185.348 276.953 186.282 281.362L212.476 405.632C213.401 410.043 212.538 414.641 210.077 418.417C207.615 422.192 203.757 424.838 199.348 425.772ZM13.9081 302.366C10.0177 303.191 6.61325 305.525 4.44163 308.856C2.27001 312.188 1.50858 316.245 2.32441 320.137L28.5182 444.407C29.3429 448.297 31.677 451.702 35.0086 453.873C38.3402 456.045 42.3972 456.806 46.2895 455.99L198.935 423.815C202.826 422.991 206.23 420.657 208.402 417.325C210.573 413.993 211.335 409.936 210.519 406.044L184.325 281.775C183.501 277.884 181.167 274.48 177.835 272.308C174.503 270.137 170.446 269.375 166.554 270.191L13.9081 302.366Z" fill="#3F3D56" />
                                        <path id="Path 411" d="M156.657 309.209L79.619 325.447C78.9449 325.604 78.2364 325.498 77.637 325.153C77.0375 324.807 76.5917 324.246 76.3897 323.584C76.2973 323.239 76.2763 322.879 76.3278 322.525C76.3793 322.171 76.5023 321.832 76.6893 321.527C76.8763 321.223 77.1234 320.96 77.4155 320.754C77.7076 320.548 78.0386 320.404 78.3883 320.33L156.809 303.801C159.871 305.526 158.904 308.736 156.657 309.209Z" fill="#CCCCCC" />
                                        <path id="Path 412" d="M159.506 322.722L82.4672 338.96C81.793 339.117 81.0846 339.011 80.4851 338.666C79.8857 338.32 79.4399 337.759 79.2379 337.097C79.1455 336.752 79.1244 336.392 79.1759 336.038C79.2274 335.684 79.3504 335.345 79.5375 335.04C79.7245 334.736 79.9716 334.473 80.2637 334.267C80.5558 334.061 80.8868 333.917 81.2365 333.843L159.657 317.313C162.719 319.039 161.752 322.248 159.506 322.722Z" fill="#CCCCCC" />
                                        <path id="Path 413" d="M67.4349 350.165L43.9236 355.12C43.1558 355.282 42.3554 355.131 41.6982 354.703C41.0409 354.275 40.5805 353.603 40.4179 352.835L34.5697 325.09C34.4086 324.322 34.5588 323.522 34.9872 322.865C35.4156 322.207 36.0873 321.747 36.8548 321.584L60.3661 316.629C61.1339 316.468 61.9342 316.618 62.5913 317.046C63.2485 317.475 63.709 318.146 63.8718 318.914L69.72 346.659C69.8811 347.427 69.7309 348.227 69.3025 348.884C68.8741 349.542 68.2024 350.002 67.4349 350.165Z" fill="#CCCCCC" />
                                        <path id="Path 414" d="M165.113 350.437L47.5387 375.22C46.8645 375.376 46.1561 375.271 45.5567 374.925C44.9572 374.579 44.5114 374.019 44.3094 373.357C44.217 373.012 44.1959 372.651 44.2474 372.298C44.2989 371.944 44.422 371.605 44.609 371.3C44.796 370.996 45.0431 370.732 45.3352 370.526C45.6273 370.321 45.9583 370.176 46.308 370.103L165.266 345.029C168.328 346.754 167.36 349.964 165.113 350.437Z" fill="#CCCCCC" />
                                        <path id="Path 415" d="M167.963 363.954L50.3878 388.737C49.7137 388.893 49.0053 388.788 48.4058 388.442C47.8063 388.096 47.3605 387.536 47.1585 386.874C47.0661 386.529 47.0451 386.168 47.0966 385.815C47.1481 385.461 47.2711 385.122 47.4581 384.817C47.6451 384.513 47.8922 384.249 48.1843 384.044C48.4764 383.838 48.8074 383.694 49.1571 383.62L168.115 358.546C171.177 360.271 170.209 363.481 167.963 363.954Z" fill="#CCCCCC" />
                                        <path id="Path 416" d="M170.81 377.462L53.2352 402.245C52.561 402.402 51.8526 402.296 51.2532 401.95C50.6537 401.605 50.2079 401.044 50.0059 400.382C49.9135 400.037 49.8925 399.676 49.944 399.323C49.9955 398.969 50.1185 398.63 50.3055 398.325C50.4925 398.021 50.7396 397.758 51.0317 397.552C51.3238 397.346 51.6549 397.202 52.0045 397.128L170.962 372.054C174.024 373.779 173.056 376.989 170.81 377.462Z" fill="#CCCCCC" />
                                        <path id="Path 417" d="M173.659 390.978L56.0841 415.761C55.41 415.918 54.7015 415.812 54.1021 415.466C53.5026 415.121 53.0568 414.56 52.8548 413.898C52.7624 413.553 52.7413 413.192 52.7929 412.839C52.8444 412.485 52.9674 412.146 53.1544 411.841C53.3414 411.537 53.5885 411.274 53.8806 411.068C54.1727 410.862 54.5037 410.718 54.8534 410.644L173.811 385.57C176.873 387.295 175.905 390.505 173.659 390.978Z" fill="#CCCCCC" />
                                        <path id="Path 418" d="M176.506 404.488L58.9317 429.27C58.2576 429.427 57.5492 429.322 56.9497 428.976C56.3503 428.63 55.9045 428.069 55.7025 427.407C55.6101 427.062 55.589 426.702 55.6405 426.348C55.692 425.995 55.815 425.655 56.0021 425.351C56.1891 425.046 56.4362 424.783 56.7283 424.577C57.0204 424.371 57.3514 424.227 57.701 424.153L176.659 399.079C179.721 400.805 178.753 404.014 176.506 404.488Z" fill="#CCCCCC" />
                                        <path id="Vector_12" d="M197.261 342.621C196.994 343.106 196.765 343.61 196.578 344.131L148.444 356.075L140.071 347.413L125.346 358.341L138.679 375.117C139.756 376.472 141.244 377.442 142.919 377.879C144.594 378.317 146.365 378.2 147.968 377.545L200.197 356.203C201.914 357.466 203.975 358.178 206.105 358.241C208.236 358.305 210.336 357.719 212.125 356.561C213.914 355.402 215.309 353.726 216.122 351.756C216.936 349.786 217.131 347.614 216.68 345.531C216.23 343.447 215.156 341.55 213.601 340.092C212.046 338.634 210.084 337.684 207.976 337.368C205.868 337.052 203.713 337.385 201.799 338.324C199.885 339.262 198.302 340.761 197.261 342.621Z" fill="#A0616A" />
                                        <path id="Vector_13" d="M32.9641 448.913C34.4647 448.45 35.8454 447.663 37.009 446.608C38.1726 445.553 39.0908 444.256 39.6989 442.808C40.307 441.36 40.5903 439.797 40.5287 438.227C40.467 436.658 40.0621 435.121 39.3423 433.725L72.4666 341.658L49.4629 337.582L24.1363 429.363C21.8715 430.727 20.1859 432.875 19.3989 435.399C18.6119 437.924 18.7783 440.649 19.8664 443.059C20.9546 445.469 22.8889 447.396 25.3029 448.475C27.7169 449.554 30.4428 449.71 32.9641 448.913Z" fill="#A0616A" />
                                        <path id="Vector_14" d="M68.2599 358.001L45.5474 349.284C44.9012 349.036 44.316 348.652 43.8317 348.157C43.3474 347.663 42.9755 347.07 42.7411 346.418C42.5067 345.767 42.4155 345.073 42.4735 344.383C42.5316 343.693 42.7377 343.024 43.0777 342.421L54.9927 321.296C56.2806 317.997 58.8241 315.343 62.0653 313.917C65.3066 312.491 68.9812 312.407 72.2837 313.686C75.5861 314.965 78.2468 317.5 79.6825 320.738C81.1182 323.975 81.2118 327.649 79.9426 330.955L74.6871 354.553C74.5364 355.228 74.2419 355.864 73.8236 356.415C73.4053 356.967 72.8731 357.421 72.2631 357.749C71.6532 358.076 70.9799 358.268 70.2891 358.312C69.5983 358.355 68.9061 358.249 68.2599 358.001Z" fill="#5EA51D" />
                                        <path id="Vector_15" d="M119.525 621.766L131.785 621.765L137.617 574.477L119.523 574.478L119.525 621.766Z" fill="#A0616A" />
                                        <path id="Vector_16" d="M116.397 617.763L140.541 617.762H140.542C142.563 617.762 144.564 618.16 146.43 618.933C148.297 619.706 149.993 620.84 151.422 622.269C152.851 623.697 153.984 625.394 154.758 627.26C155.531 629.127 155.929 631.128 155.929 633.148V633.648L116.398 633.65L116.397 617.763Z" fill="#2F2E41" />
                                        <path id="Vector_17" d="M50.525 621.766L62.785 621.765L68.6169 574.477L50.5229 574.478L50.525 621.766Z" fill="#A0616A" />
                                        <path id="Vector_18" d="M47.3975 617.763L71.5413 617.762H71.5423C73.5628 617.762 75.5636 618.16 77.4304 618.933C79.2972 619.706 80.9934 620.84 82.4222 622.269C83.851 623.697 84.9843 625.394 85.7575 627.26C86.5308 629.127 86.9288 631.128 86.9287 633.148V633.648L47.3982 633.65L47.3975 617.763Z" fill="#2F2E41" />
                                        <path id="Vector_19" d="M63.3774 602.733H47.8627C47.2538 602.733 46.6512 602.609 46.0915 602.369C45.5317 602.13 45.0264 601.779 44.6062 601.338C44.1859 600.897 43.8595 600.376 43.6467 599.806C43.4338 599.235 43.339 598.627 43.3679 598.019L50.7372 439.687L51.2016 439.674L126.121 437.721L140.781 596.144C140.838 596.738 140.775 597.337 140.598 597.907C140.421 598.476 140.132 599.005 139.749 599.462C139.365 599.919 138.895 600.295 138.364 600.569C137.834 600.842 137.255 601.008 136.66 601.055L119.234 602.449C118.139 602.536 117.051 602.22 116.173 601.56C115.295 600.9 114.688 599.942 114.467 598.867L92.1767 486.09C92.1159 485.748 91.9342 485.438 91.6646 485.218C91.3951 484.998 91.0556 484.882 90.7077 484.891H90.7016C90.3525 484.883 90.0123 485.001 89.7431 485.224C89.4739 485.446 89.2937 485.758 89.2353 486.102L67.7927 599.102C67.5896 600.124 67.0388 601.044 66.2338 601.706C65.4289 602.368 64.4195 602.731 63.3774 602.733Z" fill="#2F2E41" />
                                        <path id="Vector_20" d="M83.5615 458.242C71.8552 458.242 59.8312 455.165 49.8635 446.067C49.333 445.586 48.9235 444.987 48.6682 444.318C48.4129 443.649 48.3189 442.929 48.394 442.217C49.4609 432.631 54.6362 383.136 51.7216 350.074C51.1529 343.898 52.0272 337.675 54.2756 331.895C56.5239 326.115 60.0848 320.937 64.6772 316.769C69.1892 312.611 74.6059 309.558 80.4998 307.851C86.3937 306.144 92.6035 305.831 98.6394 306.935C98.9453 306.99 99.2512 307.047 99.5574 307.106C119.221 310.912 132.883 329.11 131.337 349.437C129.081 379.097 127.059 419.216 130.235 441.905C130.366 442.833 130.204 443.779 129.771 444.611C129.338 445.442 128.656 446.117 127.82 446.542C120.595 450.192 102.494 458.242 83.5615 458.242Z" fill="#5EA51D" />
                                        <path id="Vector_21" d="M115.611 359.768C115.034 359.385 114.547 358.882 114.183 358.293C113.819 357.704 113.587 357.044 113.501 356.357L110.509 332.367C109.559 328.955 110.001 325.306 111.737 322.22C113.473 319.133 116.363 316.861 119.772 315.902C123.181 314.942 126.831 315.374 129.923 317.102C133.014 318.83 135.294 321.713 136.263 325.119L146.119 347.28C146.4 347.913 146.542 348.598 146.534 349.29C146.527 349.983 146.37 350.665 146.075 351.291C145.78 351.917 145.353 352.472 144.824 352.919C144.295 353.365 143.676 353.692 143.009 353.878L119.572 360.4C118.905 360.586 118.206 360.626 117.522 360.517C116.839 360.408 116.187 360.152 115.611 359.768Z" fill="#5EA51D" />
                                        <g id="head3">
                                            <path id="Vector_22" d="M91.7971 298.475C105.362 298.475 116.358 287.479 116.358 273.914C116.358 260.349 105.362 249.353 91.7971 249.353C78.2324 249.353 67.2361 260.349 67.2361 273.914C67.2361 287.479 78.2324 298.475 91.7971 298.475Z" fill="#A0616A" />
                                            <path id="Vector_23" d="M83.2229 298.128C80.8981 298.171 78.5879 297.753 76.4257 296.898C75.4743 296.532 74.4866 296.23 73.537 295.864C65.1504 292.623 59.6258 283.692 59.4279 274.703C59.2301 265.714 63.885 256.99 70.7971 251.241C77.7092 245.491 86.6621 242.539 95.627 241.857C105.284 241.121 116.157 243.57 121.553 251.612C122.99 253.753 123.994 256.35 123.143 258.935C122.888 259.715 122.433 260.414 121.823 260.963C119.413 263.107 117.01 261.495 114.554 261.352C111.177 261.157 108.145 263.89 107.055 267.091C105.965 270.293 106.444 273.818 107.325 277.084C107.995 279.049 108.418 281.09 108.583 283.16C108.654 284.197 108.459 285.236 108.016 286.177C107.573 287.119 106.897 287.931 106.052 288.538C103.942 289.813 101.171 289.075 99.0599 287.802C96.9488 286.529 95.1246 284.758 92.8441 283.821C90.5637 282.884 87.5 283.092 86.1727 285.17C85.7508 285.926 85.4653 286.75 85.3292 287.605C84.1393 293.026 84.4128 292.707 83.2229 298.128Z" fill="#2F2E41" />
                                        </g>
                                        <path id="Vector_24" d="M191.668 635H1.66772C1.40251 635 1.14815 634.895 0.960617 634.707C0.773081 634.52 0.667725 634.265 0.667725 634C0.667725 633.735 0.773081 633.48 0.960617 633.293C1.14815 633.105 1.40251 633 1.66772 633H191.668C191.933 633 192.187 633.105 192.375 633.293C192.562 633.48 192.668 633.735 192.668 634C192.668 634.265 192.562 634.52 192.375 634.707C192.187 634.895 191.933 635 191.668 635Z" fill="#CCCCCC" />
                                    </g>
                                </svg>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section about-section">
                    <div className="doodles">
                        <img src={doodle1} alt="" className='doodle1-left doodle' />
                        <img src={doodle2} alt="" className='doodle2-left doodle' />
                        <img src={doodle3} alt="" className='doodle3-left doodle' />
                        <img src={doodle1} alt="" className='doodle1-right doodle' />
                        <img src={doodle2} alt="" className='doodle2-right doodle' />
                        <img src={doodle3} alt="" className='doodle3-right doodle' />
                    </div>

                    <div className="about-wrapper">
                        <img src={peeping} className='peeping-img' alt="" />
                        <div className="about-container">
                            <div className="overlay">
                                <img src={curvyAbstract} className='curvy-abstract1 curvy-abstract' alt="" draggable={false} />
                                <img src={curvyAbstract} className='curvy-abstract2 curvy-abstract' alt="" draggable={false} />
                            </div>

                            <div className="about-content">
                                <h1 className="section-title">About <span>Begryp</span></h1>
                                <p className="section-p">We are an AI Agency that thrives to unlock unlimited growth in businesses by leveraging cutting edge AI Technology and automations. Our team of developers have years of expertise developing AI Systems, therefore we stand confident, on our delivery.</p>
                                <Button onClick={scrollSection} variant='contained' className='cta-btn appear-left' color='secondary'>
                                    <span>Book&nbsp;<span className='a-span'>A</span>&nbsp;Call</span>
                                    <img src={callIcon} alt="" className='call-icon' />
                                </Button>
                            </div>
                        </div>
                    </div>


                </section>

                <section className="section cta-section">
                    <div className="calendly-container appear-right">
                        <InlineWidget url="https://calendly.com/begryp/ai-audit-call" />
                    </div>
                </section>

                <section className="section contact-section">

                    <div className="contact-left">
                        <h1 className="section-title">Contact <span>Us</span></h1>
                        <p className="section-p">Got a burning AI Idea, question, or just want to chat about what we do, feel free to reach out to our friendly team at Begryp, and we’ll get right back to you.</p>

                        <div className="watermark-div">
                            <h1 className='ai'>AI</h1>
                            <h1 className='auto'>AUTO</h1>
                            <h1 className='mation'>MATION</h1>
                            <h1 className='tech'>TECH</h1>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form>
                            <TextField label="Name" variant="outlined" />
                            <TextField label="Email" variant="outlined" />
                            <TextField label="Subject" variant="outlined" />
                            <TextField label="Message" multiline rows={4} variant="outlined" />
                            <Button type='submit' className='send-btn' variant='contained' color='secondary'>
                                <span>Send <span className='message-span'>Message</span></span>
                                <img src={sendIcon} className="send-icon" alt="" />
                            </Button>
                        </form>
                    </div>
                </section>

                <section className="section footer-section">

                    <div className="overlay">
                        <img src={curvyAbstract} className='footer-abstract1 footer-abstract' alt="" draggable={false}/>
                        <img src={curvyAbstract} className='footer-abstract2 footer-abstract' alt="" draggable={false}/>
                    </div>

                    <div className="footer-left">
                        <img src={plainLogo} alt="" className='footer-logo' />
                    </div>
                    <div className="footer-right">
                        <div className="email-div">
                            <img src={emailIcon} className='email-icon' alt="" />
                            <span>info@begryp.com</span>
                        </div>

                        <div className="terms-div">
                            <a>Terms of Service</a>
                            <a>Privacy Policy</a>
                        </div>
                    </div>
                </section>

            </div>
        </ThemeProvider>
    )
}

export default Home