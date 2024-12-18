

/**
 * 1. 笔试题
url query解析：
比如http://baidu.com?a = 1 & b = 1 & c = 1 & b = 2
解析出
{
  a: 1,
  b: [1, 2]
  c: 1
}
 * 
 */

function pareUrl(url) {
  url = url.split('?')[1]
  const obj = {}
  url.split('&').forEach(item => {
    const [key, value] = item.split('=')
    obj[key] = obj[key] ? [].concat(obj[key], value) : value  
  })
  return obj
}
console.log(pareUrl("http://baidu.com?a=1&b=18&c=1&b=29"))