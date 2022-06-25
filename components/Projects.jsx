import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { data } from './projectData';


const Projects = () => {

    // console.log({data});
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-8'>
    
       {data.map((project) => {
        return <div key={project.id} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
         <Image className='rounded-xl group-hover:opacity-10' src={project.image} alt='/' /> 
         <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
             <h3 className='text-2xl text-white tracking-wider text-center'>{project.name}</h3>
             <div className='flex gap-5 py-2 px-3'>
             <Link target="_blank" rel="noreferrer"  href={project.github}>
                 <p className='text-center py-3 px-3 rounded-lg bg-white text-gray-700 hover:bg-gray-200  text-lg cursor-pointer'>Code</p>
             </Link>
             <Link target="_blank" rel="noreferrer" href={project.deployed}>
                 <p className='text-center py-3 px-3 rounded-lg bg-white text-gray-700 hover:bg-gray-200  text-lg cursor-pointer'>Demo</p>
             </Link>
            
             </div>
            
         </div>
      </div>
       })}
        
        </div>
      </div>
    </div>
  );
};

export default Projects;