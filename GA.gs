
  

function runDemo_test() {
  try {

    var firstProfile = getFirstProfile();
       var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');
     
      
    // spark47
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47case');
    if (results!=undefined) {    clear_sheet(0)  // only first time
        outputToSpreadsheet(results,'spark47case'); // scrive dati del profilo nello sheet3
    clear_sheet(1) // only first time
        //outputToSpreadsheet_tot_headers(results); // scrive headers e totali  del profilo nello sheet4
      //outputToSpreadsheet_tot(results,'spark47case');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,7,4);
                            }
     else { printempty('spark47Case'); }
    
  
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47formazione');
    if (results!=undefined)  {   outputToSpreadsheet(results,'sparks47Lavoro');  //outputToSpreadsheet_tot(results,'sparks47Lavoro'); 
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,16,4);
                             }
    else { printempty('spark47Lavoro'); }
    
   // var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=~sparks47lavoro');
   // if (results!=undefined) {outputToSpreadsheet(results,'sparks47Lavoro');    //outputToSpreadsheet_tot(results,'sparks47Lavoro');}
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47motori');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47Motori');    //outputToSpreadsheet_tot(results,'sparks47Motori');
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,27,4);
                            }
    else { printempty('spark47Motori'); }

    
         
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47comprovendo');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47comprovendo');    //outputToSpreadsheet_tot(results,'sparks47comprovendo');    
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,38,4);
                            }
    else { printempty('spark47Comprovendo'); }
    
    
    //sparks47formazionemobile
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47formazionemobile');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47formazionemobile');    //outputToSpreadsheet_tot(results,'sparks47comprovendo');    
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,66,4);
                            }
    else { printempty('sparks47formazionemobile'); }
    
    //sparks47casemobile
        var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47casemobile');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47casemobile');    //outputToSpreadsheet_tot(results,'sparks47comprovendo');    
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,67,4);
                            }
    else { printempty('sparks47casemobile'); }
   
    //sparks47motorimobile
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==sparks47motorimobile');
    if (results!=undefined) { outputToSpreadsheet(results,'sparks47motorimobile');    //outputToSpreadsheet_tot(results,'sparks47comprovendo');    
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,68,4);
                            }
    else { printempty('sparks47motorimobile'); }
    
    ///////////// sparks47
    
    
    
      //Mitula
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~case.mitula,ga:campaign==Mitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaCase');      //outputToSpreadsheet_tot(results,'MitulaCase');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,9,4);
                            }
    else { printempty('MitulaCase'); }
    
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~lavoromitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaLavoro');    //outputToSpreadsheet_tot(results,'MitulaLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,20,4);
                            }
    else { printempty('MitulaLavoro'); }  

    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~auto.mitula');
    if (results!=undefined) {    outputToSpreadsheet(results,'MitulaMotori');    //outputToSpreadsheet_tot(results,'MitulaMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,30,4);
                            }
    else { printempty('MitulaMotori'); }
    //////////////// Mitula
    
    
    
    //Wickedin
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Wickedincase');
    if (results!=undefined) {   outputToSpreadsheet(results,'WickedinCase');    //outputToSpreadsheet_tot(results,'WickedinCase'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,10,4);
                            }
    else { printempty('WickedinCase'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Wickedinlavoro');
    if (results!=undefined) { outputToSpreadsheet(results,'WickedinLavoro'); //outputToSpreadsheet_tot(results,'WickedinLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,19,4);
                            }
    else { printempty('WickedinLavoro'); }
    
    // Wickedin auto
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Wickedinauto');
      if (results!=undefined){ outputToSpreadsheet(results,'WickedinAuto');   //outputToSpreadsheet_tot(results,'WickedinMotori');  
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,29,4);
                             }
    else { printempty('WickedinAuto'); }
    // Wickedin moto
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Wickedinmoto');
      if (results!=undefined){ outputToSpreadsheet(results,'WickedinMoto');   //outputToSpreadsheet_tot(results,'WickedinMotori');  
                             outputToSpreadsheet_tot_row_ga_data(results,'',tab1,75,4);
                             }
    else { printempty('WickedinMoto'); }
    //////////////// Wickedin
    
    
    
    
    /// Criteo
    // criteo case
    var results = getReportDataForProfile_case('ga:campaign',firstProfile,'ga:campaign=~lower_funnel');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoCase');    //outputToSpreadsheet_tot(results,'CriteoCase');         
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,5,4);
                            }
    else { printempty('CriteoCase'); }
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~lower_funnel');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoLavoro');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,15,4);
                            }
    else { printempty('Criteolavoro'); }
                             
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~criteomidfunnel');
    if (results!=undefined) {    outputToSpreadsheet(results,'criteomidfunnel');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,76,4);
                            }
    else { printempty('criteomidfunnel'); }
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~ligatus');
    if (results!=undefined) {    outputToSpreadsheet(results,'ligatus');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,77,4);
                            }
    else { printempty('ligatus'); }
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~taboola');
    if (results!=undefined) {    outputToSpreadsheet(results,'taboola');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,78,4);
                            }
    else { printempty('taboola'); }
    
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~Chameleon');
    if (results!=undefined) {    outputToSpreadsheet(results,'Chameleon');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,79,4);
                            }
    else { printempty('Chameleon'); }
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~_4W');
    if (results!=undefined) {    outputToSpreadsheet(results,'4W');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,80,4);
                            }
    else { printempty('_4W'); }
    
    


        var results = getReportDataForProfile_motori('ga:campaign',firstProfile,'ga:campaign=~lower_funnel');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoMotori');    //outputToSpreadsheet_tot(results,'CriteoLavoro'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,60,4);
                            }
    else { printempty('CriteoMotori'); }

    
     var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~criteofb');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoFB');    //outputToSpreadsheet_tot(results,'CriteoFB'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,48,4);
                            }
    else { printempty('CriteoFB'); }
    
    //affinity overall
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~criteoaffinity');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoAffinity'); //outputToSpreadsheet_tot(results,'CriteoAffinity')
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,49,4);                           
                            }
    else { printempty('CriteoAffinity'); }  
    
    //affinity case
    var results = getReportDataForProfile_case('ga:campaign',firstProfile,'ga:campaign=~criteoaffinity');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoAffinity case'); //outputToSpreadsheet_tot(results,'CriteoAffinity')
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,64,4);                           
                            }
    else { printempty('CriteoAffinity'); } 
    
    //affinity lavoro
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign=~criteoaffinity');
    if (results!=undefined) { outputToSpreadsheet(results,'CriteoAffinity lavoro'); //outputToSpreadsheet_tot(results,'CriteoAffinity')
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,65,4);                           
                            }
    else { printempty('CriteoAffinity'); } 
    
    
    
    var results = getReportDataForProfile_formazione('ga:campaign',firstProfile,'ga:campaign=~lower_funnel');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoFormazione');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,35,4);
                            }
    else { printempty('CriteoFormazione'); }
    
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==criteoemail');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoEmail');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,63,4);
                            }
    else { printempty('CriteoEmail'); }
    
    
    var results = getReportDataForProfile_case('ga:campaign',firstProfile,'ga:campaign==criteoemail');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoEmail CASE');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,72,4);
                            }
    else { printempty('CriteoEmail'); }
    
    var results = getReportDataForProfile_lavoro('ga:campaign',firstProfile,'ga:campaign==criteoemail');
    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoEmail LAVORO');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,73,4);
                            }
    else { printempty('CriteoEmail'); }
    
    
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign==criteoaudiencetargeting');
    if (results!=undefined) {    outputToSpreadsheet(results,'criteoaudiencetargeting');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,69,4);
                            }
    else { printempty('criteoaudiencetargeting'); }
    
    
    
