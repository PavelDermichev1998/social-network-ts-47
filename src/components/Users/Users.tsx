import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UserPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export let Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (<span
                            className={props.currentPage === p ? styles.selectedPage : ''}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}>
                            {p}
                        </span>
                    )
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt={'img'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials:true,
                                    headers: {
                                      'API-KEY': 'bf05589b-7ecb-4b86-808b-a9d624d9fb02'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.unFollow(u.id);
                                        }
                                    });


                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': 'bf05589b-7ecb-4b86-808b-a9d624d9fb02'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });


                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}