import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'
import { data } from './mainSocialData';
import emailjs from '@emailjs/browser';

const Contact = () => {


  const initialValues = {
    name : '',
    phone : '',
    email : '',
    subject : '',
    message : ''
  }

  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setValues({...values,[e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(values))
    // emailjs.sendForm('service_yji3izw', 'template_pwe9v8m', e.target , 'NjG9acHzrrZ6PSto5')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    setSubmitted(true)
   setValues(initialValues)
  };

  useEffect(() => {
        if(Object.keys(error).length === 0 && isSubmit){
            console.log(values);
        }
  }),[error]

  const validate = (values) => {
    const err = {}
    if(!values.name){
        err.name = 'enter the name'
    }
    if(!values.email){
        err.email = 'Please enter your E-mail'
    }
   return err
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl  ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Nitin Sirsath</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-[#5651e5]'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  
                  {data.map((social) => {
                    return <a key={social.id}
                    href={social.link}
                    target='_blank'
                    rel='noreferrer'
                    download
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <social.logo />
                    </div>
                  </a>
                  })}
                  {/*
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            
              <form
                onSubmit={handleSubmit}
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name <span className='text-red-600'>*</span></label>
                    {isSubmit ? <div className='text-red-600'><i>{error.name}</i></div>:'' }
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email <span className='text-red-600'>*</span></label>
                  {isSubmit ? <div className='text-red-600'><i>{error.name}</i></div>:'' }
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='8'
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {submitted ? <div className='p-3 rounded-xl w-28 text-white bg-[#43ce3694] m-2'>Submitted</div>:''}
                <button className='w-full p-4 rounded-xl text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;