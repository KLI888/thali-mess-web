import React, {useState} from 'react'
import './locatemess.css'
import { assets } from '../../assets/assets'
import LocatemessInfo from './LocatemessInfo';
import LocatemessCard from './LocatemessCard';
function Locatemess() {

  return (
    <div className="locatemess">
        <div className="locatemess_content container">
            <LocatemessInfo />
        </div>
        <div className="locatemess_messes container">
            <LocatemessCard />
        </div>
    </div>
  )
}

export default Locatemess
