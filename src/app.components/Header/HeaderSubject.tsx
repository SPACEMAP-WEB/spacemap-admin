import * as React from 'react';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  subject: string;
  desc?: string;
  navigation?: Array<any>;
};

const HeaderSubject: React.FunctionComponent<Props> = ({
  subject,
  desc = null,
  navigation = null,
}) => (
  <StyledWrapper>
    <div className="navigation">
      {navigation &&
        navigation.map((v, index) => (
          <span key={index}>
            {!!index && (
              <i>
                <RightOutlined />
              </i>
            )}
            {!v.path ? v.key : <Link href={v.path || ''}>{v.key}</Link>}
          </span>
        ))}
    </div>

    <h1 data-type="subject-dom">{subject}</h1>

    {desc && <div className="header-desc">{desc}</div>}
  </StyledWrapper>
);

export default HeaderSubject;

const StyledWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0 25px 0;
  margin: 0 0 25px 0;

  .navigation {
    font-size: 11px;
    margin-bottom: 10px;
    display: inline-block;
    border-radius: 6px;
    padding: 7px 0;
    color: #727272;

    span {
      display: inline-block;
      margin-left: 7px;
      color: #aaa;

      i {
        font-size: 10px;
        margin-right: 5px;
        span {
          transform: scale(0.7);
        }
      }

      a {
        color: #aaa;
      }
    }

    span:first-child {
      margin: 0;
    }
  }

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #000;
    margin-bottom: 12px;
    text-transform: capitalize;
  }

  .header-desc {
    color: #6b6a6a !important;
    text-transform: capitalize;
    font-size: 12px;
    padding-left: 3px;
  }
`;
