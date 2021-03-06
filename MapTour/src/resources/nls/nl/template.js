﻿define(
({
		viewer: {
			loading: {
				step1: "APPLICATIE LADEN",
				step2: "GEGEVENS LADEN",
				step3: "DE TOUR INITIALISEREN",
				fail: "De Kaart Tour kon niet worden geladen",
				failButton: "Opnieuw proberen"
			},
			errors: {
				boxTitle: "Er is een fout opgetreden",
				invalidConfig: "Onherstelbare fout: ongeldige configuratie",
				invalidConfigOwner: "Onherstelbare fout: ongeldige configuratie (gemachtigde eigenaar vereist)",
				invalidConfigNoWebmap: "Onherstelbare fout: ongeldige configuratie (webmap en gemachtigde eigenaar vereist)",
				createMap: "Kan kaart niet maken",
				invalidApp: "Onherstelbare fout: de applicatie kan niet worden geladen",
				noLayer: "De webmap bevat geen geldige gegevenslaag voor de Kaart Tour.",
				noLayerNoHostedFS: "De webmap bevat geen geldige gegevenslaag voor Kaart Tour en u beschikt niet over de vereiste machtigingen om een gehoste featureservice te maken.",
				noLayerMobile: "Welkom bij de webapplicatie Kaart Tour. De applicatie is niet geconfigureerd. De builder voor de Kaart Tour wordt niet ondersteund op mobiele apparaten.",
				noLayerView: "Welkom bij de webapplicatie Kaart Tour.<br />De applicatie is nog niet geconfigureerd.",
				noBuilderWebmapData: "De Kaart Tour-builder wordt niet ondersteund op in een webmap ingebedde gegevens. Om de builder te gebruiken, moet u een featureservice gebruiken. Om uw eigenlijke gegevenslaag te gebruiken, moet u de downloadbare versie van de Kaart Tour gebruiken.",
				appSave: "Fout bij het opslaan van de webapplicatie",
				mapSave: "Fout bij het opslaan van de webmap",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "U bent niet gemachtigd om deze applicatie te configureren",
				oldBrowserTitle: "Browser niet volledig ondersteund",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "De Kaart Tour-builder wordt niet ondersteund op Internet Explorer 10 op Windows 7. U moet <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>de documentmodus handmatig forceren volgens Internet Explorer 9-standaarden</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>downgraden naar Internet Explorer 9</a> of upgraden naar Windows 8.",
				oldBrowserExplain: "Deze browser biedt geen ondersteuning voor de automatische generatie van miniaturen vanaf afbeeldingen die u in uw kaart tour uploadt. U kunt een kaart tour maken met behulp van deze browser, maar u moet een afzonderlijke miniatuurafbeelding opgeven voor elk van de afbeeldingen die u uploadt.",
				oldBrowserExplain2: "Voor een betere ervaring voert u een <a href='http://browsehappy.com/' target='_blank'>upgrade van uw browser</a> uit of <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>activeert u Google Chrome Frame voor Internet Explorer</a>.",
				oldBrowserClose: "Sluiten"
			},
			mobileHTML: {
				showIntro: "INLEIDING WEERGEVEN",
				hideIntro: "INLEIDING VERBERGEN",
				navList: "Lijst",
				navMap: "Kaart",
				navInfo: "Info"
			},
			desktopHTML: {
				storymapsText: "Een kaartverhaal",
				builderButton: "Omschakelen naar buildermodus"
			},
			builderHTML: {
				panelHeader: "APPLICATIECONFIGURATIE",
				buttonSave: "OPSLAAN",
				buttonDiscard: "ANNULEREN",
				buttonSettings: "Instellingen",
				buttonView: "Weergavemodus",
				buttonOrganize: "Rangschikken",
				buttonAdd: "Toevoegen",
				modalCancel: "Annuleren",
				modalApply: "Toepassen",
				organizeHeader: "De tour rangschikken",
				organizeGeneralCaption: "Gebruik slepen en neerzetten om de punten op de tour te sorteren",
				organizeDelete: "Verwijderen",
				organizeHide: "Verbergen",
				addMaxPointReached: "U hebt het maximumaantal punten bereikt dat door de pictogrammenset is toegestaan en u kunt geen extra punt op de tour toevoegen.<br /><br />Als u bestaande punten verwijdert, moet u de applicatie opnieuw laden.",
				addMaxPointReachedMobile: "Het maximaal toegestane aantal punten is bereikt, u kunt deze afbeelding niet toevoegen.",
				addClose: "Sluiten",
				addHeader: "Een nieuw punt op de tour toevoegen",
				addTabPicture: "Afbeelding",
				addTabInformation: "Informatie",
				addTabLocation: "Locatie",
				addSelectCaption: "Afbeelding selecteren of neerzetten",
				addSelectCaptionNoFileReader: "Afbeelding selecteren",
				addChangePhoto: "Afbeelding en miniatuur wijzigen",
				addPictureResolutionIntro: "De resolutie van de afbeelding is hoger dan vereist:",
				addPictureResolutionOldBrowser: "De resolutie van de afbeelding is hoger dan vereist. Optimaliseer de Kaart Tour door een lagere resolutie dan %RECOMMENDED_RES% op te geven.",
				addPictureResolutionResize: "Resolutie van afbeelding wijzigen in %RESOLUTION%",
				addPictureResolutionKeep: "De originele resolutie van %RESOLUTION% behouden",
				addSelectThumbnail: "Miniatuur selecteren",
				addNoThumbSelected: "Geen miniatuur geselecteerd",
				addThumbSelected: "Geselecteerd",
				addCameraSettingsHeader: "CAMERA-INSTELLINGEN",
				addThumbnailHeader: "MINIATUUR",
				addLabelName: "Naam",
				addLabelDescription: "Bijschrift",
				addTextPlaceholder: "Typ iets",
				addLocatePlaceholder: "Zoek naar een adres of plaats",
				addPinColor: "Kleur",
				addLatitude: "Breedtegraad",
				addLongitude: "Lengtegraad",
				addLatitudePlaceholder: "bv. 34.056",
				addLongitudePlaceholder: "bv. -117.195",
				addUploading: "Punt op de tour uploaden",
				addSave: "Punt op de tour toevoegen",
				addMobileUploading: "Afbeelding uploaden",
				addMobileName: "Voer een naam in",
				addMobileNameMandatory: "Fout. Voer een naam in.",
				addMobileError: "Er is een fout opgetreden",
				settingsHeader: "Applicatie-instellingen",
				settingsTabLayout: "Lay-out",
				settingsTabColor: "Kleuren",
				settingsTabLogo: "Koptekst",
				settingsTabFields: "Gegevens",
				settingsTabExtent: "Extent",
				settingsTabZoom: "Zoomniveau",
				settingsLayoutExplain: "Selecteer de applicatielay-out in de twee opgegeven opties.",
				settingsLayoutProfessional: "Lay-out met drie deelvensters",
				settingsLayoutModern: "Geïntegreerde lay-out",
				settingsLayoutSelected: "Geselecteerde lay-out",
				settingsLayoutSelect: "Selecteer deze lay-out",
				settingsColorExplain: "Verander het uiterlijk door een vooraf gedefinieerd thema te kiezen of door uw eigen thema te kiezen.",
				settingsLabelColor: "Kleuren van koptekst, inhoud en voettekst",
				settingsLogoExplain: "Pas het logo van de koptekst aan (het maximum is 250 x 50px).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Geen logo",
				settingsLogoCustom: "Aangepast logo",
				settingsLogoCustomPlaceholder: "Afbeeldings-URL",
				settingsLogoCustomTargetPlaceholder: "Doorklikkoppeling",
				settingsLogoSocialExplain: "Pas de koppeling in de rechterbovenhoek van de koptekst aan.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Koppeling",
				settingsDataFieldsExplain: "Selecteer de velden voor de naam van de foto, het bijschrift en de kleur.",
				settingsDataFieldsError: "De applicatie kan de juiste gegevens voor de naam, het bijschrift en de kleur niet bepalen. Selecteer de velden die hier moeten worden gebruikt. Deze instellingen kunnen later worden gewijzigd.",
				settingsFieldsLabelName: "Naam",
				settingsFieldsLabelDescription: "Bijschrift",
				settingsFieldsLabelColor: "Kleur",
				settingsExtentExplain: "Stel het oorspronkelijke extent van de Kaart Tour in op de onderstaande interactieve kaart.",
				settingsExtentExplainBottom: "Dit extent wordt alleen gebruikt als het het eerste punt op de tour opneemt. De waarde wordt aangehouden voor het oorspronkelijke extent van de webmap.",
				settingsExtentDrawBtn: "Een nieuw extent tekenen",
				settingsExtentModifyBtn: "Het huidige extent bewerken",
				settingsExtentApplyBtn: "Toepassen op hoofdkaart",
				settingsZoomExplain: "Stel het zoomniveau in voor de verhaalpunten volgens de inleiding (optioneel).",
				settingsLabelZoom: "Schaal/niveau",
				settingsZoomFirstValue: "Geen",
				settingsFieldError : "Selecteer een veld in elke lijst",
				dataHeader: "Applicatiegegevens",
				dataExplain: "Uw webmap bevat geen featureservice. Voltooi dit dialoogvenster om een gehoste featureservice in uw ArcGIS.com-organisatieaccount te maken. De featureservice wordt aan uw webmap toegevoegd en openbaar gedeeld, maar u alleen beschikt over machtigingen voor toevoegen, bewerken en verwijderen.<br /><br />De applicatie is alleen zichtbaar voor u totdat u deze met anderen deelt. <strong>Zodra uw Kaart Tour gereed is, deelt u de applicatie op de itempagina.</strong>",
				dataNameLbl: "Servicenaam",
				dataFolderListLbl: "Map",
				dataFolderListFetching: "Mappen ophalen...",
				dataRootFolder: "Hoofdmap",
				dataNameError: "Voer een naam in voor de featureservice",
				dataFolderError: "Selecteer een geldige map",
				dataSrcContainsInvalidChar: "De naam van de featureservice bevat een of meer ongeldige tekens (<, >, #, %, :, \", ?, &, +, /, of \).",
				dataSrvAlreadyExistsError: "Er bestaat al een service met deze naam in de organisaties. Kies een andere naam.",
				dataBtnClose: "De tour annuleren",
				dataBtnSave: "De service maken",
				dataFooterProgress: "Wordt gemaakt",
				dataFooterSucceed: "Het maken is gelukt. Bezig met laden",
				dataFooterError: "Het maken is mislukt. Probeer het opnieuw",
				tabError: "Controleer alle tabbladen op fouten",
				introRecordBtn: "Inleiding",
				introRecordActivate: "Gebruik het eerste punt als een inleiding"
			},
			addPopupJS: {
				uploadingPicture: "Afbeelding uploaden",
				uploadSuccess: "Uploaden gelukt",
				uploadError: "Fout bij het uploaden van de afbeelding",
				notJpg: "Kies een JPEG-foto om te uploaden",
				errorNoPhoto: "Kies een afbeelding om te uploaden",
				errorNoThumbnail: "Kies een miniatuur om te uploaden",
				errorNoName: "Voer een naam in voor dit punt van de tour",
				errorNoDescription: "Voer een bijschrift in voor dit punt van de tour",
				errorNoLocation: "Selecteer een locatie voor dit punt van de tour"
			},
			builderJS: {
				noPendingChange: "Geen wijziging in behandeling",
				unSavedChangeSingular: "1 niet-opgeslagen wijziging",
				unSavedChangePlural: "niet-opgeslagen wijzigingen",
				popoverDiscard: "Weet u zeker dat u eventuele niet-opgeslagen wijzigingen wilt negeren?",
				yes: "Ja",
				no: "Nee",
				popoverLoseSave: "Door de viewer te openen gaan eventuele niet-opgeslagen wijzigingen verloren",
				ok: "OK",
				popoverSaveWhenDone: "Vergeet uw werk niet op te slaan wanneer u klaar bent",
				closeWithPendingChange: "Weet u zeker dat u de actie wilt bevestigen? Uw wijzigingen gaan verloren.",
				gotIt: "OK",
				savingApplication: "Applicatie opslaan",
				saveSuccess: "Applicatie opgeslagen",
				saveError: "Opslaan mislukt, probeer het opnieuw",
				dragColorPicker: "Wijzig mijn positie<br />of verander mijn kleur",
				dataWarningExtent: "U beschikt over gegevens buiten het webmapextent. Deze gegevens worden niet gebruikt als punten voor de tour. Wijzig het kaartextent als u deze toch wilt gebruiken.",
				dataWarningVisibi: "Uw laag Kaart Tour is niet zichtbaar op het huidige webmapextent. Controleer of uw laag Kaart Tour zichtbaar is met een kaart die %MAPSIZE% groot is.",
				dataWarningEdit: "Webmap bewerken",
				dataWarningClose: "Sluiten",
				signIn: "Meld u aan met een account op",
				signInTwo: "om de applicatie op te slaan."
			},
			organizePopupJS: {
				messageStart: "U hebt gekozen om het volgende te verwijderen",
				messageSinglePoint: "één punt van de tour",
				messageMultiPoint: "punten van de tour",
				messagePermantRemove: "Hiermee verwijdert u permanent",
				messageRecord: "record",
				messageRecordPlural: "records",
				messageConfirm: "uit uw database. Wilt u doorgaan?",
				labelButtonShow: "Weergeven",
				labelButtonHide: "Verbergen"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "Afbeelding en miniatuur uploaden",
				popoverUploadingThumbnail: "Miniatuur uploaden",
				popoverUploadSuccessful: "Uploaden gelukt",
				popoverUploadError: "Uploaden mislukt, probeer het opnieuw",
				changePicAndThumb: "Afbeelding wijzigen",
				changeThumb: "Miniatuur wijzigen",
				selectPic: "Afbeelding wijzigen",
				selectThumb: "Miniatuur wijzigen",
				uploadPicAndThumb: "Toepassen"
			},
			headerJS:{
				editMe: "Bewerk me!",
				templateTitle: "Titel voor template instellen",
				templateSubtitle: "Subtitel voor template instellen"
			},
			crossFaderJS:{
				setPicture: "Titel voor afbeelding instellen",
				setCaption: "Bijschrift voor afbeelding instellen"
			}
        }
    })
);
