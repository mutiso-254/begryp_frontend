import { useState, useEffect } from 'react'
import Nav from './Nav'
import "./Home.css"
import aiMesh from "../images/ai-mesh.svg"
import benefitsMesh from "../images/benefits-mesh.svg"
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import vslImg from "../images/vsl-image.png"
import playBtn from "../images/play-btn.svg"
import solutionImg from "../images/solution-img.png"
import dotGreen from "../images/dot-green.png"
import prod1Img from "../images/prod1-img.png"
import prod2Img from "../images/prod2-img.png"
import runway1 from "../images/runway1.jpg"
import runway2 from "../images/runway2.png"
import proofImg from "../images/proof-img.png"
import logoWhite from "../images/logo-white.svg"
import plainLogo from "../images/plain-logo.png"
import { InlineWidget } from "react-calendly";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import heroImg from "../images/hero-img.png"
import benefitsImg from "../images/benefits-img.png"
import greenMesh from "../images/green-mesh.svg"
import wave from "../images/wave-green.png"
import waveGif from "../images/wave-anim.gif"
import runwayVid from "../images/runway-vid.mp4"
import Vimeo from '@vimeo/player'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';




const Home = () => {

    // INITIALIZATIONS

    const theme = createTheme({
        palette: {
            primary: {
                main: "#06112A"
            },
            secondary: {
                main: "#5EA51D"
            }
        }
    })



    // USEEFFECTS


    useEffect(() => {
        const dynamicText = document.querySelector(".home-container .hero-section .hero-title .typewriter");
        const words = ['Technology', 'AI', 'Automations', 'Systems'];

        // Variables to track the position and deletion status of the word
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

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
            } else {
                // If word is deleted then switch to the next word
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking");
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(typeEffect, 1200);
            }
        }

        typeEffect();
    }, [])



    // VIMEO USEEFFECT

    useEffect(() => {

        const iframe = document.querySelector('iframe');
        const player = new Vimeo(iframe);


        player.on('play', () => {
            console.log('Played the video');

            
            player.requestFullscreen()
            .then(res => console.log())
            .catch(err => console.log())
        });


    }, [])


    /////////////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


    // OPEN VSL

    const openVsl = () => {
        console.log("We are opening the VSL container")
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <ThemeProvider theme={theme}>
            <div className='home-container'>
                <Nav />

                <section className="hero-section">
                    <img src={aiMesh} alt="" className="ai-mesh mesh1" />
                    <img src={aiMesh} alt="" className="ai-mesh mesh2" />

                    <div className="hero-div">

                        <div className="hero-left">
                            <div className="hero-left-top">
                                <h1 className="hero-title appear-left">Empower your <span className='fashion-span'>Fashion</span> Brand With Cutting Edge <span class="typewriter">...</span> <span class="cursor">|</span></h1>
                                <p className="hero-p section-p appear-down">Unlock your brand's potential with our bespoke AI solutions. Our chatbots, automations, and workflows drive efficiency, slash costs, and supercharge profits.</p>
                                <Button onClick={scrollSection} variant='contained' className='hero-btn appear-left' color='primary'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                            </div>

                            <div className="hero-left-vsl" onClick={openVsl}>
                                <iframe src="https://player.vimeo.com/video/915045001?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} title="Chatbot Offer 2"></iframe>


                                <div className="overlay" style={{ display: 'none' }}>
                                    <div className="overlay-div">
                                        <img src={playBtn} alt="" className="play-btn" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="hero-right">
                            <img src={heroImg} alt="" className='appear-right' />
                        </div>
                    </div>
                </section>


                <section className="problem-section">
                    <h1 className="section-title appear-left">The<span>Edge</span> You Need In The Fashion Landscape</h1>

                    <p className="section-p problem-p appear-right">Are you tired of customers landing on your website or social media channels, just to purchase one item, or entirely buy nothing? Tired of them adding items to cart, never to checkout? Are you struggling to engage ALL your online shoppers in real time, to provide each a personalized shopping experience. If so, then relax, we've got you covered.</p>
                </section>

                <section className="solution-section">
                    <div className="solution-left">
                        <img src={solutionImg} alt="" className="solution-img appear-left" />
                        <img src={aiMesh} alt="" className="solution-mesh mesh1" />
                        <img src={aiMesh} alt="" className="solution-mesh mesh2" />
                    </div>

                    <div className="solution-right">
                        <h1 className="section-title appear-left"><span>Supercharge</span> Your Growth</h1>

                        <p className="section-p appear-right">Beryp unlocks a whole new level of growth, for your fashion brand. Our chatbots and automated workflows provide personalized shopping experiences at scale, real time customer engagement, and cut on redundant tasks, to boost efficiency.</p>

                        <Button onClick={scrollSection} variant='outlined' className='sol-btn appear-up'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                    </div>
                </section>

                <section className="products-section">

                    <div className="space-fillers">
                        <img src={dotGreen} alt="" className="dot-green dot1" />
                        <img src={dotGreen} alt="" className="dot-green dot2" />
                        <img src={dotGreen} alt="" className="dot-green dot3" />
                    </div>


                    <div className="product product1">
                        <div className="prod-left">
                            <h1 className="section-title appear-left">AI Chatbots</h1>
                            <p className="section-p appear-up">Our AI Agents are built to serve as a robust interface between your brand and it’s customers. They not only recommend items, but also handle a myriad of other tasks like: payments directly in chat, adding items to cart, track orders, answer queries e.t.c</p>
                        </div>
                        <div className="prod-right appear-right">
                            <img src={prod1Img} alt="" className='prod-img' />
                            <div className="lanes">
                                <div className="lane lane1"></div>
                                <div className="lane lane2"></div>
                                <div className="lane lane3"></div>
                                <div className="lane lane4"></div>
                                <div className="lane lane5"></div>
                            </div>
                        </div>
                    </div>

                    <div className="product product2">
                        <div className="prod-left appear-left">

                            <img src={prod2Img} alt="" className='prod-img' />
                            <div className="lanes">
                                <div className="lane lane1"></div>
                                <div className="lane lane2"></div>
                                <div className="lane lane3"></div>
                                <div className="lane lane4"></div>
                                <div className="lane lane5"></div>
                            </div>
                        </div>
                        <div className="prod-right">
                            <h1 className="section-title appear-right">Automations</h1>
                            <p className="section-p appear-up">We do a thorough analysis of the processes/tasks involved in running your fashion brand, we then are able to automate most of the repetitive tasks, giving your team more time, to focus on business growth.</p>
                        </div>
                    </div>
                </section>



                <section className="benefits-section">
                    <div className="gradient gradient1"></div>
                    <div className="gradient gradient2"></div>
                    <img src={benefitsMesh} alt="" className="mesh" />
                    <img src={benefitsImg} alt="" className="benefits-img" />

                    <Parallax pages={4} style={{ top: '0', left: '0' }} className="animation">
                        <ParallaxLayer offset={0} speed={0.3}
                            style={{
                                backgroundImage: `url(${runway1})`,
                                backgroundSize: "cover"
                            }}

                            className='sticky-div'

                            sticky={{ start: 0, end: 6 }}
                        >
                            <div className="benefits-overlay"><img src={benefitsMesh} alt="" className="overlay-mesh" /> <img src={benefitsImg} alt="" className="inner-img" /></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0.5}>
                            <div className="benefits-content">
                                <h1 className="section-title">Increased Conversion Rates</h1>
                                <p className="section-p">By ensuring real time engagement with your customers via the chatbot, your brand increases the likelihood they end up buying. This is because the chatbot guides them through out the buying journey, up to checkout, in addition to recommending items they adore.</p>
                                <Button onClick={scrollSection} variant='contained' className='benefits-btn' color='secondary'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={1}>
                            <div className="benefits-content">
                                <h1 className="section-title">Increased AOV</h1>
                                <p className="section-p">By ensuring real time engagement with your customers via the chatbot, your brand increases the likelihood they end up buying. This is because the chatbot guides them through out the buying journey, up to checkout, in addition to recommending items they adore.</p>
                                <Button onClick={scrollSection} variant='contained' className='benefits-btn' color='secondary'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={0.1}>
                            <div className="benefits-content">
                                <h1 className="section-title">Enhanced Brand Loyalty</h1>
                                <p className="section-p">By ensuring real time engagement with your customers via the chatbot, your brand increases the likelihood they end up buying. This is because the chatbot guides them through out the buying journey, up to checkout, in addition to recommending items they adore.</p>
                                <Button onClick={scrollSection} variant='contained' className='benefits-btn' color='secondary'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={3} speed={0.5} factor={2}>
                            <div className="benefits-content">
                                <h1 className="section-title">Smooth Operations</h1>
                                <p className="section-p">By ensuring real time engagement with your customers via the chatbot, your brand increases the likelihood they end up buying. This is because the chatbot guides them through out the buying journey, up to checkout, in addition to recommending items they adore.</p>
                                <Button onClick={scrollSection} variant='contained' className='benefits-btn' color='secondary'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>
                            </div>
                        </ParallaxLayer>
                    </Parallax>

                </section>

                <section className="social-proof-section">

                    <div className="overlay"><img src={runway2} alt="" /></div>
                    <div className="mesh-div">
                        <img src={greenMesh} alt="" className="green-mesh green1" />
                        <img src={greenMesh} alt="" className="green-mesh green2" />
                        <img src={proofImg} alt="" className="proof-img" />
                    </div>

                    <div className="proof-left">
                        <Swiper
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                            loop
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <div className="proof-div">
                                    <p className="proof-p">80% of fashion executives said deploying AI was a business imperative.</p>
                                    <p className="author-p">~ According to Zipdo</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="proof-div">
                                    <p className="proof-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum aut animi quis fugit voluptate.</p>
                                    <p className="author-p">~ According to Zipdo</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="proof-div">
                                    <p className="proof-p">100% of fashion executives said deploying AI was a business imperative.</p>
                                    <p className="author-p">~ According to Zipdo</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="proof-div">
                                    <p className="proof-p">50% of fashion executives said deploying AI was a business imperative.</p>
                                    <p className="author-p">~ According to Zipdo</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>


                    </div>

                    {/* <div className="proof-right">
                        <img src={runway2} alt="" />
                    </div> */}

                    <div className="proof-right">
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src={runwayVid} type='video/mp4' />
                        </video>
                    </div>




                </section>

                <section className="cta-section">

                    <img src={waveGif} alt="" className='wave-gif' />

                    <Button onClick={scrollSection} className='cta-btn appear-up' variant='outlined'>Claim&nbsp;<span>Free</span>&nbsp;AI Audit</Button>

                    <div className="calendly-container appear-right">
                        <InlineWidget url="https://calendly.com/mutisomuathime/ai-audit-call" />
                    </div>

                    <p className="section-p disclaimer-p appear-left">** We are only take in five more clients for the month, so hurry and claim your free audit call today **</p>
                </section>

                <section className="footer">

                    <div className="waves-div">
                        <div class="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
                        <div class="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
                        <div class="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
                        <div class="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
                        <div class="wave wave5" style={{ backgroundImage: `url(${wave})` }}></div>
                        <div class="wave wave6" style={{ backgroundImage: `url(${wave})` }}></div>
                    </div>



                    <div className="footer-content">
                        <img src={plainLogo} alt="" />

                        <div className="footer-right">
                            <a className="footer-p">Terms of Service</a>
                            <a className="footer-p">Privacy Policy</a>
                        </div>
                    </div>
                </section>
            </div>
        </ThemeProvider>
    )
}

export default Home