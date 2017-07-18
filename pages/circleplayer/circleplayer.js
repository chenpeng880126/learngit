// pages/circleplayer/circleplayer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homePlayers:[
      { num: '4',  name:'Jacky'},
      { num: '5', name: 'Jacky' },
      { num: '6', name: 'Jacky' },
      { num: '7', name: 'Jacky' },
      { num: '8', name: 'Jacky' },
    ],

    matchName: "比赛名称",
    homeTeam: "主队",
    guestTeam: "客队",

    hiddenModal: 'ture',

    quarter: 1,
    homeTimeOut: [],
    homeFoul: [],
    homeScore: 0,
    home1: "h1",
    home2: "h2",
    home3: "h3",
    home_1: "h_1",


    guestTimeOut: [],
    guestFoul: [],
    guestScore: 0,
    guest1: "g1",
    guest2: "g2",
    guest3: "g3",
    guest_1: "g_1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})