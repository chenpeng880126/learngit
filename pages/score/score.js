// pages/score/score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    matchName:"比赛名称",
    homeTeam:"主队",
    guestTeam:"客队",
    
    hiddenModal:'ture',

    quarter:1,
    homeTimeOut:[],
    homeFoul: [],
    homeScore: 0,
    home1: "h1",
    home2: "h2",
    home3: "h3",
    home_1: "h_1",

    
    guestTimeOut: [],
    guestFoul: [],
    guestScore:0, 
    guest1: "g1",
    guest2: "g2",
    guest3: "g3",
    guest_1: "g_1"
  },

  clickBtnScore:function(e){
    console.log(e);
    var id = e.target.id;
    var hScore = this.data.homeScore;
    var gScore = this.data.guestScore;
    switch(id){
      case this.data.home1:
        hScore += 1;
        break;
      case this.data.home2:
        hScore += 2;
        break;
      case this.data.home3:
        hScore += 3;
        break;
      case this.data.home_1:
        hScore -= 1;
        break;
      case this.data.guest1:
        gScore += 1;
        break;
      case this.data.guest2:
        gScore += 1;
        break;
      case this.data.guest3:
        gScore += 3;
        break;
      case this.data.guest_1:
        gScore -= 1;
        break;
    }
    this.setData({ "homeScore": hScore, "guestScore": gScore });
  },

  clickBtnInfo: function (e){
    var id = e.target.id;
    
    var hTimeOut = this.data.homeTimeOut;
    var gTimeOut = this.data.guestTimeOut;
    var hFoul = this.data.homeFoul;
    var gFoul = this.data.guestFoul;

    switch(id){
      case 'homeT':
        if (hTimeOut.length>2){
          hTimeOut = [];
        }else{
          hTimeOut.push('');
        }
      break;
      case 'homeF':
        if (hFoul.length > 4) {
          hFoul = [];
        } else {
          hFoul.push('');
        }
        break;
      case 'guestT':
        if (gTimeOut.length > 2) {
          gTimeOut = [];
        } else {
          gTimeOut.push('');
        }
        break;
      case 'guestF':
        if (gFoul.length > 4) {
          gFoul = [];
        } else {
          gFoul.push('');
        }
        break;
    }

    this.setData({"homeTimeOut": hTimeOut, "homeFoul": hFoul,
      "guestTimeOut": gTimeOut, "guestFoul": gFoul});
  },

  clickBtnQuarter:function(){
    var quarter = this.data.quarter;
    if (quarter == 9){
      quarter = 1;
    }else{
      quarter += 1;
    }
    this.setData({"quarter":quarter})
  },

  clickBtnClear:function(e){
    var id = e.target.id;
    var timeOut = [];
    var foul = [];


    switch (id){
      case 'timeOut':
        this.setData({ "homeTimeOut": timeOut, "guestTimeOut": timeOut});
      break;
      case 'foul':
        this.setData({ "homeFoul": foul, "guestFoul": foul });
        break;
      case 'all':
        this.setData({
          hiddenModal: !this.data.hiddenModal
        })
      break;
    }
  },
  modalConfirm: function () {
    var none = [];
    this.setData({
      "homeScore": 0, "guestScore": 0,"quarter":1,
      "homeTimeOut": none, "guestTimeOut": none,
      "homeFoul": none, "guestFoul": none,
      hiddenModal: true
    })
  },

  modalCancel: function () {
    this.setData({
      hiddenModal: true
    })
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