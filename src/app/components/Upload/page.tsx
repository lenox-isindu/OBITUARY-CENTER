// Upload.js
'use client'
import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from "firebase/firestore";

export default function Upload() {
    const [fullName, setFullName] = useState('');
    const [biography, setBiography] = useState('');
    const [image, setImage] = useState('');

    const handleUpload = async () => {
        try {
            const docRef = await addDoc(collection(db, "obituaries"), {
                fullName: fullName,
                biography: biography,
                image: image
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <div>
                <div className="flex flex-col">
                    <label htmlFor="fullName">Full Names</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="biography">Write Biography</label>
                    <textarea id="biography" className="w-96 h-52" value={biography} onChange={(e) => setBiography(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}
