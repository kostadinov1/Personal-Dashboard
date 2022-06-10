import { Link } from "react-router-dom";


export default function SideBar() {
  const avatarUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FjFkHghHK8HFQygVn_zzjwHaIQ%26pid%3DApi&f=1'
    return (
        <aside>
        <div id="sidebar" className="nav-collapse ">
        
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered"><a href="profile.html"><img alt="" src={avatarUrl} className="img-circle" width="80" /></a></p>
            <h5 className="centered">Evgeni Kostadin</h5>
            <li className="mt">
              <Link className="active" to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
                </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fa fa-user"></i>
                <span>Profile</span>
                </Link>
            </li>
            <li>
              <Link to="/gallery">
                <i className="fa fa-photo"></i>
                <span>Gallery</span>
                </Link>
            </li>
            <li>
              <Link to="/calendar">
                <i className="fa fa-calendar"></i>
                <span>Calendar</span>
                </Link>
            </li>
            <li>
              <Link to="/todoList">
                <i className="fa fa-check-circle-o"></i>
                <span>ToDo</span>
                </Link>
            </li>

            <li>
              <a href="google_maps.html">
                <i className="fa fa-map-marker"></i>
                <span>Google Maps </span>
                </a>
            </li>
          </ul>
        
        </div>
      </aside>
    )
}