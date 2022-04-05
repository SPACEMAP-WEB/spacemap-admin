import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const { Item, SubMenu } = Menu;

const SideSubMenuComponent: any = (item: any) => {
  if (item.subMenu) {
    return (
      <SubMenu
        key={item.key}
        title={item.label}
        icon={item.icon || false}
        // onTitleClick={onTitleClick}
        // selectedKeys={[location.pathname]}
      >
        {item.subMenu.map((sub) => SideSubMenuComponent(sub))}
      </SubMenu>
    );
  }

  const linkParams: any = { href: item.path };
  if (item.as) linkParams.as = item.as;
  return (
    <Item key={item.key} className={item.className || ''}>
      <Link {...linkParams}>
        <a>
          {item.icon || null} {item.label}
        </a>
      </Link>
    </Item>
  );
};

export default SideSubMenuComponent;
