import classNames from 'classnames';
import React from 'react';
import './Block.scss'


const Block = (props) => <div className={classNames('block', props.className)}>{props.children}</div>

export default Block;