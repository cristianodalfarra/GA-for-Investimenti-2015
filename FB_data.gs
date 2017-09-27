



function runDemo_FB() {
  try {

    
    
    var firstProfile = getFirstProfile();
    
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

 
     
       //@FB_Servizi_
        var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=@FB_Servizi_');
    if (results!=undefined) {outputToSpreadsheet(results,'FB_Servizi');    
                            
                             outputToSpreadsheet_tot_row_ga_data(results,'risposta',tab1,58,4); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty('FB_Servizi'); }
    
  
    //////@FB_Servizi_
  
    
       //FacebookCartomanzia
        var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~FacebookCartomanzia');
    if (results!=undefined) {outputToSpreadsheet(results,'FacebookCartomanzia');    
                             
                             outputToSpreadsheet_tot_row_ga_data(results,'risposta',tab1,59,4); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty('FacebookCartomanzia'); }
    
    
     //Facebook Adv Affitti (facebookcamera|facebookmonolocale|facebookbilocale|facebooktrilocale|facebookaffittomain)
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~(facebook(.*)camera|facebook(.*)monolocale|facebook(.*)bilocale|facebook(.*)trilocale|facebook(.*)aff|facebookaffitto(.*))');
    if (results!=undefined) {outputToSpreadsheet(results,'Facebook Adv Affitti');    
                             
                             outputToSpreadsheet_tot_row_ga_data(results,'risposta',tab1,70,4); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty('Facebook Adv Affitti'); }
    

    //Facebook Adv lavoro  (facebookamministrazione|facebookanimazione|facebooktrasporti|facebookinformatica|facebooksales|facebooklavoromain|facebookinsegnante)
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~(facebookamministrazione|facebookanimazione),ga:campaign=~(facebooktrasporti|facebookinformatica|facebooksales|facebooklavoromain|facebookinsegnante)');
    if (results!=undefined) {outputToSpreadsheet(results,'Facebook Adv Lavoro');    
                             
                             outputToSpreadsheet_tot_row_ga_data(results,'risposta',tab1,71,4); // (...,...,tab,rowstart,colstart)
                            }
    else { printempty('Facebook Adv lavoro'); }
    
    
    //////FacebookCartomanzia
    
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function printempty(testo) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo);
}

function printempty_events(testo) {

  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3]; //new
  var row = sheet.getLastRow()+1;
  sheet.getRange(row, 1, 1, 1).setValue(testo);
}

function getFirstProfile() {
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

function clear_sheet(sheet_num) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[sheet_num]; //data
  // SpreadsheetApp.getActiveSheet().deleteRows(1, 10000);
  
 // var rowsToKeep = 0; //CHANGE TO YOUR DESIRED NUMBER OF ROWS TO KEEP.
  //var rows = sheet.getLastRow();
  //var numToDelete = rows - rowsToKeep  -1;
  //sheet.deleteRows(2, numToDelete);
  
   sheet.getRange('a1:G10000').clearContent();
   sheet.clear();
};





function getReportDataForProfile_original(tipo,firstProfile,filters) {

  var profileId = "43015466";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
  //var startDate = getLastNdays(30);   // last 30 days.
  //var endDate = getLastNdays(1);      // 0=Today.

//  var startDate = userProperties.getProperty('start_date');
//var startDate = userProperties.getProperty('end_date');
  
var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');

  
  //var startDate = START_DATE;  // 1 weeks (a fortnight) ago.
  //var endDate = END_DATE;      // Today.

   //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
 print_info(startDate,endDate);
  
  var optArgs = {
    'dimensions': tipo,              // Comma separated list of dimensions.
    'sort': '-ga:sessions',       // Sort by sessions descending, then keyword.
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
      'ga:sessions,ga:pageviewsPerSession,ga:bounceRate,ga:percentNewSessions', // Comma seperated list of metrics.
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
function outputToSpreadsheet(results,testo_filtro) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; //new
  
 
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

function outputToSpreadsheet_tot_headers(results) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  
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

function outputToSpreadsheet_tot(results,testo) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
 var row = sheet.getLastRow()+1;
 var col = sheet.getLastColumn()-1;
  sheet.getRange(row, 2, 1, col).setValues([data]);
sheet.getRange(row, 1, 1, 1).setValue(testo);
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  
  



//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function print_info(startd,endd) {
var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[4]; //new
  var row = sheet.getLastRow();

  sheet.getRange(1, 1, 1, 1).setValue('startdate');
  sheet.getRange(1, 2, 1, 1).setValue(startd);
  sheet.getRange(2, 1, 1, 1).setValue('enddate');
  sheet.getRange(2, 2, 1, 1).setValue(endd);
}