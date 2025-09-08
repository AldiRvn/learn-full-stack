import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Article from './Article';

function App() {
  console.log("App()");

  //? Handle Input Search
  const [search, setSearch] = useState("")
  //? Handle Render Articles
  const [articles, setArticles] = useState([])
  useEffect(() => {
    async function getArticles(search) {
      console.log("getArticles")
      const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0&num=12&name=${search}%`)
      if (!response.ok) {
        console.log(response)
      } else {
        const results = await response.json()
        setArticles(results.data.map(d => ({
          id: d.id,
          name: d.name,
          type: d.type,
          image: d.card_images[0].image_url,
        })))
        setFilterType("")
      }
    }
    getArticles(search)
  }, [search])
  //? Handle Filter
  const [filterType, setFilterType] = useState("")
  const filteredData = useMemo(() => {
    console.log("Filter()", filterType)
    return filterType !== "" ? articles.filter(d => d.type === filterType) : articles
  }, [articles, filterType])
  return (
    <main className='App'>

      <div className="text-center container my-4">
        <form className="d-flex" onSubmit={e => {
          e.preventDefault(); //? Mencegah page refresh kalau user tekan enter saat mengentik di dalam input search
        }}>
          <input type="search" className="mx-1 form-control" id="inputSearch" placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
          ></input>
          <button type="button" className="mx-1 btn btn-outline-primary" onClick={() => setFilterType("Effect Monster")}>Filter Effect Monster</button>
          <button type="button" className="mx-1 btn btn-secondary">Dark Mode</button>
        </form>
      </div>

      <section className="container">
        <h2 className="fw-light text-center my-4 text-truncate">Results of {search}: </h2>
        <div className="row row-cols-4">
          {filteredData.map(d => ( //? Looping komponen
            <Article
              key={d.id}
              name={d.name}
              image={d.image}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

export default App;
