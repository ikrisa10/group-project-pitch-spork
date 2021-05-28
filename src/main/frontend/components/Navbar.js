import React from "react"
import {Route, Switch, Link} from "react-router-dom"
import MusicianForm from "./MusicianForm.js"
import UndiscoveredIndex from "./UndiscoveredIndex.js"
import Index from "./Index.js"
import OurTeam from "./OurTeam.js"
import AlbumShow from "./AlbumShow.js"
import Landing from "./Landing.js"

const NavBar = props => {
    return (
        <div>
            <nav id="navbar" data-sticky-container>
                <div className="top-bar" data-sticky data-options="marginTop:0;" id="navbar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li>
                                <a href="/">
                                    <img
                                        src="https://pitch-spork.s3.us-east-2.amazonaws.com/pitchspork-text-logo-transparent.png"
                                        alt="pitch spork text logo"
                                        className="companyicon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/albums/new">
                                    <img
                                        src="https://pitch-spork.s3.us-east-2.amazonaws.com/add-album.png"
                                        alt="icon to add album"
                                        className="menuphoto"
                                    />
                                    ADD AN ALBUM
                                </a>
                            </li>
                            <li>
                                <a href="/albums/undiscovered">
                                    <img
                                        src="https://pitch-spork.s3.us-east-2.amazonaws.com/undiscovered-albums.png"
                                        alt="icon to view unreviewed albums"
                                        className="menuphoto"
                                    />
                                    UNDISCOVERED
                                </a>
                            </li>
                            <li>
                                <a href="/albums">
                                    <img
                                        src="https://pitch-spork.s3.us-east-2.amazonaws.com/all-albums.png"
                                        alt="icon to see all albums"
                                        className="menuphoto"
                                    />
                                    ALL ALBUMS
                                </a>
                            </li>
                            <li>
                                <a href="/our-team">
                                    <img
                                        src="https://pitch-spork.s3.us-east-2.amazonaws.com/our-team.png"
                                        alt="icon to view our team"
                                        className="menuphoto"
                                    />
                                    OUR TEAM
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/albums" component={Index}/>
                <Route exact path="/albums/new" component={MusicianForm}/>
                <Route exact path="/albums/undiscovered" component={UndiscoveredIndex}/>
                <Route exact path="/albums/:id" component={AlbumShow}/>
                <Route exact path="/our-team" component={OurTeam}/>
            </Switch>
        </div>
    )
}

export default NavBar;