///////////////////////////////////////////////
// esecuzione degli script degli eventi.
///////////////////////////////////////////////

//==============================================

function run_all_scripts_events_1() {
  runDemo_test_events();
}


function run_all_scripts_events_2() {
 runDemo_test_events_2();
}



function run_all_scripts_events_3() {
  runDemo_FB_events();
  runDemo_tiscali_events ();  //tiscali
  runDemo_gnocca_events();    //gnoccaforum e gnoccatravel
  
}

//==============================================




function run_report_1_events() 
{  
  if (getLastNdays(0)=="2015-06-23")   {prop ("2015-06-01","2015-06-09",14);run_all_scripts_events_1(); } 
  if (getLastNdays(0)=="2015-07-02")   {prop ("2015-06-01","2015-06-30");run_all_scripts_events_1(); } 
  if (getLastNdays(0)=="2015-08-02")   {prop ("2015-07-01","2015-07-31");run_all_scripts_events_1(); } 
  if (getLastNdays(0)=="2015-09-02")   {prop ("2015-08-01","2015-08-31");run_all_scripts_events_1(); } 
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-09-01","2015-09-30",14);run_all_scripts_events_1();} 
  
  if (getLastNdays(0)=="2015-12-18")   {prop ("2015-10-01","2015-10-31",15);run_all_scripts_events_1();} 
if (getLastNdays(0)=="2015-12-15")   {prop ("2015-11-01","2015-11-30",16);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-02-09")   {prop ("2016-01-01","2016-01-31",18);run_all_scripts_events_1();} 
    if (getLastNdays(0)=="2016-03-04")   {prop ("2016-02-01","2016-02-29",19);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);run_all_scripts_events_1();} 
 if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);run_all_scripts_events_1();} 
// test only
  //if (getLastNdays(0)=="2016-04-11")   {prop ("2016-01-01","2016-03-31",21);runDemo_test_criteo();} 
  if (getLastNdays(0)=="2016-04-11")   {prop ("2015-01-01","2015-03-31",22);runDemo_test_criteo();} 
if (getLastNdays(0)=="2016-05-17")   {prop ("2016-04-01","2016-04-30",21);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);run_all_scripts_events_1();} 
if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);run_all_scripts_events_1();} 
if (getLastNdays(0)=="2016-12-02")   {prop ("2016-11-01","2016-11-30",26);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2017-01-11")   {prop ("2016-12-01","2016-12-31",26);run_all_scripts_events_1();} 
if (getLastNdays(0)=="2017-03-02")   {prop ("2017-02-01","2017-02-28",26);run_all_scripts_events_1();} 
  if (getLastNdays(0)=="2017-04-03")   {prop ("2017-03-01","2017-03-31",26);run_all_scripts_events_1();} 
}


function run_report_2_events() 
{  
  if (getLastNdays(0)=="2015-06-23")   {prop ("2015-06-01","2015-06-02");run_all_scripts_events_2(); } 
  if (getLastNdays(0)=="2015-07-02")   {prop ("2015-06-01","2015-06-30");run_all_scripts_events_2(); } 
  if (getLastNdays(0)=="2015-08-02")   {prop ("2015-07-01","2015-07-31");run_all_scripts_events_2(); } 
  if (getLastNdays(0)=="2015-09-02")   {prop ("2015-08-01","2015-08-31");run_all_scripts_events_2(); } 
  if (getLastNdays(0)=="2015-10-01")   {prop ("2015-09-01","2015-09-30",14);run_all_scripts_events_2(); } 
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-10-01","2015-10-31",15);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2015-12-09")   {prop ("2015-11-01","2015-11-30",16);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-02-02")   {prop ("2016-01-01","2016-01-31",18);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2016-03-08")   {prop ("2016-02-01","2016-02-29",19);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2016-05-15")   {prop ("2016-04-01","2016-04-30",21);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);run_all_scripts_events_2();}
  if (getLastNdays(0)=="2016-12-02")   {prop ("2016-11-01","2016-11-30",26);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2017-01-11")   {prop ("2016-12-01","2016-12-31",26);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2017-02-02")   {prop ("2017-01-01","2017-01-31",26);run_all_scripts_events_2();} 
if (getLastNdays(0)=="2017-03-02")   {prop ("2017-02-01","2017-02-28",26);run_all_scripts_events_2();} 
  if (getLastNdays(0)=="2017-04-03")   {prop ("2017-03-01","2017-03-31",26);run_all_scripts_events_2();} 
}


