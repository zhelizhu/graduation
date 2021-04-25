export function recentlyTimeFormat(time,index){
  if (time == null || time == "") return "";
  var date = new Date(time) 
  var year = date.getFullYear()
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() 
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() 
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  if(index === 1) {

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes

  }
  else if(index === 2) {

    return year + '-' + month + '-' + day

  }

  else if(index === 3) {

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes+':'+seconds

  }

}

