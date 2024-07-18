'use client'
import React, { useState } from 'react';
import { db, storage } from '../../firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Upload() {
    const [fullName, setFullName] = useState('');
    const [biography, setBiography] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        let imageUrl = '';

        if (image) {
            const storageRef = ref(storage, `images/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            imageUrl = await getDownloadURL(snapshot.ref);
        }

        try {
            const docRef = await addDoc(collection(db, "obituaries"), {
                fullName: fullName,
                biography: biography,
                image: imageUrl
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
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                </div>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}
