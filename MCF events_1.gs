
  



function MCF_runDemo_test_events() {
  try {

    var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

    
    
    /// ADWORDS
    
        //case r=3
    clear_sheet(2)  // only first time
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~immobiliar;mcf:adwordsCampaignID!=(not set)');
    outputToSpreadsheet_events(results,'AdWordsCase-telefono');
     clear_sheet(3) // only first time
    outputToSpreadsheet_tot_headers_events(results); // scrive headers e totali  del profilo nello sheet4
   //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsCase');
    outputToSpreadsheet_tot_row(results,'telef',tab1,3,14); // (...,...,tab1,rowstart,colstart)
    
   var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~immobiliar;mcf:adwordsCampaignID!=(not set)');
   if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsCase-risposta'); 
                            //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsCase');
                           outputToSpreadsheet_tot_row(results,'risposta',tab1,3,13); // (...,...,tab1,rowstart,colstart)
                           }
   else { printempty_events('risposta', 'AdWordsCase'); }
    
 
  
    
    //lavoro r=14
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~lavoro;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {
      outputToSpreadsheet_events(results,'AdWordslavoro-telefono');
      //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsLavoro');
      outputToSpreadsheet_tot_row(results,'telef',tab1,14,14); // (...,...,tab1,rowstart,colstart)
    }
    else { printempty_events('telefono', 'AdWordsLavoro'); }
    
   var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~lavoro;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordslavoro-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsLavoro');
                            outputToSpreadsheet_tot_row(results,'risposta',tab1,14,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsLavoro'); }
   
    
      //motori r =26
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~automotive;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsMotori-telefono');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsMotori'); 
                            outputToSpreadsheet_tot_row(results,'telef',tab1,26,14); // (...,...,tab1,rowstart,colstart)
                            }
        else { printempty_events('telefono', 'AdWordsMotori'); }
    
   var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~automotive;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsMotori-risposta');    
                             //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsMotori');
                            outputToSpreadsheet_tot_row(results,'risposta',tab1,26,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsMotori'); }
    
    
     //formazione r=33
    
    
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~formazione;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsFormazione-telefono');    
                             //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsFormazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,33,14); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'AdWordsFormazione'); }
    
    
    
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~formazione;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsFormazione-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsFormazione');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,33,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsFormazione'); }
    
    
    
      //Comprovendo r=37
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~comprovendo;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsComprovendo-telefono');    
                             //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsComprovendo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,37,14); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'AdWordsComprovendo'); }



    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~comprovendo;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsComprovendo-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsComprovendo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,37,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsComprovendo'); }
    
    
    
     //Servizi r=41
    
    
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~servizi -;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsServizi-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsServizi');
                           outputToSpreadsheet_tot_row(results,'telef',tab1,41,14); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'AdWordsServizi'); }
    
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~servizi -;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsServizi-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsServizi');
                            outputToSpreadsheet_tot_row(results,'risposta',tab1,41,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsServizi'); }


    
    
    //Generico r=52
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName!@immobiliar;mcf:campaignName!@lavoro;mcf:campaignName!@automotive;mcf:campaignName!@formazione;mcf:campaignName!@Comprovendo;mcf:campaignName!@servizi -;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsGenerico-telefono');    outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsGenerico');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,52,14); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'AdWordsGenerico'); }
    
 
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName!@immobiliar;mcf:campaignName!@lavoro;mcf:campaignName!@automotive;mcf:campaignName!@formazione;mcf:campaignName!@Comprovendo;mcf:campaignName!@servizi -;mcf:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsGenerico-risposta');    outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsGenerico');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,52,13); // (...,...,tab1,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'AdWordsGenerico'); }
    
    
 
      // indeed r=18
        
    
     var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~indeed');
    if (results!=undefined) {outputToSpreadsheet_events(results,'indeed-telefono');    
                             //outputToSpreadsheet_tot_events(results,'telefono', 'indeed');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,18,14);
                            }
    else { printempty_events('telefono', 'indeed'); }
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~indeed');
    if (results!=undefined) {outputToSpreadsheet_events(results,'indeed-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'indeed');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,18,13);
                            }
    else { printempty_events('risposta', 'indeed'); }
      /////indeed


   
 // Sparks47
    
      //case r=7
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015;mcf:campaignName=~sparks47case');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47case-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47case');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,7,14);
                            }
    else { printempty_events('telefono', 'sparks47case'); }
    
    
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~sparks47case');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47case-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'sparks47case');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,7,13);
                            }
    else { printempty_events('risposta', 'sparks47case'); }
    

  
    
      //lavoro r=16
    
    
     var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~sparks47formazione;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47lavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47lavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,16,14);
                            }
    else { printempty_events('telefono', 'sparks47lavoro'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~sparks47formazione');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47lavoro-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'sparks47lavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,16,13);
                            }
    else { printempty_events('risposta', 'sparks47lavoro'); }
    

     
    // motori r=27
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~sparks47motori;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47motori-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'immobiliare.it');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,27,14);
                            }
    else { printempty_events('telefono', 'sparks47motori'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~sparks47motori');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47motori-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'immobiliare.it');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,27,13);
                            }
    else { printempty_events('risposta', 'sparks47motori'); }
	


    
    // comnprovendo r=38
  
    
     var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~sparks47comprovendo;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47comprovendo-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47comprovendo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,38,14);
                            }
    else { printempty_events('telefono', 'sparks47comprovendo'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~sparks47comprovendo');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47comprovendo-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'sparks47comprovendo');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,38,13);
                            }
    else { printempty_events('risposta', 'sparks47comprovendo'); }
    
  
    
    ////MITULA
    
     //r=9
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~case.mitula,mcf:campaignName==Mitula;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'case.mitula-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'case.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,9,14);
                            }
    else { printempty_events('telefono', 'case.mitula'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~case.mitula,mcf:campaignName==Mitula');
    if (results!=undefined) {outputToSpreadsheet_events(results,'case.mitula-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'case.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,9,13);
                            }
    else { printempty_events('risposta', 'case.mitula'); }
	
//r= 20	
	
	 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lavoromitula;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoro.mitula-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'lavoro.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,20,14);
                            }
    else { printempty_events('telefono', 'lavoro.mitula'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~lavoro;mcf:campaignName=~mitula');
    if (results!=undefined) {outputToSpreadsheet_events(results,'lavoro.mitula-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'lavoro.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,20,13);
                            }
    else { printempty_events('risposta', 'lavoro.mitula'); }
	
	//r=30
	
	var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~auto.mitula;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'auto.mitula-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'auto.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,30,14);
                            }
    else { printempty_events('telefono', 'auto.mitula'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~auto.mitula');
    if (results!=undefined) {outputToSpreadsheet_events(results,'auto.mitula-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'auto.mitula');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,30,13);
                            }
    else { printempty_events('risposta', 'lavoro.mitula'); }
  
 
    
  //////////////// Wickedin	 

//r=10
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~Wickedincase;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedincase-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Wickedincase');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,10,14);
                            }
    else { printempty_events('telefono', 'Wickedincase'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~Wickedincase');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedincase-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Wickedincase');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,10,13);
                            }
    else { printempty_events('risposta', 'Wickedincase'); }
	
  


	
//r=19
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~Wickedinlavoro;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinlavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Wickedinlavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,19,14);
                            }
    else { printempty_events('telefono', 'Wickedinlavoro'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~Wickedinlavoro');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinlavoro-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Wickedinlavoro');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,19,13);
                            }
    else { printempty_events('risposta', 'Wickedinlavoro'); }
	

	
//r=29
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~Wickedinmoto,mcf:campaignName=~Wickedinauto;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinauto+moto-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Wickedinauto+moto');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,29,14);
                            }
    else { printempty_events('telefono', 'Wickedinauto+moto'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~Wickedinmoto,mcf:campaignName=~Wickedinauto');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinauto+moto-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'Wickedinauto+moto');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,29,13);
                            }
    else { printempty_events('risposta', 'Wickedinauto+moto'); }
	
	   

    
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
  