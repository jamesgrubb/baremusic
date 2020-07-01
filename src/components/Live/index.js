import React from 'react'
import * as Styled from './Styles'

export default ({children , ...rest}) => (<Styled.Live {...rest}>{children}</Styled.Live>)