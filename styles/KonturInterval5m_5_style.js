var size = 0;
var placement = 'point';
function categories_KonturInterval5m_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Major':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(189,189,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.22799999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Minor':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.22799999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_KonturInterval5m_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("status");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("ELEV") !== null) {
        labelText = String(feature.get("ELEV"));
    }
    
    var style = categories_KonturInterval5m_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
