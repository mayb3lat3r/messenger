import React from 'react';
import {Input as BaseInput} from 'antd';


const Input = props => <BaseInput className={props.className} prefix={props.prefix} placeholder={props.placeholder} type={props.type} />

export default Input

