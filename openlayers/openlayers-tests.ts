/// <reference path="openlayers.d.ts" />

// Basic type variables for test functions
var voidValue: void;
var numberValue: number;
var booleanValue: boolean;
var stringValue: string;
var jsonValue: JSON;

// Callback predefinitions for OpenLayers
var preRenderFunction: ol.PreRenderFunction;
var transformFunction: ol.TransformFunction;
var coordinateFormatType: ol.CoordinateFormatType;
var featureStyleFunction: ol.FeatureStyleFunction;
var featureLoader: ol.FeatureLoader;
var easingFunction: (t: number) => number;

// Type variables for OpenLayers
var circle: ol.geom.Circle;
var color: ol.Color;
var coordinate: ol.Coordinate;
var coordinatesArray: Array<ol.Coordinate>;
var coordinatesArrayDim2: Array<Array<ol.Coordinate>>;
var extent: ol.Extent;
var boundingCoordinates: Array<ol.Coordinate>;
var size: ol.Size;
var style: ol.style.Style;
var styleArray: Array<ol.style.Style>;
var feature: ol.Feature;
var featureArray: Array<ol.Feature>;
var graticule: ol.Graticule
var geometry: ol.geom.Geometry;
var geometriesArray: Array<ol.geom.Geometry>;
var feature: ol.Feature;
var featureArray: Array<ol.Feature>;
var featureFormat: ol.format.Feature;
var geometry: ol.geom.Geometry;
var geometryCollection: ol.geom.GeometryCollection;
var geometryLayout: ol.geom.GeometryLayout;
var geometryType: ol.geom.GeometryType;
var linearRing: ol.geom.LinearRing;
var lineString: ol.geom.LineString;
var loadingstrategy: ol.LoadingStrategy;
var multiLineString: ol.geom.MultiLineString;
var multiPoint: ol.geom.MultiPoint;
var multiPolygon: ol.geom.MultiPolygon;
var point: ol.geom.Point;
var polygon: ol.geom.Polygon;
var simpleGeometry: ol.geom.SimpleGeometry;
var tilegrid: ol.tilegrid.TileGrid;
var vector: ol.source.Vector;
var projection: ol.proj.Projection;
var projectionLike: ol.proj.ProjectionLike;
var transformFn: ol.TransformFunction;

//
// ol.Attribution
//

var attribution: ol.Attribution = new ol.Attribution({
    html: stringValue,
});

//
// ol.color
//
color = ol.color.asArray(color);
color = ol.color.asArray(stringValue);
stringValue = ol.color.asString(color);
stringValue = ol.color.asString(stringValue);

//
// ol.extent
//
transformFunction = function (input: number[]) {
    var returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[]) {
    var returnData: number[];
    return returnData;
};
transformFunction = function (input: number[], output: number[], dimension: number) {
    var returnData: number[];
    return returnData;
}
extent = ol.extent.applyTransform(extent, transformFunction);
ol.extent.applyTransform(extent, transformFunction, extent);
extent = ol.extent.boundingExtent(boundingCoordinates)
extent = ol.extent.buffer(extent, numberValue);
ol.extent.buffer(extent, numberValue, extent);
booleanValue = ol.extent.containsCoordinate(extent, coordinate);
booleanValue = ol.extent.containsExtent(extent, extent);
booleanValue = ol.extent.containsXY(extent, numberValue, numberValue);
extent = ol.extent.createEmpty();
booleanValue = ol.extent.equals(extent, extent);
extent = ol.extent.extend(extent, extent);
coordinate = ol.extent.getBottomLeft(extent);
coordinate = ol.extent.getBottomRight(extent);
coordinate = ol.extent.getCenter(extent);
numberValue = ol.extent.getHeight(extent);
extent = ol.extent.getIntersection(extent, extent);
ol.extent.getIntersection(extent, extent, extent);
size = ol.extent.getSize(extent);
coordinate = ol.extent.getTopLeft(extent);
coordinate = ol.extent.getTopRight(extent);
numberValue = ol.extent.getWidth(extent);
booleanValue = ol.extent.intersects(extent, extent);
booleanValue = ol.extent.isEmpty(extent);

//
// ol.featureloader
//
featureLoader = ol.featureloader.xhr(stringValue, featureFormat);

//
// ol.loadingstrategy
//
loadingstrategy = ol.loadingstrategy.all;
loadingstrategy = ol.loadingstrategy.bbox;
loadingstrategy = ol.loadingstrategy.tile(tilegrid);

//
//
// ol.geom.Circle
//
booleanValue = circle.intersectsExtent(extent);
circle = circle.transform(projectionLike, projectionLike);

