import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [characters , setCharacters] = useState([]);
  const [page_n, setPage_n] = useState(1);

  useEffect(()=> {
    const fetchData = async ()=>{
      const result = await axios (
        `https://rickandmortyapi.com/api/character/?page=${page_n}`
      )
      console.log(result);
      setCharacters(result.data.results)
      console.log(characters);
    
    }
    fetchData();
  },[page_n])

  function render_btn(page) {
    if (page > 1 && page < 42) {
      return <div>
        <button onClick={()=> setPage_n(page - 1)}>prev</button>
        <button onClick={()=> setPage_n(page + 1)}>next</button>
      </div> 
    } else if (page <= 1) {
      return <button onClick={()=> setPage_n(page + 1)}>next</button>
    } else if (page >= 42) {
      return <button onClick={()=> setPage_n(page - 1)}>prev</button>
    }
  }

  function show_body(card) {
    let show_b = document.getElementById(`body_${card.id}`);
    show_b.classList.remove('hidden');
  }

  function hide_body(card) {
    let hide_b = document.getElementById(`body_${card.id}`);
    hide_b.classList.add('hidden');
  }

  return (
    <div className="App">
      <div className="container_pj">
        {characters.map(el => (
          <div 
            className="container_cards" 
            onMouseEnter={() => show_body(el)}
            onMouseLeave={() => hide_body(el)}
          >
            <div className="container_img">
              <img src={el.image} alt="" />
            </div>
            <div id= {'body_' + el.id}  className="container_body hidden">
              <h2>{el.name}</h2>
              <p>{el.species}</p>
              <p>{el.status}</p>   
            </div>
          </div>
        ))}
      </div>
      {render_btn(page_n)}
    </div>
  );
}

export default App;
