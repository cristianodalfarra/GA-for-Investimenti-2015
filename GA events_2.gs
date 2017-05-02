function runDemo_test_events_2() {
  try {

    var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

    
        
    
    //Yahooadv
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~yahooadv;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'YahooAdv-risposta');    ////outputToSpreadsheet_tot_events(results,'risposta', 'YahooAdv');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,4,9);
                            }
    else { printempty_events('risposta', 'YahooAdv'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~yahooadv;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'YahooAdv-telefono');   // //outputToSpreadsheet_tot_events(results,'telefono', 'YahooAdv');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,4,10); 
                            }
    else { printempty_events('telefono', 'YahooAdv'); }
   ////Yahooadv
    
    //Yahoo Native
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~native;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'YahooNative-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'YahooNative');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,47,9);
                            }
    else { printempty_events('risposta', 'YahooNative'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~native;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'YahooNative-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'YahooNative');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,47,10); 
                            }
    else { printempty_events('telefono', 'YahooNative'); }
    ////Yahoo Native
    
    //Tuttitalia
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~tuttitalia;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tuttitalia-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'tuttitalia');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,50,9);
                            }
    else { printempty_events('risposta', 'tuttitalia'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~tuttitalia;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tuttitalia-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'tuttitalia');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,50,10); 
                            }
    else { printempty_events('telefono', 'tuttitalia'); }
    
  
    ////Tuttitalia
    
    
        
    
    //Gohome
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gohome;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gohome-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'gohome');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,12,9);
                            }
    else { printempty_events('risposta', 'gohome'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gohome;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gohome-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'gohome');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,12,10); 
                            }
    else { printempty_events('telefono', 'gohome'); }
    //////Gohome
    
      //Jobtome
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~jobtome_paid;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobtome_paid-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'jobtome_paid');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,22,9);
                            }
    else { printempty_events('risposta', 'jobtome_paid'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~jobtome_paid;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobtome_paid-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'jobtome_paid');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,22,10); 
                            }
    else { printempty_events('telefono', 'jobtome_paid'); }
    
     //////Jobtome
    
      //Jooble
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Jooble;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Jooble-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Jooble');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,23,9);
                            }
    else { printempty_events('risposta', 'Jooble'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Jooble;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Jooble-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Jooble');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,23,10); 
                            }
    else { printempty_events('telefono', 'Jooble'); }
    
    
    //////Jooble
    
        //Nestoria
    
   var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~Nestoria;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Nestoria-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Nestoria');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,11,9);
                            }
    else { printempty_events('risposta', 'Nestoria'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~Nestoria;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Nestoria-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Nestoria');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,11,10); 
                            }
    else { printempty_events('telefono', 'Nestoria'); }
    //////Nestoria
    
    //Careerjet
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Careerjet;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Careerjet-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Careerjet');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,24,9);
                            }
    else { printempty_events('risposta', 'Careerjet'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Careerjet;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Careerjet-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Careerjet');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,24,10); 
                            }
    else { printempty_events('telefono', 'Careerjet'); }
    
    //////Careerjet
   
     //Autoxy
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Autoxy;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Autoxy-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Autoxy');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,31,9);
                            }
    else { printempty_events('risposta', 'Autoxy'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Autoxy;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Autoxy-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Autoxy');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,31,10); 
                            }
                             
    else { printempty_events('telefono', 'Autoxy'); }
    
    //////Autoxy
    
     //Splio
        var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~alert;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Splio-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Splio');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,53,9);
                            }
    else { printempty_events('risposta', 'Splio'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~alert;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Splio-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Splio');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,53,10); 
                            }
    else { printempty_events('telefono', 'Splio'); }
    //////Splio
    
    
       
    //Immobiliare
     var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~immobiliare.it;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'immobiliare.it-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'immobiliare.it');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,6,9);
                            }
    else { printempty_events('risposta', 'immobiliare.it'); }
    
    //
     var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~immobiliare.it;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'immobiliare.it-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'immobiliare.it');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,6,10); 
                            }
    else { printempty_events('telefono', 'immobiliare.it'); }
    ////Immobiliare
    
     // libero
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~^libero;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'libero-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'libero');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,45,9);
                            }
    else { printempty_events('risposta', 'libero'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~^libero;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'libero-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'libero');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,45,10); 
                            }
    else { printempty_events('telefono', 'libero'); }
    /////libero
    
    // tiscali
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~tiscali;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tiscali-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'tiscali');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,46,9);
                            }
    else { printempty_events('risposta', 'tiscali'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~tiscali;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'tiscali-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'tiscali');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,46,10); 
                            }
    else { printempty_events('telefono', 'tiscali'); }
    /////tiscali
    
    /*
    // criteotest
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteotest;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteotest-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'criteotest');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,16,9);
                            }
    else { printempty_events('risposta', 'criteotest'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteotest;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteotest-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'criteotest');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,14,10); 
                            }
    else { printempty_events('telefono', 'criteotest'); }
    /////criteotest
    
    */
    
   // jobrapido
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~jobrapido;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobrapido-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'jobrapido');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,17,9);
                            }
    else { printempty_events('risposta', 'jobrapido'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~jobrapido;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'jobrapido-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'jobrapido');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,17,10); 
                            }
    else { printempty_events('telefono', 'jobrapido'); }
    /////jobrapido
    
   // sparks47motori
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47motori;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47motori-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,27,9);
                            }
    else { printempty_events('risposta', 'sparks47motori'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47motori;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47motori-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,27,10); 
                            }
    else { printempty_events('telefono', 'sparks47motori'); }
    /////sparks47motori
    
    
   
    // in-vendita.it
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~in-vendita.it;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'in-vendita.it-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,61,9);
                            }
    else { printempty_events('risposta', 'in-vendita.it'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~in-vendita.it;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'in-vendita.it-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,61,10); 
                            }
    else { printempty_events('telefono', 'in-vendita.it'); }
    /////in-vendita.it
    
   
    // bancalavoroRU
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~bancalavoroRU;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'bancalavoroRU-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,62,9);
                            }
    else { printempty_events('risposta', 'bancalavoroRU'); }
    var results = getReportDataForProfile_events('ga:eventaction,ga:source',firstProfile,'ga:source=~bancalavoroRU;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'bancalavoroRU-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47motori');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,62,10); 
                            }
    else { printempty_events('telefono', 'bancalavoroRU'); }
    /////bancalavoroRU
    
   
    
    
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



function getReportDataForProfile_events(tipo,firstProfile,filters) {

  var profileId = "43015466";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
 // var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
 // var endDate = getLastNdays(1);      // Today.

 var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
Logger.log(startDate);
  Logger.log(endDate);

  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-ga:uniqueEvents',       // Sort by sessions descending, then keyword.
    //'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': filters,          // Display only filer passed in the function.
    'start-index': '1',
    'max-results': '20'                     // Display the first 250 results.
  };

 //===============================================
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      'ga:uniqueEvents', // Comma seperated list of metrics.
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
  