//
//
// ol.geom.Geometry
//
var geometryResult: ol.geom.Geometry;
coordinate = geometryResult.getClosestPoint(coordinate);
geometryResult.getClosestPoint(coordinate, coordinate);
extent = geometryResult.getExtent();
geometryResult.getExtent(extent);

//
//
// ol.geom.GeometryCollection
//
geometryCollection = new ol.geom.GeometryCollection(geometriesArray)
geometryCollection = new ol.geom.GeometryCollection();
voidValue = geometryCollection.applyTransform(transformFn);
geometryCollection = geometryCollection.clone();
geometriesArray = geometryCollection.getGeometries();
geometryType = geometryCollection.getType();
booleanValue = geometryCollection.intersectsExtent(extent);
voidValue = geometryCollection.setGeometries(geometriesArray);

//
//
// ol.geom.LinearRing
//
linearRing = new ol.geom.LinearRing(coordinatesArray);
linearRing = new ol.geom.LinearRing(coordinatesArray, geometryLayout);
linearRing = linearRing.clone();
numberValue = linearRing.getArea();
coordinatesArray = linearRing.getCoordinates();
geometryType = linearRing.getType();
voidValue = linearRing.setCoordinates(coordinatesArray);
voidValue = linearRing.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.LineString
//
lineString = new ol.geom.LineString(coordinatesArray);
lineString = new ol.geom.LineString(coordinatesArray, geometryLayout);
voidValue = lineString.appendCoordinate(coordinate);
lineString = lineString.clone();
coordinate = lineString.getCoordinateAtM(numberValue);
coordinate = lineString.getCoordinateAtM(numberValue, booleanValue);
coordinatesArray = lineString.getCoordinates();
numberValue = lineString.getLength();
geometryType = lineString.getType();
booleanValue = lineString.intersectsExtent(extent);
voidValue = lineString.setCoordinates(coordinatesArray);
voidValue = lineString.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.MultiLineString
//
var lineStringsArray: Array<ol.geom.LineString>;

multiLineString = new ol.geom.MultiLineString(coordinatesArrayDim2);
multiLineString = new ol.geom.MultiLineString(coordinatesArrayDim2, geometryLayout);
voidValue = multiLineString.appendLineString(lineString);
multiLineString = multiLineString.clone();
coordinate = multiLineString.getCoordinateAtM(numberValue);
coordinate = multiLineString.getCoordinateAtM(numberValue, booleanValue);
coordinate = multiLineString.getCoordinateAtM(numberValue, booleanValue, booleanValue);
coordinatesArrayDim2 = multiLineString.getCoordinates();
lineString = multiLineString.getLineString(numberValue);
lineStringsArray = multiLineString.getLineStrings();
geometryType = multiLineString.getType();
booleanValue = multiLineString.intersectsExtent(extent);
voidValue = multiLineString.setCoordinates(coordinatesArrayDim2);
voidValue = multiLineString.setCoordinates(coordinatesArrayDim2, geometryLayout);

//
//
// ol.geom.MultiPoint
//
var pointsArray: Array<ol.geom.Point>;

multiPoint = new ol.geom.MultiPoint(coordinatesArray);
multiPoint = new ol.geom.MultiPoint(coordinatesArray, geometryLayout);
voidValue = multiPoint.appendPoint(point);
multiPoint = multiPoint.clone();
coordinatesArray = multiPoint.getCoordinates();
point = multiPoint.getPoint(numberValue);
pointsArray = multiPoint.getPoints();
geometryType = multiPoint.getType();
booleanValue = multiPoint.intersectsExtent(extent);
voidValue = multiPoint.setCoordinates(coordinatesArray);
voidValue = multiPoint.setCoordinates(coordinatesArray, geometryLayout);

//
//
// ol.geom.MultiPolygon
//
var coordinatesArrayDim3: Array<Array<Array<ol.Coordinate>>>;
var polygonsArray: Array<ol.geom.Polygon>;

multiPolygon = new ol.geom.MultiPolygon(coordinatesArrayDim3);
multiPolygon = new ol.geom.MultiPolygon(coordinatesArrayDim3, geometryLayout);
voidValue = multiPolygon.appendPolygon(polygon);
multiPolygon = multiPolygon.clone();
numberValue = multiPolygon.getArea();
coordinatesArrayDim3 = multiPolygon.getCoordinates();
coordinatesArrayDim3 = multiPolygon.getCoordinates(booleanValue);
multiPoint = multiPolygon.getInteriorPoints();
polygon = multiPolygon.getPolygon(numberValue);
polygonsArray = multiPolygon.getPolygons();
geometryType = multiPolygon.getType();
booleanValue = multiPolygon.intersectsExtent(extent);
voidValue = multiPolygon.setCoordinates(coordinatesArrayDim3);
voidValue = multiPolygon.setCoordinates(coordinatesArrayDim3, geometryLayout);

