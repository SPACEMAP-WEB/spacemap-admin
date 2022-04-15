import { rootMenu, indexPathKey } from '../menu/rootMenu'

export const fnMenuInit = () => {
  return {
    initSelectKeys() {
      const pathName = location.pathname

      if (pathName === '/')
        return {
          selectedKeys: [indexPathKey],
          openKeys: [indexPathKey],
        }

      const findParentsKey = (arr, pathName) => {
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i].path === pathName ||
            arr[i].as === pathName ||
            document.URL.includes(arr[i].path) ||
            document.URL.includes(arr[i].as) ||
            arr[i].asPath === pathName
          ) {
            if (arr[i].path !== '/') return [arr[i].key]
          } else if (arr[i].subMenu && arr[i].subMenu.length) {
            const t = findParentsKey(arr[i].subMenu, pathName)
            if (t !== false) {
              t.push(arr[i].key)
              return t
            }
          }
        }
        return false
      }

      const getMenu = findParentsKey(rootMenu, pathName) || []
      const selectedKeys = getMenu[0]
      getMenu.reverse().pop()

      return {
        selectedKeys,
        openKeys: getMenu,
      }
    },
  }
}
