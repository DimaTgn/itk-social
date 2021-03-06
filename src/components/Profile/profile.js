import React, { Component} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile = (props) =>{

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile;