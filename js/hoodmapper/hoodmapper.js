angular.module('HoodMapper', ['leaflet-directive'])
	.config(['$logProvider', 
		function($logProvider){
	  		$logProvider.debugEnabled(false);
		}
	])
	.controller('MainCtrl', ['$scope', '$location',
		function($scope, $location) {
			$scope.reset = function() {
        		$location.search('data', null);

				$scope.data = {
					events: {
						map: {
			                enable: ['click', 'popupopen', 'popupclose'],
			                logic: 'emit'
		            	}
		        	},
		        	center: {
		        		lat: 38,
			            lng: -95,
			            zoom: 4
		        	},
		    	  	markers: {},
		    	  	locations: {}
	    	  	};
			}

			if($location.search().data) {
				$scope.data = JSON.parse($location.search().data);
				_.forEach($scope.data.markers,
					function(markerNeedingAScope) {
						markerNeedingAScope.getMessageScope = function () { return $scope; }
					}
				)
			}  else {
				$scope.reset();
    	  	}

            $scope.$on("leafletDirectiveMap.click", function(event, args){
            	if($scope.offClick){
	            	$scope.offClick = false;		
            		return;
            	}
                var leafEvent = args.leafletEvent;
                var id = randomId();
                $scope.data.markers[id] = {
	                lat: leafEvent.latlng.lat,
	                lng: leafEvent.latlng.lng,
                    getMessageScope: function () { return $scope; },
	                message: "<div style='min-height: 15px' ng-init='location=data.locations." + id + "'><p><a target='_blank' ng-if='location.url' ng-href='{{location.url}}'>{{location.name}}</a><span ng-if='!location.url'>{{location.name}}</span></p><p> {{location.description}}</p> </div>",
	                id: id
                };
                $scope.data.locations[id] = {};
                $scope.edit(id);

            });

            $scope.data.noEdit = false;

            $scope.$on("leafletDirectiveMarker.popupopen", 
            	function(event, args){
        			if($scope.data.noEdit) {
        				$scope.data.noEdit = false;
        				return;
        			}
        			$scope.edit(args.model.id);
            	}
        	) 

            $scope.$on("leafletDirectiveMarker.popupclose", 
            	function(event, args){
            		delete $scope.editingId;
            		args.model.getMessageScope().offClick = true;
            	}
        	) 

        	$scope.save = function() {
        		delete $scope.editingId;
        		$scope.getURL();
        	}

        	var randomCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        	function randomId() {
        		return _.sampleSize(randomCharacters, 30).join('');
        	}

        	$scope.getURL = function() {
        		$location.search('data', JSON.stringify($scope.data));
        		$scope.url = $location.absUrl();
        	}

        	$scope.edit = function(id) {
        		$scope.editingId = id;
        	}

        	$scope.delete = function(id) {
        		delete $scope.editingId;
        		delete $scope.data.markers[id];
        		delete $scope.data.locations[id];
        	}

        	$scope.getURL();

        	$scope.isEmpty = _.isEmpty;

		}
	]);