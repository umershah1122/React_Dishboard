import "./Single.scss";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://randomuser.me/api/portraits/women/64.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">jon doe</h1>
                <div className="itemDetails">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">Jondoe@gmail.com</div>
                </div>
                <div className="itemDetails">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+190 2309 39</div>
                </div>
                <div className="itemDetails">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Washington DC</div>
                </div>
                <div className="itemDetails">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending(Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transcation</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
