import React from 'react';
import moment from 'moment';

export default function Notifications(props) {
    const { notifications } = props;
    return (
        <div>
            <div className="section">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="title">Notifications</span>
                        <ul>
                            {notifications && notifications.map(notif => {
                                return (
                                    <li key={notif.id}>
                                        <span className="red-text darken-3">{notif.user} </span>
                                        <span>{notif.content}</span>
                                        <div className="grey-text note-date">
                                            {moment(notif.time.toDate()).fromNow()}
                                        </div>
                                    </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
