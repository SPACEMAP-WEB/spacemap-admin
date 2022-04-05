import React from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';
import { TinyHeader } from '../ScreenLNB';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

type Props = {
  collapse?: boolean;
};

const SideUserInfo: React.FC<Props> = ({ collapse = false }) => {
  const getUser = useGetUser();
  if (collapse) return null;

  return (
    <StyledWrapper collapse={false}>
      <>
        <TinyHeader text="INFO" padding="0" />
        <div className="user-email">admin</div>
        <Tag className="role-tag">admin</Tag>
        <Tag color="red" className="role-tag">
          역할 : admin
        </Tag>
      </>
    </StyledWrapper>
  );
};

export default SideUserInfo;

const StyledWrapper = styled.div`
  position: relative;
  text-align: left;

  ${(props) =>
    props.collapse &&
    `
    &:after{
      content: '';
      position: absolute;
      top: 0;
      right: -21px;
      box-shadow: -17px 0 10px #fff;
      width: 12px;
      height: 100%;
    }
  `}

  .user-email {
    font-size: 12px;
    margin: 7px 0;
    color: #333;
  }

  .userInfo-tag {
    border-radius: 3px;
    margin-left: -4px;
    color: #fff;
    margin-bottom: 5px;
  }

  .role-tag {
    border-radius: 3px;
    margin-left: -4px;
  }

  .wc {
    font-size: 13px;
    font-weight: 400;
    color: #444;
    margin-top: 8px;
  }
`;
