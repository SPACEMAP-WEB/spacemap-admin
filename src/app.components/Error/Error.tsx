import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const Error = ({ redirectPath = '/' }) => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <div className="err-message">
        <b>앗! 에러가 발생했습니다.</b>
      </div>
      <div className="back-press">
        <Button danger type="primary" size="large" onClick={() => router.push(redirectPath)}>
          <ArrowLeftOutlined />
          돌아가기
        </Button>
      </div>
    </StyledWrapper>
  )
}

export default Error

const StyledWrapper = styled.div`
  padding-bottom: 40px;

  .err-message {
    text-align: center;
    font-size: 17px;
    color: #aaa;
    margin-bottom: 20px;
  }

  .back-press {
    display: flex;
    justify-content: center;
  }
`
