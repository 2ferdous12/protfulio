import React from 'react';

const home = () => {
    return (
        <div className='max-w-[1400px] mx-auto bg-[#151515] p-10 '>
            <div className='flex justify-between items-center '>            <div>
                <p className='text-white text-2xl md:text-3xl lg:text-3xl font-semibold'>Ferdous Hassan</p>
            </div>
                <div>
                    <a className='cursor-pointer' target="_blank" href="https://github.com/2ferdous12/ferdous-k">
                        <img className='w-[60px] ' src="/public/images/akar-icons_github-fill.svg" alt="" />
                    </a>

                </div>
            </div>

            <div className=' mt-10 flex flex-col md:flex-row lg:flex-row gap-10 justify-between '>
                <div className='w-[100%] md:w-[60%] lg:w-[60%]'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-semibold
                  '>Nice to meet you!
                        <br /> I’m<span className='border-b-4 border-green-600'> Ferdous Hassan</span></h1>
                    <p className='w-[330px] md:w-[445px] lg:w-[445px] mt-10 text-gray-400'>Hey I am Form Bangladesh I’m a
                        front-end developer.
                    </p>
                    <p className='text-white text-xl mt-10 border-b-4 border-green-600 w-[120px]'>CONTACT ME</p>
                </div>

                <div className='w-[100%] md:w-[40%] lg:w-[40%]'>
                    <img className='w-[370px] md:w-[400px] lg:w-[400px] h-[550px] md:h-[450px] lg:h-[550px] ' src="/public/images/3245.jpg" alt="" />
                </div>
            </div>

            <div className='p-5 border-t-4 
         border-[#979797] md:p-5 lg:p-20 flex flex-col md:flex-row 
          lg:flex-row gap-10 justify-around mt-10'>
                <div>
                    <h1 className='font-bold text-5xl text-white'>HTML</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
                <div>
                    <h1 className='font-bold text-5xl text-white'>CSS</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
                <div>
                    <h1 className='font-bold text-5xl text-white'>Javascript</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
            </div>

            <div className='p-5 md:p-5 lg:p-20 flex flex-col md:flex-row
          lg:flex-row gap-10 justify-around mt-10'>
                <div>
                    <h1 className='font-bold text-5xl text-white'>Accessibility</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
                <div>
                    <h1 className='font-bold text-5xl text-white'>Tailwind</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
                <div>
                    <h1 className='font-bold text-5xl text-white'>React</h1>
                    <p className='text-gray-400 font-semibold text-xl mt-2'>2 Years Experience</p>
                </div>
            </div>

            <div className='-p-10  md:p-20  lg:p-20 '>
                <div className='flex justify-between mb-10' >
                    <p className='font-bold text-3xl md:text-5xl lg:text-5xl text-white'>Projects</p>
                    <p className='text-white text-xl mt-10 border-b-4 border-green-600 w-[120px]'>CONTACT ME</p>
                </div>

             <div className='flex flex-col md:flex-row lg:flex-row  gap-5 justify-between'>
                <div className='space-y-3'>
                    <a className='cursor-pointer'  target="_blank" href="https://kanban-task-on-p.netlify.app/">
                    <img className='w-[540px] h-[400px]' src="/public/images/kanban.png" alt="" />
                    </a>
                    <p className='font-bold text-white text-xl'>KANBAN TASK </p>
                    <p className='font-semibold text-white'>HTML TAILWIND REACT</p>
                </div>

                <div className='space-y-3'>
                    <a className='cursor-pointer'  target="_blank" href="https://coffee-rosters-shop.netlify.app/">
                    <img className='w-[540px] h-[400px]' src="/public/images/rosters.png" alt="" />
                    </a>
                    <p className='font-bold text-white text-xl'>COFFEE ROASTERS </p>
                    <p className='font-semibold text-white'>HTML TAILWIND REACT</p>
                </div>
             </div>

             <div className='flex flex-col md:flex-row mt-10 lg:flex-row  gap-5 justify-between'>
                <div className='space-y-3'>
                    <a className='cursor-pointer'  target="_blank" href="https://arch-project-on.netlify.app/">
                    <img className='w-[540px] h-[400px]' src="/public/images/arch.png" alt="" />
                    </a>
                    <p className='font-bold text-white text-xl'>ARCH STUDIO </p>
                    <p className='font-semibold text-white'>HTML TAILWIND REACT</p>
                </div>

                <div className='space-y-3'>
                    <a className='cursor-pointer'  target="_blank" href="https://scoot-c.netlify.app/">
                    <img className='w-[540px] h-[400px]' src="/public/images/scoot.png" alt="" />
                    </a>
                    <p className='font-bold text-white text-xl'>SCOOT </p>
                    <p className='font-semibold text-white'>HTML TAILWIND REACT</p>
                </div>
             </div>
            </div>


        </div>
    );
};

export default home;