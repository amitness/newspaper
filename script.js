function zeroPad(number) {
  // Add zero padding for number less than 10
  return number < 10 ? '0' + number : number;
}

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1; // Since its zero indexed
month = zeroPad(month);
var date = zeroPad(today.getDate());
var url = 'https://epaper.ekantipur.com/kathmandupost/download/' + year + '-' + month + '-' + date;

// Redirect to the newspaper PDF
window.location.href = url;
