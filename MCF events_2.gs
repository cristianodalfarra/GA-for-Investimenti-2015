
  



function MCF_runDemo_test_events_2() {
  try {

    var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

    
    
   //////////CRITEO 
    


//r=5
    //var results = MCF_getReportDataForProfile_events_case('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel;mcf:conversionGoalNumber==007,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
   var results = MCF_getReportDataForProfile_events_case('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel;mcf:conversionGoalNumber==007');
    if (results!=undefined) {outputToSpreadsheet_events(results,'casecriteo-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'casecriteo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,5,14);
                            }
    else { printempty_events('telefono', 'casecriteo'); }


//var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~casecriteo');
    var results = MCF_getReportDataForProfile_events_case('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==002;mcf:campaignName=~lower_funnel');
    if (results!=undefined) {outputToSpreadsheet_events(results,'casecriteo-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'casecriteo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,5,13);
                            }
    else { printempty_events('risposta', 'casecriteo'); }
	

	
//r=15
 var results = MCF_getReportDataForProfile_events_lavoro('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel;mcf:conversionGoalNumber==014');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteolavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteolavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,15,14);
                            }
    else { printempty_events('telefono', 'criteolavoro'); }


var results = MCF_getReportDataForProfile_events_lavoro('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==012;mcf:campaignName=~lower_funnel');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteolavoro-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteolavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,15,13);
                            }
    else { printempty_events('risposta', 'criteolavoro'); }
	
	
	
		
//r=48
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~criteofb,mcf:campaignName=~criteofacebook;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteofb-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteofb');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,48,14);
                            }
    else { printempty_events('telefono', 'criteofb'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~criteofb,mcf:campaignName=~criteofacebook');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteofb-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteofb');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,48,13);
                            }
    else { printempty_events('risposta', 'criteofb'); }
	
	
		
//r=49
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~criteoaffinity;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoaffinity-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteoaffinity');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,49,14);
                            }
    else { printempty_events('telefono', 'criteoaffinity'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~criteoaffinity');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoaffinity-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteoaffinity');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,49,13);
                            }
    else { printempty_events('risposta', 'criteoaffinity'); }
		
	
	
		
//r=35
 var results = MCF_getReportDataForProfile_events_formazione('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel;mcf:conversionGoalNumber==007');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoformazione-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,35,14);
                            }
    else { printempty_events('telefono', 'criteoformazione'); }


var results = MCF_getReportDataForProfile_events_formazione('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005;mcf:campaignName=~lower_funnel');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoformazione-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,35,13);
                            }
    else { printempty_events('risposta', 'criteoformazione'); }
		
//r=60
 var results = MCF_getReportDataForProfile_events_motori('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel;mcf:conversionGoalNumber==009');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteomotori-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,60,14);
                            }
    else { printempty_events('telefono', 'criteomotori'); }


var results = MCF_getReportDataForProfile_events_motori('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==007;mcf:campaignName=~lower_funnel');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteomotori-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,60,13);
                            }
    else { printempty_events('risposta', 'criteomotori'); }

    //r=63 criteoemail
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName==criteoemail;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoemail-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,63,14);
                            }
    else { printempty_events('telefono', 'criteoemail'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName==criteoemail');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoemail-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteoformazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,63,13);
                            }
    else { printempty_events('risposta', 'criteoemail'); }

    
  ///TROVIT
    
    

//r=8
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~trovit;mcf:campaignName!@auto.trovit;mcf:campaignName!@lavoro.trovit;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TroviCase-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'TroviCase');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,8,14);
                            }
    else { printempty_events('telefono', 'TroviCase'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~trovit;mcf:campaignName!@auto.trovit;mcf:campaignName!@lavoro.trovit');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TroviCase-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'TroviCase');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,8,13);
                            }
    else { printempty_events('risposta', 'TroviCase'); }
	



//r=21
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lavoro.trovit;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitLavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'TrovitLavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,21,14);
                            }
    else { printempty_events('telefono', 'TrovitLavoro'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~lavoro.trovit');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitLavoro-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'TrovitLavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,21,13);
                            }
    else { printempty_events('risposta', 'TrovitLavoro'); }
	

	
	

//r=28
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~auto.trovit;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Trovitauto-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Trovitauto');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,28,14);
                            }
    else { printempty_events('telefono', 'Trovitauto'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~auto.trovit');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Trovitauto-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Trovitauto');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,28,13);
                            }
    else { printempty_events('risposta', 'Trovitauto'); }
	


		
 //Yahooadv
    


//r=4
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~yahooadv;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'yahooadv-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'yahooadv');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,4,14)
                            ;
                            }
    else { printempty_events('telefono', 'yahooadv'); }


var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~yahooadv');
    if (results!=undefined) {outputToSpreadsheet_events(results,'yahooadv-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'yahooadv');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,4,13);
                            }
    else { printempty_events('risposta', 'yahooadv'); }
	

// Yahoo Native
    
//r=47
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~native;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'native-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'native');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,47,14);
                            }
    else { printempty_events('telefono', 'native'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~native');
    if (results!=undefined) {outputToSpreadsheet_events(results,'native-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'native');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,47,13);
                            }
    else { printempty_events('risposta', 'native'); }
	

// tuttitalia
    
//r=50
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~tuttitalia;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tuttitalia-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'tuttitalia');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,50,14);
                            }
    else { printempty_events('telefono', 'tuttitalia'); }


var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~tuttitalia');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tuttitalia-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'tuttitalia');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,50,13);
                            }
    else { printempty_events('risposta', 'tuttitalia'); }
	    

    
    //GOHOME
    
