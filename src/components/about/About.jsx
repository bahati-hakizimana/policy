import React from 'react'
import AboutImg from '../../assets/police_image/about_lil.jpeg';

function About() {
    return (
        <section id="about">
            <h2
                data-aos="fade-up"
                className=" text-center text-3xl underline underline-offset-4">About us</h2>
            <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">

                <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">

                    <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
                        <div
                            data-aos="fade-right"

                        >
                            <img
                                src={AboutImg}
                                alt="No image"
                                className="max-auto w-full hover:drop-shadow-md h-80"
                            />
                        </div>
                        <div

                            data-aos="fade-left"
                            // data-aos-duration="400"
                            // data-aos-once="true"
                            className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left "

                        >
                            
                            <h2 className=" text-2xl">Us</h2>
                            <p className="text-sm  dark:text-slate-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ad distinctio dignissimos ea eum, tenetur id ullam ex doloremque enim,
                                aspernatur vitae quam modi sequi velit libero nemo maiores in voluptatum.
                            </p>
                            <div>
                                <h2 className=" text-2xl">Vision</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ad distinctio dignissimos ea eum, tenetur id ullam ex doloremque enim,
                                    aspernatur vitae quam modi sequi velit libero nemo maiores in voluptatum.
                                </p>
                            </div>
                            <div>


                                <h2 className=" text-2xl">Mission</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ad distinctio dignissimos ea eum, tenetur id ullam ex doloremque enim,
                                    aspernatur vitae quam modi sequi velit libero nemo maiores in voluptatum.
                                </p>
                            </div>
                            
                        </div>

                    </div>
                </section>
            </main>
        </section>
    )
}

export default About
