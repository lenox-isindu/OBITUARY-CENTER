'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [obituaries, setObituaries] = useState([]);

  useEffect(() => {
    const fetchObituaries = async () => {
      const querySnapshot = await getDocs(collection(db, "obituaries"));
      const obituariesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setObituaries(obituariesList);
    };
    fetchObituaries();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className=" bg-red-500 h-20 w-full flex justify-between items-center">
      <div className='w-fulltext-black text-center text-4xl font-black flex items-center justify-center'>OBITUARIES::Get to know their stories</div>
      </div>
      <button className="w-32 h-16 bg-black rounded-full text-white " onClick={() => router.push('/components/Upload')}>Upload</button>

      <div className="mt-24 flex flex-wrap w-11/12 lg:bg-black items-center justify-between ">
        
        {obituaries.map(obituary => (
          <div key={obituary.id} className="bg-white shadow-md rounded-bl-full p-4 m-4 w-96 h-[500px] overflow-scroll">
            
             <h2 className="text-xl font-bold">{obituary.fullName}</h2>
            <p>{obituary.biography}</p>
           <Image src={obituary.image} width={400} height={400} />
          </div>
        ))}
      </div>
    </main>
  );
}
