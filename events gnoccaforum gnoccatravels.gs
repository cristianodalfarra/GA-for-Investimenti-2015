


function runDemo_gnocca_events() {
  try {

    var firstProfile = getFirstProfile_events();
  
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

    
    
    
    //gnoccaforum events
   
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gnoccaforum;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccaforum-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'gnoccaforum');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,56,9); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'gnoccaforum'); }
    
    
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gnoccaforum;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccaforum-telefono');    
                            // outputToSpreadsheet_tot_events(results,'telefono', 'gnoccaforum');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,56,10); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'gnoccaforum'); }
    
    
    
    ////gnoccaforum events
    
    //gnoccatravelmassaggi events
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gnoccatravelmassaggi;ga:eventaction=~rispost');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccatravelmassaggi-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'gnoccatravelmassaggi');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,57,9); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty_events('risposta', 'gnoccatravelmassaggi'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~gnoccatravelmassaggi;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'gnoccatravelmassaggi-telefono');    
                            // outputToSpreadsheet_tot_events(results,'telefono', 'gnoccatravelmassaggi');
                             outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,57,10); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty_events('telefono', 'gnoccatravelmassaggi'); }
    ////gnoccatravelmassaggi events
    
  
    
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
  