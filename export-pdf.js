(function (ol, $, jsPDF) {
	
	var raster = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	
	var dims = {
		a0: [1189, 841],
		a1: [841, 594],
		a2: [594, 420],
		a3: [420, 297],
		a4: [297, 210],
		a5: [210, 148]
	};
	
	var loading = 0;
	var loaded = 0;
	var canvas;
	var map;
	var originalMapSize;
	var originalMapExtent;
	
	function createMap() {
		var map = new ol.Map({
			layers: [raster],
			target: 'map',
			controls: ol.control.defaults({
				attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
					collapsible: false
				})
			}),
			view: new ol.View({
				center: [0, 0],
				zoom: 2
			})
		});
		return map;
	}
	
	function addVectorData(map) {
		var format = new ol.format.WKT();
		var feature = format.readFeature(
			'POLYGON((10.689697265625 -25.0927734375, 34.595947265625 ' +
			'-20.1708984375, 38.814697265625 -35.6396484375, 13.502197265625 ' +
			'-39.1552734375, 10.689697265625 -25.0927734375))');
		feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
		
		var vector = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: [feature]
			})
		});
		
		map.addLayer(vector);
	}
	
	function init() {
		map = createMap();
		addVectorData(map);
		addTouchCalss();
		initExportOnClick(map);
		initPrintPreviewOnClick(map);
		addTileLoadEventListeners(map, raster);
		map.once('postcompose', function (event) {
			canvas = event.context.canvas;
		});
	}
	
	function addTouchCalss() {
		if (ol.has.TOUCH) {
			$('#olCustomControls').addClass('ol-touch');
		}
	}
	
	function tileLoadEnd() {
		++loaded;
	}
	
	function exportMapImage() {
		return canvas.toDataURL('image/png');
	}
	
	function createPDF(auto) {
		var pc = printConfigs();
		var data = exportMapImage();
		var pdf = new jsPDF(pc.orientation, undefined, pc.format);
		pdf.addImage(data, 'JPEG', 0, 0, pc.dim[0], pc.dim[1]);
		if(auto) {
			pdf.autoPrint();
		}
		pdf.save('map.pdf');
	}
	
	function tileLoadStart() {
		++loading;
	}
	
	function addTileLoadEventListeners(map, raster) {
		var source = raster.getSource();
		map.once('postcompose', function (event) {
			source.on('tileloadstart', tileLoadStart);
			source.on('tileloadend', tileLoadEnd, event.context.canvas);
			source.on('tileloaderror', tileLoadEnd, event.context.canvas);
		});
	}
	
	function removeTileLoadeventListeners(raster) {
		var source = raster.getSource();
		source.un('tileloadstart', tileLoadStart);
		source.un('tileloadend', tileLoadEnd, canvas);
		source.un('tileloaderror', tileLoadEnd, canvas);
	}
	
	function initExportOnClick(map) {
		var exportButton = document.getElementById('exportPDF');
		exportButton.addEventListener('click', function (event) {
			exportOnClick(map);
		}, false);
	}
	
	function initPrintPreviewOnClick(map) {
		var printPreviewButton = document.getElementById('printPreview');
		printPreviewButton.addEventListener('click', function (event) {
			printPreviewOnClick(map);
		}, false);
	}
	
	function printConfigs() {
		var format = document.getElementById('format').value;
		var resolution = document.getElementById('resolution').value;
		var orientation = document.getElementById('orientation').value;
		var dim = dims[format];
		return {dim: dim, resolution: resolution, format: format, orientation: orientation};
	}
	
	function exportOnClick(map) {
		var exportButton = document.getElementById('exportPDF');
		var pc = printConfigs();
		var width = Math.round(pc.dim[0] * pc.resolution / 25.4);
		var height = Math.round(pc.dim[1] * pc.resolution / 25.4);
		originalMapSize = /** @type {ol.Size} */ (map.getSize());
		originalMapExtent = map.getView().calculateExtent(originalMapSize);
		exportButton.disabled = true;
		document.body.style.cursor = 'progress';
		updateMapSizeForPrint(map, width, height, originalMapExtent);
		listenToTileLoad(false);
	}
	
	function printPreviewOnClick(map) {
		var printPreviewButton = document.getElementById('printPreview');
		var pc = printConfigs();
		var width = Math.round(pc.dim[0] * pc.resolution / 25.4);
		var height = Math.round(pc.dim[1] * pc.resolution / 25.4);
		originalMapSize = /** @type {ol.Size} */ (map.getSize());
		originalMapExtent = map.getView().calculateExtent(originalMapSize);
		printPreviewButton.disabled = true;
		document.body.style.cursor = 'progress';
		updateMapSizeForPrint(map, width, height, originalMapExtent);
		listenToTileLoad(true);
	}
	
	function updateMapSizeForPrint(map, width, height, extent) {
		map.setSize([width, height]);
		map.getView().fit(extent);
		map.renderSync();
	}
	
	function resetMapSize(map, size, extent) {
		map.setSize(size);
		map.getView().fit(extent);
		map.renderSync();
	}
	
	function onTilesLoadDone(map, size, extent, auto) {
		var exportButton = document.getElementById('exportPDF');
		window.setTimeout(function () {
			loading = 0;
			loaded = 0;
			createPDF(auto);
			removeTileLoadeventListeners(raster);
			resetMapSize(map, size, extent);
			exportButton.disabled = false;
			document.body.style.cursor = 'auto';
		}, 100);
	}
	
	function listenToTileLoad(auto) {
		if (loading === loaded) {
			return onTilesLoadDone(map, originalMapSize, originalMapExtent, auto);
		}
		var interval = setInterval(function () {
			if (loading === loaded) {
				clearInterval(interval);
				interval = undefined;
				return onTilesLoadDone(map, originalMapSize, originalMapExtent, auto);
			}
		}, 1000)
	}
	
	init();
	
})(ol, jQuery, jsPDF);
