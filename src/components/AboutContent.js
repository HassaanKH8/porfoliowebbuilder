import React, { useState } from 'react';
import '../App.css'

const ContactForm = ({ setContactSubmitted, setAboutSubmitted, aboutData, setAboutData }) => {

    const [about, setAbout] = useState(aboutData || "")

    const handleSubmit = (e) => {
        e.preventDefault()
        setAboutData(about)
        setAboutSubmitted(true)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            setAboutSubmitted(true)
        }
    };

    const handleInput = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginBottom: 5, cursor: 'pointer' }} onClick={() => { setContactSubmitted(false) }} />
                <h1 className='personalinfoheading'>About Paragraph</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='entrydiv'>
                    <p className='entrylabel'>About Section Content:</p>
                    <textarea
                        className="entryinput"
                        placeholder="Enter Content for About Section..."
                        required
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        onInput={handleInput}
                        onKeyDown={handleKeyDown}
                        rows="1"
                        style={{ overflow: 'hidden', resize: 'none' }}
                    />
                </div>
                <div className='entrydiv'>
                    <button type='submit' className='submitbtn'>Submit</button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;
