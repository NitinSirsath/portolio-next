import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 sm:px-10 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            // Fullstack Developer
          </p>
          <p className='py-2 text-gray-600'>
            Hello, I&apos;m Nitin. I have completed my B.Tech degree in Computer Science from MGM-JNEC College in Aurangabad, Maharashtra. I have always had a passion for technology and working with computers. I started working with HTML and CSS to make minor edits to small college projects. What I initially thought would be just a few small edits turned into a deep love for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated by how intricate programming can be, I was quickly drawn to learn more. I started learning JavaScript and became even more excited about making websites interactive. I then began creating projects in ReactJS along with some of its libraries. Currently, I spend my time building projects with ReactJS, NextJS, and learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='About Image' />
        </div>
      </div>
    </div>
  );
};

export default About;
