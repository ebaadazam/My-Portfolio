import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import ebd from '../../images/ebd.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import {Myimg} from '../HeroSection/Myimg.css';
const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SubTitle>{Bio.reachout} <b>ebaadazam82881@gmail.com</b></SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    {/* <HeroRightContainer id="Right">

                        <Img src={ebd} alt="hero-image" />
                    </HeroRightContainer> */}
                    <img src={ebd} class='Myimg'/>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection