import React, { useEffect, useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm';
import AboutContent from './components/AboutContent';
import SkillsForm from './components/SkillsForm';
import WebsiteOptions from './components/WebsiteOptions';
import CustomImageForm from './components/CustomImageForm';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {

    const navigate = useNavigate()

    const [fname, setFname] = useState("")
    const [whoareyou, setWhoAreYou] = useState("")

    const [contactData, setContactData] = useState({})
    const [aboutData, setAboutData] = useState("")
    const [skills, setSkills] = useState([""])
    const [webOptions, setWebOptions] = useState({})
    const [selImage, setSelImage] = useState("")

    const [peSubmitted, setPESubmitted] = useState(false)
    const [ceSubmitted, setCESubmitted] = useState(false)
    const [aSubmitted, setASubmitted] = useState(false)
    const [sSubmitted, setSSubmitted] = useState(false)
    const [WOSubmitted, setWOSubmitted] = useState(false)
    const [ImageSubmitted, setImageSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setPESubmitted(true)
    }

    const handleTransferToPortfolioWebsite = () => {
        if (ImageSubmitted) {
            const datatosend = {
                personalInfo: {
                    name: fname,
                    whoareyou: whoareyou,
                },
                contactInfo: {
                    email: contactData.email,
                    phoneNo: contactData.phoneNo
                },
                aboutInfo: aboutData,
                skills: skills,
                WebOptions: webOptions,
                avatarImage: selImage
            }

            localStorage.removeItem("portfolioData")
            navigate("/Portfolio", {state: datatosend})

            // window.open('/Portfolio', '_blank');
        }

    }

    useEffect(()=>{
        handleTransferToPortfolioWebsite()
        // eslint-disable-next-line
    },[ImageSubmitted])

    return (
        <div className='page'>
            <div className='navbar'>
                <h1 className='heading'>Portfolio Website Builder</h1>
            </div>
            <div className='bottomsection'>
                <div style={{ marginTop: 30 }}>
                    {peSubmitted ? (
                        <div>
                            {ceSubmitted ? (
                                <div>
                                    {aSubmitted ? (
                                        <div>
                                            {sSubmitted ? (
                                                <div>
                                                    {WOSubmitted ? (
                                                        <CustomImageForm setImageSubmitted={setImageSubmitted} setSelImage={setSelImage} selImage={selImage} setWOSubmitted={setWOSubmitted} />
                                                    ):(
                                                        <WebsiteOptions setWOSubmitted={setWOSubmitted} webOptions={webOptions} setWebOptions={setWebOptions} setSkillsSubmited={setSSubmitted} />
                                                    )}
                                                </div>
                                            ) : (
                                                <SkillsForm setSubmited={setSSubmitted} submittedSkills={skills} setSubmittedSkills={setSkills} setAboutSubmitted={setASubmitted} />
                                            )}
                                        </div>
                                    ) : (
                                        <AboutContent setContactSubmitted={setCESubmitted} setAboutSubmitted={setASubmitted} aboutData={aboutData} setAboutData={setAboutData} />
                                    )}
                                </div>
                            ) : (
                                <ContactForm setPersonalSubmitted={setPESubmitted} setContactSubmitted={setCESubmitted} setContactData={setContactData} contactData={contactData} />
                            )}
                        </div>
                    ) : (
                        <div>
                            <h1 className='personalinfoheading'>Personal Info</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='entrydiv'>
                                    <p className='entrylabel'>Your First Name:</p>
                                    <input required className='entryinput' placeholder='Enter Your First Name...' value={fname} onChange={(e) => { setFname(e.target.value) }} />
                                </div>
                                <div className='entrydiv'>
                                    <p className='entrylabel2s'>Who are you? e.g: (a creative Web Developer)</p>
                                    <input required className='entryinput' placeholder='a creative Web Developer' value={whoareyou} onChange={(e) => { setWhoAreYou(e.target.value) }} />
                                </div>
                                <div className='entrydiv'>
                                    <button type='submit' className='submitbtn'>Submit</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}

export default HomeScreen;
