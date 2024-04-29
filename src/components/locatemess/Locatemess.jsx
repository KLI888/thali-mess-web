import React, { useState } from 'react'
import './locatemess.css'
import { assets } from '../../assets/assets'
import LocatemessInfo from './LocatemessInfo';
import LocatemessCard from './LocatemessCard';
function Locatemess() {

  const [showCity, setShowCity] = useState(false);
  const [showLocality, setShowLocality] = useState(false);
  const [currentCity, setCurrentCity] = useState('Choose City');
  const [currentLocality, setCurrentLocality] = useState('Choose Locality');
  const handleCityChange = (city) => {
    setCurrentCity(city);
    setCurrentLocality('Choose Locality');
    setShowCity(false);
  };

  const handleLocalityChange = (locality) => {
    setCurrentLocality(locality);
    setShowLocality(false);
  };

  const messes = {
    'Akurdi': {
      'aai mess': {
        'name': 'Aai mess',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'sai bhakti mess': {
        'name': 'Sai bhakti',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'bhola mess': {
        'name': 'Bhola mess',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      }
    },
    'Talegov': {
      'Talegov mess': {
        'name': 'Talegov mess',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'sai bhakti mess': {
        'name': 'Sai Talegov bhakti',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'bhola mess': {
        'name': 'Bhola mess Talegov',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      }
    },
    'Station Road': {
      'Talegov mess': {
        'name': 'Station  mess',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'sai bhakti mess': {
        'name': 'Station Road bhakti',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'bhola mess': {
        'name': 'Bhola Station Road',
        'address': 'Ramanand Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      }
    },
    'Fule market': {
      
      'sai bhakti mess': {
        'name': 'Sai bhakti Jalgaon',
        'address': 'Jalgaon Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'bhola mess': {
        'name': 'Bhola mess Jalgaon',
        'address': 'Jalgaon Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      }
    },
    'Mj Area': {
      'sai bhakti mess': {
        'name': 'Sai bhakti Area',
        'address': 'Jalgaon Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      },
      'bhola mess': {
        'name': 'Bhola mess Area',
        'address': 'Jalgaon Nagar, Jalgaon-425001',
        'img': 'https://www.onlymess.in/_next/image?url=https%3A%2F%2Fonlymess.s3.ap-south-1.amazonaws.com%2Fimage_Bhola_Mess_1710530558603.png&w=1920&q=75'
      }
    },  
  };

  return (
    <div className="locatemess">
      <div className="locatemess_content container">
        <LocatemessInfo showCity={showCity} setShowCity={setShowCity} showLocality={showLocality} setShowLocality={setShowLocality} setCurrentCity={setCurrentCity} setCurrentLocality={setCurrentLocality} currentCity={currentCity} currentLocality={currentLocality} handleCityChange={handleCityChange} handleLocalityChange={handleLocalityChange} />
      </div>
      <div className="locatemess_messes container">
        <LocatemessCard currentLocality={currentLocality} messes={messes} />
      </div>
    </div>
  )
}

export default Locatemess
