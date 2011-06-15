// Variable for text change
var containerClass = "container";
var brandingDivId = "branding";
var cookieLogo = "logo";
var cookieLogoHeight = "logoHeight";
var cookieColor = "color";

// Text
// var closeButtonText = "Verberg pesentatie balk";
var showButtonText = "Toon pesentatie balk";
var prevButtonLogoText = "Vorige Afzender";
var nextButtonLogoText = "Volgende Afzender";
var prevButtonTemplateText = "Vorige Template";
var nextButtonTemplateText = "Volgende Template";

// CSS Class for presentation bar
var containerDiv = "pb_bar";
var colorBoxDiv = "pb_color_box";
var colorActiveDiv = "pb_selected";
var clearDiv = "pb_clear";
// var closeButtonClass = "pb_hide";
var showButtonClass = "pb_show";
var templateListClass = "pb_templates";
var colorListClass = "pb_color";
var logoListClass = "pb_logo";
var templateSelectorContainerClass = "pb_template_selector_container";
var logoSelectorContainerClass = "pb_template_selector_container";
var nextButtonClass = "pb_next";
var prevButtonClass = "pb_prev";
var imageReplacementClass = "pb_imgreplacement";
var leftClass = "left";
var rightClass = "right";

// Src
var prevButtonImgSrc = "pb/pb_arrow_left.png";
var nextButtonImgSrc = "pb/pb_arrow_right.png";

// CSS class that are need to be detected from the HTML template
var homeId = "home";
var logoContainer = "branding";
var defaultLogoHeight ="87"; // For logo

// Folder
var logoFolder = "logos/";

