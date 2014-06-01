angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Lessons', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lessons = [
    { id: 0, name: 'Frank P', instrument: 'Violin', time:'14:00'},
    { id: 1, name: 'Bill G', instrument: 'Viola', time:'15:00'},
    { id: 2, name: 'George M', instrument: 'Violoncello', time:'16:00'},
    { id: 3, name: 'Jeff E', instrument: 'Guitar', time:'16:30'}
  ];

  return {
    all: function() {
      return lessons;
    },
    get: function(lessonId) {
      // Simple index lookup
      return lessons[lessonId];
    }
  }
});
