import { Form, Input, message, Modal } from 'antd';
import api from 'app.modules/api';
import { API_PW_CHANGE } from 'app.modules/keyFactory';
import React from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';

const { Item } = Form;

const ModalChangePassword = ({ visible, setVisible }) => {
  const [form] = Form.useForm();

  const handleModalNotVisible = () => {
    form.resetFields();
    setVisible(false);
  };

  const passwordChangeMutation = useMutation(
    async (data) => {
      const res = await api.PUT({ url: API_PW_CHANGE, data });
      return res;
    },
    {
      onError: (error: any) => {
        message.error(error.response.data.message, 1);
      },
    }
  );

  const validateForm = (value) => {
    const { fromPassword, toPassword } = value;
    return fromPassword !== toPassword;
  };

  const handlePasswordChange = (value) => {
    passwordChangeMutation.mutate(value);
    handleModalNotVisible();
  };

  const handleSubmit = async (value) => {
    validateForm(value)
      ? handlePasswordChange(value)
      : message.error('기존 비밀번호와 새로운 비밀번호가 일치합니다', 1);
  };

  return (
    <StyledWrapper>
      <StyledModal
        visible={visible}
        title="비밀번호 변경하기"
        onCancel={handleModalNotVisible}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={handleModalNotVisible}
          className="form-container"
        >
          <Item
            name="id"
            label="ID"
            rules={[
              {
                required: true,
                type: 'string',
                message: 'ID를 입력하세요',
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="fromPassword"
            label="기존 비밀번호"
            rules={[
              {
                required: true,
                type: 'string',
                message: '기존 비밀번호를 입력하세요',
              },
            ]}
          >
            <Input.Password />
          </Item>
          <Item
            name="toPassword"
            label="새로운 비밀번호"
            rules={[
              {
                required: true,
                type: 'string',
                message: '새로운 비밀번호를 입력하세요',
              },
            ]}
          >
            <Input.Password />
          </Item>
        </Form>
      </StyledModal>
    </StyledWrapper>
  );
};

export default ModalChangePassword;

const StyledWrapper = styled.div``;

const StyledModal = styled(Modal)`
  .ant-form-item-label {
    width: 120px !important;
    text-align: left !important;
  }
`;
