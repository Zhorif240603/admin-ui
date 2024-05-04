import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
    return (
        <div className="sidebar">
	<div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon" />
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <span>Products</span>
        </li>
      </Link>
      <li>
        <span>Orders</span>
      </li>
      <p className="title">USER</p>
      <li>
        <span>Profile</span>
      </li>
      <li>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
    );
}

export default Sidebar;
