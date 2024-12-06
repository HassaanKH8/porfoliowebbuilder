import React, { useState } from 'react';
import '../App.css'

const AboutContent = ({ setPersonalSubmitted, setContactSubmitted, setContactData, contactData }) => {

    const [email, setEmail] = useState(contactData.email || "")
    const [phoneNo, setPhoneNo] = useState(contactData.phoneNo || "")

    const handleSubmit = (e) => {
        e.preventDefault()
        setContactData({
            email: email,
            phoneNo: phoneNo
        })
        setContactSubmitted(true);
    }

    const handlePhoneNoChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/[^0-9+\s()]/g, '');
        setPhoneNo(sanitizedValue);
    };

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginBottom: 5, cursor: 'pointer' }} onClick={() => { setPersonalSubmitted(false) }} />
                <h1 className='personalinfoheading'>Contact Info</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='entrydiv'>
                    <p className='entrylabel'>Email: (optional)</p>
                    <input type='email' className='entryinput' placeholder='Enter Your Email...' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='entrydiv'>
                    <p className='entrylabel2s'>Phone Number: (optional)</p>
                    <input
                        type='tel'
                        className="entryinput"
                        placeholder="Phone No."
                        value={phoneNo}
                        onChange={handlePhoneNoChange} />
                </div>
                <div className='entrydiv'>
                    <button type='submit' className='submitbtn'>Submit</button>
                </div>
            </form>
        </div>

    );
}

export default AboutContent;
