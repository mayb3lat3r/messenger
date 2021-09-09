import React, { useState } from 'react'
import { SmileOutlined, SendOutlined, AudioOutlined, CameraOutlined, PaperClipOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import './DialogInput.scss'


const DialogInput = props => {

    const [value, setValue] = useState("");

    return (
        <div className="dialog__input">
            <span><PaperClipOutlined /></span>
            <div className="dialog__input-content">
                <input
                    className="dialog__input-message"
                    type="text"
                    placeholder="Введите сообщение"
                    onChange={e => setValue(e.target.value)}
                />
                <span><CameraOutlined /></span>
                <span><SmileOutlined /></span>
            </div>

            {value ? <span><SendOutlined /></span> : <span><AudioOutlined /></span>}
        </div>
    )
}

export default DialogInput