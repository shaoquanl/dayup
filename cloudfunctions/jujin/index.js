// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

// const cloud = require('wx-server-sdk')
const got =require('got')

// 初始化 cloud
// cloud.init()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
const main = async (event, context) => {


  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）

  let content=await got('web-api.juejin.im/query', {
    method: 'POST',
    data: {
      extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
      operationName: "",
      query: "",
      variables: {first: 20, after: "", order: "POPULAR"}
    }
  })
  console.log("===================")
  console.log(content)

  console.log("===================")
  console.log(content.body)
  return content.body;
}

main()