//r=12
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~gohome;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gohome-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'gohome');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,12,14);
                            }
    else { printempty_events('telefono', 'gohome'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~gohome');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gohome-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'gohome');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,12,13);
                            }
    else { printempty_events('risposta', 'gohome'); }


// JOBTOME

//r=22
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~jobtome_paid;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobtome_paid-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'jobtome_paid');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,22,14);
                            }
    else { printempty_events('telefono', 'jobtome_paid'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~jobtome_paid');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobtome_paid-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'jobtome_paid');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,22,13);
                            }
    else { printempty_events('risposta', 'jobtome_paid'); }

    
    // JOOBLE
	
	//r=23
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~Jooble;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Jooble-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Jooble');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,23,14);
                            }
    else { printempty_events('telefono', 'Jooble'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~Jooble');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Jooble-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Jooble');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,23,13);
                            }
    
    else { printempty_events('risposta', 'Jooble'); }
    
    
    
    //NESTORIA

//r=11
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~Nestoria;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Nestoria-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Nestoria');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,11,14);
                            }
    else { printempty_events('telefono', 'Nestoria'); }


var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~Nestoria');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Nestoria-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Nestoria');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,11,13);
                            }
    else { printempty_events('risposta', 'Nestoria'); }
	
	// careerjet
	
	
//r=24
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~Careerjet;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Careerjet-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Careerjet');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,24,14);
                            }
    else { printempty_events('telefono', 'Careerjet'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~Careerjet');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Careerjet-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Careerjet');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,24,13);
                            }
    else { printempty_events('risposta', 'Careerjet'); }

	 
    
    //AUTOXY
    
//r=31
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~autoxy;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'autoxy-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'autoxy');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,31,14);
                            }
    else { printempty_events('telefono', 'autoxy'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~autoxy');
    if (results!=undefined) {outputToSpreadsheet_events(results,'autoxy-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'autoxy');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,31,13);
                            }
    else { printempty_events('risposta', 'autoxy'); }

	
	// SPLIO
	
	
//r=53
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~alert;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'splio-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'splio');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,53,14);
                            }
    else { printempty_events('telefono', 'splio'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~alert');
    if (results!=undefined) {outputToSpreadsheet_events(results,'splio-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'splio');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,53,13);
                            }
    else { printempty_events('risposta', 'splio'); }

    
    
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}
    
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function getFirstProfile_events() {
  var accounts = Analytics.Management.Accounts.list();
  if (accounts.getItems()) {
    var firstAccountId = accounts.getItems()[0].getId();

    var webProperties = Analytics.Management.Webproperties.list(firstAccountId);
    if (webProperties.getItems()) {

      var firstWebPropertyId = webProperties.getItems()[0].getId();
      var profiles = Analytics.Management.Profiles.list(firstAccountId, firstWebPropertyId);

      if (profiles.getItems()) {
        var firstProfile = profiles.getItems()[0];
        return firstProfile;

      } else {
        throw new Error('No views (profiles) found.');
      }
    } else {
      throw new Error('No webproperties found.');
    }
  } else {
     throw new Error('No accounts found.');
  }
}

function printempty_events(testo_evento,testo_camp) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo_evento);
  sheet.getRange(row, 2, 1, 1).setValue(testo_camp);
}



function MCF_getReportDataForProfile_events(tipo,firstProfile,filters) {

  var profileId = "43015466";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}


////////////////////////

function MCF_getReportDataForProfile_events(tipo,firstProfile,filters) {

  var profileId = "43015466";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}
///////////////////////////////////////////////////////



////////////////////////

function MCF_getReportDataForProfile_events_case(tipo,firstProfile,filters) {

  var profileId = "51520003";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}
///////////////////////////////////////////////////////


function MCF_getReportDataForProfile_events_lavoro(tipo,firstProfile,filters) {

  var profileId = "51871756";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}
///////////////////////////////////////////////////////

function MCF_getReportDataForProfile_events_motori(tipo,firstProfile,filters) {

  var profileId = "51551214";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}
///////////////////////////////////////////////////////

function MCF_getReportDataForProfile_events_formazione(tipo,firstProfile,filters) {

  var profileId = "51958562";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}
///////////////////////////////////////////////////////




function MCF_getReportDataForProfile_events_tiscali(tipo,firstProfile,filters) {

  var profileId = "43242870";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-mcf:assistedConversions',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Mcf.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'mcf:assistedConversions', // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    //throw new Error('No views (profiles) found');
    
  }
}




function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}
//===============================================


//===============================================
function outputToSpreadsheet_events(results,testo_filtro) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[2]; //new
  
 
  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, headerNames.length)
      .setValues([headerNames]);

  sheet.getRange(row,1,1,1).setValue(testo_filtro); //////////////----
  sheet.getRange(row,1,1,1).setFontSize(18)
  
  // Print the rows of data.
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, results.getRows().length, headerNames.length)
      .setValues(results.getRows());
  
  

 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  sheet.getRange(row, 2, 1, col).setValues([data]);
  
  
  
//=======================================================================================
  
}  // 

function outputToSpreadsheet_tot_headers_events(results) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  
  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  
  
  
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, headerNames.length)
      .setValues([headerNames]);

 

//Print the total Value
// var data = [];
// var totals = results.totalsForAllResults;
// for (var i = 1, header; header = results.columnHeaders[i]; i++) {
//  data.push(results.totalsForAllResults[header.name]);
//}
// var row = sheet.getLastRow()+1;
// var col = sheet.getLastColumn()-1;
//  sheet.getRange(row, 2, 1, col).setValues([data]);
//===============================================

    
}  
  
  
//=======================================================================================

function outputToSpreadsheet_tot_events(results,testo_action,testo_camp) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  sheet.getRange(row, 2, 1, col).setValues([data]);
sheet.getRange(row, 1, 1, 1).setValue(testo_action);
  sheet.getRange(row, 2, 1, 1).setValue(testo_camp);
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  
  