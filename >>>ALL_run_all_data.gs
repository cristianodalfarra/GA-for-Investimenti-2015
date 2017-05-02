///////////////////////////////////////////////
// esecuzione degli script delle metriche base.
///////////////////////////////////////////////

function prop (start,end,tabmonth) {
var scriptProperties = PropertiesService.getScriptProperties();
  var newProperties = {start_date:start,end_date:end,tab:tabmonth};
scriptProperties.setProperties(newProperties);
var test=1;
}




//var START_DATE = "2015-06-01"   ///--------------------vale per tutti gli script
//var END_DATE = "2015-06-22"     ///--------------------vale per tutti gli script  


function run_all_scripts_data()

{
 
  
  runDemo_test();
  runDemo_tiscali();
  runDemo_gnocca();
  
//  runDemo_test_events();
//  runDemo_test_events_2();
//  runDemo_tiscali_events ();
}

// ======================================================================================================================

function run_report_1_data() 
{  
 // if (getLastNdays(0)=="2017-01-30")   {clear_sheet(0);  prop ("2017-01-01","2017-01-30",26);runDemo_test();runDemo_tiscali();runDemo_gnocca();runDemo_FB(); } 
  
  /* Blocco da 2 con sessioni da campagne e DirectCampaign*/
  /* eseguire una riga per volta */
  /*scrivere sullo stesso tab */
  // +++++++++++++++++++++++++++++++++++++
  if (getLastNdays(0)=="2017-05-03")   {clear_sheet(0);  prop ("2017-03-01","2017-03-31",26);runDemo_test();runDemo_FB();runDemo_tiscali();runDemo_gnocca(); } 
  if (getLastNdays(0)=="2017-04-03")   {clear_sheet(0);  prop ("2017-03-01","2017-03-31",26);runDemo_direct();runDemo_FB_direct();runDemo_tiscali_direct();runDemo_gnocca_direct();} 
  // +++++++++++++++++++++++++++++++++++++
}

// ======================================================================================================================


/*
function run_report_2_data() 
  { 
  if (getLastNdays(0)=="2015-06-30")   {clear_sheet(0);  prop ("2015-06-01","2015-06-09");runDemo_tiscali(); }   
  if (getLastNdays(0)=="2015-07-02")   {clear_sheet(0);  prop ("2015-06-01","2015-06-30");runDemo_tiscali(); } 
  if (getLastNdays(0)=="2015-08-02")   {clear_sheet(0);  prop ("2015-07-01","2015-07-31");runDemo_tiscali(); } 
  if (getLastNdays(0)=="2015-09-02")   {clear_sheet(0);  prop ("2015-08-01","2015-08-31");runDemo_tiscali(); } 
  if (getLastNdays(0)=="2015-10-01")   {clear_sheet(0);  prop ("2015-09-01","2015-09-30",14);runDemo_tiscali(); } 
  }
 
function run_report_3_data() 
  { 
  
    if (getLastNdays(0)=="2015-06-30")   {clear_sheet(0);  prop ("2015-06-01","2015-06-09");runDemo_gnocca(); }   
    if (getLastNdays(0)=="2015-07-02")   {clear_sheet(0);  prop ("2015-06-01","2015-06-30");runDemo_gnocca(); } 
   if (getLastNdays(0)=="2015-08-02")   {clear_sheet(0);  prop ("2015-07-01","2015-07-31");runDemo_gnocca(); } 
   if (getLastNdays(0)=="2015-09-02")   {clear_sheet(0);  prop ("2015-08-01","2015-08-31");runDemo_gnocca(); } 
   if (getLastNdays(0)=="2015-10-01")   {clear_sheet(0);  prop ("2015-09-01","2015-09-30",14);runDemo_gnocca(); } 
    

  
  }

*/   


