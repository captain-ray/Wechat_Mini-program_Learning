// map.js
Page({
  data: {
    currentLongitude:0,
    currentLatitude:0,
    markers: [{
      iconPath: '/images/1.jpg',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#000000DD',
      width: 2,
      dottedLine: true
    }],
    
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  

 onLoad:function(options){
   console.log('onLoad')
   let page=this
   wx.getLocation({
     type:'wgs84',
     success: function(res) {
       let latitude=res.latitude
       let longitude=res.longitude
       console.log(`latitude-${latitude},longitude-${longitude}`)
        page.setData({
          currentLongitude:longitude,
          currentLatitude:latitude
        })
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
        })
     },
   })
 }
})