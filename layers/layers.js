var wms_layers = [];


var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            'visible': true,
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            'visible': false,
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            'visible': false,
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

var lyr_PetaDasarATRBPN_3 = new ol.layer.Tile({
            'title': 'Peta Dasar ATR BPN',
            'type': 'base',
            'opacity': 1.000000,
            'visible': false,
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://petadasar.atrbpn.go.id/main/wms/{x}/{y}/{z}'
            })
        });

var format_JalanProvinsi_4 = new ol.format.GeoJSON();
var features_JalanProvinsi_4 = format_JalanProvinsi_4.readFeatures(json_JalanProvinsi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_4.addFeatures(features_JalanProvinsi_4);
var lyr_JalanProvinsi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_4, 
                style: style_JalanProvinsi_4,
                popuplayertitle: 'Jalan Provinsi',
                interactive: false,
                title: '<img src="styles/legend/JalanProvinsi_4.png" /> Jalan Provinsi'
            });

var format_GetasanPayangan_5 = new ol.format.GeoJSON();
var features_GetasanPayangan_5 = format_GetasanPayangan_5.readFeatures(json_GetasanPayangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GetasanPayangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GetasanPayangan_5.addFeatures(features_GetasanPayangan_5);
var lyr_GetasanPayangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GetasanPayangan_5, 
                style: style_GetasanPayangan_5,
                popuplayertitle: 'Getasan - Payangan',
                interactive: false,
                title: '<img src="styles/legend/GetasanPayangan_5.png" /> Getasan - Payangan'
            });

var format_PelagaSidanBuahan_6 = new ol.format.GeoJSON();
var features_PelagaSidanBuahan_6 = format_PelagaSidanBuahan_6.readFeatures(json_PelagaSidanBuahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelagaSidanBuahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelagaSidanBuahan_6.addFeatures(features_PelagaSidanBuahan_6);
var lyr_PelagaSidanBuahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PelagaSidanBuahan_6, 
                style: style_PelagaSidanBuahan_6,
                popuplayertitle: 'Pelaga - Sidan - Buahan',
                interactive: false,
                title: '<img src="styles/legend/PelagaSidanBuahan_6.png" /> Pelaga - Sidan - Buahan'
            });

var format_PunggulBongkasaSayan_7 = new ol.format.GeoJSON();
var features_PunggulBongkasaSayan_7 = format_PunggulBongkasaSayan_7.readFeatures(json_PunggulBongkasaSayan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunggulBongkasaSayan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunggulBongkasaSayan_7.addFeatures(features_PunggulBongkasaSayan_7);
var lyr_PunggulBongkasaSayan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PunggulBongkasaSayan_7, 
                style: style_PunggulBongkasaSayan_7,
                popuplayertitle: 'Punggul - Bongkasa - Sayan',
                interactive: false,
                title: '<img src="styles/legend/PunggulBongkasaSayan_7.png" /> Punggul - Bongkasa - Sayan'
            });

var format_JalanRencanaAlternative_8 = new ol.format.GeoJSON();
var features_JalanRencanaAlternative_8 = format_JalanRencanaAlternative_8.readFeatures(json_JalanRencanaAlternative_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRencanaAlternative_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRencanaAlternative_8.addFeatures(features_JalanRencanaAlternative_8);
var lyr_JalanRencanaAlternative_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRencanaAlternative_8, 
                style: style_JalanRencanaAlternative_8,
                popuplayertitle: 'Jalan Rencana Alternative',
                interactive: true,
                title: '<img src="styles/legend/JalanRencanaAlternative_8.png" /> Jalan Rencana Alternative'
            });

var format_JalanSurvei_9 = new ol.format.GeoJSON();
var features_JalanSurvei_9 = format_JalanSurvei_9.readFeatures(json_JalanSurvei_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSurvei_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSurvei_9.addFeatures(features_JalanSurvei_9);
var lyr_JalanSurvei_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSurvei_9, 
                style: style_JalanSurvei_9,
                popuplayertitle: 'Jalan Survei',
                interactive: true,
                title: '<img src="styles/legend/JalanSurvei_9.png" /> Jalan Survei'
            });

var format_SurveyPhotos_10 = new ol.format.GeoJSON();
var features_SurveyPhotos_10 = format_SurveyPhotos_10.readFeatures(json_SurveyPhotos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyPhotos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyPhotos_10.addFeatures(features_SurveyPhotos_10);
cluster_SurveyPhotos_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SurveyPhotos_10
});
var lyr_SurveyPhotos_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SurveyPhotos_10, 
                style: style_SurveyPhotos_10,
                popuplayertitle: 'Survey Photos',
                interactive: true,
                title: '<img src="styles/legend/SurveyPhotos_10.png" /> Survey Photos'
            });

lyr_GoogleSatellite_0.setVisible(true);
lyr_GoogleMaps_1.setVisible(false);
lyr_GoogleHybrid_2.setVisible(false);
lyr_PetaDasarATRBPN_3.setVisible(false);
lyr_JalanProvinsi_4.setVisible(true);
lyr_GetasanPayangan_5.setVisible(true);
lyr_PelagaSidanBuahan_6.setVisible(true);
lyr_PunggulBongkasaSayan_7.setVisible(true);
lyr_JalanRencanaAlternative_8.setVisible(true);
lyr_JalanSurvei_9.setVisible(true);
lyr_SurveyPhotos_10.setVisible(true);

var layersList = [
    lyr_GoogleSatellite_0,
    lyr_GoogleMaps_1,
    lyr_GoogleHybrid_2,
    lyr_PetaDasarATRBPN_3,
    lyr_JalanProvinsi_4,
    lyr_GetasanPayangan_5,
    lyr_PelagaSidanBuahan_6,
    lyr_PunggulBongkasaSayan_7,
    lyr_JalanRencanaAlternative_8,
    lyr_JalanSurvei_9,
    lyr_SurveyPhotos_10
];

lyr_JalanProvinsi_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_GetasanPayangan_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PelagaSidanBuahan_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PunggulBongkasaSayan_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JalanRencanaAlternative_8.set('fieldAliases', {'id': 'id', });
lyr_JalanSurvei_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_Track': 'gpxx_Track', 'gpxtrkx_Tr': 'gpxtrkx_Tr', });
lyr_SurveyPhotos_10.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });

lyr_JalanProvinsi_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_GetasanPayangan_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PelagaSidanBuahan_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PunggulBongkasaSayan_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_JalanRencanaAlternative_8.set('fieldImages', {'id': 'TextEdit', });
lyr_JalanSurvei_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'gpxx_Track': 'TextEdit', 'gpxtrkx_Tr': 'TextEdit', });
lyr_SurveyPhotos_10.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });

lyr_JalanProvinsi_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_GetasanPayangan_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_PelagaSidanBuahan_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_PunggulBongkasaSayan_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_JalanRencanaAlternative_8.set('fieldLabels', {'id': 'hidden field', });
lyr_JalanSurvei_9.set('fieldLabels', {'name': 'hidden field', 'cmt': 'hidden field', 'desc': 'hidden field', 'src': 'hidden field', 'link1_href': 'hidden field', 'link1_text': 'hidden field', 'link1_type': 'hidden field', 'link2_href': 'hidden field', 'link2_text': 'hidden field', 'link2_type': 'hidden field', 'number': 'hidden field', 'type': 'hidden field', 'gpxx_Track': 'hidden field', 'gpxtrkx_Tr': 'hidden field', });
lyr_SurveyPhotos_10.set('fieldLabels', {'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });

lyr_SurveyPhotos_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
