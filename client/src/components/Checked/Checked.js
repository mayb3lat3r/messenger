import React from 'react'
import checkedSvg from 'assets/img/checked.svg'
import notCheckedSvg from 'assets/img/not_checked.svg'
import './Checked.scss'

const Checked = ({ checked }) => {
    return (
        checked === true ?
            <div className="checked">
                <img src={checkedSvg} alt="cheked" />
            </div>
            : checked === false ?
                <div className="checked">
                    <img src={notCheckedSvg} alt="not checked" />
                </div>
                : null
    )
}

export default Checked