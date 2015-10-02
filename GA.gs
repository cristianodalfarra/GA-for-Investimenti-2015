 

function runDemo_test() {
  try {

    var firstProfile = getFirstProfile();
       var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');
     
      
    // spark47
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47case');
    if (results!=undefined) {    clear_sheet(0)  // only first time
        outputToSpreadsheet(results,'spark47case'); // scrive dati del profilo nello sheet3
    clear_sheet(1) // only first time
        //outputToSpreadsheet_tot_headers(results); // scrive headers e totali  del profilo nello sheet4
      //outputToSpreadsheet_tot(results,'spark47case');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,7,4);
                            }
     else { printempty('spark47Case'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47formazione');
    if (results!=undefined)  {   outputToSpreadsheet(results,'sparks47Lavoro');  //outputToSpreadsheet_tot(results,'sparks47Lavoro'); 
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,16,4);
                             }
    else { printempty('spark47Lavoro'); }
    
   // var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47lavoro');
   // if (results!=undefined) {outputToSpreadsheet(results,'sparks47Lavoro');    //outputToSpreadsheet_tot(results,'sparks47Lavoro');}
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47motori');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47Motori');    //outputToSpreadsheet_tot(results,'sparks47Motori');
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,27,4);
                            }
    else { printempty('spark47Motori'); }

    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47comprovendo');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47comprovendo');    //outputToSpreadsheet_tot(results,'sparks47comprovendo');    
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,38,4);
                            }
    else { printempty('spark47Comprovendo'); }
    ///////////// sparks47
    
      //Mitula
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~case.mitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaCase');      //outputToSpreadsheet_tot(results,'MitulaCase');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,9,4);
                            }
    else { printempty('MitulaCase'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~lavoromitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaLavoro');    //outputToSpreadsheet_tot(results,'MitulaLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,20,4);
                            }
    else { printempty('MitulaLavoro'); }  

    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~auto.mitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaMotori');    //outputToSpreadsheet_tot(results,'MitulaMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,30,4);
                            }
    else { printempty('MitulaMotori'); }
    //////////////// Mitula
    
    
    //Wickedin
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Wickedincase');
    if (results!=undefined) {   outputToSpreadsheet(results,'WickedinCase');    //outputToSpreadsheet_tot(results,'WickedinCase'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,10,4);
                            }
    else { printempty('WickedinCase'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Wickedinlavoro');
    if (results!=undefined) { outputToSpreadsheet(results,'WickedinLavoro'); //outputToSpreadsheet_tot(results,'WickedinLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,19,4);
                            }
    else { printempty('WickedinLavoro'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Wickedinauto,ga:campaign=~Wickedinmoto');
      if (results!=undefined){ outputToSpreadsheet(results,'WickedinMotori');   //outputToSpreadsheet_tot(results,'WickedinMotori');  
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,29,4);
                             }
    else { printempty('WickedinMotori'); }
    //////////////// Wickedin
    
    
    
    
    /// Criteo
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~casecriteo');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoCase');    //outputToSpreadsheet_tot(results,'CriteoCase');         
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,5,4);
                            }
    else { printempty('CriteoCase'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~criteolavoro,ga:campaign=~criteolavoro');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoLavoro');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,15,4);
                            }
    else { printempty('Criteolavoro'); }
                             
                             
    
     var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~criteofb');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoFB');    //outputToSpreadsheet_tot(results,'CriteoFB'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,48,4);
                            }
    else { printempty('CriteoFB'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~criteoaffinity');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoAffinity'); //outputToSpreadsheet_tot(results,'CriteoAffinity')
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,49,4);                              ;
                            }
    else { printempty('CriteoAffinity'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~criteoformazione');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoFormazione');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,35,4);
                            }
    else { printempty('CriteoFormazione'); }
    
    //////////////// Criteo
  
    
 
    //Trovit
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~trovit;ga:campaign!@auto.trovit;ga:campaign!@lavoro.trovit');
    if (results!=undefined) {    outputToSpreadsheet(results,'TrovitCase');    //outputToSpreadsheet_tot(results,'TrovitCase');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,8,4);
                            }
    else { printempty('TrovitCase'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~lavoro.trovit');
    if (results!=undefined) {    outputToSpreadsheet(results,'TrovitLavoro');    //outputToSpreadsheet_tot(results,'TrovitLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,21,4);
                            }
    else { printempty('TrovitLavoro'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~auto.trovit');
    if (results!=undefined) {outputToSpreadsheet(results,'TrovitMotori');    //outputToSpreadsheet_tot(results,'TrovitMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,28,4);
                            }
    else { printempty('TrovitMotori'); }
    //////////////// Trovit
    
    
    
     
   
    
    
    /// ADWORDS
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~immobiliar;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsCase');    //outputToSpreadsheet_tot(results,'AdWordsCase');
                          outputToSpreadsheet_tot_row_ga_data(results,'',tab1,3,4);  
                            }
    else { printempty('AdWordsCase'); }
   // var results = getReportDataForProfile_events('ga:eventaction',firstProfile,'ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
   // if (results!=undefined) {    outputToSpreadsheet_events(results,'AdWordsCase');    //outputToSpreadsheet_tot_events(results,'AdWordsCase');}
   // else { printempty_events('AdWordsCase'); }
    
    
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~lavoro;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsLavoro');    //outputToSpreadsheet_tot(results,'AdWordsLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,14,4);
                            }
    else { printempty('AdWordsLavoro'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~automotive;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsMotori');    //outputToSpreadsheet_tot(results,'AdWordsMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,26,4);
                            }
    else { printempty('AdWordsMotori'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~formazione;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsFormazione');    //outputToSpreadsheet_tot(results,'AdWordsFormazione');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,33,4);
                            }
    else { printempty('AdWordsFormazione'); }
    
    
     var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Comprovendo;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {  outputToSpreadsheet(results,'AdWordsComproVendo');    //outputToSpreadsheet_tot(results,'AdWordsComproVendo'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,37,4);
                            }
     else { printempty('AdWordsComprovendo'); }
    
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsServizi');    //outputToSpreadsheet_tot(results,'AdWordsServizi');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,41,4);
                            }
    else { printempty('AdWordsServizi'); }
    
     var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign!@immobiliar;ga:campaign!@lavoro;ga:campaign!@automotive;ga:campaign!@formazione;ga:campaign!@Comprovendo;ga:campaign!@servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsGenerico');   //outputToSpreadsheet_tot(results,'AdWordsGenerico');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,52,4);
                            }
    else { printempty('AdWordsGenerico'); }
 
 /////////////ADWORDS
    
   
                             
    //Yahooadv
    var results = getReportDataForProfile('ga:source',firstProfile,'ga:source=~yahooadv');
    if (results!=undefined) {    outputToSpreadsheet(results,'YahooAdv');    //outputToSpreadsheet_tot(results,'YahooAdv');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,4,4); 
                            }
    else { printempty('YahooAdv'); }
    ////Yahooadv
    
    //Yahoo Native
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~native');
    if (results!=undefined) {    outputToSpreadsheet(results,'YahooNative');    //outputToSpreadsheet_tot(results,'YahooNative');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,47,4);
                            }
    else { printempty('YahooNative'); }
    ////Yahoo Native
    
    //Tuttitalia
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:source=~tuttitalia');
    if (results!=undefined) {    outputToSpreadsheet(results,'Tuttitalia');    //outputToSpreadsheet_tot(results,'Tuttitalia');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,50,4);
                            }
    else { printempty('Tuttitalia'); }
    ////Tuttitalia
    
    //-----
     // indeed
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~indeed');
    if (results!=undefined) {    outputToSpreadsheet(results,'Indeed');    //outputToSpreadsheet_tot(results,'Indeed');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,18,4);
                            }
    else { printempty('Indeed'); }
    /////indeed
    
    //Immobiliare
    var results = getReportDataForProfile('ga:source',firstProfile,'ga:source=~immobiliare.it');
    if (results!=undefined) {    outputToSpreadsheet(results,'immobiliare.it');    //outputToSpreadsheet_tot(results,'Immobiliare.it');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,6,4);
                            }
    else { printempty('Immobiliare.it'); }
    ////Immobiliare
    
     // libero
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~^libero');
    if (results!=undefined) {    outputToSpreadsheet(results,'Libero');    //outputToSpreadsheet_tot(results,'Libero');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,45,4);
                            }
    else { printempty('Libero'); }
    /////libero
    
    // tiscali
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~tiscali');
    if (results!=undefined) {    outputToSpreadsheet(results,'Tiscali');    //outputToSpreadsheet_tot(results,'Tiscali');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,46,4);
                            }
    else { printempty('Tiscali'); }
    /////tiscali
   
    /*
     // criteotest
    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~criteotest');
    if (results!=undefined) {    outputToSpreadsheet(results,'criteotest');    //outputToSpreadsheet_tot(results,'criteotest');
                            
                            }
    else { printempty('criteotest'); }
    /////criteotest
    
    */
    
    //Gohome
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~gohome');
    if (results!=undefined) {    outputToSpreadsheet(results,'gohome');    //outputToSpreadsheet_tot(results,'gohome');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,12,4);
                            }
    else { printempty('GoHome'); }
    //////Gohome
    
      //Jobtome
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~jobtome_paid');
    if (results!=undefined) {outputToSpreadsheet(results,'jobtome_paid');    //outputToSpreadsheet_tot(results,'jobtome_paid');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,22,4);
                            }
    else { printempty('jobtome_paid'); }
    //////Jobtome
    
      //Jooble
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Jooble');
    if (results!=undefined) { outputToSpreadsheet(results,'Jooble');    //outputToSpreadsheet_tot(results,'Jooble');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,23,4);
                            }
    else { printempty('Jooble'); }
    //////Jooble
    
        //Nestoria
       var results = getReportDataForProfile('ga:source',firstProfile,'ga:source=~Nestoria');
    if (results!=undefined) { outputToSpreadsheet(results,'Nestoria');    //outputToSpreadsheet_tot(results,'Nestoria');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,11,4);
                            }
    else { printempty('Nestoria'); }
    //////Nestoria
    
    //Careerjet
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Careerjet');
    if (results!=undefined) { outputToSpreadsheet(results,'Careerjet');    //outputToSpreadsheet_tot(results,'Careerjet');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,24,4);
                            }
    else { printempty('Careerjet'); }
    //////Careerjet
   
     //Autoxy
       var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~Autoxy');
    if (results!=undefined) {outputToSpreadsheet(results,'Autoxy');    //outputToSpreadsheet_tot(results,'Autoxy');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,31,4);
                            }
    else { printempty('Autoxy'); }
    //////Autoxy
    
      //Splio
   
     var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~alert');
    if (results!=undefined) {outputToSpreadsheet(results,'Splio');    //outputToSpreadsheet_tot(results,'Splio');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,53,4);
                            }
    else { printempty('Splio'); }
    
    //////Splio
    
       //jobrapido
        var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~jobrapido');
    if (results!=undefined) {outputToSpreadsheet(results,'jobrapido');    //outputToSpreadsheet_tot(results,'jobrapido');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,17,4);
                            }
    else { printempty('jobrapido'); }
    
    //////jobrapido
    
    
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





function getReportDataForProfile(tipo,firstProfile,filters) {

  var profileId = "43015466";  // profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
  //var profileId = firstProfile.getId();
  var tableId = 'ga:' + profileId;
  //var startDate = getLastNdays(30);   // last 30 days.
  //var endDate = getLastNdays(1);      // 0=Today.

  
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
