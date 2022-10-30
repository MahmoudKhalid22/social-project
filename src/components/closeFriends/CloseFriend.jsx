import React from 'react'
import "./closefriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="pic of friend"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
