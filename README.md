# mock-server
功能：配置mock数据模版返回期望的数据，适合前端测试ajax返回数据

配置：
1）在user.json中配置需要请求的url参数，即项目中ajax的url
2）在body中配置你需要的数据模版如：
[{
    "url": "/rest/pabank/creditcard/slh/getFreeRateAndCardListInfo",
    "method": "post",
    "response": {
      "code": "0",
      "message": "系统异常，请重试",
      "body": {
        "validMoney": "30000",
        "instList|1-10": [
          {
            "instNum|1-5": "3",
            "feeRate": "0.03",
            "originalDiscFeeRate": "0.0111",
            "perPoundage": "1030",
            "totalPoundage": "200",
            "perAmt|1000-10000.2": 1,
            "firstAmt": "6510.00",
            "discountType": "D",
            "instFeeDscnt": "0.81",
            "waiveFeeAmt": "300",
            "perAmtDetail": [1,3,1,5]
          }
        ],
        "cardList|1-7": [
          {
            "cardNo": "6446********4461",
            "cardIndex|+1": 1
          }
        ]
      }
    }
  }]
  
  启动：
  1)cd mock-server
  2)supervisor app.js
  
