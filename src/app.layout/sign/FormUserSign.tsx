import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Form, Input, Button, Modal } from 'antd'
import styled from 'styled-components'
import sign from 'app.modules/api/sign'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app.store/config/configureStore'

const FormUserSign = () => {
  const { error } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()

  const onFinish = async (value) => {
    await sign.signin({ ...value }, dispatch)
  }

  if (error)
    Modal.error({
      title: 'Error',
      content: (
        <>
          아이디 또는 패스워드가 올바르지 않습니다.
          <br />
          재시도를 해주세요.
        </>
      ),
    })

  return (
    <StyledWrapper>
      <div className="sign-logo">
        <img src="/images/logo/SPACEMAP_logo.png" className="logo" alt="logo" />
      </div>
      <Form name="form-login" onFinish={onFinish} initialValues={{ remember: true }}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: '이름을 입력해주세요' }]}
          style={{ marginBottom: '8px' }}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요' }]}
          style={{ marginBottom: '8px' }}
        >
          <Input placeholder="Id" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        {false && (
          <div className="session-out-text">
            <InfoCircleOutlined /> 세션이 종료되었습니다
          </div>
        )}

        <Form.Item className="submit-item">
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </StyledWrapper>
  )
}

export default FormUserSign

const _height = 60
const StyledWrapper = styled.div`
  .sign-logo {
    display: block;
    width: 80%;
    margin: 0 auto 30px;
  }

  .ant-row.ant-form-item {
    position: relative;
    margin: 0 0 -1px;
    input {
      height: 100%;
      font-weight: 700;
      font-size: 15px !important;
      &:focus,
      &:hover {
        z-index: 1;
      }
    }

    .ant-form-item-control-input-content {
      height: ${_height}px;
    }
    .ant-input-password {
      height: 100%;
    }

    .ant-form-item-explain {
      position: absolute;
      top: 18px;
      right: 37px;
      z-index: 1;
      &:focus,
      &:hover {
        z-index: 1;
      }
      &:active {
        z-index: -1;
      }
    }
  }

  .submit-item {
    margin: 20px 0 0 !important;
    .ant-btn {
      width: 100%;
      height: ${_height}px;
      border: none;
      background: rgb(252, 203, 22);
      font-weight: 700;
      font-size: 21px;
      letter-spacing: 1.1px;
      color: #fff;
    }
  }

  .session-out-text {
    margin-top: 10px;
    color: red;
  }
`
