function MCF_criteo_test() {

  var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');
//r=63
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~lower_funnel,mcf:campaignName=~criteo;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoa-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteoaffinity');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,63,14);
                            }
    else { printempty_events('telefono', 'criteoaaggr'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~lower_funnel,mcf:campaignName=~criteo');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoaffinity-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'criteoaffinity');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,63,13);
                            }
    else { printempty_events('risposta', 'criteoaffinity'); }


}  



function MCF_runDemo_test_events_3() {
  try {

    var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

  
    
    
 

    
    
         //immobiliare.it
    
//r=6
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~immobiliare.it;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'immobiliare.it-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'immobiliare.it');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,6,14);
                            }
    else { printempty_events('telefono', 'immobiliare.it'); }


var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~immobiliare.it');
    if (results!=undefined) {outputToSpreadsheet_events(results,'immobiliare.it-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'immobiliare.it');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,6,13);
                            }
    else { printempty_events('risposta', 'immobiliare.it'); }
	
	 // libero
	
//r=45
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~libero;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'libero-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'libero');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,45,14);
                            }
    else { printempty_events('telefono', 'libero'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~libero');
    if (results!=undefined) {outputToSpreadsheet_events(results,'libero-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'libero');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,45,13);
                            }
    else { printempty_events('risposta', 'libero'); }

	
    //tiscali
	
	
//r=46
 //var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~tiscali;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~tiscali;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');  
    //var results = MCF_getReportDataForProfile_events_tiscali('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==001,mcf:conversionGoalNumber==003,mcf:conversionGoalNumber==004,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tiscali-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'tiscali');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,46,14);
                            }
    else { printempty_events('telefono', 'tiscali'); }

//var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~tiscali');
     var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~tiscali');
//var results = MCF_getReportDataForProfile_events_tiscali('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==002');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tiscali-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'tiscali');
                            outputToSpreadsheet_tot_row(results,'risposta',tab1,46,13);
                            }
    else { printempty_events('risposta', 'tiscali'); }
    
    
//r=46
 //var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~tiscali;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
 var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~tiscali;mcf:conversionGoalNumber==010,mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');  
    //var results = MCF_getReportDataForProfile_events_tiscali('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==001,mcf:conversionGoalNumber==003,mcf:conversionGoalNumber==004,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tiscali-totali');    //outputToSpreadsheet_tot_events(results,'telefono', 'tiscali');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,46,15);
                            }
    else { printempty_events('totale mcf', 'tiscali'); } 
    
    //jobrapido
    
//r=17
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~jobrapido;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobrapido-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'jobrapido');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,17,14);
                            }
    else { printempty_events('telefono', 'jobrapido'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~jobrapido');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobrapido-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'jobrapido');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,17,13);
                            }
    else { printempty_events('risposta', 'jobrapido'); }
	
    
    
    
    
//gnoccaforum
    
//r=56
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~gnoccaforum;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccaforum-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'autoxy');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,56,14);
                            }
    else { printempty_events('telefono', 'gnoccaforum'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~gnoccaforum');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccaforum-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'autoxy');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,56,13);
                            }
    else { printempty_events('risposta', 'gnoccaforum'); }

//gnoccatravels

//r=57
 var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~gnoccatravelmassaggi;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccaforum-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,57,14);
                            }
    else { printempty_events('telefono', 'gnoccatravelmassaggi'); }


var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~gnoccatravelmassaggi');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccatravelmassaggi-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,57,13);
                            }
    else { printempty_events('risposta', 'gnoccatravelmassaggi'); }
	
    

    
//@FB_Servizi_

//r=58
    

var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~FB_Servizi_');
    if (results!=undefined) {outputToSpreadsheet_events(results,'FB_Servizi-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,58,13);
                            }
    else { printempty_events('risposta', 'FB_Servizi'); }

    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~FB_Servizi_;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'FB_Servizi-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,58,14);
                            }
    else { printempty_events('telefono', 'FB_Servizi'); }

//FacebookCartomanzia


    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:conversionGoalNumber==010;mcf:campaignName=~FacebookCartomanzia');
    if (results!=undefined) {outputToSpreadsheet_events(results,'FacebookCartomanzia-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,59,13);
                            }
    else { printempty_events('risposta', 'FacebookCartomanzia'); }

    
    //r=59
    var results = MCF_getReportDataForProfile_events('mcf:campaignName,mcf:campaignName',firstProfile,'mcf:campaignName=~FacebookCartomanzia;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'FacebookCartomanzia-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,59,14);
                            }
    else { printempty_events('telefono', 'FacebookCartomanzia'); }


    
   
    
//r=61 in-vendita.it
var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~in-vendita.it');
    if (results!=undefined) {outputToSpreadsheet_events(results,'in-vendita.it-risposta');  
                             
                            outputToSpreadsheet_tot_row(results,'telef',tab1,61,13);
                            }
    else { printempty_events('risposta', 'in-vendita.it'); }    

    
    
    var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~in-vendita.it;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'in-vendita.it-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'immobiliare.it');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,61,14);
                            }
    else { printempty_events('telefono', 'in-vendita.it'); }


    
    //r=62 bancalavoro
 

var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:conversionGoalNumber==010;mcf:source=~bancalavoroRU');
    if (results!=undefined) {outputToSpreadsheet_events(results,'bancalavoroRU-risposta');  
                             
                            outputToSpreadsheet_tot_row(results,'telef',tab1,62,13);
                            }
    else { printempty_events('risposta', 'bancalavoroRU'); } 
 
    var results = MCF_getReportDataForProfile_events('mcf:source,mcf:source',firstProfile,'mcf:source=~bancalavoroRU;mcf:conversionGoalNumber==005,mcf:conversionGoalNumber==013,mcf:conversionGoalNumber==014,mcf:conversionGoalNumber==015');
    if (results!=undefined) {outputToSpreadsheet_events(results,'bancalavoroRU-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'bancalavoroRU');
                            outputToSpreadsheet_tot_row(results,'telef',tab1,62,14);
                            }
    else { printempty_events('telefono', 'bancalavoroRU'); }

    
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
  