export const qs = {
  stringURL: (url) => {
    return '?'
  },

  convertQueryString: (data: object | any) => {
    if (!Object.keys(data).length) return ''
    const pairs = []
    for (let prop in data) {
      if (data.hasOwnPropery(prop)) {
        let k = prop
        let v = data[prop]
        pairs.push(`${k}=${v}`)
      }
    }
    return pairs.join('&')
  },

  convertStringObject: (searchString: string) => {
    if (!searchString) return false
    return searchString
      .substring(1)
      .split('&')
      .reduce((result, next) => {
        let pair = next.split('=')
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
        return result
      }, {})
  },
}

export const dateSort = (arr, orderBy = 'asc') => {
  return arr.sort((a, b) => {
    let dateA = new Date(a.date).getTime()
    let dateB = new Date(b.date).getTime()

    if (orderBy === 'desc') return dateB > dateA ? 1 : -1 // 내림차순

    return dateA > dateB ? 1 : -1
  })
}

export const regNumber = (param) => {
  if (param === undefined || param === null) return false
  return param.toString().replace(/[^0-9]/g, '')
}

export const objectToQueryString = (data: object | any) => {
  if (!Object.keys(data).length) return ''
  const pairs = []
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      let k = prop
      let v = data[prop]
      pairs.push(`${k}=${v}`)
    }
  }
  return pairs.join('&')
}

export const objectToURL = (data) => {
  if (Object.keys(data).length > 0) {
    return '?' + objectToQueryString(data)
  }
  return ''
}
