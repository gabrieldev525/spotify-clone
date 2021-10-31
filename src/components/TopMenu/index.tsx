// React
import React, { useState } from 'react'

// Third party
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'
import {
  IoPersonOutline,
} from 'react-icons/io5'
import {
  TiArrowSortedUp,
  TiArrowSortedDown
} from 'react-icons/ti'
import { VscLinkExternal } from 'react-icons/vsc'
import { FiLogOut, FiSearch } from 'react-icons/fi'

// Local
import './styles/styles.scss'
import { useLocation } from 'react-router'

export default function TopMenu() {
  // Hook
  const { pathname } = useLocation()

  // State
  const [isShowMoreOptions, setIsShowMoreOptions] = useState(false)
  const [isComponentSearch, setIsComponentSearch] = useState(pathname == '/search' ? true : false)
  const [isComponentLibrary, setIsComponentLibrary] = useState(pathname == '/library' ? true : false)


  const onClickMoreOptions = () => {
    setIsShowMoreOptions(!isShowMoreOptions)
  }

  return (
    <div className='container_main'>
      <div className='container_nav_component_add'>
        <div className='nav_pre_next'>
          <IoIosArrowDropleftCircle size={40} color={'#0f1b21'} className='icon' />
          <IoIosArrowDroprightCircle size={40} color={'#0f1b21'} className='icon' />
        </div>

        {isComponentSearch && (
          <div className='container_search_main'>
            <FiSearch size={25} color={'#000000'} />
            <input type='text' placeholder='Artista, músicas ou podcasts' />
          </div>
        )}

        {isComponentLibrary && (
          <ul className='container_library_main'>
            <li className='items active'>Playlists</li>
            <li className='items '>Podcasts</li>
            <li className='items '>Artistas</li>
            <li className='items '>Álbuns</li>
          </ul>
        )}
      </div>


      <div className='profile' onClick={onClickMoreOptions}>
        <div className='content_person'>
          <IoPersonOutline size={20} color={'#ffffff'} />
        </div>
        <p className='content_current_user'>Username</p>
        <div className='content_more_options'>
          {isShowMoreOptions ? (
            <TiArrowSortedUp size={25} color={'#ffffff'} />
          ) : (
            <TiArrowSortedDown size={25} color={'#ffffff'} />
          )}
        </div>

        {isShowMoreOptions && (
          <ul className='container_options_menu'>
            <li>
              <p>Conta</p>
              <VscLinkExternal size={20} color={'#ffffff'} />
            </li>
            <li>
              <p>Perfil</p>
              <IoPersonOutline size={20} color={'#ffffff'} />
            </li>
            <li>
              <p>Sair</p>
              <FiLogOut size={20} color={'#ffffff'} />
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}