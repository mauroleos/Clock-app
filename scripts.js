function DigitalTime(){

  var date = new Date()
  var h = date.gethours();
  var m = date.getminutes();
  var s = date.getseconds();

  var time = h + ":" + m + ":" + s;
  document.getElementbyId("Clock-time").innertext = time;

DigitalTime();
