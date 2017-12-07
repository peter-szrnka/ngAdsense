describe('Unit testing of directive', function() {
  var $compile,
      $rootScope, element;

  // Load the myApp module, which contains the directive
  beforeEach(module('ngAdsense'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    element = '<adsense-directive '+
			'ad-client="YOUR_CLIENT_ID" '+
			'ad-slot="YOUR_SLOT_ID"  '+
			'ad-format="auto" '+
			'css-style="display:inline-block;width:320px;height:50px;"> '+
		'</adsense-directive>';
    element = $compile(element)(scope);
    scope.$digest();
  }));
  
  // TODO finish
});
