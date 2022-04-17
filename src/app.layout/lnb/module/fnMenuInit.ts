import { rootMenu, indexPathKey } from '../menu/rootMenu'

export type TypeMenu = {
  path?: string
  icon?: JSX.Element
  as?: string
  asPath?: string
  key?: string
  label?: string
  className?: string
  subMenu?: TypeMenu[]
}

export const fnMenuInit = () => {
  return {
    initSelectKeys() {
      const pathName = location.pathname

      if (pathName === '/')
        return {
          selectedKeys: [indexPathKey],
          openKeys: [indexPathKey],
        }

      const findParentsKey = (
        arr: TypeMenu[],
        pathName: string
      ): TypeMenu[] | boolean | string[] => {
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i].path === pathName ||
            arr[i].as === pathName ||
            document.URL.includes(arr[i].path as string) ||
            document.URL.includes(arr[i].as as string) ||
            arr[i].asPath === pathName
          ) {
            if (arr[i].path !== '/') return [arr[i].key as string]
          } else if (arr[i].subMenu && arr[i].subMenu?.length) {
            const t = findParentsKey(arr[i].subMenu as TypeMenu[], pathName)
            if (t !== false) {
              const typeMenu = t as TypeMenu[] | string[]
              typeMenu.push(arr[i].key as string)
              return t
            }
          }
        }
        return false
      }

      const getMenu = (findParentsKey(rootMenu, pathName) as TypeMenu[] | string[]) || []
      const selectedKeys = getMenu[0]
      getMenu.reverse().pop()

      return {
        selectedKeys,
        openKeys: getMenu,
      }
    },
  }
}
