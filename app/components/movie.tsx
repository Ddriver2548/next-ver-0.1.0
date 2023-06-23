import Link from 'next/link';
import Image from 'next/image';

type Props = {
    key: string;
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
};

export default function Movie({title,id,poster_path,release_date}: Props) {
    const imagePath = "https://image.tmdb.org/t/p/original"
return (
    <div>
       
    <Link href={`/movie/${id}`}>
        <div className=' overflow-hidden'> <Image className=' rounded-lg drop-shadow-xl transition duration-500 hover:scale-125   '
        src={imagePath + poster_path}
        width={800}
        height={800}
        alt={title}
        /></div>
       
    </Link>
    <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
    <h2>{release_date}</h2>

    </div>
)
}