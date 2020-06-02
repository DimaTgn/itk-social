import React, { Component} from 'react';
import s from './Post.module.css';


const Post = (props) =>{
    return (
        <div className={s.item}>
            <img src='https://cdn1.flamp.ru/cb73dd96b810cb329cc7981434378c53.png' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )

}

export default Post;