var JsonData = {
	"color": [
	{"clazz": "dark_brown", "title": "Donker Bruin"},
	{"clazz": "purple", "title": "Paars"},
	{"clazz": "dark_green", "title": "Donker Groen"},
	{"clazz": "ruby", "title": "Robijn"},
	{"clazz": "red", "title": "Rood"},
	{"clazz": "violet", "title": "Violet"},
	{"clazz": "moss_green", "title": "Mos Groen"},
	{"clazz": "brown", "title": "Bruin"},
	{"clazz": "green", "title": "Groen"},
	{"clazz": "azure", "title": "Azuur"},
	{"clazz": "light_blue", "title": "Licht Blauw"},
	{"clazz": "pink", "title": "Roze"},
	{"clazz": "yellow", "title": "Geel"},
	{"clazz": "dark_yellow", "title": "Donker Geel"},
	{"clazz": "mint_green", "title": "Mint Groen"},
	{"clazz": "orange", "title": "Oranje"}
	],
	"logo": [
	{"title": "Rijksoverheid", "src": "RO_Logo_Homepage.png"},
	{"title": "Jeugd en Gezin", "src": "RO_JG_Logo_Homepage.png"},
	{"title": "Jeugd en Gezin - Almata", "src": "RO_JG_AL_Logo_Homepage.png"},
	{"title": "Jeugd en Gezin - Den Engh", "src": "RO_JG_DE_Logo_Homepage.png"},
	{"title": "Jeugd en Gezin - De Lindenhorst", "src": "RO_JG_DL_Logo_Homepage.png"},
	{"title": "Inspectie Jeugdzorg", "src": "RO_JG_IJ_Logo_Homepage.png"},
	{"title": "Integraal Toezicht Jeugdzaken", "src": "RO_JG_ITJ_Logo_Homepage.png"},
	{"title": "Jeugd en Gezin - Overberg", "src": "RO_JG_OB_Logo_Homepage.png"},
	{"title": "Ministerie van Algemene Zaken", "src": "RO_AZ_Logo_Homepage.png"},
	{"title": "Agentschap NL - AZ", "src": "RO_AZ_ANL_Logo_Homepage.png"},
	{"title": "Dienst Publiek en Communicatie", "src": "RO_AZ_DPC_Logo_Homepage.png"},
	{"title": "Minister President", "src": "RO_AZ_MP_Logo_Homepage.png"},
	{"title": "Rijksvoorlichtingsdienst", "src": "RO_AZ_RVD_Logo_Homepage.png"},
	{"title": "Secretariaat Ministerraad", "src": "RO_AZ_SMR_Logo_Homepage.png"},
	{"title": "Ministerie van Binnenlandse Zaken…", "src": "RO_BZK_Logo_Homepage.png"},
	{"title": "4FM", "src": "RO_BZK_4FM_Logo_Homepage.png"},
	{"title": "Agentschap NL - BZK", "src": "RO_BZK_ANL_Logo_Homepage.png"},
	{"title": "Algemene Bestuursdienst", "src": "RO_BZK_ABD_Logo_Homepage.png"},
	{"title": "Algemene Inlichtingen- en Veiligheids…", "src": "RO_BZK_AIVD_Logo_Homepage.png", "height" : "101"},
	{"title": "Basisadministratie Persoonsgegevens…", "src": "RO_BZK_BPR_Logo_Homepage.png", "height" : "101"},
	{"title": "Centrale Archief Selectiedienst", "src": "RO_BZK_CAS_Logo_Homepage.png"},
	{"title": "De Werkmaatschappij", "src": "RO_BZK_DWM_Logo_Homepage.png"},
	{"title": "Doc Direct", "src": "RO_BZK_DD_Logo_Homepage.png"},
	{"title": "Inspectie Openbare Orde en Veiligheid", "src": "RO_BZK_IOOV_Logo_Homepage.png"},
	{"title": "Logius", "src": "RO_BZK_LG_Logo_Homepage.png"},
	{"title": "P-Direkt", "src": "RO_BZK_PD_Logo_Homepage.png"},
	{"title": "Programma Vernieuwing Rijksdienst", "src": "RO_BZK_PVR_Logo_Homepage.png"},
	{"title": "Ministerie van Buitenlandse Zaken", "src": "RO_BZ_Logo_Homepage.png"},
	{"title": "Agentschap NL - BZ", "src": "RO_BZ_ANL_Logo_Homepage.png"},
	{"title": "CBI", "src": "RO_BZ_CBIO_Logo_Homepage.png"},
	{"title": "EVD - BZ", "src": "RO_BZ_EVD_Logo_Homepage.png"},
	{"title": "Ontwikkelingssamenwerking", "src": "RO_BZ_OS_Logo_Homepage.png"},
	{"title": "SenterNovem - BZ", "src": "RO_BZ_SN_Logo_Homepage.png"},
	{"title": "Ministerie van Defensie", "src": "RO_D_Logo_Homepage.png"},
	{"title": "Agentschap NL - D", "src": "RO_D_ANL_Logo_Homepage.png"},
	{"title": "Commando Dienstencentra", "src": "RO_D_CDC_Logo_Homepage.png"},
	{"title": "Defensie Materieel Organisatie", "src": "RO_D_DMO_Logo_Homepage.png"},
	{"title": "Militaire Inlichtingen- en…", "src": "RO_D_MIVD_Logo_Homepage.png"},
	{"title": "Ministerie van Economische Zaken", "src": "RO_EZ_Logo_Homepage.png"},
	{"title": "Agentschap NL - EZ", "src": "RO_EZ_ANL_Logo_Homepage.png"},
	{"title": "Agentschap Telecom", "src": "RO_EZ_AT_Logo_Homepage.png"},
	{"title": "Consumentenautoriteit", "src": "RO_EZ_CA_Logo_Homepage.png"},
	{"title": "EVD - EZ", "src": "RO_EZ_EVD_Logo_Homepage.png"},
	{"title": "Octrooicentrum Nederland", "src": "RO_EZ_ON_Logo_Homepage.png"},
	{"title": "PIANOo", "src": "RO_EZ_PO_Logo_Homepage.png"},
	{"title": "SenterNovem - EZ", "src": "RO_EZ_SN_Logo_Homepage.png"},
	{"title": "Staatstoezicht op de Mijnen", "src": "RO_EZ_STM_Logo_Homepage.png"},
	{"title": "Ministerie van Financien", "src": "RO_F_Logo_Homepage.png"},
	{"title": "Agentschap van de Generale Thesaurie", "src": "RO_F_AGT_Logo_Homepage.png"},
	{"title": "Agentschap NL - F", "src": "RO_F_ANL_Logo_Homepage.png"},
	{"title": "Domeinen Onroerende Zaken", "src": "RO_F_DOZ_Logo_Homepage.png"},
	{"title": "Domeinen Roerende Zaken", "src": "RO_F_DRZ_Logo_Homepage.png"},
	{"title": "Raad voor Vastgoed Rijksoverheid", "src": "RO_F_RVR_Logo_Homepage.png"},
	{"title": "Rijksacademie voor Financien en…", "src": "RO_F_RFE_Logo_Homepage.png"},
	{"title": "Rijksauditdienst", "src": "RO_F_RAD_Logo_Homepage.png"},
	{"title": "Rijksvastgoed- en ontwikkelingsbedrijf", "src": "RO_F_RVO_Logo_Homepage.png"},
	{"title": "SenterNovem - F", "src": "RO_F_SN_Logo_Homepage.png"},
	{"title": "Ministerie van Justitie", "src": "RO_J_Logo_Homepage.png"},
	{"title": "Adviescollege Verloftoetsing TBS", "src": "RO_J_AVT_Logo_Homepage.png"},
	{"title": "Agentschap NL - J", "src": "RO_J_ANL_Logo_Homepage.png"},
	{"title": "Centraal Justitieel Incassobureau", "src": "RO_J_CJI_Logo_Homepage.png"},
	{"title": "Dienst Justis", "src": "RO_J_DJ_Logo_Homepage.png"},
	{"title": "Dienst Justitiele Inrichtingen", "src": "RO_J_DJI_Logo_Homepage.png"},
	{"title": "Dienst Terugkeer en Vertrek", "src": "RO_J_DTV_Logo_Homepage.png"},
	{"title": "Gemeenschappelijk Dienstencentrum ICT", "src": "RO_J_GDI_Logo_Homepage.png"},
	{"title": "Immigratie- en Naturalisatiedienst", "src": "RO_J_IND_Logo_Homepage.png"},
	{"title": "Inspectie voor de Sanctietoepassing", "src": "RO_J_IS_Logo_Homepage.png"},
	{"title": "Justitiele Informatiedienst", "src": "RO_J_JID_Logo_Homepage.png"},
	{"title": "Nederlands Forensisch Instituut", "src": "RO_J_NFI_Logo_Homepage.png"},
	{"title": "Raad voor de Kinderbescherming", "src": "RO_J_RKB_Logo_Homepage.png"},
	{"title": "Wetenschappelijk Onderzoek- en…", "src": "RO_J_WOD_Logo_Homepage.png"},
	{"title": "Ministerie van Landbouw, Natuur en…", "src": "RO_LNV_Logo_Homepage.png"},
	{"title": "Agentschap NL - LNV", "src": "RO_LNV_ANL_Logo_Homepage.png"},
	{"title": "Algemene Inspectiedienst", "src": "RO_LNV_AID_Logo_Homepage.png"},
	{"title": "Dienst ICT Uitvoering", "src": "RO_LNV_DIU_Logo_Homepage.png"},
	{"title": "Dienst Landelijk Gebied", "src": "RO_LNV_DLG_Logo_Homepage.png"},
	{"title": "Dienst Regelingen", "src": "RO_LNV_DR_Logo_Homepage.png"},
	{"title": "EVD - LNV", "src": "RO_LNV_EVD_Logo_Homepage.png"},
	{"title": "Plantenziektenkundige Dienst", "src": "RO_LNV_PZD_Logo_Homepage.png"},
	{"title": "SenterNovem - LNV", "src": "RO_LNV_SN_Logo_Homepage.png"},
	{"title": "Voedsel en Waren Autoriteit", "src": "RO_LNV_VWA_Logo_Homepage.png"},
	{"title": "Ministerie van Onderwijs, Cultuur…", "src": "RO_OCW_Logo_Homepage.png"},
	{"title": "Agentschap NL - OCW", "src": "RO_OCW_ANL_Logo_Homepage.png"},
	{"title": "CFI", "src": "RO_OCW_CFI_Logo_Homepage.png"},
	{"title": "Dienst Uitvoering Onderwijs", "src": "RO_OCW_DUO_Logo_Homepage.png"},
	{"title": "Erfgoedinspectie", "src": "RO_OCW_EI_Logo_Homepage.png"},
	{"title": "EVD - OCW", "src": "RO_OCW_EVD_Logo_Homepage.png"},
	{"title": "Informatiebeheergroep", "src": "RO_OCW_IBG_Logo_Homepage.png"},
	{"title": "Inspectie van het Onderwijs", "src": "RO_OCW_IO_Logo_Homepage.png"},
	{"title": "Instituut Collectie Nederland", "src": "RO_OCW_ICN_Logo_Homepage.png"},
	{"title": "Nationaal Archief", "src": "RO_OCW_NA_Logo_Homepage.png"},
	{"title": "Rijksarchiefdienst", "src": "RO_OCW_RAD_Logo_Homepage.png"},
	{"title": "Rijksdienst voor Archeologie…", "src": "RO_OCW_RACM_Logo_Homepage.png", "height" : "101"},
	{"title": "Rijksdienst voor het Cultureel Erfgoed", "src": "RO_OCW_RCE_Logo_Homepage.png"},
	{"title": "SenterNovem - OCW", "src": "RO_OCW_SN_Logo_Homepage.png"},
	{"title": "Ministerie van Sociale Zaken en…", "src": "RO_SZW_Logo_Homepage.png"},
	{"title": "Agentschap NL - SZW", "src": "RO_SZW_ANL_Logo_Homepage.png"},
	{"title": "Agentschap SZW", "src": "RO_SZW_ASZW_Logo_Homepage.png"},
	{"title": "Arbeidsinspectie", "src": "RO_SZW_AI_Logo_Homepage.png"},
	{"title": "Inspectie Werk en Inkomen", "src": "RO_SZW_IWI_Logo_Homepage.png"},
	{"title": "Sociale Inlichtingen- en Opsporingsdienst", "src": "RO_SZW_SIO_Logo_Homepage.png", "height" : "101"},
	{"title": "Ministerie van Verkeer en Waterstaat", "src": "RO_VW_Logo_Homepage.png"},
	{"title": "Agentschap NL - VW", "src": "RO_VW_ANL_Logo_Homepage.png"},
	{"title": "Centrum Publieksparticipatie", "src": "RO_VW_CPP_Logo_Homepage.png"},
	{"title": "Deltacommissaris", "src": "RO_VW_DC_Logo_Homepage.png"},
	{"title": "Expertisecentrum Publieksparticipatie", "src": "RO_VW_EP_Logo_Homepage.png"},
	{"title": "Inspectie Verkeer en Waterstaat", "src": "RO_VW_IVW_Logo_Homepage.png"},
	{"title": "Koninklijk Nederlands Metereologisch…", "src": "RO_VW_KNMI_Logo_Homepage.png"},
	{"title": "Rijkswaterstaat", "src": "RO_VW_RW_Logo_Homepage.png"},
	{"title": "SenterNovem - VW", "src": "RO_VW_SN_Logo_Homepage.png"},
	{"title": "Ministerie van Volksgezondheid…", "src": "RO_VWS_Logo_Homepage.png"},
	{"title": "Agentschap NL - VWS", "src": "RO_VWS_ANL_Logo_Homepage.png"},
	{"title": "CIBG", "src": "RO_VWS_CIBG_Logo_Homepage.png"},
	{"title": "Donorregister", "src": "RO_VWS_DR_Logo_Homepage.png"},
	{"title": "Inspectie voor de Gezondheidszorg", "src": "RO_VWS_IG_Logo_Homepage.png"},
	{"title": "Nederlands Vaccin Instituut", "src": "RO_VWS_NVI_Logo_Homepage.png"},
	{"title": "Rijksinstituur voor Volksgezondheid en…", "src": "RO_VWS_RIVM_Logo_Homepage.png", "height" : "101"},
	{"title": "Tuchtcolleges voor de Gezondheidszorg", "src": "RO_VWS_TG_Logo_Homepage.png", "height" : "101"},
	{"title": "Ministerie van Volkshuisvesting…", "src": "RO_VROM_Logo_Homepage.png"},
	{"title": "Agentschap NL - VROM", "src": "RO_VROM_ANL_Logo_Homepage.png"},
	{"title": "EVD - VROM", "src": "RO_VROM_EVD_Logo_Homepage.png"},
	{"title": "Rijksgebouwendienst", "src": "RO_VROM_RGD_Logo_Homepage.png"},
	{"title": "Ruimte en Milieu", "src": "RO_VROM_RM_Logo_Homepage.png"},
	{"title": "SenterNovem - VROM", "src": "RO_VROM_SN_Logo_Homepage.png"},
	{"title": "VROM Inspectie", "src": "RO_VROM_VI_Logo_Homepage.png"},
	{"title": "Wonen, Wijken en Integratie", "src": "RO_VROM_WWI_Logo_Homepage.png"},
	{"title": "Belastingdienst", "src": "RO_BD_Logo_Homepage.png"},
	{"title": "Centraal Planbureau", "src": "RO_CP_Logo_Homepage.png"},
	{"title": "College voor Examens", "src": "RO_CVE_Logo_Homepage.png"},
	{"title": "Koninkrijk der Nederlanden", "src": "RO_KN_Logo_Homepage.png"},
	{"title": "Nationaal Coordinator Terrorisme…", "src": "RO_NCTB_Logo_Homepage.png"},
	{"title": "Nationaal Rapporteur Mensenhandel", "src": "RO_NRM_Logo_Homepage.png"},
	{"title": "Openbaar Ministerie", "src": "RO_OM_Logo_Homepage.png"},
	{"title": "Planbureau voor de Leefomgeving", "src": "RO_PL_Logo_Homepage.png"},
	{"title": "Postbus 51", "src": "RO_P51_Logo_Homepage.png"},
	{"title": "Sociaal en Cultureel Planbureau", "src": "RO_SCP_Logo_Homepage.png"}
	],
	"template": [
	{"title": "Basis template", "uri": "basis_template.html"},
	{"title": "Template pagina (basis)", "uri": "template_1.html"},
	{"title": "Template pagina (titelbalk)", "uri": "template_2.html"},
	{"title": "Template pagina (content)", "uri": "template_3.html"},
	{"title": "Grids pagina", "uri": "grids.html"},
	{"title": "Module: &lsquo;banner&rsquo;", "uri": "mod_banner.html"},
	{"title": "Module: &lsquo;box&rsquo;", "uri": "mod_box.html"},
	{"title": "Module: &lsquo;visual&rsquo;", "uri": "mod_visual.html"},
	{"title": "Module: &lsquo;error&rsquo;", "uri": "mod_error.html"},
	{"title": "Homepagina (met tong)", "uri": "home_1.html"},
	{"title": "Homepagina (zonder tong)", "uri": "home_2.html"},
	{"title": "Homepagina (variant)", "uri": "home_3.html"},
	{"title": "Homepagina (nieuws blok)", "uri": "home_4.html"},
	{"title": "Homepagina (voorbeeld congres)", "uri": "home_5.html"},
	{"title": "Content (basis elementen)", "uri": "content_1.html"},
	{"title": "Content (eenvoudig formulier)", "uri": "content_2.html"},
	{"title": "Content (tabel)", "uri": "content_3.html"},
	{"title": "Content (tabel breed)", "uri": "content_4.html"},
	{"title": "Content (geen subnavigatie)", "uri": "content_5.html"},
	{"title": "Content (&lsquo;poll&rsquo; module)", "uri": "content_6.html"},
	{"title": "Content (lijstpagina)", "uri": "content_7.html"},
	{"title": "Content (functionele links)", "uri": "content_8.html"},
	{"title": "Zoekresultaten 1", "uri": "zoekresultaten_1.html"},
	{"title": "Zoekresultaten 1 (breed)", "uri": "zoekresultaten_2.html"},
	{"title": "Sitemap", "uri": "sitemap.html"},
	{"title": "Login pagina", "uri": "login.html"}
	]
};

