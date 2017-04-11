var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1; // Since its zero indexed
month = month < 10 ? '0' + month : month;
var date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

var url = 'http://epaper.ekantipur.com/epaper/the-kathmandu-post/' + year + '-' + month + '-' + date + '/' + year + '-' + month + '-' + date + '.pdf';

window.location.href = url;