function run_report_3_events() 
{  
  
  //if (getLastNdays(0)=="2015-10-01")   {prop ("2015-08-01","2015-08-31",14); run_gnocca_events(); } 
  
  if (getLastNdays(0)=="2015-06-23")   {prop ("2015-06-01","2015-06-05"); run_all_scripts_events_3(); } 
  if (getLastNdays(0)=="2015-07-02")   {prop ("2015-06-01","2015-06-30"); run_all_scripts_events_3(); } 
  if (getLastNdays(0)=="2015-08-02")   {prop ("2015-07-01","2015-07-31"); run_all_scripts_events_3(); } 
  if (getLastNdays(0)=="2015-09-02")   {prop ("2015-08-01","2015-08-31"); run_all_scripts_events_3(); } 
  if (getLastNdays(0)=="2015-10-01")   {prop ("2015-09-01","2015-09-30",14); run_all_scripts_events_3(); } 
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-10-01","2015-10-31",15); run_all_scripts_events_3();} 
if (getLastNdays(0)=="2015-12-18")   {prop ("2015-11-01","2015-11-30",16);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-02-02")   {prop ("2016-01-01","2016-01-31",18);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-03-04")   {prop ("2016-02-01","2016-02-29",19);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);run_all_scripts_events_3();} 
  //if (getLastNdays(0)=="2016-05-12")   {clear_sheet(2);prop ("2016-03-01","2016-03-31",21);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2016-12-02")   {prop ("2016-11-01","2016-11-30",26);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2017-01-11")   {prop ("2016-12-01","2016-12-31",26);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2017-02-28")   {prop ("2017-02-01","2017-02-28",26);run_all_scripts_events_3();} 
if (getLastNdays(0)=="2017-03-02")   {prop ("2017-02-01","2017-02-28",26);run_all_scripts_events_3();} 
  if (getLastNdays(0)=="2017-04-03")   {prop ("2017-03-01","2017-03-31",26);run_all_scripts_events_3();} 
}



function run_MCF_1_events() 
{  
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-09-01","2015-09-30",14); MCF_runDemo_test_events(); } 
  if (getLastNdays(0)=="2015-12-18")   {prop ("2015-10-01","2015-10-31",15);  MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2015-12-15")   {prop ("2015-11-01","2015-11-30",16);  MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);  MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);  MCF_runDemo_test_events();} 
   if (getLastNdays(0)=="2016-02-02")   {prop ("2016-01-01","2016-01-31",18);  MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-03-04")   {prop ("2016-02-01","2016-02-29",19);  MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);  MCF_runDemo_test_events();} 
 if (getLastNdays(0)=="2016-05-03")   {prop ("2016-04-01","2016-04-30",21);MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);MCF_runDemo_test_events();} 
if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);MCF_runDemo_test_events();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);MCF_runDemo_test_events();} 
}





function run_MCF_2_events() 
{  
  if (getLastNdays(0)=="2015-10-01")   {prop ("2015-09-01","2015-09-30",14);  MCF_runDemo_test_events_2(); } 
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-10-01","2015-10-31",15); MCF_runDemo_test_events_2();} 
if (getLastNdays(0)=="2015-12-09")   {prop ("2015-11-01","2015-11-30",16);  MCF_runDemo_test_events_2();} 
if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);  MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-02-09")   {prop ("2016-01-01","2016-01-31",18);  MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-03-04")   {prop ("2016-02-01","2016-02-29",19);  MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);  MCF_runDemo_test_events_2();} 
if (getLastNdays(0)=="2016-05-17")   {prop ("2016-04-01","2016-04-30",21);MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);MCF_runDemo_test_events_2();} 
if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);MCF_runDemo_test_events_2();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);MCF_runDemo_test_events_2();} 
}


function run_MCF_3_events() 
{  
  if (getLastNdays(0)=="2015-10-01")   {prop ("2015-09-01","2015-09-30",14);  MCF_runDemo_test_events_3(); } 
  if (getLastNdays(0)=="2015-12-17")   {prop ("2015-10-01","2015-10-31",15); MCF_runDemo_test_events_3();} 
if (getLastNdays(0)=="2015-12-18")   {prop ("2015-11-01","2015-11-30",16);  MCF_runDemo_test_events_3();} 
if (getLastNdays(0)=="2016-01-07")   {prop ("2015-12-01","2015-12-31",17);  MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-02-12")   {prop ("2016-01-01","2016-01-31",18);  MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-03-04")   {prop ("2016-02-01","2016-02-29",19);  MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-04-18")   {prop ("2016-03-01","2016-03-31",20);  MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-05-04")   {prop ("2016-04-01","2016-04-30",21);MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-06-07")   {prop ("2016-05-01","2016-05-31",22);MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-07-04")   {prop ("2016-06-01","2016-06-30",23);MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-08-09")   {prop ("2016-07-01","2016-07-31",24);MCF_runDemo_test_events_3();} 
if (getLastNdays(0)=="2016-09-02")   {prop ("2016-08-01","2016-08-31",25);MCF_runDemo_test_events_3();} 
  if (getLastNdays(0)=="2016-10-10")   {prop ("2016-09-01","2016-09-30",26);MCF_runDemo_test_events_3();} 
}


function run_MCF_criteo_test() 
{ 
  //if (getLastNdays(0)=="2016-04-11")   {prop ("2016-01-01","2016-03-31",21);  MCF_criteo_test();} 
  if (getLastNdays(0)=="2016-04-11")   {prop ("2015-01-01","2015-03-31",22);  MCF_criteo_test();} 
}
