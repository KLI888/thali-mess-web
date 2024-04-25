import React from 'react'
import './about.css'
import { assets } from '../../assets/assets'
function About() {
  return (
    <div className="about">
      <div className="about_content container">
        <div className="about_img">
          <img src={assets.aboutBg} alt="" />
        </div>
        <div className="about_info">
          <h1>About Thali</h1>
          <p>Thaliwala is a fast casual concept of Indian and Nepali cuisine that specializes in Thali - a traditional and diverse platter of small dishes served on a large plate. Our Thalis will provide a culinary journey through the diverse flavors of the Indian subcontinent, featuring a selection of curries, rice, breads, chutneys, and more.</p>
          <p>While the literal meaning of thali in Hindi is “plate”, in India and Nepal it represents so much more. The thali represents balance. Balance of vegetables. Balance of meats. Balance of spices. A bounty of delectable delicacies, from vegetarian to non-vegetarian, the Thali is a feast for all the senses. Each Thali is a curated collection of flavors and ingredients, designed to tantalize your taste buds and offer a taste of the rich cultural heritage of India and Nepal.</p>
          <p>After twelve years of running Gorkha Palace in Northeast Minneapolis, business partners Rashmi Bhattachan and Sarala Kattel have come up with this new concept which is a fast casual Indian Nepali restaurant. The Covid Pandemic also made them pivot into offering the delectable dishes in a fast casual format. While Gorkha Palace, their first restaurant in Northeast Minneapolis will continue to serve its regular menu that consists of organic ingredients sourced from sustainable agriculture, Thaliwala will be offering a range of vegetarian, vegan, and gluten-free options, so there's something for everyone. Our menu is designed to be shared, making it the perfect option for families, friends, and groups.</p>
        </div>
      </div>
    </div>
  )
}

export default About
