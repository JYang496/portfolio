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
                        <img src="https://github.com/JYang496/portfolio/blob/publish/src/img/profile-img.png?raw=true" className="img-fluid" alt=""/>
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
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
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
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>BSc, Honors in Computer Science &amp; Minor in Game Developing</h4>
                            <h5>2017 - 2023</h5>
                            <p><em>University of Western Ontario, London, ON, Canada</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Fullstack Developer</h4>
                            <h5>2023 - 2024</h5>
                            <p><em>M2W IT Solutions, Toronto, ON</em></p>
                            <ul>
                                <li>Effectively resolved issues and provided feedback within an Agile, Scrum framework,
                                    utilizing JIRA and Kanban for efficient task management
                                </li>
                                <li>Utilized Redis and the Bull task management tool to enhance service stability,
                                    preventing overload
                                </li>
                                <li>Created the e-commerce platform by using React, React-Redux, with (Express & NodeJS)
                                    as REST API backend to talk to database
                                </li>
                                <li>Communicated with back-end such as search, get, post etc. using Fetch and Axios
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Quality Assurance</h4>
                            <h5>2021 - 2022</h5>
                            <p><em>Quality Assurance, London, ON</em></p>
                            <ul>
                                <li>Designed QA Test Scenarios with BDD to help determine API testing
                                    and end-to-end transactions for company internal services
                                </li>
                                <li>Built QA Testing Automations for business services and microservices in CI/CD environment</li>
                                <li>Created observation panels in Grafana to review automation reports to visualize results</li>
                                <li>Improved the performance of automation and reduced the spending time
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
                </div>

            </div>
        </section>
        <CarouselSlides/>
    </main>
}
