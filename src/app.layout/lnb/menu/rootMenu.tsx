import { ContactsOutlined, FormOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

export const indexPathKey = 'dashboard'

export const rootMenu = [
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
