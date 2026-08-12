var wms_layers = [];


        var lyr_MaptilerStreet_0 = new ol.layer.Tile({
            'title': 'Maptiler Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}.png?key=voa6z1cqWvF5uxUIU0VZ'
            })
        });
var format_PolaRuang_1 = new ol.format.GeoJSON();
var features_PolaRuang_1 = format_PolaRuang_1.readFeatures(json_PolaRuang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuang_1.addFeatures(features_PolaRuang_1);
var lyr_PolaRuang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuang_1, 
                style: style_PolaRuang_1,
                popuplayertitle: 'Pola Ruang',
                interactive: true,
    title: 'Pola Ruang<br />\
    <img src="styles/legend/PolaRuang_1_0.png" /> Hutan<br />\
    <img src="styles/legend/PolaRuang_1_1.png" /> Kebun Campuran<br />\
    <img src="styles/legend/PolaRuang_1_2.png" /> Salak<br />\
    <img src="styles/legend/PolaRuang_1_3.png" /> Sawah<br />\
    <img src="styles/legend/PolaRuang_1_4.png" /> Kolam<br />\
    <img src="styles/legend/PolaRuang_1_5.png" /> Embung<br />\
    <img src="styles/legend/PolaRuang_1_6.png" /> Sungai<br />\
    <img src="styles/legend/PolaRuang_1_7.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/PolaRuang_1_8.png" /> Permukiman dan Tempat Kegiatan<br />' });
var format_BatasDesaDinas_2 = new ol.format.GeoJSON();
var features_BatasDesaDinas_2 = format_BatasDesaDinas_2.readFeatures(json_BatasDesaDinas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaDinas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaDinas_2.addFeatures(features_BatasDesaDinas_2);
var lyr_BatasDesaDinas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaDinas_2, 
                style: style_BatasDesaDinas_2,
                popuplayertitle: 'Batas Desa Dinas',
                interactive: true,
    title: 'Batas Desa Dinas<br />\
    <img src="styles/legend/BatasDesaDinas_2_0.png" /> Sibetan<br />\
    <img src="styles/legend/BatasDesaDinas_2_1.png" /> Jungutan<br />\
    <img src="styles/legend/BatasDesaDinas_2_2.png" /> Jungutan (Hutan)<br />' });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_KonturInterval5m_5 = new ol.format.GeoJSON();
var features_KonturInterval5m_5 = format_KonturInterval5m_5.readFeatures(json_KonturInterval5m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KonturInterval5m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KonturInterval5m_5.addFeatures(features_KonturInterval5m_5);
var lyr_KonturInterval5m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KonturInterval5m_5, 
                style: style_KonturInterval5m_5,
                popuplayertitle: 'Kontur (Interval 5m)',
                interactive: false,
    title: 'Kontur (Interval 5m)<br />\
    <img src="styles/legend/KonturInterval5m_5_0.png" /> Major<br />\
    <img src="styles/legend/KonturInterval5m_5_1.png" /> Minor<br />' });

lyr_MaptilerStreet_0.setVisible(true);lyr_PolaRuang_1.setVisible(true);lyr_BatasDesaDinas_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_KonturInterval5m_5.setVisible(true);
var layersList = [lyr_MaptilerStreet_0,lyr_PolaRuang_1,lyr_BatasDesaDinas_2,lyr_Sungai_3,lyr_Jalan_4,lyr_KonturInterval5m_5];
lyr_PolaRuang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'LAYER': 'LAYER', 'class_id': 'class_id', 'area_m2': 'area_m2', 'area_ha': 'area_ha', 'longitude': 'longitude', 'latitude': 'latitude', 'salak': 'salak', 'OBJECTID_3': 'OBJECTID_3', 'NAMOBJ_3': 'NAMOBJ_3', 'FCODE_3': 'FCODE_3', 'REMARK_3': 'REMARK_3', 'METADATA_3': 'METADATA_3', 'SRS_ID_3': 'SRS_ID_3', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'TKTHLT': 'TKTHLT', 'LAYER_2': 'LAYER_2', 'Luas_1': 'Luas_1', });
lyr_BatasDesaDinas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'TKTHLT': 'TKTHLT', 'LAYER': 'LAYER', 'Luas_1': 'Luas_1', });
lyr_Sungai_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KonturInterval5m_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'status': 'status', });
lyr_PolaRuang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'LAYER': 'TextEdit', 'class_id': 'TextEdit', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'salak': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'NAMOBJ_3': 'TextEdit', 'FCODE_3': 'TextEdit', 'REMARK_3': 'TextEdit', 'METADATA_3': 'TextEdit', 'SRS_ID_3': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'NAMOBJ_2': 'TextEdit', 'FCODE_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'METADATA_2': 'TextEdit', 'SRS_ID_2': 'TextEdit', 'TKTHLT': 'TextEdit', 'LAYER_2': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_BatasDesaDinas_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'NAMOBJ_2': 'TextEdit', 'FCODE_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'METADATA_2': 'TextEdit', 'SRS_ID_2': 'TextEdit', 'TKTHLT': 'TextEdit', 'LAYER': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KonturInterval5m_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'status': 'TextEdit', });
lyr_PolaRuang_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'LAYER': 'hidden field', 'class_id': 'hidden field', 'area_m2': 'hidden field', 'area_ha': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'salak': 'hidden field', 'OBJECTID_3': 'hidden field', 'NAMOBJ_3': 'hidden field', 'FCODE_3': 'hidden field', 'REMARK_3': 'hidden field', 'METADATA_3': 'hidden field', 'SRS_ID_3': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'OBJECTID_2': 'hidden field', 'NAMOBJ_2': 'hidden field', 'FCODE_2': 'hidden field', 'REMARK_2': 'hidden field', 'METADATA_2': 'hidden field', 'SRS_ID_2': 'hidden field', 'TKTHLT': 'hidden field', 'LAYER_2': 'hidden field', 'Luas_1': 'hidden field', });
lyr_BatasDesaDinas_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'OBJECTID_2': 'hidden field', 'NAMOBJ_2': 'hidden field', 'FCODE_2': 'hidden field', 'REMARK_2': 'hidden field', 'METADATA_2': 'hidden field', 'SRS_ID_2': 'hidden field', 'TKTHLT': 'hidden field', 'LAYER': 'hidden field', 'Luas_1': 'hidden field', });
lyr_Sungai_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KonturInterval5m_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', 'status': 'no label', });
lyr_KonturInterval5m_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});