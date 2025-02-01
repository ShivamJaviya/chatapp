import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({
    title = "Chat App",
    description = "Your privacy is our neccecity",
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title