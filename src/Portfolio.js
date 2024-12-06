import React, { useEffect, useState } from 'react';
import './App.css'
import { useLocation } from 'react-router-dom';

const Portfolio = () => {

    const location = useLocation()

    const [sdataReceived, setSdataReceived] = useState(location.state)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleData = () => {
        const storedData = localStorage.getItem('portfolioData');
        if (storedData !== null) {
            setSdataReceived(JSON.parse(storedData));
        } else {
            if (typeof location.state === 'object') {
                localStorage.setItem("portfolioData", JSON.stringify(location.state));
            } else {
                localStorage.setItem("portfolioData", location.state);
            }
        }
    }

    useEffect(() => {
        handleData()
        setTimeout(()=>{
            downloadHTML()
        },2000)
        // eslint-disable-next-line
    }, []);

    const data = {
        name: sdataReceived.personalInfo.name,
        whoareyou: sdataReceived.personalInfo.whoareyou,

        email: sdataReceived.contactInfo.email,
        phoneNo: sdataReceived.contactInfo.phoneNo,

        aboutText: sdataReceived.aboutInfo,

        skills: sdataReceived.skills,

        backgroundColor: sdataReceived.WebOptions.backgroundColor,
        navbarColor: sdataReceived.WebOptions.navbarbackgroundColor,
        prtextColor: sdataReceived.WebOptions.primarytextColor,
        sectextColor: sdataReceived.WebOptions.secondarytextColor,
        accentColor: sdataReceived.WebOptions.accentColor,

        avatar: localStorage.getItem('avatarImage') || sdataReceived.avatarImage
    }

    const downloadHTML = () => {
        const htmlContent = document.documentElement.outerHTML;

        const blob = new Blob([htmlContent], { type: 'text/html' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${sdataReceived.personalInfo.name}.html`;

        link.click();
    };


    return (
        <div>
            <div style={{ height: '100vh', width: '100%', backgroundColor: `${data.backgroundColor}` }}>
                <div style={{ height: 80, width: "100%", backgroundColor: `${data.navbarColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#home" style={{ color: `${data.sectextColor}`, textDecoration: 'none', fontSize: '18px', fontFamily: "Inter", fontWeight: 300 }}>Home</a>
                        <a href="#about" style={{ color: `${data.sectextColor}`, textDecoration: 'none', fontSize: '18px', fontFamily: "Inter", fontWeight: 300 }}>About</a>
                        <a href="/Portfolio#skills" style={{ color: `${data.sectextColor}`, textDecoration: 'none', fontSize: '18px', fontFamily: "Inter", fontWeight: 300 }}>Skills</a>
                        <a href="#contact" style={{ color: `${data.sectextColor}`, textDecoration: 'none', fontSize: '18px', fontFamily: "Inter", fontWeight: 300 }}>Contact</a>
                    </div>
                </div>
                <div className='bottomsectionportfolio'>
                    <div>
                        <h1 style={{ fontFamily: "Caveat", fontSize: 64, color: `${data.prtextColor}`, textShadow: `2px 2px 0px ${data.accentColor}` }}>I'm {data.name}</h1>
                        <h1 style={{ fontFamily: "Caveat", fontSize: 48, color: `${data.prtextColor}`, textShadow: `2px 2px 0px ${data.accentColor}` }}>{data.whoareyou}</h1>
                    </div>
                    <img
                        alt="portfolioImg"
                        src={data.avatar ? data.avatar : require('./assets/Avatar2.png')}
                        style={{ width: 300, height: 300, borderRadius: "50%", objectFit: 'contain' }}
                    />
                </div>
                <div id='about' className='aboutSectionPortfolio' style={{ backgroundColor: `${data.backgroundColor}` }}>
                    <h1 style={{ fontFamily: "Caveat", fontSize: 64, color: `${data.prtextColor}`, textShadow: `2px 2px 0px ${data.accentColor}`, textDecorationLine: 'underline', textDecorationThickness: 3, textDecorationSkipInk: 'none', textUnderlineOffset: 10, textAlign: 'center', paddingTop: 50 }}>About Me</h1>
                    <p style={{ fontFamily: "EB Garamond", fontSize: 20, color: `${data.prtextColor}`, textAlign: 'center', marginTop: 30, fontWeight: 500, width: "60%", justifySelf: 'center' }}>{data.aboutText}</p>
                </div>
                <div id='skills' className='skillsSectionPortfolio' style={{ backgroundColor: `${data.backgroundColor}` }}>
                    <h1 style={{ fontFamily: "Caveat", fontSize: 64, color: `${data.prtextColor}`, textShadow: `2px 2px 0px ${data.accentColor}`, textDecorationLine: 'underline', textDecorationThickness: 3, textDecorationSkipInk: 'none', textUnderlineOffset: 10, textAlign: 'center', paddingTop: 50 }}>Skills</h1>
                    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {data.skills.map((skill, index) => {
                            const isHovered = hoveredIndex === index;
                            return (
                                <p key={index} style={{ fontFamily: "Inter", fontSize: 24, color: isHovered ? `${data.backgroundColor}` : `${data.prtextColor}`, textAlign: 'center', marginTop: 10, transition: 'all 0.2s', padding: 10, backgroundColor: isHovered ? `${data.accentColor}` : `${data.backgroundColor}`, borderRadius: 10 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >{skill}</p>
                            );
                        })}
                    </div>
                </div>
                <div id='contact' className='contactSectionPortfolio' style={{ backgroundColor: `${data.backgroundColor}` }}>
                    <h2 style={{ fontFamily: "Inter", fontSize: 24, color: `${data.prtextColor}`, marginTop: 10, transition: 'all 0.2s', textAlign: 'center', backgroundColor: `${data.backgroundColor}`, borderRadius: 10, fontWeight: 400 }}>{data.email}</h2>
                    <h2 style={{ fontFamily: "Inter", fontSize: 22, color: `${data.prtextColor}`, marginTop: 10, transition: 'all 0.2s', textAlign: 'center', backgroundColor: `${data.backgroundColor}`, borderRadius: 10, fontWeight: 400 }}>{data.phoneNo}</h2>
                </div>
            </div >
        </div>
    );
}

export default Portfolio;
