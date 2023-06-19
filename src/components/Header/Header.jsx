import logo  from '../../assets/logo.jpg'
import './header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Header({setCharacters,setCharactersInfo,setPage_n}) {
  const [filter, setFilter] = useState('');

  
  function search() {
    let search_value = document.querySelector('.inp_search').value
    setFilter(search_value)
    setPage_n(1);
  }

  useEffect(()=> {
    const fetchData = async ()=>{
      const result = await axios (
        `https://rickandmortyapi.com/api/character/?name=${filter}`
      )
      console.log(result);
      setCharacters(result.data.results);
      setCharactersInfo(result.data.info);
    }
    fetchData();
  },[filter])

  return (
      <section className="header">
      <div className="nav_container">
        <div className="nav_logo__container">
          <img src={logo} alt="" />
        </div>
        <div className="nav_elements_container">
            <div className="search_contaniner">
                <input className='inp_search' type="text" placeholder='Buscar'/>
                <button className='btn_search' onClick={() => search()}>
                  <AiOutlineSearch/>
                </button>
            </div>
            <div className="nav_items_container">
              <ul className="navs_items">
                <li className="items">Home</li>
                <li className="items">Characters</li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
