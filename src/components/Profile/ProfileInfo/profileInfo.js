import React, { Component} from 'react';
import s from './profileInfo.module.css';


const ProfileInfo = () =>{
    return (
        <div>
            <div>
                <img class={s.heater} src="https://dcea.ru/wp-content/uploads/2019/10/fejlec.jpg"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;