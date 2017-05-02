function createTrigger() {
  // Runs at approximately 5:30am in the timezone of the script
  ScriptApp.newTrigger("run_report_1_data")
   .timeBased()
   .atHour(10)
   .nearMinute(05)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();

 ScriptApp.newTrigger("run_all_scripts_events_1")
   .timeBased()
   .atHour(10)
   .nearMinute(10)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();

  ScriptApp.newTrigger("run_all_scripts_events_2")
   .timeBased()
   .atHour(10)
   .nearMinute(20)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();

  ScriptApp.newTrigger("run_all_scripts_events_3")
   .timeBased()
   .atHour(10)
   .nearMinute(30)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();
  
  ScriptApp.newTrigger("run_MCF_1_events")
   .timeBased()
   .atHour(10)
   .nearMinute(40)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();
  
  ScriptApp.newTrigger("run_MCF_2_events")
   .timeBased()
   .atHour(10)
   .nearMinute(50)
   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
   .create();
  
}

