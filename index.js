if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
// HTTP.call( 'GET', 'http://hackathon.indabamusic.com/samples?filters_only=true', {
//   params: {
//     "id": 5
//   }
// }, function( error, response ) {
//   if ( error ) {
//     console.log( error );
//   } else {
//     console.log( response );
//     /*
//      This will return the HTTP response object that looks something like this:
//      {
//        content: "String of content...",
//        data: [{
//          "body": "The body of the post with the ID 5."
//          "id": 5,
//          "title": "The title of the post with the ID 5.",
//          "userId": 1
//        }],
//        headers: {  Object containing HTTP response headers }
//        statusCode: 200
//      }
//     */
//   }
// });
// 
var response = HTTP.call( 'GET', 'http://hackathon.indabamusic.com/samples?filters_only=true', {} );
console.log( response );
}
