import React from 'react'
import './home.css'
function Contact() {
  return (
    <div className="contact">
        <div className="contact_container container">
            <div className="contact_info">
                <h1>Have an event coming up?</h1>
                <p>Whether it is a birthday or a wedding rehearsal dinner or a Book Club event or any other special occasion, Thaliwala offers their banquet room that can accommodate up to sixty guests in the private room and we can also customize the menu according to your desire. </p>
                <br />&nbsp;
                <p>We also plan to host monthly Special events such as Shayari (Poetry) nights, Stand Up Comedy nights, Live DJ Dance parties as well as Open Mic events. Besides this, we plan to offer a monthly Special Five Course Dinner where we plan on taking our guests to specific regions of India and Nepal through the Special regional Menu.</p>
            </div>
            <div className="contact_form">
                <form action="">
                    <div className="form_input_one">
                        <input type="text" placeholder='Enter your name' className="input_name" />
                        <input type="text" placeholder='Enter your Email address' className="input_email" />
                    </div>
                    <div className="form_input_two">
                        <textarea id="description" name="description" maxLength="5000" data-name="description" placeholder="Add some description related to your event, number of people and dates.Example Text" class="input_desc"></textarea>
                    </div>
                    <div className="form_btn">
                        <a href="">Send</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
