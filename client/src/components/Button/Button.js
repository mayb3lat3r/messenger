import React from 'react'
import {Button as BaseButton} from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

const Button = props => <BaseButton {...props} 
    className={classNames('button', 
    props.className, 
    {
        'button__large': props.size === 'large',
        'button__small': props.size === 'small'
    }
)} />

Button.propTypes = {
    className: PropTypes.string
}

export default Button