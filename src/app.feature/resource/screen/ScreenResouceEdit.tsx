import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Form, message, Button, Input, Select } from "antd";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import LottieLoadingTable from "app.components/Loading/LottieLoadingTable";
import Error from "app.components/Error/Error";
import dynamic from "next/dynamic";
import { Editor } from "@toast-ui/react-editor";

const ToastEditor = dynamic(() => import("app.components/Editor/editor"), {
  ssr: false,
}); // client 사이드에서만 동작되기 때문에 ssr false로 설정

const { Option } = Select;

const ScreenResourceEdit = ({}) => {
  const router = useRouter();
  const editorRef = useRef<Editor>(null);
  const key = router.query.key;
  const [form] = Form.useForm();
  const [isChanged, setIsChanged] = useState(false);
  const queryClient = useQueryClient();

  const handleFinishFailed = () => {
    message.error("Save failed!");
  };

  const handleValuesChange = (value, values) => {
    let isChanged =
      key &&
      Object.keys(values).filter((key) => values[key] !== initValues[key])
        .length > 0;
    if (!key) isChanged = !!values.name;
    setIsChanged(isChanged);
  };

  const handleFinish = (values) => {
    // console.log(editorRef.current);
    console.log(values);
  };

  const handleBackPress = () => {
    router.back();
  };

  useEffect(() => {
    console.log(editorRef);
  }, [editorRef]);

  const initValues = {};

  if (false) return <Error />;
  if (false) return <LottieLoadingTable />;

  return (
    <StyledWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        onValuesChange={handleValuesChange}
        initialValues={initValues}
        className="form-container"
      >
        <div className="input-group">
          <Form.Item
            name="type"
            label="Type"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Select allowClear placeholder="type">
              {["Media", "Document"].map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="contents" label="Contents">
            <ToastEditor ref={editorRef} />
          </Form.Item>
        </div>
        <div className="button-group">
          <Button type="primary" htmlType="submit" disabled={!isChanged}>
            Save
          </Button>
          <Button htmlType="button" onClick={handleBackPress}>
            Back
          </Button>
        </div>
      </Form>
    </StyledWrapper>
  );
};

export default ScreenResourceEdit;

const StyledWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    color: #808080;
    font-size: 14px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .input-group {
      width: 50%;

      label {
        color: #808080;
      }

      .ant-upload-list-picture-card .ant-upload-list-item-actions {
        a {
          display: none;
        }
      }

      .ant-upload-list-item-card-actions-btn.ant-btn-sm {
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .anticon-delete {
          color: white;
          background: red;
          font-size: 20px;
          width: 100%;
          height: 100%;
          align-items: center;
          border-radius: 50%;
          margin: 0;
        }
      }

      .ant-upload-list-picture-card
        .ant-upload-list-item:hover
        .ant-upload-list-item-info::before {
        opacity: 0;
      }

      .ant-upload-list.ant-upload-list-picture-card {
        margin-top: 10px;
      }

      .ant-input-number {
        width: 50%;
      }

      .ant-row.ant-form-item {
        margin-bottom: 20px;
      }

      .ant-col.ant-form-item-label {
        padding: 0;
      }

      .ant-form-item {
        margin: 0;
      }
    }

    .button-group {
      display: flex;
      justify-content: flex-end;

      > :first-child {
        margin-right: 10px;
      }
    }
  }
`;
