// React
import React from 'react'

// Third party
import { IoPersonAddOutline } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'

// Local
import { IFriendsActivitiesProps } from './types'
import './styles/styles.scss'

export default function FriendsActivities({friendsActivitiesImage, friendsActivitiesName, friendsActivitiesMusic, friendsActivitiesPlaylist}: IFriendsActivitiesProps) {
    return (
      <div className='friends-activities'>
          <div className='friends-activities-top'>
            <p>Atividades de Amigos </p>
            <IoPersonAddOutline />
          </div>
          <div className='friends-activities-card'>
              <div className='friends-activities-media'>
                  <div className='is-active'></div>
                <img src={friendsActivitiesImage} alt='friends activities card image' /> 
              </div>
              <div className='friends-activities-content'>
                  <p>{friendsActivitiesName}</p>
                  <p>{friendsActivitiesMusic}</p>
                  <p><FiMusic /> {friendsActivitiesPlaylist}</p>
              </div>
          </div>
      </div>
    )
  }