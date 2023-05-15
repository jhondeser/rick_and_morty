import logo  from '../../assets/logo.jpg'
import './header.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Header() {
  return (
      <section className="header">
      <div className="nav_container">
        <div className="nav_logo__container">
          <img src={logo} alt="" />
        </div>
        <div className="nav_elements_container">
            <div className="search_contaniner">
                <form action="">
                  <input className='inp_search' type="text" placeholder='Buscar'/>
                  <button className='inp_button'>
                    <AiOutlineSearch/>
                  </button>
                </form>
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