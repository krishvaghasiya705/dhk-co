import React from 'react'
import "./cursorbutton.scss"
import PropTypes from 'prop-types'

export default function Cursorbutton({ visible, x, y }) {
    return (
        <div
            className={`cursor-button-main blend-mode${visible ? ' visible' : ''}`}
            style={{
                left: x + 10,
                top: y - 10,
            }}
        >
            <span>{`[  view project  ]`}</span>
        </div>
    )
}

Cursorbutton.propTypes = {
    visible: PropTypes.bool.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
};
