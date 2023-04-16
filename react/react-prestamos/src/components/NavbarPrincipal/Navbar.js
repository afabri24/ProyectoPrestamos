import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-default" role="navigation" style="width: 100%; text-align: center; > li { float: none; display: inline-block;">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand Logo</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="pull-left"><a href="#">Dashboard</a></li>
                        <li className="active"><a href="#">Stories</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Photos</a></li>
                        <li className="social pull-right"><a href="#">Social Links</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;