import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <div className='  md:flex  justify-evenly  bg-gradient-to-r from-black to-slate-200 h-[90vh] items-center'>
                    <div className='md:my-14'>
                        <p className='text-5xl md:my-5 font-bold text-white '>Add Your Key Product <br /> Benefit Here</p>
                        <p className='font-thin text-white'>[Product Name ] Helps [Target Audience] Solve [Common Audence Problem]</p> <p className='text-white'>[solve Common Audience problem]</p>
                        <button className='bg-black py-2 text-white w-52 my-7 hover: hover:font-thin hover:bg-slate-800  hover:duration-200 hover:-translate-x-1 '>Shop Now!</button>
                        <p className='text-white'>⭐ Rated 4.8 Based on 1000+ reviews</p>
                        <p className='font-sans font-bold text-2xl text-white my-1'>The </p>
                        <div className='flex gap-10'>  <p className='font-sans font-bold text-2xl text-white'>Guradian</p>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.a6lOPgTPlLYTUZ_OFIaIYgHaDt&pid=Api&P=0&h=180" width={67} alt="" />
                            <img src="https://tse2.mm.bing.net/th?id=OIP.MFukumpzgDKDmJWPfV3VSQHaCk&pid=Api&P=0&h=180" width={72} alt="" />
                        </div>

                    </div>
                    <div>
                        <img className='outline-none' src="https://img.freepik.com/free-photo/portrait-young-woman-posing-with-crossed-arms-gray-background_114579-59510.jpg?size=626&ext=jpg&ga=GA1.1.1644632516.1708649546&semt=ais_user" height={700} width={450} />
                    </div>

                </div>
            </div>
            <div className='flex  justify-evenly my-16  items-center gap-28'>
                <div>
                <iframe width="505" height="315" src="https://www.youtube.com/embed/c0uyU53ma8Y?si=6_N_efYRnWWv_TEG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='w-1/3'>
                   <p className='text-4xl '>Introduce the main</p>
                   <p className='text-4xl '>Problem your Project</p>
                   <p className='text-4xl '>solves</p> <br />
                    <p>Lorem ipsum dolor dolores autem placeat quod voluptas maxime distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem aspernatur odit fugiat repellendus deserunt tempore suscipit. Tempora eius quisquam iusto totam neque, at libero asperiores repudiandae nam id similique.</p> <br />
                    <button className='bg-orange-400  py-2 w-60'>📷 Watch our video (2.15s)</button>
                </div>
            </div>
            <div className='flex  justify-evenly flex-row-reverse  my-20 items-center gap-28'>
                <div>
       <img src="https://tse4.mm.bing.net/th?id=OIP.KwNg8t5se5QATjgrZeY0hwHaE8&pid=Api&P=0&h=180" width={490} alt="" />
                </div>
                <div className='w-1/3'>
                   <p className='text-4xl '>Introduce the main</p>
                   <p className='text-4xl '>Problem your Project</p>
                   <p className='text-4xl '>solves</p> <br />
                    <p>Lorem ipsum dolor dolores autem placeat quod voluptas maxime distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem aspernatur odit fugiat repellendus deserunt tempore suscipit. Tempora eius quisquam iusto totam neque, at libero asperiores repudiandae nam id similique.</p> <br />
                    <button className='bg-orange-400  py-2 w-60'>📷 Watch our video (2.15s)</button>
                </div>
            </div>
            <div className='flex  justify-evenly  my-20 items-center gap-28'>
                <div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77JNW7cwkA3rNvOdT_lM78sM55RKFhvHRNQ&s" width={490} alt="" />
                </div>
                <div className='w-1/3'>
                   <p className='text-4xl '>Introduce the main</p>
                   <p className='text-4xl '>Problem your Project</p>
                   <p className='text-4xl '>solves</p> <br />
                    <p>Lorem ipsum dolor dolores autem placeat quod voluptas maxime distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem aspernatur odit fugiat repellendus deserunt tempore suscipit. Tempora eius quisquam iusto totam neque, at libero asperiores repudiandae nam id similique.</p> <br />
                    <button className='bg-orange-400  py-2 w-60'>📷 Watch our video (2.15s)</button>
                </div>
            </div>
        </>
    )
}

export default Home
