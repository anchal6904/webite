import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <nav>
      <div className="navvbarr">
        <span className='companyName'>FASHIONZA</span>
      </div>
    </nav>
    <h4>Share your views with us</h4>
    <label htmlFor='messageInput' className='visually-hidden'>Message</label>
    <textarea placeholder='Type your message here...'/>
    <div className="messagebtn">
        <button className='msbtn'>Send</button>
    </div>
    </div>
  )
}

export default Message
