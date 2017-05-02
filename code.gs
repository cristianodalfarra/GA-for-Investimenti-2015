// per GA

function outputToSpreadsheet_tot_row_ga_data(results,testo,tab,rowstart,col) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[Number(tab)]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
  
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
  //var final = data[0];
 //var rowstart = rowstart+step-1;
 //var col = sheet.getLastColumn()-1;
 var col2= data.length;  //new
  sheet.getRange(rowstart, col, 1, col2).setValues([data]);
//sheet.getRange(rowstart, 1, 1, 1).setValue(testo);
 // sheet.getRange(row, 1, 1, 1).setValue(getLastNdays(lastdays));
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  



function outputToSpreadsheet_tot_row_ga_events(results,testo,tab,rowstart,col) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[Number(tab)]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
  
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
  var final = data[1];
 //var rowstart = rowstart+step-1;
 //var col = sheet.getLastColumn()-1;
 var col2= data.length;  //new
  sheet.getRange(rowstart, col, 1, 1).setValue(final);
//sheet.getRange(rowstart, 1, 1, 1).setValue(testo);
 // sheet.getRange(row, 1, 1, 1).setValue(getLastNdays(lastdays));
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  




function outputToSpreadsheet_tot_row(results,testo,tab,rowstart,col) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(); //old
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[Number(tab)]; //new
  
 
  
//Print the total Value
 var data = [];
 var totals = results.totalsForAllResults;
  
 for (var i = 1, header; header = results.columnHeaders[i]; i++) {
  data.push(results.totalsForAllResults[header.name]);
}
  var final = data[1];
 //var rowstart = rowstart+step-1;
 //var col = sheet.getLastColumn()-1;
// var col2= data.length;  //new
  sheet.getRange(rowstart, col, 1, 1).setValue(final);
//sheet.getRange(rowstart, 1, 1, 1).setValue(testo);
 // sheet.getRange(row, 1, 1, 1).setValue(getLastNdays(lastdays));
  
//  if (results==undefined) { sheet.getRange(row, 1, 1, 1).setValue(testo);}
    
}  
