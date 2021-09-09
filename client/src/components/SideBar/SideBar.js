import React from 'react'
import { Dialogs } from 'components'
import { MenuOutlined, FormOutlined, SearchOutlined } from '@ant-design/icons';
import './SideBar.scss'

const userAvatar = 'http://sun9-22.userapi.com/s/v1/if1/lCHCBNn_AnrBMlQspMDGNdfSuNwHfHtIM0mwGj3GixJ4-7ABVQ2y4UAFeUksS2ae63sd_r0a.jpg?size=200x0&quality=96&crop=0,0,718,718&ava=1'
const friendAvatar = 'https://shop.salonsecret.ru/media/setka_editor/post/07bobdlinnyevolosypodrostok.jpg'

const items = [
    {
        _id: Math.random(),
        user: {
            fullname: 'Федя Петров',
            avatar: friendAvatar,
            isOnline: true
        },
        message: {
            text: 'Я тебе, конечно, верю, разве могут быть сомнения? Я и сам все это видел - это наш с тобой секрет!',
            checked: true,
            date: new Date('2021-07-07T11:51:00')
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Спанч Обычный Спанч Обычный Спанч Обычный ',
            avatar: 'https://images.unsplash.com/photo-1627454766115-5683266be4a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80'
        },
        message: {
            text: 'У тебя есть деньги ? Завтра вылетаем',
            date: new Date('2018-07-07T11:51:00'),
            checked: false
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Дядя Анатолий',
            avatar: userAvatar
        },
        message: {
            text: 'Тебе пишу я просто так без каких-либо намерений',
            date: new Date('2021-07-29T11:51:00')
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Argc Argv',
            avatar: null
        },
        message: {
            text: 'Купи мыло ;)',
            checked: true,
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Добрый вечер',
            avatar: friendAvatar
        },
        message: {
            text: 'ПРОЧИТАЙ МОЕ СООБЩЕНИЕ УЖЕ!!!',
            countUnread: 8,
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    },
    {
        _id: Math.random(),
        user: {
            fullname: 'Яков Обломов',
            avatar: null
        },
        message: {
            text: 'увы, я не смогу встать с дивана',
            date: new Date()
        }
    }
]

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__top">
                    <div className="sidebar__menu">
                        <span><MenuOutlined style={{ fontSize: '20px' }} /></span>
                    </div>
                    <div className="sidebar__create-dialog">
                        <span><FormOutlined style={{ fontSize: '20px' }} /></span>
                    </div>
                </div>
                <div className="sidebar__search">
                    <span><SearchOutlined /></span>
                    <input type="text" className="type" placeholder="Поиск среди контактов" />
                </div>
            </div>
            <div className="sidebar__dialogs">
                <Dialogs items={items} />
            </div>
        </div>
    )
}

export default SideBar