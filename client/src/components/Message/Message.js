import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatRelative from 'date-fns/formatRelative'
import format from 'date-fns/format'
import addSeconds from 'date-fns/addSeconds'
import ruLocale from 'date-fns/locale/ru'
import { Checked } from 'components'
import playButton from 'assets/img/play.svg'
import pauseButton from 'assets/img/pause.svg'
import './Message.scss'

const Message = ({ avatar, user, text, date, isMe, checked, attachments, isTyping, audio }) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioElem = useRef(null)


    useEffect(() => {
        if (audioElem.current) {
            audioElem.current.addEventListener('playing', () => {
                setIsPlaying(true)
            }, false)

            audioElem.current.addEventListener('pause', () => {
                setIsPlaying(false)
            }, false)

            audioElem.current.addEventListener('ended', () => {
                setCurrentTime(0)
                setProgress(0)
            }, false)

            audioElem.current.addEventListener('timeupdate', () => {
                const duration = (audioElem.current && audioElem.current.duration) || 0
                setCurrentTime(audioElem.current.currentTime)
                setProgress((audioElem.current.currentTime / duration) * 100)
            }, false)
        }

    }, [])

    const togglePlay = () => {
        audioElem.current.volume = "0.1"
        !isPlaying ? audioElem.current.play() : audioElem.current.pause()
    }

    return (
        <div className={classNames("message", {
            'isme': isMe,
            'message-is-typing': isTyping,
            'audio': audio,
        })}>
            {/* Message base */}
            <div className="message__base">


                {/* Avatar */}
                <div className="message__avatar">
                    <Link to="/#"><img src={avatar} alt={`Avatar ${user.fullName}`} /></Link>
                </div>


                {/* Message content */}
                <div className="message__content">
                    {text && !attachments ? <div className="message__text">{text}</div> :
                        text && attachments && attachments.length === 1 ? <div className={classNames('message__unit-attachment')}>
                            {attachments.map(
                                (item, i) => <div className="message__text-unitimg" key={i}><div className="message__text">{text}</div><img className="message__unit-attachment d" src={item.url} alt={item.filename} /> </div>
                            )}
                        </div> :
                            text && attachments && attachments.length > 1 ?

                                <div className="message__text-unitimg">
                                    <div className="message__text">{text}</div>
                                    <div className="message__attachments">
                                        {attachments.map(
                                            (item, i) => (
                                                <div className="message__attachment-wrap" key={i}>
                                                    <div className="message__attachment-prev">
                                                        <img src={item.url} alt={item.filename} />
                                                    </div>
                                                    {/* <span className="message__attachment-filename">{item.filename}</span> */}
                                                </div>)
                                        )}
                                    </div>
                                </div> :
                                !text && attachments && attachments.length === 1 ?
                                    <div className={classNames('message__unit-attachment')}>
                                        {attachments.map(
                                            (item, i) => <img className="message__unit-attachment d" src={item.url} alt={item.filename} key={i} />
                                        )}
                                    </div> :
                                    !text && attachments && attachments.length > 1 ?
                                        <div className="message__attachments">
                                            {attachments.map(
                                                (item, i) => (<div className="message__attachment-wrap" key={i}>
                                                    <div className="message__attachment-prev">
                                                        <img src={item.url} alt={item.filename} />
                                                    </div>
                                                    {/* <span className="message__attachment-filename">{item.filename}</span> */}
                                                </div>)
                                            )}
                                        </div> : null

                    }

                    {/* Is typing */}
                    {isTyping && <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                </div>


                {/* Audio message content */}
                {audio && <div className="message__audio-content">
                    <audio ref={audioElem} src={audio} preload="auto" />
                    <div className="message__audio-progress" style={{ width: progress + '%' }}></div>
                    <div className="message__audio-info">

                        <div className="message__audio-btn">
                            <button onClick={togglePlay}>
                                {isPlaying ? <img className="message__audio-play-btn" src={pauseButton} alt="play" /> : <img className="message__audio-play-btn" src={playButton} alt="pause" />}
                            </button>
                        </div>

                        <div className={classNames("message__audio-wave", { "play": isPlaying })}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>


                        <span className="message__audio-duration">
                            {format(addSeconds(new Date(0), currentTime), 'mm:ss')}
                        </span>
                    </div>
                </div>}

                {/* Is readed */}
                {isMe && checked && <Checked checked={true} />}
                {isMe && !checked && <Checked className="l" checked={false} />}
            </div>

            {/* Message date */}
            {date && <span className="message__date">{formatRelative(date, new Date(), { addSuffix: true, locale: ruLocale })}</span>}
        </div>
    )
}

Message.defaultProps = {
    user: {
        fullName: 'test'
    },
}

Message.propTypes = {
    classNames: PropTypes.string,
    avatar: PropTypes.string,
    text: PropTypes.string,
    // user: PropTypes.object,
    date: PropTypes.any,
    isMe: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string,
}

export default Message