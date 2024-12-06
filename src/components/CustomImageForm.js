import React, { useState } from 'react';
import '../App.css'
import Spinner from './Spinner';

const CustomImageForm = ({ setImageSubmitted, setSelImage, selImage, setWOSubmitted }) => {

    const [selectedImage, setSelectedImage] = useState(selImage || "")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (selectedImage !== "") {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                localStorage.setItem('avatarImage', base64Image);
            };
            reader.readAsDataURL(selectedImage);
        }
        else {
            localStorage.setItem('avatarImage', "");
        }
        setTimeout(() => {
            setSelImage(selectedImage)
            setImageSubmitted(true)
            setLoading(false)
        }, 3000);
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelImage(file)
            setSelectedImage(file);
        }
    };

    return (
        <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginBottom: 5, cursor: 'pointer' }} onClick={() => { setWOSubmitted(false) }} />
                <h1 className='personalinfoheading'>Avatar</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='entrydiv'>
                    <p className='entrylabel' style={{ marginTop: 20 }}>Add Your Image for Avatar (optional)</p>
                    <p className='entrylabel' style={{ marginBottom: 20 }}>Or you can use Default Avatar by just pressing submit</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className='entrydiv'>
                    <button type='submit' className='submitbtn'>Preview and Download code for Portfolio Website</button>
                </div>
                {loading && (
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <Spinner />
                    </div>
                )}
            </form>
        </div>

    );
}

export default CustomImageForm;
