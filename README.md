# EZ-GAP  
**An abstraction for PhoneGap plugins**

### Current supported plugins:
* PhoneGap Geo-location

### Basics

The purpose of EZ-GAP is to make using the plugins simpler while also adding
readability to your code.

Here's an example on how to use the Geo-location abstraction module.

**Step 1**

First you need to include the modules you would like to use in your **HTML** file header.

So for ```GAP.Geo``` we would include these:
```html
<!-- EZ-GAP namespace -->
<script type="text/javascript" src="gap.js"></script>
<!-- Geo module -->
<script type="text/javascript" src="gapgeo.js"></script>
```

**Step 2**

Then you just use it in your code.  
So ```GAP.Geo``` has a couple of methods like ```GAP.Geo.updateLocation();``` and
 ```GAP.Geo.getCoords();``` and a few others that we can use. So let's try that:
 
 ```javascript
 // Updating geo-location coordinates
 GAP.Geo.updateLocation();
 
 // Getting cached coordinates
 var userLocation = GAP.Geo.getCoords();
 
 // Logging user location in the console
 console.log("X: " + userLocation.x + " Y: " + userLocation.y);
 
 ```
 
_**(C) Yehya Awad 2015**_