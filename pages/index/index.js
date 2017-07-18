var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foulLimitedNum: app.globalData.foulLimitedNum,
    quaterfFoulLimitedNum : app.globalData.quaterfFoulLimitedNum,

    matchName: "比赛名称",
    homeTeam: "主队",
    guestTeam: "客队",
    quarter: 1,
    homeTimeOut: [],
    homeFoul: [],
    guestTimeOut: [],
    guestFoul: [],

    team:'',
    foulHidden:true,
    foulItems:['P','U','T','OP','D','Delete'],

    homeScore: 0,
    selectedHomePlayerNum: '',
    selectedHomePlayerIndex: '',
    selectedHomePlayer: false,
    homePlayers:app.globalData.homePlayers,

    guestScore: 0,
    selectedGuestPlayerNum: '',
    selectedGuestPlayerIndex: '',
    selectedGuestPlayer: false,
    guestPlayers: app.globalData.guestPlayers,
  
  },

  selectHomePlayer: function (e) {
    // console.log(e);
    var id = e.currentTarget.id;    
    var homePlayers = this.data.homePlayers;
    var isSelected = homePlayers[id].selected;
    if ((!this.data.selectedHomePlayer && !this.data.selectedGuestPlayer)|| id == this.data.selectedHomePlayerIndex){
      var playerSelected = 'homePlayers[' + id + '].selected';
      var playerSelectedNum = 'homePlayers[' + id + '].num'
      this.setData({ 
        selectedHomePlayer: !this.data.selectedHomePlayer, 
        [playerSelected]: !isSelected,
        selectedHomePlayerIndex: e.currentTarget.id,
        selectedHomePlayerNum: [playerSelectedNum],
        selectedGuestPlayerIndex:'',
        team:'home'
      });
    }
  },

  selectGuestPlayer: function (e) {
    // console.log(e);
    var id = e.currentTarget.id;
    var guestPlayers = this.data.guestPlayers;
    var isSelected = guestPlayers[id].selected;
    if ((!this.data.selectedHomePlayer && !this.data.selectedGuestPlayer)|| id == this.data.selectedGuestPlayerIndex) {
      var playerSelected = 'guestPlayers[' + id + '].selected';
      var playerSelectedNum = 'guestPlayers[' + id + '].num'
      this.setData({
        selectedGuestPlayer: !this.data.selectedGuestPlayer,
        [playerSelected]: !isSelected,
        selectedGuestPlayerIndex: e.currentTarget.id,
        selectedGuestPlayerNum: [playerSelectedNum],
        selectedHomePlayerIndex: '',
        team: 'guest'
      });
    }
  },

  operScore:function(n){
    var hScore = this.data.homeScore;
    var hPlayerIndex = this.data.selectedHomePlayerIndex;
    var homePlayers = this.data.homePlayers;

    var gScore = this.data.guestScore;
    var gPlayerIndex = this.data.selectedGuestPlayerIndex;
    var guestPlayers = this.data.guestPlayers;

    if(this.data.team == 'home'){
      var selectedScore = 0;
      var score = parseInt(n);

      selectedScore = homePlayers[hPlayerIndex].score;
      selectedScore += score;
      hScore += score;

      var playerScore = 'homePlayers[' + hPlayerIndex + '].score';
      var playerSelected = 'homePlayers[' + hPlayerIndex + '].selected';
      this.setData({
        [playerScore]: selectedScore,
        [playerSelected]: ![playerSelected],
        selectedHomePlayerIndex: '',
        selectedHomePlayer: !this.data.selectedHomePlayer,
        homeScore: hScore
      });
    } else if (this.data.team == 'guest'){
      var selectedScore = 0;
      var score = parseInt(n);

      selectedScore = guestPlayers[gPlayerIndex].score;
      selectedScore += score;
      gScore += score;

      var playerScore = 'guestPlayers[' + gPlayerIndex + '].score';
      var playerSelected = 'guestPlayers[' + gPlayerIndex + '].selected';
      this.setData({
        [playerScore]: selectedScore,
        [playerSelected]: ![playerSelected],
        selectedGuestPlayerIndex: '',
        selectedGuestPlayer: !this.data.selectedGuestPlayer,
        guestScore: gScore
      });
    }
  },

  clickBtnScore: function (e) {
    var id = e.target.id;
    var hPlayerIndex = this.data.selectedHomePlayerIndex;
    var gPlayerIndex = this.data.selectedGuestPlayerIndex;

    switch (id) {
      case 's1':
        if (hPlayerIndex == '' && gPlayerIndex == ''){
          console.log('please select a player');
          break;
        }else{
          this.operScore(1);
          break; 
        }

      case 's2':
        if (hPlayerIndex == '' && gPlayerIndex == '') {
          console.log('please select a player');
          break;
        } else {
          this.operScore(2);
          break;
        }
      case 's3':
        if (hPlayerIndex == '' && gPlayerIndex == '') {
          console.log('please select a player');
          break;
        } else {
          this.operScore(3);
          break;
        }
      case 's_1':
        if (hPlayerIndex == '' && gPlayerIndex == '') {
          console.log('please select a player');
          break;
        } else {
          this.operScore(-1);
          break;
        }
      case 'foul':
        if (hPlayerIndex == '' && gPlayerIndex == '') {
          console.log('please select a player');
          break;
        } else {
          this.setData({
            foulHidden: !this.data.foulHidden
          })
          break;
        }
    }   
  },
  foulChange:function(e){
    this.setData({
      foulHidden: !this.data.foulHidden
    })
  },

  operFoul:function(n){
    var team = this.data.team;
    var foulLimitedNum = parseInt(this.data.foulLimitedNum);
    var quaterfFoulLimitedNum = parseInt(this.data.quaterfFoulLimitedNum);

    var hPlayerIndex = this.data.selectedHomePlayerIndex;
    var homePlayers = this.data.homePlayers;
    var gPlayerIndex = this.data.selectedGuestPlayerIndex;
    var guestPlayers = this.data.guestPlayers;

    var hFoul = this.data.homeFoul;
    var gFoul = this.data.guestFoul;

    if (team == 'home'){
      var playerFoul = 'homePlayers[' + hPlayerIndex + '].foul';
      var playerSelected = 'homePlayers[' + hPlayerIndex + '].selected';
      var selectedFoul = homePlayers[hPlayerIndex].foul;
      if (selectedFoul.length <= foulLimitedNum){
        if (n == 'OP') {
          selectedFoul.push('P')
        } else if (n == 'Delete'){

        }else {
          selectedFoul.push(n);
        }
        if (hFoul.length < quaterfFoulLimitedNum && n != 'OP') {
          hFoul.push('');
        } else {
          console.log('2 free shots');
        }
      }else{
        console.log('This player fouled out!');
      }
      
      this.setData({
        homeFoul: hFoul,
        [playerFoul]: selectedFoul,
        [playerSelected]: ![playerSelected],
        selectedHomePlayerIndex: '',
        selectedHomePlayer: !this.data.selectedHomePlayer,
      });
    } else if (team == 'guest'){
      var playerFoul = 'guestPlayers[' + gPlayerIndex + '].foul';
      var playerSelected = 'guestPlayers[' + gPlayerIndex + '].selected';
      var selectedFoul = guestPlayers[gPlayerIndex].foul;
      if (selectedFoul.length <= foulLimitedNum) {
        if (n == 'OP'){
          selectedFoul.push('P')
        }else{
          selectedFoul.push(n);
        }
        if (gFoul.length < quaterfFoulLimitedNum && n != 'OP') {
          gFoul.push('');
        } else {
          console.log('2 free shots');
        }
      } else {
        console.log('This player fouled out!');
      }
      
      this.setData({
        guestFoul: gFoul,
        [playerFoul]: selectedFoul,
        [playerSelected]: ![playerSelected],
        selectedGuestPlayerIndex: '',
        selectedGuestPlayer: !this.data.selectedGuestPlayer,
      });
    }
  },

  clickBtnFoul:function(e){
    var id = e.target.id;
    switch(id){
      case 'P':
        this.operFoul('P');
        break;
      case 'U':
        this.operFoul('U');
        break;
      case 'T':
        this.operFoul('T');
        break;
      case 'D':
        this.operFoul('D');
        break;
      case 'OP':
        this.operFoul('OP');
        break;
      case 'Delete':
        this.operFoul('Delete');
        break;
    } 
    this.setData({
      foulHidden: !this.data.foulHidden
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

