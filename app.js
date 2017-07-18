//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    foulLimitedNum:5,
    quaterfFoulLimitedNum: 4,
    homePlayers: [
      {
        num: '10', name: '陈鹏', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '11', name: '王仕鹏', score: 35,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '12', name: 'Hardon', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '13', name: 'Hill', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '15', name: 'Alex', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '23', name: 'John', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '44', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '24', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '34', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '45', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '66', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '62', name: '易建联', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '教练', name: 'TDB', score:'',
        foul: [], lineUp: true, selected: false
      },
    ],
    guestPlayers: [
      {
        num: '10', name: '陈鹏', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '11', name: '王仕鹏', score: 35,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '12', name: 'Hardon', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '13', name: 'Hill', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '15', name: 'Alex', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '23', name: 'John', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '44', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '24', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '34', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '45', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '66', name: 'Pad', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '62', name: '易建联', score: 0,
        foul: [], lineUp: true, selected: false
      },
      {
        num: '教练', name: 'TDB', score: '',
        foul: [], lineUp: true, selected: false
      },
    ]
  }
})
