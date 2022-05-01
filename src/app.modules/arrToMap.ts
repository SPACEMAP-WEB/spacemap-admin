export const arrToMap = (arr: any) => {
  return arr.reduce((newObj: any, obj: any) => {
    newObj[obj.location] = obj.originalName
    return newObj
  }, {})
}
