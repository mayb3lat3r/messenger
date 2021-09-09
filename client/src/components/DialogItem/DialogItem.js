import React from 'react'
import formatRelative from 'date-fns/formatRelative'
import ruLocale from 'date-fns/locale/ru'
import { Checked } from 'components'
import './DialogItem.scss'

const getAvatar = (avatar, name) => {
    if (avatar) {
        return <img src={avatar} alt={`avatar ${name}`} />
    }
    else {
        const color = Math.floor(Math.random() * 16777215);
        return <div className="dialogue__without-avatar"
            style={{ background: `linear-gradient(45deg, #${color.toString(16)}, #${(color - 100).toString(16)})` }}>
            <span>{name.substr(0, 1).toUpperCase()}</span>
        </div>
    }
}

const DialogItem = ({ item }) => {
    return (
        <div className="dialogue">

            {/* Avatar */}
            <div className="dialogue__avatar-wrap">
                <div className="dialogue__avatar">
                    {getAvatar(item.user.avatar, item.user.fullname)}
                </div>
                {item.user.isOnline && <div className="dialogue__user-isOnline"></div>}
            </div>


            {/* Container */}
            <div className="dialogue__user">
                {/* Dialog-top: Fullname + date */}
                <div className="dialogue__top">
                    <div className="dialogue__fullname">
                        {item.user.fullname}
                    </div>

                    <div className="dialogue__date">
                        {formatRelative(item.message.date, new Date(), { addSuffix: true, locale: ruLocale })}
                    </div>
                </div>

                {/* Dialog-bottom: Message + State */}
                <div className="dialogue__bottom">
                    <div className="dialogue__message">
                        {item.message.text}
                    </div>

                    {item.message.countUnread && <div className="dialogue__count-unread">
                       {item.message.countUnread}
                    </div>}

                    <div className="dialogue__state">
                        {item.message.checked === true ?
                            <Checked checked={true} />
                            : item.message.checked === false ?
                                <Checked checked={false} />
                                : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DialogItem