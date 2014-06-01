angular.module('starter.controllers', [])

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})
.controller('TodayCtrl', function($scope, Lessons) {
  $scope.lessons = Lessons.all();
  $scope.date = Date;
  console.log('TodayCtrl');
})
.controller('LessonCtrl', function($scope, $stateParams, Lessons) {
  $scope.lesson = Lessons.get($stateParams.lessonId);
  console.log('LessonCtrl');
})
.controller('ReportCtrl', function($scope, $stateParams, Lessons) {
  $scope.lesson = Lessons.get($stateParams.lessonId);
  console.log('ReportCtrl');
});