// test only
//    
//    var results = getReportDataForProfile('ga:campaign',firstProfile,'ga:campaign=@lower_funnel,ga:campaign=@criteo');
//    if (results!=undefined) {    outputToSpreadsheet(results,'CriteoAggregated');  //outputToSpreadsheet_tot(results,'CriteoFormazione');   
//                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,63,4);
//                            }
//    else { printempty('CriteoAggregated'); }
  
    
    //////////////// Criteo
  
    
 
    //Trovit
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~trovit;ga:campaign!@auto.trovit;ga:campaign!@lavoro.trovit');
    if (results!=undefined) {    outputToSpreadsheet(results,'TrovitCase');    //outputToSpreadsheet_tot(results,'TrovitCase');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,8,4);
                            }
    else { printempty('TrovitCase'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~lavoro.trovit');
    if (results!=undefined) {    outputToSpreadsheet(results,'TrovitLavoro');    //outputToSpreadsheet_tot(results,'TrovitLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,21,4);
                            }
    else { printempty('TrovitLavoro'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~auto.trovit');
    if (results!=undefined) {outputToSpreadsheet(results,'TrovitMotori');    //outputToSpreadsheet_tot(results,'TrovitMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,28,4);
                            }
    else { printempty('TrovitMotori'); }
    //////////////// Trovit
    
    
    
     
   
    
    
    /// ADWORDS
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~immobiliar,ga:campaign=~affitto;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsCase');    //outputToSpreadsheet_tot(results,'AdWordsCase');
                          outputToSpreadsheet_tot_row_ga_data(results,'',tab1,3,4);  
                            }
    else { printempty('AdWordsCase'); }
   // var results = getReportDataForProfile_events('ga:eventaction',firstProfile,'ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
   // if (results!=undefined) {    outputToSpreadsheet_events(results,'AdWordsCase');    //outputToSpreadsheet_tot_events(results,'AdWordsCase');}
   // else { printempty_events('AdWordsCase'); }
    
    
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~lavoro,ga:campaign=~commessi;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsLavoro');    //outputToSpreadsheet_tot(results,'AdWordsLavoro');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,14,4);
                            }
    else { printempty('AdWordsLavoro'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~automotive;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsMotori');    //outputToSpreadsheet_tot(results,'AdWordsMotori');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,26,4);
                            }
    else { printempty('AdWordsMotori'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~formazione;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsFormazione');    //outputToSpreadsheet_tot(results,'AdWordsFormazione');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,33,4);
                            }
    else { printempty('AdWordsFormazione'); }
    
    
     var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Comprovendo;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {  outputToSpreadsheet(results,'AdWordsComproVendo');    //outputToSpreadsheet_tot(results,'AdWordsComproVendo'); 
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,37,4);
                            }
     else { printempty('AdWordsComprovendo'); }
    
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {    outputToSpreadsheet(results,'AdWordsServizi');    //outputToSpreadsheet_tot(results,'AdWordsServizi');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,41,4);
                            }
    else { printempty('AdWordsServizi'); }
    
   // adv generico deve contenere tutto ciò che non è IMMOBILIARE e LAVORO
    // https://analytics.google.com/analytics/web/#report/advertising-adwords-accounts/a3004501w5587142p43015466/%3F_u.date00%3D20170301%26_u.date01%3D20170331/
    
     var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign!@immobiliar;ga:campaign!@affitto;ga:campaign!@commessi;ga:campaign!@lavoro;ga:campaign!@automotive;ga:campaign!@formazione;ga:campaign!@Comprovendo;ga:campaign!@servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet(results,'AdWordsGenerico');   //outputToSpreadsheet_tot(results,'AdWordsGenerico');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,52,4);
                            }
    else { printempty('AdWordsGenerico'); }
 
 /////////////ADWORDS
    
   
                             
    //Yahooadv
    var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=~yahooadv');
    if (results!=undefined) {    outputToSpreadsheet(results,'YahooAdv');    //outputToSpreadsheet_tot(results,'YahooAdv');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,4,4); 
                            }
    else { printempty('YahooAdv'); }
    ////Yahooadv
    
    //Yahoo Native
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~native');
    if (results!=undefined) {    outputToSpreadsheet(results,'YahooNative');    //outputToSpreadsheet_tot(results,'YahooNative');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,47,4);
                            }
    else { printempty('YahooNative'); }
    ////Yahoo Native
    
    //Tuttitalia
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:source=~tuttitalia');
    if (results!=undefined) {    outputToSpreadsheet(results,'Tuttitalia');    //outputToSpreadsheet_tot(results,'Tuttitalia');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,50,4);
                            }
    else { printempty('Tuttitalia'); }
    ////Tuttitalia
    
    //-----
     // indeed
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~indeed');
    if (results!=undefined) {    outputToSpreadsheet(results,'Indeed');    //outputToSpreadsheet_tot(results,'Indeed');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,18,4);
                            }
    else { printempty('Indeed'); }
    /////indeed
    
    //Immobiliare
    var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=@immobiliare.it');
    if (results!=undefined) {    outputToSpreadsheet(results,'immobiliare.it');    //outputToSpreadsheet_tot(results,'Immobiliare.it');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,6,4);
                            }
    else { printempty('Immobiliare.it'); }
    ////Immobiliare
    
     // libero
    var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~^libero');
    if (results!=undefined) {    outputToSpreadsheet(results,'Libero');    //outputToSpreadsheet_tot(results,'Libero');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,45,4);
                            }
    else { printempty('Libero'); }
    /////libero
    
    // tiscali
    var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=~(tiscaliadv|^tiscali$)');  //(tiscaliadv|^tiscali$)
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
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~gohome');
    if (results!=undefined) {    outputToSpreadsheet(results,'gohome');    //outputToSpreadsheet_tot(results,'gohome');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,12,4);
                            }
    else { printempty('GoHome'); }
    //////Gohome
    
      //Jobtome
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~jobtome_paid');
    if (results!=undefined) {outputToSpreadsheet(results,'jobtome_paid');    //outputToSpreadsheet_tot(results,'jobtome_paid');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,22,4);
                            }
    else { printempty('jobtome_paid'); }
    //////Jobtome
    
      //Jooble
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Jooble');
    if (results!=undefined) { outputToSpreadsheet(results,'Jooble');    //outputToSpreadsheet_tot(results,'Jooble');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,23,4);
                            }
    else { printempty('Jooble'); }
    //////Jooble
    
        //Nestoria
       var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=~Nestoria');
    if (results!=undefined) { outputToSpreadsheet(results,'Nestoria');    //outputToSpreadsheet_tot(results,'Nestoria');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,11,4);
                            }
    else { printempty('Nestoria'); }
    //////Nestoria
    
    //Careerjet
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Careerjet');
    if (results!=undefined) { outputToSpreadsheet(results,'Careerjet');    //outputToSpreadsheet_tot(results,'Careerjet');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,24,4);
                            }
    else { printempty('Careerjet'); }
    //////Careerjet
   
     //Autoxy
       var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~Autoxy');
    if (results!=undefined) {outputToSpreadsheet(results,'Autoxy');    //outputToSpreadsheet_tot(results,'Autoxy');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,31,4);
                            }
    else { printempty('Autoxy'); }
    //////Autoxy
    
      //Splio
   
     var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~alert');
    if (results!=undefined) {outputToSpreadsheet(results,'Splio');    //outputToSpreadsheet_tot(results,'Splio');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,53,4);
                            }
    else { printempty('Splio'); }
    
    //////Splio
    
       //jobrapido
        var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~jobrapido');
    if (results!=undefined) {outputToSpreadsheet(results,'jobrapido');    //outputToSpreadsheet_tot(results,'jobrapido');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,17,4);
                            }
    else { printempty('jobrapido'); }
    
    //////jobrapido
    
       //in-vendita.it r=61
        var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=~in-vendita.it');
    if (results!=undefined) {outputToSpreadsheet(results,'in-vendita.it');    //outputToSpreadsheet_tot(results,'jobrapido');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,61,4);
                            }
    else { printempty('in-vendita.it'); }
    
    //////in-vendita.it r=61
    
    
    //bancalavoroRU r=62
    
      var results = getReportDataForProfile_original('ga:source',firstProfile,'ga:source=~bancalavoroRU');
    if (results!=undefined) {outputToSpreadsheet(results,'bancalavoroRU');    //outputToSpreadsheet_tot(results,'jobrapido');
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,62,4);
                            }
    else { printempty('bancalavoroRU'); }
    //bancalavoroRU r=62
    
    
    
        //taboolacase r=74
    
      var results = getReportDataForProfile_original('ga:campaign',firstProfile,'ga:campaign=~taboolacase');
    if (results!=undefined) {outputToSpreadsheet(results,'taboolacase');    
                            outputToSpreadsheet_tot_row_ga_data(results,'',tab1,74,4);
                            }
    else { printempty('~taboolacase'); }
   

    
    
    
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


function getReportDataForProfile_case(tipo,firstProfile,filters) {

  var profileId = "51520003";  // CASE profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
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


/////////////////////////////////



function getReportDataForProfile_lavoro(tipo,firstProfile,filters) {

  var profileId = "51871756";  // LAVORO profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
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

/////////////////////////////////


function getReportDataForProfile_motori(tipo,firstProfile,filters) {

  var profileId = "51551214";  //  MOTORI profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
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

/////////////////////////////////


function getReportDataForProfile_formazione(tipo,firstProfile,filters) {

  var profileId = "51958562";  //  FORMAZIONE profilo che si trova in https://ga-dev-tools.appspot.com/explorer/?metrics=ga%253Asessions%252Cga%253Apageviews
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

/////////////////////////////////





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