angular.module('starter.controllers', [])

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})
.controller('TodayCtrl', function($scope, Lessons) {
  $scope.lessons = Lessons.all();
  $scope.date = Date;
  console.log('TodayCtrl');
})
.controller('GuardianCtrl', function($scope, $stateParams, Lessons) {
  $scope.lessons = Lessons.all();
  $scope.lesson = Lessons.get($stateParams.lessonId);
  $scope.date = Date;
  console.log('GuardianCtrl');
})
.controller('LessonCtrl', function($scope, $stateParams, Lessons) {
	$scope.newAssignments = ['first'];
	$scope.newAssignmentInput = {value:''};
	$scope.handleKeypress = function(keycode) {
		if (keycode === 13) {
			$scope.newAssignments.push($scope.newAssignmentInput.value);
			$scope.newAssignmentInput.value = '';
		};
	}
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
		return starBool? 'redstar.png': 'whitestar.png'
	};
  $scope.lesson = Lessons.get($stateParams.lessonId);
  console.log('ReportCtrl');
});