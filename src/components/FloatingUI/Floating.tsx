import './Floating.css'
import { useState } from 'react'
import { send } from 'emailjs-com';
import {ReactNotifications} from 'react-notifications-component';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const Floating = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: ''
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      'service_zaa3kqo',
      'template_aeipgxc',
      toSend,
      'v1trkY47MkbfEEN5s'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({ from_name: '', message: '', reply_to: '' }); // reset the state of toSend
        Store.addNotification({
          title: 'Success',
          message: 'Your message has been sent!',
          type: 'success',
          insert: 'top',
          container: 'center',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="fill">
      <div className='wrapper'>
      <ReactNotifications />
            <div className="form-box login">
                  <h2>Contact Form</h2>
                  <form onSubmit={onSubmit} >
                    <div className="input-box name-box">
                      <input type="text" required  name='from_name' autoFocus  value={toSend.from_name} onChange={handleChange} />
                      <label>Name...</label>
                    </div>
                    <div className="input-box">
                      <input type="email" required name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
                      <label>Email Address...</label>
                    </div>
                    <div className="input-box">
                      <textarea required   name='message' value={toSend.message} onChange={handleChange}  />
                      <label>Message...</label>
                    </div>
                    <div className="send">
                      <button type="submit" className="btn submit-btn">Send</button>
                    </div>
                  </form>
                </div>
          </div>
    </div>
  )
}

export default Floating