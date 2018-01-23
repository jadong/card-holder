//create.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    //console.log("button -- userInfo -- " + e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  saveCardInfo: function (e) {
    //console.log(this.data.userInfo)
    let cardInfo = e.detail.value
    cardInfo.avatarUrl = this.data.userInfo.avatarUrl
    cardInfo.id = app.generateUUID()
    
    wx.showLoading({
      title: '保存中...'
    })

    wx.getStorage({
      key: 'cardInfoList',
      success: function(res) {
        let cardInfoList = res.data
        cardInfoList.push(cardInfo)
        wx.setStorageSync("cardInfoList", cardInfoList)
      },
      fail:function(){
        let cardInfoList = new Array()
        cardInfoList.push(cardInfo)
        wx.setStorageSync("cardInfoList", cardInfoList)
      }
    })

    

    setTimeout(function () {
      wx.showToast({
        title: '保存成功',
        duration: 2000
      })
      setTimeout(function () {
        wx.switchTab({
          url: '../mycard/mycard',
        })
      }, 1000)
    }, 1000)

  },
  chooseAddr: function () {
    wx.chooseAddress({
      success(res){
        console.log("chooseAddress -- "+JSON.stringify(res))
      }
    })
  }
})