//
//
// ol.geom.Point
//
point = new ol.geom.Point(coordinate);
point = new ol.geom.Point(coordinate, geometryLayout);
point = point.clone();
coordinate = point.getCoordinates();
geometryType = point.getType();
booleanValue = point.intersectsExtent(extent);
voidValue = point.setCoordinates(coordinate);
voidValue = point.setCoordinates(coordinate, geometryLayout);

//
//
// ol.geom.Polygon
//
var localSphere: ol.Sphere;
var linearRingsArray: Array<ol.geom.LinearRing>;

polygon = new ol.geom.Polygon(coordinatesArrayDim2);
polygon = new ol.geom.Polygon(coordinatesArrayDim2, geometryLayout);
polygon = ol.geom.Polygon.circular(localSphere, coordinate, numberValue);
polygon = ol.geom.Polygon.circular(localSphere, coordinate, numberValue, numberValue);
voidValue = polygon.appendLinearRing(linearRing);
polygon = polygon.clone();
numberValue = polygon.getArea();
coordinatesArrayDim2 = polygon.getCoordinates();
coordinatesArrayDim2 = polygon.getCoordinates(booleanValue);
point = polygon.getInteriorPoint();
linearRing = polygon.getLinearRing(numberValue);
linearRingsArray = polygon.getLinearRings();
geometryType = polygon.getType();
booleanValue = polygon.intersectsExtent(extent);

//
//
// ol.geom.SimpleGeometry
//
simpleGeometry.applyTransform(transformFn);
coordinate = simpleGeometry.getFirstCoordinate();
coordinate = simpleGeometry.getLastCoordinate();
geometryLayout = simpleGeometry.getLayout();
voidValue = simpleGeometry.translate(numberValue, numberValue);

//
// ol.source
//
vector = new ol.source.Vector({
  features: [feature]
});

//
// ol.Feature
//
feature = new ol.Feature();
feature = new ol.Feature(geometry);
feature = new ol.Feature({
    geometry: geometry
});
feature = feature.clone();
geometry = feature.getGeometry();
stringValue = feature.getGeometryName();
var featureGetId: string | number = feature.getId();
var featureGetStyle: ol.style.Style | Array<ol.style.Style> | ol.FeatureStyleFunction = feature.getStyle();
featureStyleFunction = feature.getStyleFunction();
voidValue = feature.setGeometry(geometry);
voidValue = feature.setGeometryName(stringValue);
voidValue = feature.setId(stringValue);
voidValue = feature.setId(numberValue);
voidValue = feature.setStyle(style);
voidValue = feature.setStyle(styleArray);
voidValue = feature.setStyle(featureStyleFunction);

//
// ol.View
//

var view: ol.View = new ol.View({
    center: [0, 0],
    zoom: numberValue,
});

//
// ol.layer.Tile
//
var tileLayer: ol.layer.Tile = new ol.layer.Tile({
    source: new ol.source.MapQuest({ layer: 'osm' })
});

//
// ol.proj
//
projection = new ol.proj.Projection({
    code:stringValue,    
});

//
// ol.Map 
//

var map: ol.Map = new ol.Map({
    view: view,
    layers: [tileLayer],
    target: stringValue
});
map.beforeRender(preRenderFunction);

//
// ol.source.ImageWMS
//
var imageWMS: ol.source.ImageWMS = new ol.source.ImageWMS({
    serverType: stringValue,
    url:stringValue
});
//
// ol.source.TileWMS
//
var tileWMS: ol.source.TileWMS = new ol.source.TileWMS({
    serverType: stringValue,
    url:stringValue
});

//
// ol.animation
//
var bounceOptions: olx.animation.BounceOptions;
bounceOptions.duration = numberValue;
bounceOptions.start = numberValue;
bounceOptions.resolution = numberValue;
bounceOptions.easing = easingFunction;
preRenderFunction = ol.animation.bounce(bounceOptions);

var panOptions: olx.animation.PanOptions;
panOptions.duration = numberValue;
panOptions.start = numberValue;
panOptions.source = coordinate;
panOptions.easing = easingFunction;
preRenderFunction = ol.animation.pan(panOptions);

var rotateOptions: olx.animation.RotateOptions;
rotateOptions.duration = numberValue;
rotateOptions.start = numberValue;
rotateOptions.anchor = coordinate;
rotateOptions.rotation = numberValue;
rotateOptions.easing = easingFunction;
preRenderFunction = ol.animation.rotate(rotateOptions);

var zoomOptions: olx.animation.ZoomOptions;
zoomOptions.duration = numberValue;
zoomOptions.start = numberValue;
zoomOptions.resolution = numberValue;
zoomOptions.easing = easingFunction;
preRenderFunction = ol.animation.zoom(zoomOptions);
map.beforeRender(preRenderFunction);

