import React from "react"
import { Route, Switch, Link } from "react-router-dom"
import MusicianForm from "./MusicianForm.js"
import UndiscoveredIndex from "./UndiscoveredIndex.js"
import Index from "./Index.js"
import OurTeam from "./OurTeam.js"
import AlbumShow from "./AlbumShow.js"

const NavBar = props => {
    return (
        <div>
            <div className="row column">
                <div className="navbar">
                    <Link to="/albums/new">Add an Album</Link>
                </div>
                <div className="navbar">
                    <Link to="/albums/undiscovered">Undiscovered Artists</Link>
                </div>
                <div className="navbar">
                    <Link to="/albums">All Albums</Link>
                </div>
                <div className="navbar">
                    <Link to="/our-team">Our Team</Link>
                </div>

                <Switch>
                    <Route exact path="/albums" component={Index} />
                    <Route exact path="/albums/new" component={MusicianForm} />
                    <Route exact path="/albums/undiscovered" component={UndiscoveredIndex} />
                    <Route exact path="/albums/:id" component={AlbumShow} />
                    <Route exact path="/our-team" component={OurTeam} />
                </Switch>
            </div>

            <footer data-sticky-container>
                <div className="footer">
                    <ul className="inline-center">
                        <li>| &copy; Team-2, Launch Academy Group Project May 2021 |</li>
                        <li>(alphabetical appearance) Ilya, Karalynn, Matt, Patrick, Yousif</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default NavBar