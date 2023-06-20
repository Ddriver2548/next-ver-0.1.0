import Movie from "./movies/page";

export default async function Home() {

  const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e6d8f982c39da8907304536fc516236"
  const data = await fetch(url)
  const res = await data.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-2xl'>โปรแกรมแสดงโปสเตอร์หนัง</h1>
      <p>
      {res.results.map((movie: any) =>(
        <p key={movie.id}>{movie.title}</p>
      ))}
      
      </p>
      {/* <Movie/>
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date} */}

    </main>
  )
}
