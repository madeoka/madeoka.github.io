var wms_layers = [];


        var lyr_MaptilerStreet_0 = new ol.layer.Tile({
            'title': 'Maptiler Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}.png?key=voa6z1cqWvF5uxUIU0VZ'
            })
        });
var format_Pola_Ruang_Salak_v2_1 = new ol.format.GeoJSON();
var features_Pola_Ruang_Salak_v2_1 = format_Pola_Ruang_Salak_v2_1.readFeatures(json_Pola_Ruang_Salak_v2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pola_Ruang_Salak_v2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pola_Ruang_Salak_v2_1.addFeatures(features_Pola_Ruang_Salak_v2_1);
var lyr_Pola_Ruang_Salak_v2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pola_Ruang_Salak_v2_1, 
                style: style_Pola_Ruang_Salak_v2_1,
                popuplayertitle: 'Pola Ruang',
                interactive: false,
    title: 'Pola Ruang<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_0.png" /> Hutan Rimba<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_1.png" /> Kebun Campuran<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_2.png" /> Salak<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_3.png" /> Sawah<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_4.png" /> Sungai<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_5.png" /> Embung<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_6.png" /> Kolam<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_7.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/Pola_Ruang_Salak_v2_1_8.png" /> Permukiman dan Tempat Kegiatan<br />' });
var format_Kontur_10m_2 = new ol.format.GeoJSON();
var features_Kontur_10m_2 = format_Kontur_10m_2.readFeatures(json_Kontur_10m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_10m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_10m_2.addFeatures(features_Kontur_10m_2);
var lyr_Kontur_10m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_10m_2, 
                style: style_Kontur_10m_2,
                popuplayertitle: 'Kontur',
                interactive: true,
    title: 'Kontur (interval 10m)<br />\
    <img src="styles/legend/Kontur_10m_2_0.png" /> Major<br />\
    <img src="styles/legend/Kontur_10m_2_1.png" /> Minor<br />' });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                popuplayertitle: 'Jalan Raya',
                interactive: false,
                title: '<img src="styles/legend/JALAN_LN_25K_3.png" /> Jalan Raya'
            });
var format_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_4 = format_SUNGAI_LN_25K_4.readFeatures(json_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_4.addFeatures(features_SUNGAI_LN_25K_4);
var lyr_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_4, 
                style: style_SUNGAI_LN_25K_4,
                popuplayertitle: 'Jalur Sungai',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_LN_25K_4.png" /> Jalur Sungai'
            });
var format_Batas_Desa_Adat_Sibetandesaadatsibetann_5 = new ol.format.GeoJSON();
var features_Batas_Desa_Adat_Sibetandesaadatsibetann_5 = format_Batas_Desa_Adat_Sibetandesaadatsibetann_5.readFeatures(json_Batas_Desa_Adat_Sibetandesaadatsibetann_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_Adat_Sibetandesaadatsibetann_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_Adat_Sibetandesaadatsibetann_5.addFeatures(features_Batas_Desa_Adat_Sibetandesaadatsibetann_5);
var lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Desa_Adat_Sibetandesaadatsibetann_5, 
                style: style_Batas_Desa_Adat_Sibetandesaadatsibetann_5,
                popuplayertitle: 'Batas Desa Adat Sibetan',
                interactive: true,
    title: 'Batas Desa Adat Sibetan<br />\
    <img src="styles/legend/Batas_Desa_Adat_Sibetandesaadatsibetann_5_2.png" /> Batas di Desa Jungutan (Hutan)<br />\
    <img src="styles/legend/Batas_Desa_Adat_Sibetandesaadatsibetann_5_0.png" /> Batas di Desa Jungutan<br />\
    <img src="styles/legend/Batas_Desa_Adat_Sibetandesaadatsibetann_5_1.png" /> Batas di Desa Sibetan<br />'
    });

