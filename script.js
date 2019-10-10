var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1; // Since its zero indexed
// Apply zero padding to month and day
month = month < 10 ? '0' + month : month;
var date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
var url = 'https://epaper.ekantipur.com/kathmandupost/download/' + year + '-' + month + '-' + date;

window.location.href = url;
