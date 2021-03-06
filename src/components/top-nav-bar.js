import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

/**
 * Main navigation bar
 */
function TopNavBar() {
  // Handle nav bar clicks
  const handleClick = (click) => {
    // Do nothing
  };

  return (
    <div>
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
        <Menu
          onClick={handleClick}
          mode="horizontal"
          theme="light"
          style={{
            width: "100vw",
            display: "flex",
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#243041",
            fontSize: "18px",
            lineHeight: "70px",
            fontFamily: "Lucida Console",
            border: "0px",
          }}
        >
          <Menu.Item key="home" style={{ marginRight: "auto" }}>
            <Link to={"/"}>
              <b
                style={{
                  fontSize: "20px",
                  color: "#bbbbbb",
                }}
              >
                The AEGIS Initiative
              </b>
            </Link>
          </Menu.Item>

          {/**<Menu.Item key="aboutus">
            <Link to={"/who-we-are"}>WHO WE ARE</Link>
          </Menu.Item>*/}

          {/**<Menu.Item key="mission">
            <Link to={"/what-we-do"}>WHAT WE DO</Link>
          </Menu.Item>*/}

          <Menu.Item key="projects">
            <Link to={"/our-work"}>
              <b
                style={{
                  color: "#bbbbbb",
                }}
              >
                OUR WORK
              </b>
            </Link>
          </Menu.Item>

          <Menu.Item key="supportus">
            <Link to={"/support-us"}>
              <b
                style={{
                  color: "#bbbbbb",
                }}
              >
                SUPPORT US
              </b>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default TopNavBar;