lyr_MaptilerStreet_0.setVisible(true);lyr_Pola_Ruang_Salak_v2_1.setVisible(true);lyr_Kontur_10m_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);lyr_SUNGAI_LN_25K_4.setVisible(true);lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5.setVisible(true);
var layersList = [lyr_MaptilerStreet_0,lyr_Pola_Ruang_Salak_v2_1,lyr_Kontur_10m_2,lyr_JALAN_LN_25K_3,lyr_SUNGAI_LN_25K_4,lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5];
lyr_Pola_Ruang_Salak_v2_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'CRH': 'CRH', 'FNGAIR': 'FNGAIR', 'OTODAN': 'OTODAN', 'QUAAR': 'QUAAR', 'SDN': 'SDN', 'TIPTYP': 'TIPTYP', 'VLCSDN': 'VLCSDN', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'KPTS': 'KPTS', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'CPSAR': 'CPSAR', 'CPSBR': 'CPSBR', 'DMIAR': 'DMIAR', 'DMIBR': 'DMIBR', 'IRGAR': 'IRGAR', 'IRGBR': 'IRGBR', 'KTREMB': 'KTREMB', 'LENJL': 'LENJL', 'LGTHEC': 'LGTHEC', 'THPLKS': 'THPLKS', 'TIPEMG': 'TIPEMG', 'TIPTKT': 'TIPTKT', 'TMAAR': 'TMAAR', 'TMABR': 'TMABR', 'YEARLR': 'YEARLR', 'THNOBJ': 'THNOBJ', 'ELEVAS': 'ELEVAS', 'JNSPDG': 'JNSPDG', 'TKTHLR': 'TKTHLR', 'TKTHLT': 'TKTHLT', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KLSRJL': 'KLSRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'MEDRJL': 'MEDRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'NMRSJL': 'NMRSJL', 'JNSKLM': 'JNSKLM', 'JNSSLK': 'JNSSLK', 'JNSAIR': 'JNSAIR', 'JNSKBNSMS': 'JNSKBNSMS', 'JNSKBNTHN': 'JNSKBNTHN', 'TIPPSS': 'TIPPSS', 'STAPSS': 'STAPSS', 'TPGNGN': 'TPGNGN', 'TPRAWA': 'TPRAWA', 'JNSSWH': 'JNSSWH', 'TNMSWH': 'TNMSWH', 'JNSSMK': 'JNSSMK', 'ADATGL': 'ADATGL', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'KDTTMB': 'KDTTMB', 'PNGTMB': 'PNGTMB', 'JNSTCP': 'JNSTCP', 'path': 'path', 'class_id': 'class_id', 'area_m2': 'area_m2', 'area_ha': 'area_ha', 'longitude': 'longitude', 'latitude': 'latitude', 'NAMOBJ_2': 'NAMOBJ_2', });
lyr_Kontur_10m_2.set('fieldAliases', {'ID': 'ID', 'ELEV': 'Elevasi', 'Status': 'Status', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Desa', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'TKTHLT': 'TKTHLT', 'LAYER': 'LAYER', 'Luas_1': 'Luas_1', });
lyr_Pola_Ruang_Salak_v2_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'CRH': 'TextEdit', 'FNGAIR': 'Range', 'OTODAN': 'Range', 'QUAAR': 'Range', 'SDN': 'Range', 'TIPTYP': 'Range', 'VLCSDN': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'KPTS': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': '', 'SHAPE_Area': 'TextEdit', 'CPSAR': 'TextEdit', 'CPSBR': 'TextEdit', 'DMIAR': 'TextEdit', 'DMIBR': 'TextEdit', 'IRGAR': 'TextEdit', 'IRGBR': 'TextEdit', 'KTREMB': 'TextEdit', 'LENJL': 'TextEdit', 'LGTHEC': 'TextEdit', 'THPLKS': 'DateTime', 'TIPEMG': 'Range', 'TIPTKT': 'Range', 'TMAAR': 'TextEdit', 'TMABR': 'TextEdit', 'YEARLR': 'DateTime', 'THNOBJ': 'DateTime', 'ELEVAS': 'TextEdit', 'JNSPDG': 'Range', 'TKTHLR': 'Range', 'TKTHLT': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KLSRJL': 'Range', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'MEDRJL': 'Range', 'TGL_SK': 'DateTime', 'JLNLYG': 'Range', 'NMRSJL': 'TextEdit', 'JNSKLM': 'Range', 'JNSSLK': 'Range', 'JNSAIR': 'Range', 'JNSKBNSMS': 'Range', 'JNSKBNTHN': 'Range', 'TIPPSS': 'Range', 'STAPSS': 'Range', 'TPGNGN': 'Range', 'TPRAWA': 'Range', 'JNSSWH': 'Range', 'TNMSWH': 'Range', 'JNSSMK': 'Range', 'ADATGL': 'Range', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'LTKSGI': 'Range', 'UKRSGI': 'Range', 'KDTTMB': 'Range', 'PNGTMB': 'Range', 'JNSTCP': 'Range', 'path': 'TextEdit', 'class_id': 'TextEdit', 'area_m2': 'TextEdit', 'area_ha': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'NAMOBJ_2': 'TextEdit', });
lyr_Kontur_10m_2.set('fieldImages', {'ID': 'TextEdit', 'ELEV': 'TextEdit', 'Status': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_25K_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'NAMOBJ_2': 'TextEdit', 'FCODE_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'METADATA_2': 'TextEdit', 'SRS_ID_2': 'TextEdit', 'TKTHLT': 'TextEdit', 'LAYER': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_Pola_Ruang_Salak_v2_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'CRH': 'no label', 'FNGAIR': 'no label', 'OTODAN': 'no label', 'QUAAR': 'no label', 'SDN': 'no label', 'TIPTYP': 'no label', 'VLCSDN': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'KPTS': 'no label', 'LAYER': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'CPSAR': 'no label', 'CPSBR': 'no label', 'DMIAR': 'no label', 'DMIBR': 'no label', 'IRGAR': 'no label', 'IRGBR': 'no label', 'KTREMB': 'no label', 'LENJL': 'no label', 'LGTHEC': 'no label', 'THPLKS': 'no label', 'TIPEMG': 'no label', 'TIPTKT': 'no label', 'TMAAR': 'no label', 'TMABR': 'no label', 'YEARLR': 'no label', 'THNOBJ': 'no label', 'ELEVAS': 'no label', 'JNSPDG': 'no label', 'TKTHLR': 'no label', 'TKTHLT': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KLSRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'MEDRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'NMRSJL': 'no label', 'JNSKLM': 'no label', 'JNSSLK': 'no label', 'JNSAIR': 'no label', 'JNSKBNSMS': 'no label', 'JNSKBNTHN': 'no label', 'TIPPSS': 'no label', 'STAPSS': 'no label', 'TPGNGN': 'no label', 'TPRAWA': 'no label', 'JNSSWH': 'no label', 'TNMSWH': 'no label', 'JNSSMK': 'no label', 'ADATGL': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'UKRSGI': 'no label', 'KDTTMB': 'no label', 'PNGTMB': 'no label', 'JNSTCP': 'no label', 'path': 'no label', 'class_id': 'no label', 'area_m2': 'no label', 'area_ha': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'NAMOBJ_2': 'no label', });
lyr_Kontur_10m_2.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'Status': 'hidden field', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'OBJECTID_2': 'hidden field', 'NAMOBJ_2': 'hidden field', 'FCODE_2': 'hidden field', 'REMARK_2': 'hidden field', 'METADATA_2': 'hidden field', 'SRS_ID_2': 'hidden field', 'TKTHLT': 'hidden field', 'LAYER': 'hidden field', 'Luas_1': 'hidden field', });
lyr_Batas_Desa_Adat_Sibetandesaadatsibetann_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});