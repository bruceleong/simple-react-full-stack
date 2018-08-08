function timeAndDateConverter(unixTimeStamp) {
  const parsedDate = new Date(unixTimeStamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = parsedDate.getFullYear();
  const month = months[parsedDate.getMonth()];
  const date = parsedDate.getDate();
  const hour = parsedDate.getHours();
  const min = parsedDate.getMinutes();
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
  return time;
}

function timeConverter(unixTimeStamp) {
  const parsedDate = new Date(unixTimeStamp * 1000);
  const hour = parsedDate.getHours();
  const min = parsedDate.getMinutes();
  const time = hour + ':' + min;
  return time;
}

function temp(data) {
  const fTemp = ((data - 273.15) * 1.8) + 32
  return fTemp
}

module.exports = {
  timeAndDateConverter, timeConverter, temp
}
