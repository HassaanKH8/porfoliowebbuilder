import React, { useState } from 'react';
import '../App.css'

const WebsiteOptions = ({ webOptions, setWebOptions, setWOSubmitted, setSkillsSubmited }) => {

    const [color, setColor] = useState(webOptions.backgroundColor || "#efeee9")
    const [ncolor, setNColor] = useState(webOptions.backgroundColor || "#1d2225")
    const [pcolor, setPColor] = useState(webOptions.primarytextColor || "#1c1c1c")
    const [scolor, setSColor] = useState(webOptions.secondarytextColor || "#dedede")
    const [acolor, setAColor] = useState(webOptions.accentColor || "#c9f07f")

    const handleSubmit = (e) => {
        e.preventDefault()
        setWebOptions({
            backgroundColor: color,
            navbarbackgroundColor: ncolor,
            primarytextColor: pcolor,
            secondarytextColor: scolor,
            accentColor: acolor
        })
        setWOSubmitted(true)
    }

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginBottom: 5, cursor: 'pointer' }} onClick={() => { setSkillsSubmited(false) }} />
                <h1 className='personalinfoheading'>Web Design Info</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='entrydiv'>
                    <p className='entrylabel'>Background Color:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#36454f", padding: 10, borderRadius: 10 }}>
                        <input type='color' className='colorinput' value={color} onChange={(e) => { setColor(e.target.value) }} />
                        <p className='colorText'>{color}</p>
                    </div>
                </div>
                <div className='entrydiv'>
                    <p className='entrylabel'>Navbar Background Color:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#36454f", padding: 10, borderRadius: 10 }}>
                        <input type='color' className='colorinput' value={ncolor} onChange={(e) => { setNColor(e.target.value) }} />
                        <p className='colorText'>{ncolor}</p>
                    </div>
                </div>
                <div className='entrydiv'>
                    <p className='entrylabel'>Primary Text Color:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#36454f", padding: 10, borderRadius: 10 }}>
                        <input type='color' className='colorinput' value={pcolor} onChange={(e) => { setPColor(e.target.value) }} />
                        <p className='colorText'>{pcolor}</p>
                    </div>
                </div>
                <div className='entrydiv'>
                    <p className='entrylabel'>Secondary Text Color:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#36454f", padding: 10, borderRadius: 10 }}>
                        <input type='color' className='colorinput' value={scolor} onChange={(e) => { setSColor(e.target.value) }} />
                        <p className='colorText'>{scolor}</p>
                    </div>
                </div>
                <div className='entrydiv'>
                    <p className='entrylabel'>A little bit Accent Color:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#36454f", padding: 10, borderRadius: 10 }}>
                        <input type='color' className='colorinput' value={acolor} onChange={(e) => { setAColor(e.target.value) }} />
                        <p className='colorText'>{acolor}</p>
                    </div>
                </div>

                <div className='entrydiv'>
                    <button type='submit' className='submitbtn'>Submit</button>
                </div>
            </form>
        </div>

    );
}

export default WebsiteOptions;
