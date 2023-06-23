//? call components 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    params: any;
}

export default async function MovieDetail({params}: Props) {
    const rey = process.env.NEXT_PUBLIC_API_KEY
    const { id } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${rey}`, {next: {revalidate: 10}}
    );
    const res = await data.json();
  return (
    <div className='flex justify-center text-center p-20'>
    <div>MovieDetail: {params.id}
    <h2 className=' text-4xl'> Movie name : {res.title}</h2>
    <h2 className=' text-4xl'> Movie Time : {res.runtime} </h2> 

    <Image className='p-10 w-full' src={imagePath + res.backdrop_path} width={600} height={400} alt='pic' ></Image>

    <p>{res.overview}</p>
   
    
    </div>
    
    
    
    
    </div>
    
  )
}