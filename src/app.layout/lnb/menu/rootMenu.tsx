import { ContactsOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { TypeMenu } from '../module/fnMenuInit'

export const indexPathKey = 'dashboard'

export const rootMenu: TypeMenu[] = [
  {
    label: 'Contact',
    icon: <ContactsOutlined />,
    key: '/contact',
    path: '/contact',
  },
  {
    label: 'Resource',
    icon: <FormOutlined />,
    key: '/resource',
    path: '/resource',
  },
  {
    label: 'User',
    icon: <UserOutlined />,
    key: '/user',
    path: '/user',
  },
]
