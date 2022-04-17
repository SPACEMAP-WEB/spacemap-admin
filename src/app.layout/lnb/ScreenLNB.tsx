import React from 'react'
import { Layout } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import SideMenu from './component/SideMenu'
import SideUserSetting from './component/SideSetting'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app.store/config/configureStore'
import { setMenuOpen } from 'app.store/menuApp/store.menuApp'

export const _menuPadding = 24

const { Sider } = Layout

const ScreenLNB = () => {
  const { menuOpen } = useSelector((state: RootState) => state.menu)
  const dispatch = useDispatch()

  return (
    <StyledLNB menuOpen={menuOpen}>
      <Sider theme="light" width={240}>
        <StyledMenuHeader>
          <i className="hide-menu" onClick={() => dispatch(setMenuOpen())}>
            {menuOpen ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          </i>
          <h1>
            <Link href="/">
              <span>
                <img src="/images/logo/SPACEMAP_logo.png" alt="logo" />
                SPACEMAP
              </span>
            </Link>
          </h1>
        </StyledMenuHeader>
        <SideMenu />
        <SideUserSetting />
      </Sider>
    </StyledLNB>
  )
}

export default ScreenLNB

const StyledLNB = styled.div<{ menuOpen: boolean }>`
  .ant-layout-sider {
    position: fixed;
    overflow: auto;
    height: 100vh;
    border-right: 1px solid #ececec;
    transition: 0.1s !important;
    z-index: 10;
    ${(props) =>
      props.menuOpen &&
      `     
      left: -195px !important;
      opacity: 0.7;        
      &:hover{         
        left: 0px !important;
        box-shadow: 0 -8px 16px #c3c3c3;
        opacity: 1;
      }
    `}
  }
`

const StyledMenuHeader = styled.div`
  position: relative;
  border-top: 6px solid rgb(252, 203, 22);
  padding: ${_menuPadding}px;
  overflow: hidden;
  transition: 0.2s;

  img {
    width: 80px;
    margin: 4px 0 10px;
  }

  h1 {
    position: relative;
    font-weight: 700;
    white-space: nowrap;
    margin: 0 0 15px;

    a {
      color: #000;
    }

    i {
      position: absolute;
      top: -1px;
      right: -5px;
      display: block;
      background: #fff;
      text-align: center;
      opacity: 0.5;
      transition: 0.2s;
      cursor: pointer;
    }

    span {
      img {
        display: block;
        cursor: pointer;
      }
    }
  }

  .hide-menu {
    position: absolute;
    top: 23px;
    right: 18px;
    opacity: 0;
    color: #aaa;
    cursor: pointer;
    z-index: 10;
  }

  &:hover {
    .hide-menu {
      opacity: 1;

      &:hover {
        color: #000;
      }
    }
  }
`

export const TinyHeader = ({ text, padding = '0' }: { text: string; padding: string }) => (
  <TinyStyled className="tiny-header" style={{ padding }}>
    {text}
  </TinyStyled>
)

const TinyStyled = styled.div`
  display: block;
  font-size: 10px;
  color: #adadad;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin: 0 0 7px;
`
