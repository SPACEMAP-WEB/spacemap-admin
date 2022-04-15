import React from 'react'
import styled from 'styled-components'
import FormUserSign from 'app.layout/sign/FormUserSign'

const PageSign = () => {
  return (
    <StyledWrapper>
      <div className="login-body">
        <FormUserSign />
        <div className="desc">
          Chrome 브라우저에 최적화 되어있습니다.
          <br />
          copyright © 2021 by SpaceMap, inc. all rights reserved.
        </div>
      </div>
    </StyledWrapper>
  )
}

export default PageSign

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-body {
    padding: 70px 50px;
    box-shadow: 1px 1px 6px #f3f3f3;
    text-align: center;
    width: 440px;
    border: 1px solid #eee;
    background: #fff;
  }

  .desc {
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    margin-top: 14px;
    color: #797979;
    font-weight: 200;
  }
`
