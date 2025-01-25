import React from 'react';

        const Portfolio = () => {
            return (
                <div>
                    <nav className="nav">
                        <ul className="nav-list">
                        <li className="active">
                                <a href="#home"><i className="bx bx-home" /></a>
                                <span className="tooltip">Home</span>
                            </li>
                            <li>
                                <a href="#about"><i className="bx bx-user-circle" /></a>
                                <span className="tooltip">About Me</span>
                            </li>
                            <li>
                                <a href="#education"><i className="bx bx-notepad" /></a>
                                <span className="tooltip">Education</span>
                            </li>
                            <li>
                                <a href="#skills"><i className="bx bx-cog" /></a>
                                <span className="tooltip">Skills</span>
                            </li>
                            <li>
                                <a href="#projects"><i className="bx bx-briefcase" /></a>
                                <span className="tooltip">Projects</span>
                            </li>
                            <li>
                                <a href="#contact"><i className="bx bx-phone-call" /></a>
                                <span className="tooltip">Contact Me</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="container">
                    <section className="section home" id="home">
                            <div className="home-info">
                                <h3>Hello! My name is</h3>
                                <h1>Aritrika Dhara</h1>
                                <h3>I'm a <span className="multiple-text">Student</span></h3>
                                <p className="desc">Hello, I'm Aritrika Dhara, a passionate first year student pursuing Bachelor of Computer
                                    Applications (BCA) with a specialization in Artificial Intelligence and Machine Learning. My academic journey has equipped
                                    me with a strong foundation in computer science, coupled with in-depth knowledge and hands-on
                                    experience in AI and ML technologies.
                                </p>
                                <div className="btn-sci">
                                    <a href="CV portfolio.pdf" className="btn">Download Resume</a>
                                    <div className="sci">
                                        <a href="https://www.linkedin.com/in/aritrika-dhara-74411a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                            <i className="bx bxl-linkedin" />
                                            <span className="tooltip">LinkedIn</span>
                                        </a>
                                        <a href="https://github.com/Sky-210607">
                                            <i className="bx bxl-github" />
                                            <span className="tooltip">Github</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="img-wrapper">
                                <div className="img-box home-img">
                                    <img src="home.jpg" alt="" />
                                </div>
                            </div>
                        </section>
                        <section className="section about" id="about">
                            <div className="img-wrapper">
                                <div className="img-box about-img">
                                    <img src="aboutme.jpg" alt="" />
                                </div>
                            </div>
                            <div className="about-content">
                            <h2 className="heading">About <span>Me</span></h2>
                                <p>I aspire to become a proficient web developer, leveraging my skills to create innovative solutions
                                    and drive technological advancements. My enthusiasm for coding and problem-solving has led me to explore
                                    various programming languages and development frameworks and my specialization in artificial
                                    intelligence and machine learning also helps me explore more domains in the field of technology.
                                    <br />Throughout my studies, I have worked on several projects that showcase my ability to apply
                                    theoretical concepts to real-world applications. I'm continuously expanding my skill set and staying
                                    up-to-date with the latest industry trends.
                                    </p>
                            </div>
                        </section>
                        <section className="section education" id="education">
                            <h1>Education</h1>
                            <h4 style={{
                                top: '113px', position: 'relative', left: '4px', fontSize: '1.5rem'
                            }}>What I've done and achieved so far</h4>
                            <div className="box" style={{
                                background: 'var(--main-color)', width: '74vw', height: '2px', position: 'relative', top: '126px', margin: '56px 0', display: 'flex', boxShadow: '0 0 .50rem var(--main-color)', right: '-22px'
                            }}>
                                <div className="vertical">
                                    <div className="vertical-title">April 2021-May 2022</div>
                                    <div className="vertical-desc">Completed 10th standard from Calcutta Public School,Kolkata with 84% marks in the ICSE
                                    examination
                                    </div>
                                </div>
                                <div className="vertical">
                                    <div className="vertical-title">April 2023-March 2024</div>
                                    <div className="vertical-desc">Completed 12th standard from Calcutta Public School,Kolkata with 82% marks in the ISC Board
                                        Examination,pursuing science with computer science.
                                    </div>
                                </div>
                                <div className="vertical">
                                    <div className="vertical-title">August 2024-present</div>
                                    <div className="vertical-desc">Currently pursuing Bachelor of Computer Application in Artificial Intelligence and Machine
                                        Learning from Lovely Professional University,Punjab.
                                    </div>
                                </div>
                                <div className="vertical">
                                    <div className="vertical-title">July 2027</div>
                                    <div className="vertical-desc">Expected to graduate in July 2027.</div>
                                </div>
                            </div>
                        </section>
                        <section className="section skills" id="skills">
                            <h1>Skills</h1>
                            <table className="content-table">
                                <thead>
                                    <tr>
                                        <th>sl.no</th>
                                        <th>skills</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 1 </td>
                                        <td>html,css,js</td>
                                        <td>I have a proven ability to leverage HTML, CSS, and JavaScript to develop functional and visually appealing web applications.</td>
                                        </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>C programming language</td>
                                        <td>I possess a strong foundation in understanding of C programming. I am eager to learn and apply these skills to build innovative and effective solutions..</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Python</td>
                                        <td>I possess a strong foundation in Python programming, particularly in data analysis and machine learning.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>BlueJ</td>
                                        <td>Experienced in using BlueJ for object-oriented programming concepts, including class design, object creation, and method calls.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className="section projects" id="projects">
                            <h2 className="section-title">My Projects</h2>
                            <div className="projects-grid">
                                <div className="project-card">
                                    <img src="Screenshot 2025-01-21 230718.png" alt="" />
                                    <h3>Library Management System</h3>
                                    <p>Using Python, I have developed the Library Managament System a program designed
                                        to automate library operations, making it easier for both librarians and patrons to manage and
                                        access library resources</p>
                                    <div className="btn"><a href="https://github.com/Sky-210607/python.git">Github code</a> </div>
                                </div>
                                <div className="project-card">
                                    <img src="Screenshot 2024-11-05 130708.png" alt="" />
                                    <h3>Student Management System</h3>
                                    <p>Using C, I have developed the Student Attendance Management System, a software program designed
                                        to automate and streamline the process of tracking student attendance.</p>
                                    <div className="btn"><a href="https://github.com/Sky-210607/C.git">Github code </a></div>
                                </div>
                                <div className="project-card">
                                    <img src="Screenshot 2025-01-21 225624.png" alt="" />
                                    <h3>LMS- Web design(Front-End)</h3>
                                    <p>Using HTML and CSS, I have developed the front end design for a library management system, to
                                        make the experience of accessing library resources more convenient and easy.</p>
                                    <div className="btn"><a href="https://github.com/Sky-210607/LMS.git">Github code</a> </div>
                                </div>
                            </div>
                        </section>
                        <section className="section contact" id="contact">
                        <div className="container">
                                <div className="section-title">
                                    <h2>Contact Me</h2>
                                </div>
                            </div>
                            <div className="row flex">
                                <div className="col information">
                                    <div className="contact-details">
                                        <i className="bx bx-map-pin" style={{
                                            position: 'relative', display: 'inline-flex', padding: '0.8rem', border: '0.2rem solid var(--main-color)', borderRadius: '50%', fontSize: '2rem', color: 'var(--main-color)', margin: '0 0.8rem', transition: '0.3s', boxShadow: '0 0 1rem var(--main-color)'
                                        }} />
                                        <p>Bengali house Bansi Nagar near Railway station Hoshiarpur Punjab 146001</p>
                                        <i className="bx bxl-gmail" style={{
                                            position: 'relative', display: 'inline-flex', padding: '0.8rem', border: '0.2rem solid var(--main-color)', borderRadius: '50%', fontSize: '2rem', color: 'var(--main-color)', margin: '0 0.8rem', transition: '0.3s', boxShadow: '0 0 1rem var(--main-color)'
                                        }} />
                                        <p>aritrikadhara@gmail.com</p>
                                        <i className="bx bx-phone" style={{
                                            position: 'relative', display: 'inline-flex', padding: '0.8rem', border: '0.2rem solid var(--main-color)', borderRadius: '50%', fontSize: '2rem', color: 'var(--main-color)', margin: '0 0.8rem', transition: '0.3s', boxShadow: '0 0 1rem var(--main-color)'
                                        }} />
                                        <p>9331939960</p>
                                    </div>
                                </div>
                                <div className="col form">
                                    <form onSubmit="emailSend(); reset(); return false;">
                                        <input id="name" type="text" placeholder="Name*" required />
                                        <input id="email" type="email" placeholder="Email*" required />
                                        <textarea id="message" placeholder="Message*" required defaultValue={""} />
                                        <button id="submit" type="submit">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        };

        export default Portfolio;
