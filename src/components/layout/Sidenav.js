import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/sitelogo.png";
import {
  SidebarBilling,
  SidebarDashboard,
  SidebarProfile,
  SidebarSignin,
  SidebarSignup,
  SidebarTables,
} from "../../utils/utils";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        {/* <img src={logo} alt='' /> */}
        <span>Stats JR Dashboard</span>
      </div>
      <hr />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarDashboard}
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="2">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarTables}
            </span>
            <span className="label">Coach</span>
          </NavLink>
        </Menu.Item> */}
        <Menu.Item key="2">
          <NavLink to="/athlete">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarTables}
            </span>
            <span className="label">Athlete</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="4">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarTables}
            </span>
            <span className="label">Teacher</span>
          </NavLink>
        </Menu.Item> */}
        <Menu.Item key="3">
          <NavLink to="/medical">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarTables}
            </span>
            <span className="label">Medical</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/sports">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {SidebarTables}
            </span>
            <span className="label">Sports</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/groups">
            <span
              className="icon"
              style={{
                background: page === "groups" ? color : "",
              }}
            >
              {SidebarSignin}
            </span>
            <span className="label">Groups</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/events">
            <span
              className="icon"
              style={{
                background: page === "events" ? color : "",
              }}
            >
              {SidebarSignin}
            </span>
            <span className="label">Events</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key='3'>
          <NavLink to='/billing'>
            <span
              className='icon'
              style={{
                background: page === 'billing' ? color : '',
              }}
            >
              {SidebarBilling}
            </span>
            <span className='label'>Billing</span>
          </NavLink>
        </Menu.Item> */}
        <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {SidebarProfile}
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/users">
            <span className="icon">{SidebarSignin}</span>
            <span className="label">Users</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon">{SidebarSignup}</span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item> */}
      </Menu>
    </>
  );
}

export default Sidenav;
