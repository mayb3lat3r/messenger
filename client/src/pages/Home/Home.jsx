import { React, Component } from 'react';
import { SideBar, Dialog } from 'components'
import './Home.scss'


class Home extends Component {
    render() {
        return (
            <section className="home">
                <SideBar />
                <Dialog />
            </section>
        )
    }
}

export default Home