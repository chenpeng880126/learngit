var items = ['+1', '+2', '+3', 'Foul', 'T Foul', '1']
var allPlayers=[
  {
    num:'1',
    name:'test'
  },
  {
    num: '2',
    name: 'test'
  },
  {
    num: '3',
    name: 'test'
  }
]
var pageObject = {
  data: {
    actionSheetHidden: true,
    actionSheetItems: items,
    // itemName: '10',
    players: allPlayers
  },

  
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  onLoad(){
    console.log(this.data.players);
  }
  
}

for (var i = 0; i < items.length; ++i) {
  (function (itemName) {
    pageObject['bind' + itemName] = function (e) {
      console.log('click' + itemName, e)
      this.setData({actionSheetHidden: !this.data.actionSheetHidden})
    }
  })(items[i])
}

Page(pageObject)