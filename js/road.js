/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "projection": "miller",
    "dataProvider": {
    "map": "worldLow",

    "lines": [ {
      "id": "cancun1",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.4642, 21.038999 ],
      "longitudes": [ -3.5731411, -86.8746907 ]
    }],
    "images": [ {
      "svgPath": targetSVG,
      "title": "Madrid",
      "latitude": 40.4642,
      "longitude": -3.5731411
    }, {
      "svgPath": targetSVG,
      "title": "Cancún",
      "latitude": 21.038999,
      "longitude": -86.8746907
    },
      {
        "svgPath": planeSVG,
        "positionOnLine": 0,
        "color": "#fff",
        "animateAlongLine": true,
        "lineId": "cancun1",
        "flipDirection": true,
        "loop": true,
        "scale": 0.1,
        "positionScale": 1.8
      }
    ]
  },

  "areasSettings": {
    "autoZoom": true,
    "unlistedAreasColor": "#5e9a8e"
  },

  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 1,
    "animationDuration": 10,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "#585869",
    "alpha": 0
  },

  "export": {
    "enabled": false
  },
  "mouseWheelZoomEnabled": false

} );