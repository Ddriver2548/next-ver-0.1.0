import Movie from "./components/movie";


export default async function Home() {
  //fetch from API
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=613d70424cd59d958c62a301dba369be"
  const data = await fetch(url)
  const res = await data.json()


  return (
    <main>
      <h1 className="text-2xl">โปรแกรมโปสเตอร์หนัง</h1>
      <div className="grid gap-2 grid-cols-3">
        {res.results.map((movie: any) =>(
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
        ))}
      </div>      
    </main>
  );
}
