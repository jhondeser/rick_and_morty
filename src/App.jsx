import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [path, setPath] = useState('https://rickandmortyapi.com/api/character/?page=1')
  const [characters , setCharacters] = useState([]);
  const [characterInfo, setCharactersInfo] = useState({});

  const [page_n, setPage_n] = useState(1);

  
  useEffect(()=> {
    const fetchData = async ()=>{
      const result = await axios (
        path
      )
      console.log(result);
      setCharacters(result.data.results)
      setCharactersInfo(result.data.info)

      console.log(characterInfo);
      console.log(characters);
    }
    fetchData();
  },[path])

  function update_next() {
    setPage_n(page_n + 1);
    setPath(characterInfo.next);
  }

  function update_prev() {
    setPage_n(page_n - 1);
    setPath(characterInfo.prev);
  }

  function render_btn(page) {
    if (characterInfo.pages > 1) {
      if (page > 1 && page < characterInfo.pages) {
        return <div>
          <button className='btn btn_prev' onClick={()=> update_prev()}>prev</button>
          <button className='btn btn_next' onClick={()=> update_next()}>next</button>
        </div> 
      } else if (page <= 1) {
        return  <button className='btn btn_next' onClick={()=> update_next()}>next</button>
      } else if (page >= characterInfo.pages) {
        return <button className='btn btn_prev' onClick={()=> update_prev()}>prev</button>
      }
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
      <Header
        setCharacters = {setCharacters}
        setCharactersInfo = {setCharactersInfo}
        setPage_n = {setPage_n}
      />
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
