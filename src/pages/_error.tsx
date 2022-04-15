import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Error = ({ statusCode, ...props }) => {
  const errorMsg = <>앗! 페이지를 찾을 수 없습니다..</>
  return (
    <StyledWrapper id="errPage">
      <div className="__err_text">
        <div className="__back">
          <b>{errorMsg}</b>
          <div>
            <Button danger size="large">
              <ArrowLeftOutlined />
              돌아가기
            </Button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    statusCode,
  }
}

export default Error

const StyledWrapper = styled.div`
  position: relative;
  height: 80%;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  .__img {
    display: block;
    width: 52px;
    margin: 0 0 40px;
  }

  i {
    font-size: 20px;
    display: block;
    margin: 0 0 20px;
    span {
      margin: 15px 0;
      padding: 5px 15px;
      border-radius: 100px;
      background: rgba(51, 51, 51);
      font-size: 13px;
      color: #fff;
      letter-spacing: 0.5px;
    }
  }

  .__err_text {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #383838;
  }

  .__back {
    position: relative;
    top: -50px;
    b {
      display: block;
      font-size: 17px;
      margin: 0 0 21px;
      color: #aaa;
      font-weight: 300;
    }
  }
`