$(document).ready(function(){
	constructTopBar();
	//$(".pb_logo option").tsort();
});

function changeLogo(logo_url, logo_alt, logo_height){
	var img = null;
	img = $("." + logoContainer).find('img');
	if(img)
	$(img).attr("src", logoFolder + logo_url);
	$(img).attr("alt", logo_alt);
	if (logo_height) {
		$(img).attr("height", logo_height);
	} else {
		$(img).attr("height", defaultLogoHeight);
	}
}

function sortByTitleAscending(obj1, obj2) {
	if (obj1.title > obj2.title) {
		return 1;
	} else if (obj1.title < obj2.title)    {
		return -1;
	}
	return 0;
}

function changeColor(selectedClass){
	for (i = 0; i < JsonData.color.length; i++) {
		$("." + containerClass).removeClass(JsonData.color[i].clazz);
	}
	$("." + containerClass).addClass(selectedClass);
}

function redirectToTemplate(template_url){
	window.location.href = template_url;
}

function detectCurrentTemplate(){
	var uri = window.location.href;
	var fileName = null;
	if (uri) {
		var uri_array = uri.split('/');
		fileName = uri_array[uri_array.length - 1];
	}
	return fileName;
}

function constructTopBar(){

	// Construct Container
	var container = document.createElement('div');
	$(container).addClass(containerDiv);
	var topBar = document.createElement('div');
	$(topBar).css("display", "block");

	// Construct Close Button : When clicked the topBar will be sliding up
//	var closeButton = document.createElement('li');
//	var closeButtonA = document.createElement('a');
//	$(closeButtonA).addClass(closeButtonClass).attr("title", closeButtonText);
//	closeButtonA.innerHTML = closeButtonText;
//	$(closeButtonA).click(function(event){
//		$(topBar).slideUp("fast", function(){
//			$(showButton).insertBefore(topBar);
//		});
//	});
//	closeButton.appendChild(closeButtonA);

	// Construct showAgain button : When clicked the topBar will be shown again
	var showButton = document.createElement("ul");
	$(showButton).addClass(showButtonClass);
	var showButtonLi = document.createElement("li");
	var showButtonA = document.createElement('a');
	$(showButtonA).addClass(showButtonClass).attr("title", showButtonText);
	showButtonA.innerHTML = showButtonText;
	$(showButtonA).click(function(event){
		$(topBar).slideDown();
		container.removeChild(showButton);
	});
	showButtonLi.appendChild(showButtonA);
	showButton.appendChild(showButtonLi);


	// ------------- \\
	// LOGO SELECTOR \\
	// ------------- \\

	// Check if there is an image that contain default fileName (auto select)
	var img = $("." + brandingDivId).find('img');
	if (0 != img.length) {
		var src = img[0].src;
		var src_array = src.split('/');
		var fileName = src_array[src_array.length - 1];
	}
	var cookieLogoSrc = $.cookie(cookieLogo);

	// Construct fieldset container for logo selector
	var fieldSetRight = document.createElement("ul");
	$(fieldSetRight).addClass(logoListClass).addClass(rightClass);

	// Construct previous button for logo
	var prevButton = document.createElement("li");
	$(prevButton).addClass(prevButtonClass);
	var prevButtonA = document.createElement("a");
	$(prevButtonA).attr("title", prevButtonLogoText);
	var prevButtonLogoImg = document.createElement("img");
	$(prevButtonLogoImg).attr({
		"src": prevButtonImgSrc,
		"alt": prevButtonLogoText
	});
	prevButtonA.appendChild(prevButtonLogoImg);
	prevButton.appendChild(prevButtonA);

	// Construct selector for logo
	var logoSelector = document.createElement("li");
	var logoSelectorSelect = document.createElement("select");

	// Sort JSON for logo
	JsonData.logo.sort(sortByTitleAscending);

	var prevLogoFirstChar = null;

	for(i=0; i < JsonData.logo.length ;i++){
		// Fill the option for Logo
		var logo = document.createElement("option");
		var logo_title = JsonData.logo[i].title;
		var logo_height = JsonData.logo[i].height;
		if (logo_height) {
			logo.value = JsonData.logo[i].src + "," + logo_height;
		} else {
			logo.value= JsonData.logo[i].src;
		}
		logo.innerHTML = logo_title;
		var logoSrc = JsonData.logo[i].src;

		// Default logo selector (cookie and html)
		if (cookieLogoSrc) {
			if (cookieLogoSrc.toLowerCase() == logoSrc.toLowerCase()) {
				logo.selected = true;
				if (logo_height) {
					changeLogo(logoSrc, logo_title, logo_height);
				} else {
					changeLogo(logoSrc, logo_title, null);
				}
			}
		}
		else {
			if (0 != img.length) {
				if (fileName.toLowerCase() == logoSrc.toLowerCase()) {
					logo.selected = true;
				}
			}
		}

		var firstCharCurrent = logo_title.charAt(0);
		// Listing JSON with alphabetical order
		if((prevLogoFirstChar == null) || (prevLogoFirstChar != firstCharCurrent)){
			var logoOptGroup = document.createElement("optgroup");
			logoOptGroup.label = firstCharCurrent;
		}

		if (logoOptGroup) logoOptGroup.appendChild(logo);

		prevLogoFirstChar = firstCharCurrent;
		logoSelectorSelect.appendChild(logoOptGroup);
	}
	logoSelector.appendChild(logoSelectorSelect);

	// Construct Next Button
	var nextButton = document.createElement("li");
	$(nextButton).addClass(nextButtonClass);
	var nextButtonA = document.createElement("a");
	$(nextButtonA).attr("title", nextButtonLogoText);
	var nextButtonLogoImg = document.createElement("img");
	$(nextButtonLogoImg).attr({
		"src": nextButtonImgSrc,
		"alt": nextButtonLogoText
	});
	nextButtonA.appendChild(nextButtonLogoImg);
	nextButton.appendChild(nextButtonA);

	// Attach functionality to the previous/next button
	toggleButton(logoSelectorSelect,nextButtonA,prevButtonA);
	$(nextButtonA).click(function() {
		logoSelectorSelect.selectedIndex = logoSelectorSelect.selectedIndex + 1;
		changeLogoImg(logoSelectorSelect);
		toggleButton(logoSelectorSelect,nextButtonA,prevButtonA);
	});
	$(prevButtonA).click(function() {
		logoSelectorSelect.selectedIndex = logoSelectorSelect.selectedIndex - 1;
		changeLogoImg(logoSelectorSelect);
		toggleButton(logoSelectorSelect,nextButtonA,prevButtonA);
	});

	$(logoSelectorSelect).change(function() {
		changeLogoImg(logoSelectorSelect);
		toggleButton(logoSelectorSelect,nextButtonA,prevButtonA);
	});

	// Change logo when the select option is changed
	function changeLogoImg(select){
		var selected = $(select).find("option:selected");

		var logo_attr = $(selected).attr("value");
		var logo_attr_array = logo_attr.split(',');

		var logo_value = logo_attr_array[0];
		var logo_height = logo_attr_array[1];

		if (logo_height) {
			changeLogo(logo_value, selected.text(), logo_height);
			$.cookie(cookieLogoHeight, logo_height);
		} else {
			changeLogo(logo_value, selected.text(), null);
		}
		$.cookie(cookieLogo, logo_value);
	}

	// ----------------- \\
	// PREV/NEXT BUTTONS \\
	// ----------------- \\

	// Display/Hide prev/next button only when needed
	function toggleButton(select, nextButtonA, prevButtonA){
		if (select.selectedIndex > 0) {
			$(prevButtonA).css("display","");
		} else {
			$(prevButtonA).css("display","none");
		}
		if (select.selectedIndex + 1 < select.options.length) {
			$(nextButtonA).css("display","");
		} else {
			$(nextButtonA).css("display","none");
		}
	}

	// ----------------- \\
	// TEMPLATE SELECTOR \\
	// ----------------- \\

	// Construct FieldSet for Template Selector
	var fieldSetLeft = document.createElement("ul");
	$(fieldSetLeft).addClass(templateListClass).addClass(leftClass);

	// Construct Prev Button
	var prevButtonTemplate = document.createElement("li");
	$(prevButtonTemplate).addClass(prevButtonClass);
	var prevButtonTemplateA = document.createElement("a");
	$(prevButtonTemplateA).attr("title", prevButtonTemplateText);
	var prevButtonTemplateImg = document.createElement("img");
	$(prevButtonTemplateImg).attr({
		"src": prevButtonImgSrc,
		"alt": prevButtonTemplateText
	});
	prevButtonTemplateA.appendChild(prevButtonTemplateImg);
	prevButtonTemplate.appendChild(prevButtonTemplateA);

	// Detect the name of current template
	var currentTemplateUri = detectCurrentTemplate();

	// Construct selector for template
	var templateSelector = document.createElement("li");
	var templateSelectorSelect = document.createElement("select");
	for(i=0; i < JsonData.template.length ;i++){
		// Fill the option for Logo
		var template = document.createElement("option");
		var templateUri = JsonData.template[i].uri;
		template.innerHTML = JsonData.template[i].title;
		template.value= templateUri;
		templateSelectorSelect.appendChild(template);

		// Default template selector (cookie and html)
		if (currentTemplateUri) {
			if (currentTemplateUri.toLowerCase() == templateUri.toLowerCase()) {
				template.selected = true;
			}
		}
	}
	templateSelector.appendChild(templateSelectorSelect);

	// Next Button
	var nextButtonTemplate = document.createElement("li");
	$(nextButtonTemplate).addClass(nextButtonClass);
	var nextButtonTemplateA = document.createElement("a");
	$(nextButtonTemplateA).attr("title", nextButtonTemplateText);
	var nextButtonTemplateImg = document.createElement("img");
	$(nextButtonTemplateImg).attr({
		"src": nextButtonImgSrc,
		"alt": nextButtonTemplateText
	});
	nextButtonTemplateA.appendChild(nextButtonTemplateImg);
	nextButtonTemplate.appendChild(nextButtonTemplateA);

	toggleButton(templateSelectorSelect,nextButtonTemplateA,prevButtonTemplateA);
	$(nextButtonTemplateA).click(function() {
		templateSelectorSelect.selectedIndex = templateSelectorSelect.selectedIndex + 1;
		changeTemplate(templateSelectorSelect);
		toggleButton(templateSelectorSelect,nextButtonTemplateA,prevButtonTemplateA);
	});
	$(prevButtonTemplateA).click(function() {
		templateSelectorSelect.selectedIndex = templateSelectorSelect.selectedIndex - 1;
		changeTemplate(templateSelectorSelect);
		toggleButton(templateSelectorSelect,nextButtonTemplateA,prevButtonTemplateA);
	});

	$(templateSelectorSelect).change(function() {
		changeTemplate(templateSelectorSelect);
		toggleButton(templateSelectorSelect,nextButtonTemplateA,prevButtonTemplateA);
	});

	function changeTemplate(select){
		var selectedTemplate = $(select).find("option:selected");
		redirectToTemplate(selectedTemplate.val());
	}

	// -------------- \\
	// COLOR SELECTOR \\
	// -------------- \\

	var cookieColorClass = $.cookie(cookieColor);
	if (cookieColorClass) {
		for (i = 0; i < JsonData.color.length; i++) {
			$("." + containerClass).removeClass(JsonData.color[i].clazz);
		}
	}

	// Construct divs for color
	var colorSelector = document.createElement("ul");
	$(colorSelector).addClass(colorListClass).addClass(rightClass);
	for(i=0; i < JsonData.color.length ;i++){
		// Fill the option for color
		var colorList = document.createElement("li");
		var colorContainer = document.createElement("a");
		var clazz = JsonData.color[i].clazz;
		$(colorContainer).addClass(clazz);
		$(colorContainer).attr("title", JsonData.color[i].title);

		// Append to the body
		colorList.appendChild(colorContainer);
		colorSelector.appendChild(colorList);

		// Set default Color
		if(cookieColorClass){
			if(clazz == cookieColorClass){
				$(colorContainer).addClass(colorActiveDiv);
				$("." + containerClass).addClass(clazz);
			}
		} else {
			if($("." + containerClass).hasClass(clazz)){
				$(colorContainer).addClass(colorActiveDiv);
			}
		}

		$(colorContainer).click(function() {
			$("." + colorListClass ).find("a").removeClass(colorActiveDiv);
			$(this).addClass(colorActiveDiv);
			var color_class = $(this).attr("class");
			var color_class_array = color_class.split(" ");
			var container_color = color_class_array[0]; // because pb_active is placed in the last
			changeColor(container_color);
			$.cookie(cookieColor, container_color);
		});

	}

	// Append template Selector
	fieldSetLeft.appendChild(prevButtonTemplate);
	fieldSetLeft.appendChild(templateSelector);
	fieldSetLeft.appendChild(nextButtonTemplate);
	topBar.appendChild(fieldSetLeft);

	// Append logo Selector (uncomment to re-add the logo selector to the ‘Presentation Bar’)
//	fieldSetRight.appendChild(prevButton);
//	fieldSetRight.appendChild(logoSelector);
//	fieldSetRight.appendChild(nextButton);
//	topBar.appendChild(fieldSetRight);

	// Append color Selector
	topBar.appendChild(colorSelector);

	// Append close Button
	// fieldSetRight.appendChild(closeButton);

	container.appendChild(topBar);
	document.body.appendChild(container);
}