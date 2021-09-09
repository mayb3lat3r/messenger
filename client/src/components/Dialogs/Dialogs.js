import React from 'react'
import PropTypes from 'prop-types'
import { DialogItem } from 'components'
import orderBy from 'lodash/orderBy'

import './Dialogs.scss'

const Dialogs = ({ items }) => {
    return (
        <div className="dialogs">
            {orderBy(items, ['message.date'], ['desc']).map((dialogue) => (
                <DialogItem item={dialogue} key={dialogue._id} />
            ))}
        </div>
    )
}

Dialogs.propTypes = {
    items: PropTypes.array
}

export default Dialogs