//
// ol.coordinate
//
coordinate = ol.coordinate.add(coordinate, coordinate);
coordinateFormatType = ol.coordinate.createStringXY();
coordinateFormatType = ol.coordinate.createStringXY(numberValue);
stringValue = ol.coordinate.format(coordinate, stringValue);
stringValue = ol.coordinate.format(coordinate, stringValue, numberValue);
coordinate = ol.coordinate.rotate(coordinate, numberValue);
stringValue = ol.coordinate.toStringHDMS();
stringValue = ol.coordinate.toStringHDMS(coordinate);
stringValue = ol.coordinate.toStringXY();
stringValue = ol.coordinate.toStringXY(coordinate);
stringValue = ol.coordinate.toStringXY(coordinate, numberValue);

//
// ol.easing
//
easingFunction = ol.easing.easeIn;
easingFunction = ol.easing.easeOut;
easingFunction = ol.easing.inAndOut;
easingFunction = ol.easing.linear;
easingFunction = ol.easing.upAndDown;

//
// ol.Geolocation
//
var geolocation: ol.Geolocation = new ol.Geolocation({
    projection: projection
});
geolocation.on('change', function (evt) {
    window.console.log(geolocation.getPosition());
});

//
// ol.Graticule
//

graticule = new ol.Graticule();
graticule = new ol.Graticule({
    map: map,
});
var graticuleMap: ol.Map = graticule.getMap();
var graticuleMeridians: Array<ol.geom.LineString> = graticule.getMeridians();
var graticuleParallels: Array<ol.geom.LineString> = graticule.getParallels();
graticule.setMap(graticuleMap);

//
// ol.DeviceOrientation
//

var deviceOrientation: ol.DeviceOrientation = new ol.DeviceOrientation({
    tracking: true,
});
deviceOrientation.on('change', function (evt) {
    window.console.log(deviceOrientation.getHeading());
});

//
// ol.Overlay
//

var popup: ol.Overlay = new ol.Overlay({
    element: document.getElementById('popup')
});
map.addOverlay(popup);
var popupElement: Element = popup.getElement();
var popupMap: ol.Map = popup.getMap();
var popupOffset: Array<number> = popup.getOffset();
coordinate = popup.getPosition();
var popupPositioning: ol.OverlayPositioning = popup.getPositioning();
popup.setElement(popupElement);
popup.setMap(popupMap);
popup.setOffset(popupOffset);
popup.setPosition(coordinate);
popup.setPositioning(popupPositioning);


//
// ol.format.GeoJSON
//

var geojsonOptions: olx.format.GeoJSONOptions;
geojsonOptions.defaultDataProjection = "EPSG";
geojsonOptions.defaultDataProjection = projection;
geojsonOptions.geometryName = "geom";

var geojsonFormat: ol.format.GeoJSON;
geojsonFormat = new ol.format.GeoJSON();
geojsonFormat = new ol.format.GeoJSON(geojsonOptions);

// Test options
var readOptions: olx.format.ReadOptions;
readOptions.dataProjection = "EPSG";
readOptions.dataProjection = projection;
readOptions.featureProjection = "EPSG";
readOptions.featureProjection = projection;

var writeOptions: olx.format.WriteOptions;
writeOptions.dataProjection = "EPSG";
writeOptions.dataProjection = projection;
writeOptions.featureProjection = "EPSG";
writeOptions.featureProjection = projection;
writeOptions.rightHanded = false;

// Test functions
feature = geojsonFormat.readFeature("json");
feature = geojsonFormat.readFeature("json", readOptions);
featureArray = geojsonFormat.readFeatures("json");
featureArray = geojsonFormat.readFeatures("json", readOptions);
geometry = geojsonFormat.readGeometry("geometry");
geometry = geojsonFormat.readGeometry("geometry", readOptions);
stringValue = geojsonFormat.writeFeature(feature);
stringValue = geojsonFormat.writeFeature(feature, writeOptions);
stringValue = geojsonFormat.writeFeatures(featureArray);
stringValue = geojsonFormat.writeFeatures(featureArray, writeOptions);
stringValue = geojsonFormat.writeGeometry(geometry);
stringValue = geojsonFormat.writeGeometry(geometry, writeOptions);
jsonValue = geojsonFormat.writeFeatureObject(feature);
jsonValue = geojsonFormat.writeFeatureObject(feature, writeOptions);
jsonValue = geojsonFormat.writeFeaturesObject(featureArray);
jsonValue = geojsonFormat.writeFeaturesObject(featureArray, writeOptions);
jsonValue = geojsonFormat.writeGeometryObject(geometry);
jsonValue = geojsonFormat.writeGeometryObject(geometry, writeOptions);
