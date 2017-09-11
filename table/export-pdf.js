(function ($, jsPDF) {
	
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
	
	function init() {
		initExportOnClick();
	}
	
	function createPDF() {
		
		var pc = printConfigs();
		var doc = new jsPDF(pc.orientation, undefined, pc.format);
		doc.text("FishOnline NoticeBoard - For Sale & Trade", 5, 16);
		var elem = document.getElementById("printableTable");
		var res = doc.autoTableHtmlToJson(elem);
		doc.autoTable(res.columns, res.data, {
			startY: 20,
			margin: {horizontal: 5},
			// styles: {columnWidth: 'wrap'},
			styles: {overflow: 'linebreak'},
			columnStyles: {text: {columnWidth: 'auto'}}
		});
		doc.save('table.pdf');
		var printPreviewButton = document.getElementById('exportPDF');
		printPreviewButton.disabled = false;
		document.body.style.cursor = 'auto';
		
	}
	
	function initExportOnClick() {
		var exportButton = document.getElementById('exportPDF');
		exportButton.addEventListener('click', function (event) {
			exportOnClick();
		}, false);
	}
	
	function initPrintPreviewOnClick() {
		var printPreviewButton = document.getElementById('printPreview');
		printPreviewButton.addEventListener('click', function (event) {
			printPreviewOnClick();
		}, false);
	}
	
	function printConfigs() {
		var format = document.getElementById('format').value;
		var resolution = document.getElementById('resolution').value;
		var orientation = document.getElementById('orientation').value;
		var dim = dims[format];
		return {dim: dim, resolution: resolution, format: format, orientation: orientation};
	}
	
	function exportOnClick() {
		var exportButton = document.getElementById('exportPDF');
		var pc = printConfigs();
		var width = Math.round(pc.dim[0] * pc.resolution / 25.4);
		var height = Math.round(pc.dim[1] * pc.resolution / 25.4);
		exportButton.disabled = true;
		document.body.style.cursor = 'progress';
		createPDF();
	}
	
	function printPreviewOnClick() {
		var printPreviewButton = document.getElementById('printPreview');
		var pc = printConfigs();
		var width = Math.round(pc.dim[0] * pc.resolution / 25.4);
		var height = Math.round(pc.dim[1] * pc.resolution / 25.4);
		printPreviewButton.disabled = true;
		document.body.style.cursor = 'progress';
	}
	
	init();
	
})(jQuery, jsPDF);
