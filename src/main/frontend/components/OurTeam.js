import React from "react"

const OurTeam = props => {
    return (
        <div>
            <div>
                <img className="teamheader" src="https://pitch-spork.s3.us-east-2.amazonaws.com/our-team-text.png" alt="text reads our team" />
            </div>
            <div id="ourteam">
            <ul className="teamUL">
                {/*ILYA*/}
                <li>
                    <div className="card ilya">
                        <div className="card-front-ilya">
                            <h2>Ilya</h2>
                            <h3>Software Developer</h3>

                        </div>
                        <div className="card-back">
                            <div>
                                <h4>
                                    Hi, my name is Ilya! I'm passionate about the coding and about the music.
                                    I've been playing in bands here and there for about 10 years and learning coding
                                    about
                                    1 year, which was a perfect mix for this start up!
                                </h4>
                                <a href="https://www.linkedin.com/in/ilyakrisa/">LinkedIn</a>
                                <a href="https://github.com/ikrisa10">GitHub</a>
                            </div>
                        </div>
                    </div>
                </li>
                {/*YOUSIF*/}
                <li>
                    <div className="card yousif">
                        <div className="card-front-yousif">
                            <h2>Yousif</h2>
                            <h3>Software Developer</h3>

                        </div>
                        <div className="card-back">
                            <div>
                                <h4>
                                    Hi, I’m Yousif.
                                    Bachelor’s degree in Environmental Engineering. Got attracted by coding so I’m
                                    learning
                                    to become a
                                    software developer.
                                    Cooking and hiking are my treatments
                                </h4>
                                <a href="https://www.linkedin.com/in/yousifalasfar/">LinkedIn</a>
                                <a href="https://github.com/yousifalasfar">GitHub</a>
                            </div>
                        </div>
                    </div>
                </li>
                {/*Patrick*/}
                <li>
                    <div className="card patrick">
                        <div className="card-front-patrick">
                            <h2>Patrick</h2>
                            <h3>Software Developer</h3>

                        </div>
                        <div className="card-back">
                            <div>
                                <h4>
                                    Mechanical Engineer by training, currently working to become a Software Developer.
                                    I'm
                                    passionate
                                    about problem solving, improving system efficiencies, and spending time outdoors.
                                </h4>
                                <a href="https://www.linkedin.com/in/patrickastevenson/">LinkedIn</a>
                                <a href="https://github.com/PatrickStevenson">GitHub</a>
                            </div>
                        </div>
                    </div>
                </li>
                {/*Matt*/}
                <li>
                    <div className="card matt">
                        <div className="card-front-matt">
                            <h2>Matt</h2>
                            <h3>Software Developer</h3>
                        </div>
                        <div className="card-back">
                            <div>
                                <h4>
                                    Hello, I'm Matt and I'm an aspiring Software Developer who loves movies, music, and
                                    history!
                                </h4>
                                <a href="https://www.linkedin.com/in/matthew-mereba-a1b2581b0/">LinkedIn</a>
                                <a href="https://github.com/mattacognition">GitHub</a>
                            </div>
                        </div>
                    </div>
                </li>
                {/*Kara*/}
                <li>
                    <div className="card kara">
                        <div className="card-front-kara">
                            <h2>Kara</h2>
                            <h3>Software Developer</h3>
                        </div>
                        <div className="card-back">
                            <div>
                                <h4>
                                    I'm Kara, I'm a junior-junior level softdev who loves all kinds of music. I'll
                                    listen to
                                    anything
                                    but love progressive and alternative metal. Front end rules.
                                </h4>
                                <a href="https://www.linkedin.com/in/karalynnpartain/">LinkedIn</a>
                                <a href="https://github.com/kpartain">GitHub</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>

    )
}

export default OurTeam