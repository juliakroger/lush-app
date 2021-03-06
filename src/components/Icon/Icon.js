import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from '../../svgs'

export const ICONS_TYPES = Object.keys(Icons).map(_icon =>
  _icon.toLocaleLowerCase()
)

const getIcon = type =>
  Object.keys(Icons).find(_icon => _icon.toLocaleLowerCase() === type)

const Icon = ({ type }) => {
  return <span>{React.createElement(Icons[getIcon(type)])}</span>
}

Icon.propTypes = {
  type: PropTypes.oneOf(ICONS_TYPES).isRequired
}

export default Icon
