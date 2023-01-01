import React from 'react';

import { urlFor } from '../lib/client';


const Projects = ({Projects}) => {
  return (
    
      

        <section className="relative bg-black h-96 w-full rounded-md border">
        <div className="h-full w-full">
          <img className="object-cover h-full w-full opacity-40" 
          src={urlFor(Projects.image)} alt="" />

          <div className=" absolute top-0 h-full w-full p-8 flex flex-col justify-evenly">
            <h1 className="text-white text-2xl">{Projects.project}
            </h1>


            <h3 className=" text-white text-sm">{Projects.desc}
            </h3>


            <h4 className="text-xl text-white">{Projects.tech}
            </h4>

            
              <a href="https://beegun-ecommerce.vercel.app" target={"_blank"} rel="noreferrer"
              className="cursor-pointer h-10 bg-black rounded-3xl flex flex-row justify-evenly items-center hover:invert">
              <svg fill="none" height="15" viewBox="0 0 282.72 64" width="90" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5zM36.95 0L73.9 64H0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="white"/></svg>
              </a>
            

          </div>
        </div>
        </section>
      

   
  )
}

export default Projects