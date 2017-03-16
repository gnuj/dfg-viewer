plugin.tx_dlf.useragent = {$plugin.tx_dfgviewer.useragent}

# map GET parameter set[mets] --> tx_dlf[id]
[globalString = GP:set|mets = http*]
plugin.tx_dlf._DEFAULT_PI_VARS.id.stdWrap.data = GP:set|mets
[global]
# map GET parameter set[image] --> tx_dlf[page]
[globalString = GP:set|image != /^$/]
plugin.tx_dlf._DEFAULT_PI_VARS.page.stdWrap.data = GP:set|image
[global]
# map GET parameter set[double] --> tx_dlf[double]
[globalVar = GP:set|double > 0]
plugin.tx_dlf._DEFAULT_PI_VARS.double.stdWrap.data = GP:set|double
[global]

plugin.tx_dlf_metadata {
	pages = {$plugin.tx_dfgviewer.storagePid}
	excludeOther = 0
	linkTitle = 0
	getTitle = 0
	showFull = 0
	rootline = 1
	separator = #
	templateFile = {$plugin.tx_dfgviewer.templateFileMeta}
}

plugin.tx_dlf_navigation {
	pages = {$plugin.tx_dfgviewer.storagePid}
	pageStep = 5
	templateFile = {$plugin.tx_dfgviewer.templateFileNav}
}

plugin.tx_dlf_pageview {
	pages = {$plugin.tx_dfgviewer.storagePid}
	excludeOther = 0
	features =
	elementId = tx-dfgviewer-map
	templateFile = {$plugin.tx_dfgviewer.templateFilePage}
}

plugin.tx_dlf_pagegrid {
	pages = {$plugin.tx_dfgviewer.storagePid}
	limit = 24
	placeholder = EXT:dfgviewer/res/images/placeholder.jpg
	targetPid = #
	templateFile = {$plugin.tx_dfgviewer.templateFileGrid}
}

plugin.tx_dlf_toc {
	pages = {$plugin.tx_dfgviewer.storagePid}
	excludeOther = 0
	targetPid.data = TSFE:page|uid
	templateFile = {$plugin.tx_dfgviewer.templateFileToc}
	menuConf {
		expAll = 0
		1 = TMENU
		1.noBlur = 1
		1.wrap = <div id="navcontainer"><div id="nav"><div id="navtop"></div><a id="skip2nav"></a><ul>|</ul><div id="navend"></div></div></div>
		1.NO = 1
		1.NO.stdWrap.crop = 55 | &nbsp;... | 1
		1.NO.stdWrap.ifEmpty.field = type
		1.NO.stdWrap.ifEmpty.append = TEXT
		1.NO.stdWrap.ifEmpty.append.fieldRequired = volume
		1.NO.stdWrap.ifEmpty.append.field = volume
		1.NO.stdWrap.ifEmpty.append.warp = &nbsp;|
		1.NO.stdWrap.dataWrap = | <span class="pagination">{field:pagination}</span>
		1.NO.doNotLinkIt.field = doNotLinkIt
		1.NO.ATagTitle.field = type
		1.NO.allWrap = <span class="a">|</span>
		1.NO.allWrap.fieldRequired = doNotLinkIt
		1.NO.wrapItemAndSub = <li>|</li>
		1.IFSUB < .1.NO
		1.IFSUB.wrapItemAndSub = <li class="submenu">|</li>
		1.CUR < .1.NO
		1.CUR.wrapItemAndSub = <li class="current">|</li>
		1.CURIFSUB < .1.NO
		1.CURIFSUB.wrapItemAndSub = <li class="current submenu">|</li>
		1.ACT < .1.NO
		1.ACT.wrapItemAndSub = <li class="active">|</li>
		1.ACTIFSUB < .1.NO
		1.ACTIFSUB.wrapItemAndSub = <li class="active submenu">|</li>
		2 < .1
		2.wrap = <ul>|</ul>
		3 < .2
		4 < .3
		5 < .4
		6 < .5
		7 < .6
	}
}

plugin.tx_dlf_toolbox {
	pages = {$plugin.tx_dfgviewer.storagePid}
	tools = tx_dlf_toolsPdf,tx_dlf_toolsFulltext,tx_dlf_toolsImagemanipulation
	templateFile = {$plugin.tx_dfgviewer.templateFileToolbox}
}

plugin.tx_dlf_toolsPdf {
	toolTemplateFile = {$plugin.tx_dfgviewer.templateFileToolPdf}
}

plugin.tx_dlf_toolsFulltext {
	toolTemplateFile = {$plugin.tx_dfgviewer.templateFileToolFulltext}
}

plugin.tx_dlf_toolsImagemanipulation {
	toolTemplateFile = {$plugin.tx_dfgviewer.templateFileToolImageManipulation}
}


plugin.tx_dlf_audioplayer {
	pages = {$plugin.tx_dfgviewer.storagePid}
	excludeOther = 0
	elementId = tx-dlf-audio
#	templateFile = {$plugin.tx_dfgviewer.templateFilePage}
}