import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
    const classes = className('flex item-center px-3 py-3 my-3 mx-3 border',{
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-green-500 bg-green-500 text-white':success,
        'border-yellow-500 bg-yellow-500 text-white':warning,
        'border-red-500 bg-red-500 text-white rounded-full':danger,
        'rounded-full':rounded
    })
  return (
    <button {...rest} className={classes}>
        {children}
    </button>
  )
}

export default Button

Button.propTypes={
    checkVariation:({
        primary,
        secondary,
        success,
        warning,
        danger,
    })=>{
        const count = Number(!!primary)+Number(!!secondary)+Number(!!warning)+Number(!!success)+Number(!!danger);
        if(count>1)
        {
            return new Error('Only one of primary,secondary,success,warning,danger can be true')
        }

    }
}