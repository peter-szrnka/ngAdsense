#ngAdsense

Angular JS directive for Google AdSense advertisements. With ngAdsense, you can place your ads onto your website, or an Angular JS template as well.

## Requirements

 - A modern browser
 - AngularJS 1.2+
 
## Installation

This module contains only one file (ngAdsense.js), so you have to download it from GitHub.

Now you have to do is add the scripts to your application. Just make sure the `ng-adsense.js` file is inserted **after** the `angular.js` script:

```html
<script src="angular.js"></script>
<script src="ng-adsense.js"></script>
```

## Usage

 1. Add the `ngAdsense` module as a dependency in your AngularJS app;
 2. Add the custom directive `<adsense-directive>` to your html page or template.
 3. Setup all three mandatory fields.
 4. Ready!

## Example

```html
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js"></script>
		<script type="text/javascript" src="ng-adsense.js"></script>
		<script type="text/javascript">
			var ngAdSenseDemoApp = angular.module('DemoApp', ['ngAdsense']);
		</script>
	</head>
	<body ng-app="DemoApp">
		<adsense-directive 
			ad-client="YOUR_CLIENT_ID"
			ad-slot="YOUR_SLOT_ID" 
			css-style="display:inline-block;width:320px;height:50px;">
		</adsense-directive>
	</body>
</html>
```

## License

See the [LICENSE](https://github.com/szrnka-peter/ngAdsense/blob/master/LICENSE) file.

## Changelog

See the [CHANGELOG](https://github.com/szrnka-peter/ngAdsense/blob/master/CHANGELOG.md) file.
