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
	$scope.outOf = 5;
	$scope.thing = "preparedness";
	$scope.keys = function(obj) {
		return Object.keys(obj);	
	}
	$scope.getStarArray = function(len, numTrue) {
		numTrue = numTrue > len? len: numTrue;
		return Array.apply(null, new Array(numTrue))
						.map(Boolean.prototype.valueOf, true)
						.concat(Array.apply(null, new Array(len-numTrue)).map(Boolean.prototype.valueOf, false));     
	};
	$scope.report = {
		Preparedness: 0,
		Mood: 0,
		Behavior: 0,
		Confidence: 0
	};
	$scope.getStarClass = function(starBool) {
		return starBool? 'ion-ios7-star': 'ion-ios7-star-outline'
	};
  $scope.lesson = Lessons.get($stateParams.lessonId);
  console.log('ReportCtrl');
});