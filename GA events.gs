
function runDemo_test_events() {
  try {

    var firstProfile = getFirstProfile_events();
    var scriptProperties = PropertiesService.getScriptProperties();
    var tab1 = scriptProperties.getProperty('tab');

    
    /// ADWORDS
   
    
        //case
    clear_sheet(2)  // only first time
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~immobiliar;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    outputToSpreadsheet_events(results,'AdWordsCase-risposta');
     clear_sheet(3) // only first time
    outputToSpreadsheet_tot_headers_events(results); // scrive headers e totali  del profilo nello sheet4
    //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsCase');
    outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,3,9); // (...,...,tab,rowstart,colstart)
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~immobiliar;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsCase-telefono');    
                             //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsCase');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,3,10); 
                            }
    else { printempty_events('telefono', 'AdWordsCase'); }
   

    
    
         //lavoro
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoro;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordslavoro-risposta');    
                             //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,14,9);
                            }
    else { printempty_events('risposta', 'AdWordsLavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoro;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordslavoro-telefono');
                             //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,14,10); 
                            }
    else { printempty_events('telefono', 'AdWordsLavoro'); }
            
         //motori
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~automotive;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsMotori-risposta');    
                            // outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsMotori');
                             outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,26,9);
                            }
    else { printempty_events('risposta', 'AdWordsMotori'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~automotive;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsMotori-telefono');    
                            // outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsMotori');
                             outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,26,10); 
                            }
    else { printempty_events('telefono', 'AdWordsMotori'); }
    
        //formazione
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~formazione;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsFormazione-risposta');  
                             //  outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsFormazione');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,33,9);
                            }
    else { printempty_events('risposta', 'AdWordsFormazione'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~formazione;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsFormazione-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsFormazione');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,33,10); 
                            }
    else { printempty_events('telefono', 'AdWordsFormazione'); }
    
    
       //Comprovendo
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~comprovendo;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsComprovendo-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsComprovendo');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,37,9);
                            }
    else { printempty_events('risposta', 'AdWordsComprovendo'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~comprovendo;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsComprovendo-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsComprovendo');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,37,10); 
                            }
    else { printempty_events('telefono', 'AdWordsComprovendo'); }

    //Servizi
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~servizi -;ga:eventaction=~risposta;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsServizi-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsServizi');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,41,9);
                            }
    else { printempty_events('risposta', 'AdWordsServizi'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~servizi -;ga:eventaction=~telefono;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsServizi-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsServizi');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,41,10);  
                            }
    else { printempty_events('telefono', 'AdWordsServizi'); }
    
    //Generico
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:eventaction=~risposta;ga:campaign!@immobiliar;ga:campaign!@lavoro;ga:campaign!@automotive;ga:campaign!@formazione;ga:campaign!@Comprovendo;ga:campaign!@servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsGenerico-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'AdWordsGenerico');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,52,9);
                            }
    else { printempty_events('risposta', 'AdWordsGenerico'); }
    
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:eventaction=~telefono;ga:campaign!@immobiliar;ga:campaign!@lavoro;ga:campaign!@automotive;ga:campaign!@formazione;ga:campaign!@Comprovendo;ga:campaign!@servizi -;ga:adwordsCampaignID!=(not set)');
    if (results!=undefined) {outputToSpreadsheet_events(results,'AdWordsGenerico-telefono');   // outputToSpreadsheet_tot_events(results,'telefono', 'AdWordsGenerico');
                             outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,52,10); 
                            }
    
    else { printempty_events('telefono', 'AdWordsGenerico'); }
   
   
    
    // ---------------->
    
    // indeed
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~indeed;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'indeed-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'indeed');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,18,9);
                            }
    else { printempty_events('risposta', 'indeed'); }
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~indeed;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'indeed-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'indeed');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,18,10); 
                            }
    else { printempty_events('telefono', 'indeed'); }
    /////indeed
    
    // Sparks47
    
      //case
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47case;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47case-risposta');   //outputToSpreadsheet_tot_events(results,'risposta', 'sparks47case');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,7,9);
                            }
    else { printempty_events('risposta', 'sparks47case'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47case;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47case-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47case');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,7,10); 
                            }
    else { printempty_events('telefono', 'sparks47case'); }
      
      //lavoro
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47formazione;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47lavoro-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'sparks47lavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,16,9);
                            }
    else { printempty_events('risposta', 'sparks47lavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47formazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47lavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47lavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,16,10);
                            }
    else { printempty_events('telefono', 'sparks47lavoro'); }
    
    
     //comprovendo
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47comprovendo;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47comprovendo-risposta');   //  outputToSpreadsheet_tot_events(results,'risposta', 'sparks47comprovendo');
                           outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,38,9);
                            }
    else { printempty_events('risposta', 'sparks47comprovendo'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~sparks47comprovendo;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'sparks47comprovendo-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'sparks47comprovendo');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,38,10);
                            }
    else { printempty_events('telefono', 'sparks47comprovendo'); }
    
  
    
    
    
      //Mitula
         //case
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~case.mitula;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaCase-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'MitulaCase');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,9,9);
                            }
    else { printempty_events('risposta', 'MitulaCase'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~case.mitula;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaCase-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'MitulaCase');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,9,10); 
                            }
    else { printempty_events('telefono', 'MitulaCase'); }
  
  
  
    
    //lavoro
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoromitula;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaLavoro-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'MitulaLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,20,9);
                            }
    else { printempty_events('risposta', 'MitulaLavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoromitula;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaLavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'MitulaLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,20,10); 
                            }
    else { printempty_events('telefono', 'MitulaLavoro'); }
    
     //auto
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~auto.mitula;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaAuto-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'MitulaAuto');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,30,9);
                            }
    else { printempty_events('risposta', 'MitulaAuto'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~auto.mitula;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'MitulaAuto-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'MitulaAuto');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,30,10); 
                            }
    else { printempty_events('telefono', 'MitulaAuto'); }
    
    //////////////// Mitula
    
   
    
    //Wickedin
    
         //case
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedincase;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedincase-risposta');   //  outputToSpreadsheet_tot_events(results,'risposta', 'Wickedincase');
                           outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,10,9);
                            }
    else { printempty_events('risposta', 'Wickedincase'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedincase;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedincase-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Wickedincase');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,10,10); 
                            }
    else { printempty_events('telefono', 'Wickedincase'); }
    
       //Lavoro
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedinlavoro;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinlavoro-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'Wickedinlavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,19,9);
                            }
    else { printempty_events('risposta', 'Wickedinlavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedinlavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinlavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'Wickedinlavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,19,10); 
                            }
    else { printempty_events('telefono', 'Wickedinlavoro'); }
    
    
     // Motori
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedinauto,ga:campaign=~Wickedinmoto;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinauto+moto-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'Wickedinauto+moto');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,29,9);
                            }
    else { printempty_events('risposta', 'Wickedinauto+moto'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~Wickedinauto,ga:campaign=~Wickedinmoto;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'Wickedinauto+moto-telefono');   // outputToSpreadsheet_tot_events(results,'telefono', 'Wickedinauto+moto');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,29,10); 
                            }
    else { printempty_events('telefono', 'Wickedinauto+moto'); }
    
    
    //////////////// Wickedin
    
  
    /// Criteo
      //case
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~casecriteo;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'casecriteo-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'casecriteo');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,5,9);
                            }
    else { printempty_events('risposta', 'casecriteo'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~casecriteo;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'casecriteo-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'casecriteo');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,5,10); 
                            }
    else { printempty_events('telefono', 'casecriteo'); }
    
     //lavoro
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteolavoro;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteolavoro-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'criteolavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,15,9);
                            }
    else { printempty_events('risposta', 'criteolavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteolavoro;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteolavoro-telefono');  //  outputToSpreadsheet_tot_events(results,'telefono', 'criteolavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,15,10); 
                            }
    else { printempty_events('telefono', 'criteolavoro'); }
    
    
    //criteoFB
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteofb,ga:campaign=~criteofacebook;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteofb-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'criteofb');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,48,9);
                            }
    else { printempty_events('risposta', 'criteofb'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteofb,ga:campaign=~criteofacebook;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteofb-telefono');   //outputToSpreadsheet_tot_events(results,'telefono', 'criteofb');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,48,10); 
                            }
    else { printempty_events('telefono', 'criteofb'); }
    
       
      // criteoaffinity
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteoaffinity;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoaffinity-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'criteoaffinity');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,49,9);
                            }
    else { printempty_events('risposta', 'criteoaffinity'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteoaffinity;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoaffinity-telefono');   // outputToSpreadsheet_tot_events(results,'telefono', 'criteoaffinity');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,49,10); 
                            }
    else { printempty_events('telefono', 'criteoaffinity'); }
        
      //criteoformazione
    
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteoformazione;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoformazione-risposta');  // outputToSpreadsheet_tot_events(results,'risposta', 'criteoformazione');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,35,9);
                            }
    else { printempty_events('risposta', 'criteoformazione'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~criteoformazione;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'criteoformazione-telefono');    // outputToSpreadsheet_tot_events(results,'telefono', 'criteoformazione');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,35,10); 
                            }
    else { printempty_events('telefono', 'criteoformazione'); }
    
      
    //////////////// Criteo

  
     
    //Trovit
    
      //case
     var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~trovit;ga:campaign!@auto.trovit;ga:campaign!@lavoro.trovit;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitCase-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'TrovitCase');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,8,9);
                            }
    else { printempty_events('risposta', 'TrovitCase'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~trovit;ga:campaign!@auto.trovit;ga:campaign!@lavoro.trovit;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitCase-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'TrovitCase');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,8,10); 
                            }
    else { printempty_events('telefono', 'TrovitCase'); }
    
          //lavoro
    
      var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoro.trovit;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitLavoro-risposta');    //outputToSpreadsheet_tot_events(results,'risposta', 'TrovitLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,21,9);
                            }
    else { printempty_events('risposta', 'TrovitLavoro'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~lavoro.trovit;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitLavoro-telefono');    //outputToSpreadsheet_tot_events(results,'telefono', 'TrovitLavoro');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,21,10); 
                            }
    else { printempty_events('telefono', 'TrovitLavoro'); }
    
     //Motori
    
      var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~auto.trovit;ga:eventaction=~risposta');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitMotori-risposta');   // outputToSpreadsheet_tot_events(results,'risposta', 'TrovitMotori');
                            outputToSpreadsheet_tot_row_ga_events(results,'risposta',tab1,28,9);
                            }
    else { printempty_events('risposta', 'TrovitMotori'); }
    
    var results = getReportDataForProfile_events('ga:eventaction,ga:campaign',firstProfile,'ga:campaign=~auto.trovit;ga:eventaction=~telefono');
    if (results!=undefined) {outputToSpreadsheet_events(results,'TrovitMotori-telefono');   // outputToSpreadsheet_tot_events(results,'telefono', 'TrovitMotori');
                            outputToSpreadsheet_tot_row_ga_events(results,'telefono',tab1,28,10); 
                            }
    else { printempty_events('telefono', 'TrovitMotori'); }
   
   
    //////////////// Trovit
    
   

    
    
    
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
//  var startDate = getLastNdays(30);   // 2 weeks (a fortnight) ago.
//  var endDate = getLastNdays(1);      // Today.

  var scriptProperties = PropertiesService.getScriptProperties();
var startDate = scriptProperties.getProperty('start_date');
var endDate = scriptProperties.getProperty('end_date');
 
  print_info(startDate,endDate);

  
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
  
