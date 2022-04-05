import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu } from 'antd';
import { rootMenu } from '../menu/rootMenu';
import { fnMenuInit } from '../module/fnMenuInit';
import SideMenuSub from './SideMenuSub';
import TinyHeader from '../component/TinyHeader';

const { Item, SubMenu } = Menu;

const SideMenu = () => {
  const menuOpen = fnMenuInit();
  const menuDataset = rootMenu ?? [];
  const rootKey = menuDataset.map((v) => v.key);

  const [openKeys, setOpenKeys] = useState(null);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootKey.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const { openKeys } = menuOpen.initSelectKeys();
    setOpenKeys(openKeys ?? []);
  }, []);

  if (!openKeys || !menuDataset.length) return null;

  return (
    <StyledMenu>
      <TinyHeader text="ADMIN MENU" padding="0 24px" />
      <Menu
        theme="light"
        mode="inline"
        inlineIndent={23}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={[location.pathname]}
      >
        {menuDataset.map((item: any) => {
          if (item.subMenu) {
            return (
              <SubMenu
                key={item.key}
                title={item.label}
                icon={item.icon || false}
                className={item.className || ''}
              >
                {item.subMenu.map((sub) => SideMenuSub(sub))}
              </SubMenu>
            );
          }

          return (
            <Item key={item.key} className={item.className || ''}>
              <Link href={item.path}>
                <a>
                  {item.icon || null} <span>{item.label}</span>
                </a>
              </Link>
            </Item>
          );
        })}
      </Menu>
    </StyledMenu>
  );
};

export default SideMenu;

const StyledMenu = styled.div`
  * {
    color: #000;
  }

  padding: 25px 0;

  .ant-menu-item-selected a {
    color: #000;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #fafafa;
  }

  .ant-menu.ant-menu-sub.ant-menu-inline {
    border-left: 3px solid var(--color-main);
    .ant-menu.ant-menu-sub.ant-menu-inline {
      border-left: none;
    }
  }

  .ant-menu-inline {
    border-right: none;
    .ant-menu-selected::after,
    .ant-menu-item-selected::after {
      border-right: 4px solid rgb(252, 203, 22);
    }

    .ant-menu-item,
    .ant-menu-submenu-title {
      margin: 0;
    }

    .ant-menu-item .anticon + span {
      margin-left: 6px;
    }
  }
`;
