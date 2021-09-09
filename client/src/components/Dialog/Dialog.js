import React from 'react'
import { EllipsisOutlined } from '@ant-design/icons'
import { Message, DialogInput } from 'components'
import './Dialog.scss'

const userAvatar = 'http://sun9-22.userapi.com/s/v1/if1/lCHCBNn_AnrBMlQspMDGNdfSuNwHfHtIM0mwGj3GixJ4-7ABVQ2y4UAFeUksS2ae63sd_r0a.jpg?size=200x0&quality=96&crop=0,0,718,718&ava=1'
const friendAvatar = 'https://shop.salonsecret.ru/media/setka_editor/post/07bobdlinnyevolosypodrostok.jpg'

const attach = {
    url: 'https://s5j2u6z3.stackpathcdn.com/uploads/default/original/1X/f9ffa8300633e643e0375972d9d65e2ae0a5b18f.png',
    filename: 'testsssssssss.png',
}


const Dialog = () => {
    return (
        <div className="dialog">
            <div className="dialog__top">

                {/* Something */}
                <div></div>

                {/* Dialog User Info */}
                <div className="dialog__user-info">
                    <div className="dialog__name">
                        Федя Петров
                    </div>
                    <div className="dialog__status">
                        online
                    </div>
                </div>

                {/* Preferences */}
                <div className="dialog__preferences">
                    <EllipsisOutlined style={{ fontSize: "25px" }} />
                </div>
            </div>

            <div className="dialog__content">
                <Message isMe={true} checked={false} avatar={userAvatar} text="Привет мир. У меня понос..." date={new Date()} />
                <Message isMe={false} attachments={[attach, attach, attach, attach, attach, attach, attach, attach, attach]} avatar={friendAvatar} text="беспрерывных занятиях." date={new Date()} />

                <Message isMe={true} checked={false} avatar={userAvatar} attachments={[attach, attach]} text="s" date={new Date()} />

                <Message isMe={false} avatar={friendAvatar} isTyping />
                <Message isMe={true} checked={false} avatar={userAvatar} attachments={[attach]} date={new Date()} />
                <Message isMe={false} avatar={friendAvatar} date={new Date()} text="test" attachments={[attach]} />
                <Message isMe={true} checked={false} avatar={userAvatar} date={new Date()} text="test" attachments={[attach]} />

                <Message isMe={true} checked={true} avatar={userAvatar} date={new Date()} attachments={[attach, attach]} />
                <Message isMe={false} avatar={friendAvatar} date={new Date()} attachments={[attach, attach]} />

                <Message isMe={true} checked={true} avatar={userAvatar} date={new Date()} text='texsss' />

                <Message isMe={true} avatar={userAvatar} checked={false} date={new Date()} audio="https://s2.solovey.su/rt3/05246247aa-25624/file.mp3" />
                <Message isMe={false} avatar={friendAvatar} date={new Date()} audio="https://psv4.userapi.com/c537636//u161647140/audiomsg/d28/ffff1f1bef.ogg" />
            </div>

            <DialogInput />
        </div>
    )
}

export default Dialog