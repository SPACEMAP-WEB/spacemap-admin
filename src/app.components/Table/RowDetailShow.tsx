import React from 'react'
import styled from 'styled-components'
import { EyeFilled } from '@ant-design/icons'

const RowDetailShow = () => {
  return (
    <StyledWrapper>
      <EyeFilled />
      <span className="text">SHOW</span>
    </StyledWrapper>
  )
}

export default RowDetailShow

const StyledWrapper = styled.div`
  text-align: center;
  color: #3f51b5;
  cursor: pointer;
  font-weight: bold;
  .text {
    margin-left: 8px;
  }
`
