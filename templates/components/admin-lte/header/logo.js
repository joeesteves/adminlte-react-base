import React from 'react'
export default (props) => <span className={dynamicClass(props.mode)}>{props.children}</span>

const dynamicClass = (mode) => {
  return mode === 'mini' ? 'logo-mini' : 'logo-lg'
}