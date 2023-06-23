import Movie from "./components/movie";



export default async function Home() {
  const Apikey = process.env.NEXT_PUBLIC_API_KEY
  //fetch from API
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=613d70424cd59d958c62a301dba369be`
  const data = await fetch(url)
  const res = await data.json()
  await delay(2000);
  


  return (
    <main>
      
      <h1 className="text-5xl text-center p-20">โปรแกรมโปสเตอร์หนัง</h1>
      <div className="grid gap-2 grid-cols-5 ">
        {res.results.map((movie: any) =>(
        <Movie
          poster_path={movie.poster_path}
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
        />
        ))}
      </div>
            
    </main>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

