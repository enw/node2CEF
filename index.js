/*
   node2CEF
   
   send messages in AppJS from NodeJS 'server' to CEF 'client'

   listen for messages - 
       window.document.addEventListener("node2CEF", function (e) {
           // handle e.data message from node 
       });
*/
module.exports = function ( window ) {
    var SUBJECT = 'node2CEF';
    this.send = function ( msg ) {
      var evt = new window.Event(SUBJECT);
      evt.data = msg;
      window.document.dispatchEvent(evt);
    };
}
