import React from "react";
import "./profilepage.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rigthbar";

export default function ProfilePage() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/coverpage.jpg"
                alt="porfile cover img"
                className="profileCoverImg"
              />
              <img
                src="/assets/mypic.jpg"
                alt="profile user img"
                className="profileUserImg"
              />
            </div>
          </div>
          <div className="profileInfo">
            <div className="profileInfoName">Mahmoud Khalid</div>
            <div className="profileInfoDesc">Frontend Developer</div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
