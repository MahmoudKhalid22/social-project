import "./rightbar.css";
import { Users } from "../../dummyData";
import React from "react";
import Online from "../online/Online";

export default function Rigthbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="occasionDay">
          <img
            src="/assets/gift.jpg"
            alt="occasion img"
            className="occasionDayImg"
          />
          <span className="occasionText">
            <b>Mohamed Elhosary</b> and <b>3 friends</b> have Occasions today
          </span>
        </div>
        <img
          src="/assets/ad.jpg"
          alt="advertisement img"
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue"> Zagazig</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From </span>
            <span className="rightbarInfoValue">Zankalon</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue"> Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/mhosary.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elhosary</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
