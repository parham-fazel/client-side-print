<div id="main-content" class="wiki-content">

<div class="wiki-content">

 In order to provide a better and faster printing experience, I am testing potential solutions for client side printing.

## 1- Canvas and jsPDF

This way I can provide a pdf version of the map that can printed easily.

Overall we can support all of our required browsers.

Demo:
<a href="https://rawcdn.githack.com/parham-fazel/client-side-print/master/export-pdf.html">https://rawcdn.githack.com/parham-fazel/client-side-print/master/export-pdf.html</a>

Here is the official example provided by Openlayers.[<span style="color: rgb(51,51,51);">
</span>http://openlayers.org/en/latest/examples/export-pdf.html
](http://openlayers.org/en/latest/examples/export-pdf.html)[http://rawgit.com/MrRio/jsPDF/master](http://rawgit.com/MrRio/jsPDF/master/)

## Canvas

To provide an image of current map one way to export the map content as an image.

Openlayers is using HTMLCanvas to draw map and all added layers, so exporting the image is very easy using "HTMLCanvasElement.toBlob()".

However toBlob() does not have a cross browser support and we need to use a polyfill for browsers that do not support is natively.

Native support table on desktop browsers

<div class="table-wrap">

<table style="margin-left: 30px; padding: 0px;" class="confluenceTable tablesorter tablesorter-default stickyTableHeaders" role="grid"><colgroup><col><col><col><col><col><col></colgroup>

<thead class="tableFloatingHeaderOriginal" style="position: static; margin-top: 0px; left: 355px; z-index: 3; width: 901px; top: 41px;">

<tr style="margin-left: 30.0px;" role="row" class="tablesorter-headerRow">

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Feature: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Feature</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Chrome: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Chrome</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Firefox (Gecko): No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Firefox (Gecko)</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Internet Explorer: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Internet Explorer</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Opera: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Opera</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Safari: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Safari</div>

</th>

</tr>

</thead>

<thead class="tableFloatingHeader" style="display: none;">

<tr style="margin-left: 30.0px;" role="row" class="tablesorter-headerRow">

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Feature: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Feature</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Chrome: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Chrome</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Firefox (Gecko): No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Firefox (Gecko)</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Internet Explorer: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Internet Explorer</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Opera: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Opera</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Safari: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Safari</div>

</th>

</tr>

</thead>

<tbody style="margin-left: 30.0px;" aria-live="polite" aria-relevant="all">

<tr style="margin-left: 30.0px;" role="row">

<td style="margin-left: 30.0px;" class="confluenceTd">Basic support</td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

<td style="margin-left: 30.0px;" class="confluenceTd">[19](https://developer.mozilla.org/en-US/Firefox/Releases/19 "Released on 2013-02-19.") (19)</td>

<td style="margin-left: 30.0px;" class="confluenceTd">10 [<span class="inlineIndicator prefixBox prefixBoxInline" title="prefix">[ms](https://developer.mozilla.org/en-US/docs/Web/Guide/Prefixes "The name of this feature is prefixed with 'ms' as this browser considers it experimental")]</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd">

<span style="color: rgb(255,0,0);">No support</span>

<span style="color: rgb(255,0,0);"><span style="color: rgb(59,60,64);">WebKit does not implement this feature yet. See </span>[WebKit bug 71270](https://bugs.webkit.org/show_bug.cgi?id=71270)<span style="color: rgb(59,60,64);">.</span>
</span>

</td>

</tr>

<tr style="margin-left: 30.0px;" role="row">

<td style="margin-left: 30.0px;" class="confluenceTd">Image quality parameter</td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

<td style="margin-left: 30.0px;" class="confluenceTd">[25](https://developer.mozilla.org/en-US/Firefox/Releases/25 "Released on 2013-10-29.") (25)</td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

</tr>

</tbody>

</table>

</div>

Native support on mobile browsers:

<div class="table-wrap">

<table style="margin-left: 30px; padding: 0px;" class="confluenceTable tablesorter tablesorter-default stickyTableHeaders" role="grid"><colgroup><col><col><col><col><col><col><col><col></colgroup>

<thead class="tableFloatingHeaderOriginal">

<tr style="margin-left: 30.0px;" role="row" class="tablesorter-headerRow">

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Feature: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Feature</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Android: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Android</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Android Webview: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Android Webview</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Firefox Mobile (Gecko): No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Firefox Mobile (Gecko)</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="IE Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">IE Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Opera Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Opera Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="6" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Safari Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Safari Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="7" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Chrome for Android: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Chrome for Android</div>

</th>

</tr>

</thead>

<thead class="tableFloatingHeader" style="display: none;">

<tr style="margin-left: 30.0px;" role="row" class="tablesorter-headerRow">

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Feature: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Feature</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Android: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Android</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Android Webview: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Android Webview</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Firefox Mobile (Gecko): No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Firefox Mobile (Gecko)</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="IE Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">IE Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Opera Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Opera Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="6" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Safari Mobile: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Safari Mobile</div>

</th>

<th style="text-align: left; margin-left: 30px; user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="7" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Chrome for Android: No sort applied, activate to apply an ascending sort">

<div class="tablesorter-header-inner">Chrome for Android</div>

</th>

</tr>

</thead>

<tbody style="margin-left: 30.0px;" aria-live="polite" aria-relevant="all">

<tr style="margin-left: 30.0px;" role="row">

<td style="margin-left: 30.0px;" class="confluenceTd">Basic support</td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

<td style="margin-left: 30.0px;" class="confluenceTd">19.0 (19)</td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,153,0);">?</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,153,0);">?</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

</tr>

<tr style="margin-left: 30.0px;" role="row">

<td style="margin-left: 30.0px;" class="confluenceTd">Image quality parameter</td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

<td style="margin-left: 30.0px;" class="confluenceTd">25.0 (25)</td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,153,0);">?</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,0,0);">No support</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd"><span style="color: rgb(255,153,0);">?</span></td>

<td style="margin-left: 30.0px;" class="confluenceTd">50</td>

</tr>

</tbody>

</table>

</div>

Browser support using [JavaScript-Canvas-to-Blob](https://github.com/blueimp/JavaScript-Canvas-to-Blob) polyfill.

### Desktop browsers

*   *   Google Chrome (see [Chromium issue #67587](https://code.google.com/p/chromium/issues/detail?id=67587))
    *   Apple Safari 6.0+ (see [Mozilla issue #648610](https://bugzilla.mozilla.org/show_bug.cgi?id=648610))
    *   Mozilla Firefox 4.0+
    *   Microsoft Internet Explorer 10.0+

### Mobile browsers

*   *   Apple Safari Mobile on iOS 6.0+
    *   Google Chrome on iOS 6.0+
    *   Google Chrome on Android 4.0+

* * *

## jsPDF

<span style="color: rgb(36,41,46);">A library to generate PDFs in client-side JavaScript.
[https://github.com/MrRio/jsPDF](https://github.com/MrRio/jsPDF)</span>

### Pros:

*   *   Reliable printing across browsers
    *   Nice abstraction over client side pdf generation
    *   **autoPrint** function to open browser print preview as soon as pdf is ready.
    *   Handle different print sizes and orientations. (eg: a4, a5, landscape, portrait)
    *   Project is backed buy a company and is relatively active

### Cons:

*   *   You need to position elements on a pixel basis. Similar to absolute position is css
        jsPDF offers a custom renderer that in theory can print your html as it is but needs more testing.
    *   <span>UTF-8 is </span>_not_<span> supported by default, however there might be some plugins allowing you to use it, such as </span>_addHTML_
    *   _<span>Current build does not have IE6-9 shim enabled</span>
        _

## Browser Compatibility

jsPDF will work in IE6+*, Firefox 3+, Chrome, Safari 3+, Opera. For IE9 and below, we lazily load a Flash shim called Downloadify which enables the files to be downloaded.

_<span>
</span>_

</div>

</div>
