import "./styles/general.scss"
import {ProgressBar} from "./ProgressBar";
import {CarouselSlides} from "./CarouselSlides"
import {Portfolio} from "./Portfolio";

export const Main = () => {

    return <main id="main">
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Graduated at University of Western Ontario in 2023. Focusing on building React websites/apps.
                        Love building stuffs and trying new techs.
                        Self-learning AWS and deployed personal websites. Looking for a job.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="https://github.com/JYang496/portfolio/blob/main/src/img/profile-img.png?raw=true" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Fullstack Developer.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong>
                                        <span>jyang496.github.io/portfolio</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Canada, CA</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong>
                                        <span>jimmyy9612@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
                            adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
                            itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                            culpa magni laudantium dolores.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <ProgressBar value={100} />
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <ProgressBar value={90} />
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <ProgressBar value={75} />
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div className="progress">
                            <span className="skill">PHP <i className="val">80%</i></span>
                            <ProgressBar value={80} />
                        </div>

                        <div className="progress">
                            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                            <ProgressBar value={90} />
                        </div>

                        <div className="progress">
                            <span className="skill">Photoshop <i className="val">55%</i></span>
                            <ProgressBar value={55} />
                        </div>

                    </div>

                </div>

            </div>
        </section>
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Alex Smith</h4>
                            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
                                and developing user-centered digital/print marketing material from initial concept to
                                final, polished deliverable.</em></p>
                            <ul>
                                <li>Portland par 127,Orlando, FL</li>
                                <li>(123) 456-7891</li>
                                <li>alice.barkley@example.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Fine Arts &amp; Graphic Design</h4>
                            <h5>2015 - 2016</h5>
                            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero
                                voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                            <h5>2010 - 2014</h5>
                            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel
                                ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae
                                consequatur neque etlon sader mart dila</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior graphic design specialist</h4>
                            <h5>2019 - Present</h5>
                            <p><em>Experion, New York, NY </em></p>
                            <ul>
                                <li>Lead in the design, development, and implementation of the graphic, layout, and
                                    production communication materials
                                </li>
                                <li>Delegate tasks to the 7 members of the design team and provide counsel on all
                                    aspects of the project.
                                </li>
                                <li>Supervise the assessment of all graphic materials in order to ensure quality and
                                    accuracy of the design
                                </li>
                                <li>Oversee the efficient use of production project budgets ranging from $2,000 -
                                    $25,000
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Graphic design specialist</h4>
                            <h5>2017 - 2018</h5>
                            <p><em>Stepping Stone Advertising, New York, NY</em></p>
                            <ul>
                                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations,
                                    and advertisements).
                                </li>
                                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                <li>Created 4+ design presentations and proposals a month for clients and account
                                    managers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <Portfolio/>
        <section id="hoobies" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Hobbies</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                        <div className="icon"><i className="bi bi-briefcase"></i></div>
                        <h4 className="title"><a href="/">Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="bi bi-card-checklist"></i></div>
                        <h4 className="title"><a href="/">Dolor Sitema</a></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="bi bi-bar-chart"></i></div>
                        <h4 className="title"><a href="/">Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bi bi-binoculars"></i></div>
                        <h4 className="title"><a href="/">Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon"><i className="bi bi-brightness-high"></i></div>
                        <h4 className="title"><a href="/">Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                        <h4 className="title"><a href="/">Eiusmod Tempor</a></h4>
                        <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                            tempore, cum soluta nobis est eligendi</p>
                    </div>
                </div>

            </div>
        </section>
        <CarouselSlides/>
    </main>
}
