import React from "react"
import { Route, Switch } from "react-router-dom"
import AlbumForm from "./AlbumForm"
import UndiscoveredIndex from "./UndiscoveredIndex"
import Index from "./Index"
import OurTeam from "./OurTeam"

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
                    <Route exact path="/albums/new" component={AlbumForm} />
                    <Route exact path="/albums/undiscovered" component={UndiscoveredIndex} />
                    <Route exact path="/albums" component={Index} />
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