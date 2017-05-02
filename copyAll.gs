// 1jIKTSz_vf3dnEeUkTaBbzbYGIYJtxOrYkUlNHlJdNR8  dest



function CopyDataToNewFile(sheetsource,cellsource,sheetdest,celldest) {
  var sss = SpreadsheetApp.openById('144SlCG9pk08-2N-Qx0nHOHxscc_i0q3vAdv54T23Lhg'); // sss = source spreadsheet (---->Report Investimenti - computation script)
  var ss = sss.getSheetByName(sheetsource); // ss = source sheet
  //Get full range of data
  var SRange = ss.getRange(cellsource);
   var SData = SRange.getValues();

  var tss = SpreadsheetApp.openById('10wrKN8QQyYk6c-tyy-vOuxNJconqdoL4peIKW3dpzGE'); // tss = target spreadsheet  (---> "MESE TEMPORANEO")
  var ts = tss.getSheetByName(sheetdest); // ts = target sheet
  //set the target range to the values of the source data
  ts.getRange(celldest).setValues(SData);

  
}  

 function getId() 
{
  Browser.msgBox('Spreadsheet key: ' + SpreadsheetApp.getActiveSpreadsheet().getId());
}
 


function CopyAll() {
  
  ///////////////////////////////////////
  
  var source_sheet= "REPORT FINALE"; // dal file 144SlCG9pk08-2N-Qx0nHOHxscc_i0q3vAdv54T23Lhg
  var dest_sheet=   "Jan 2017";  //dal file id_dest
  var id_dest=      "10wrKN8QQyYk6c-tyy-vOuxNJconqdoL4peIKW3dpzGE";  // si ottiene dalla getId sul file di destinazione MESE TEMPORANEO
  
 /////////////////////////////////////// 
  
 var tss = SpreadsheetApp.openById(id_dest) // tss = target spreadsheet
  var ts = tss.getSheetByName(dest_sheet)
// var ts1= ts.getRange(4,3,1,1);
  ts.getRange('d3:100').clearContent();
  //ts.getRange('i3:l51').clearContent();
 // ts.getRange('m3:p51').clearContent();
  
  // data
  
  CopyDataToNewFile(source_sheet,"d3:g12",dest_sheet,"d3:g12"); //CASE
  CopyDataToNewFile(source_sheet,"d14:g24",dest_sheet,"d14:g24"); //LAVORO
  CopyDataToNewFile(source_sheet,"d62:g62",dest_sheet,"d25:g25"); //LAVORO
  
  CopyDataToNewFile(source_sheet,"d26:g29",dest_sheet,"d27:g30"); //MOTORI
  CopyDataToNewFile(source_sheet,"d31:g31",dest_sheet,"d31:g31"); //MOTORI - AUTOXY
  CopyDataToNewFile(source_sheet,"d60:g60",dest_sheet,"d32:g32"); //MOTORI - Criteo Motori
   
  CopyDataToNewFile(source_sheet,"d33:g33",dest_sheet,"d34:g34"); //FORMAZIONE - ADWORD
   CopyDataToNewFile(source_sheet,"d35:g35",dest_sheet,"d35:g35"); //FORMAZIONE - CRITEO
  
  CopyDataToNewFile(source_sheet,"d61:g61",dest_sheet,"d37:g37"); //COMPROVENDO - in-vendita
  
  CopyDataToNewFile(source_sheet,"d57:g57",dest_sheet,"d40:g40"); //SERVIZI - gnoccatravel
  CopyDataToNewFile(source_sheet,"d56:g56",dest_sheet,"d41:g41"); //SERVIZI - gnoccaforum
  CopyDataToNewFile(source_sheet,"d59:g59",dest_sheet,"d42:g42"); //SERVIZI - fb cartomanzia
  
  CopyDataToNewFile(source_sheet,"d45:g45",dest_sheet,"d45:g45"); //BRAND - libero
  CopyDataToNewFile(source_sheet,"d46:g46",dest_sheet,"d53:g53"); //BRAND - Tiscali Campagne
  CopyDataToNewFile(source_sheet,"d47:g47",dest_sheet,"d46:g46"); //BRAND - yahoo native
  CopyDataToNewFile(source_sheet,"d49:g49",dest_sheet,"d47:g47"); //BRAND - criteo affinity
  CopyDataToNewFile(source_sheet,"d48:g48",dest_sheet,"d48:g48"); //BRAND - criteo FB
  
  
  CopyDataToNewFile(source_sheet,"d50:g50",dest_sheet,"d49:g49"); //BRAND - tuttitalia
  CopyDataToNewFile(source_sheet,"d52:g52",dest_sheet,"d50:g50"); //BRAND - adw generico
  CopyDataToNewFile(source_sheet,"d53:g53",dest_sheet,"d51:g51"); //BRAND - Splio
  CopyDataToNewFile(source_sheet,"d55:g55",dest_sheet,"d52:g52"); //BRAND - Tiscali cobrand
  CopyDataToNewFile(source_sheet,"d63:g63",dest_sheet,"d54:g54"); //BRAND - criteoemail
  //CopyDataToNewFile(source_sheet,"d61:g61",dest_sheet,"d51:g51"); //sheetsource,cellsource,sheetdest,celldest
  
  
  
  
  
  // formula data
  
  
  ts.getRange('h3:h12').setFormula("=iferror(c3/d3)");
  ts.getRange('h14:h25').setFormula("=iferror(c14/d14)");
  ts.getRange('h27:h32').setFormula("=iferror(c27/d27)");
  ts.getRange('h34:h35').setFormula("=iferror(c34/d34)");
  ts.getRange('h37:h37').setFormula("=iferror(c37/d37)");
  ts.getRange('h40:h43').setFormula("=iferror(c40/d40)");
  ts.getRange('h45:h54').setFormula("=iferror(c45/d45)");
  
  
  
  // events 
 CopyDataToNewFile(source_sheet,"i3:k12",dest_sheet,"i3:k12"); //CASE
  CopyDataToNewFile(source_sheet,"i14:k24",dest_sheet,"i14:k24"); //LAVORO
  CopyDataToNewFile(source_sheet,"i62:k62",dest_sheet,"i25:k25"); //LAVORO
  
  CopyDataToNewFile(source_sheet,"i26:k29",dest_sheet,"i27:k30"); //MOTORI
  CopyDataToNewFile(source_sheet,"i31:k31",dest_sheet,"i31:k31"); //MOTORI - AUTOXY
  CopyDataToNewFile(source_sheet,"i60:k60",dest_sheet,"i32:k32"); //MOTORI - Criteo Motori
   
  CopyDataToNewFile(source_sheet,"i33:k33",dest_sheet,"i34:k34"); //FORMAZIONE - ADWORD
   CopyDataToNewFile(source_sheet,"i35:k35",dest_sheet,"i35:k35"); //FORMAZIONE - CRITEO
  
  CopyDataToNewFile(source_sheet,"i61:k61",dest_sheet,"i37:k37"); //COMPROVENDO - in-vendita
  
  CopyDataToNewFile(source_sheet,"i57:k57",dest_sheet,"i40:k40"); //SERVIZI - gnoccatravel
  CopyDataToNewFile(source_sheet,"i56:k56",dest_sheet,"i41:k41"); //SERVIZI - gnoccaforum
  CopyDataToNewFile(source_sheet,"i59:k59",dest_sheet,"i42:k42"); //SERVIZI - fb cartomanzia
  
  CopyDataToNewFile(source_sheet,"i45:k45",dest_sheet,"i45:k45"); //BRAND - libero
  CopyDataToNewFile(source_sheet,"i46:k46",dest_sheet,"i53:k53"); //BRAND - Tiscali Campagne
  CopyDataToNewFile(source_sheet,"i47:k47",dest_sheet,"i46:k46"); //BRAND - yahoo native
  CopyDataToNewFile(source_sheet,"i49:k49",dest_sheet,"i47:k47"); //BRAND - criteo affinity
  CopyDataToNewFile(source_sheet,"i48:k48",dest_sheet,"i48:k48"); //BRAND - criteo FB
  
  
  CopyDataToNewFile(source_sheet,"i50:k50",dest_sheet,"i49:k49"); //BRAND - tuttitalia
  CopyDataToNewFile(source_sheet,"i52:k52",dest_sheet,"i50:k50"); //BRAND - adw generico
  CopyDataToNewFile(source_sheet,"i53:k53",dest_sheet,"i51:k51"); //BRAND - Splio
  CopyDataToNewFile(source_sheet,"i55:k55",dest_sheet,"i52:k52"); //BRAND - Tiscali
  CopyDataToNewFile(source_sheet,"i46:k46",dest_sheet,"i53:k53"); //BRAND - Tiscali campagne
  CopyDataToNewFile(source_sheet,"i63:k63",dest_sheet,"i54:k54"); //BRAND - criteoemail
  
  // formula events
  
  
ts.getRange('l3:l12').setFormula("=iferror(c3/k3)");
  ts.getRange('l14:l25').setFormula("=iferror(c14/k14)");
  ts.getRange('l27:l32').setFormula("=iferror(c27/k27)");
  ts.getRange('l34:l35').setFormula("=iferror(c34/k34)");
  ts.getRange('l37:l37').setFormula("=iferror(c37/k37)");
  ts.getRange('l40:l43').setFormula("=iferror(c40/k40)");
  ts.getRange('l45:l54').setFormula("=iferror(c45/k45)");
  

ts.getRange('k3:k12').setFormula("=i3+j3");
  ts.getRange('k14:k25').setFormula("=i14+j14");
  ts.getRange('k27:k32').setFormula("=i27+j27");
  ts.getRange('k34:k35').setFormula("=i34+j34");
  ts.getRange('k37:k37').setFormula("=i37+j37");
  ts.getRange('k40:k43').setFormula("=i40+j40");
  ts.getRange('k45:k54').setFormula("=i45+j45");
  
  
  // MCF
  
//  CopyDataToNewFile(source_sheet,"m3:o12",dest_sheet,"m3:o12"); //CASE
//  CopyDataToNewFile(source_sheet,"m14:o24",dest_sheet,"m14:o24"); //LAVORO
//  CopyDataToNewFile(source_sheet,"m62:o62",dest_sheet,"m25:o25"); //LAVORO
//  
//  CopyDataToNewFile(source_sheet,"m26:o29",dest_sheet,"m27:o30"); //MOTORI
//  CopyDataToNewFile(source_sheet,"m31:o31",dest_sheet,"m31:o31"); //MOTORI - AUTOXY
//  CopyDataToNewFile(source_sheet,"m60:o60",dest_sheet,"m32:o32"); //MOTORI - Criteo Motori
//   
//  CopyDataToNewFile(source_sheet,"m33:o33",dest_sheet,"m34:o34"); //FORMAZIONE - ADWORD
//   CopyDataToNewFile(source_sheet,"m35:o35",dest_sheet,"m35:o35"); //FORMAZIONE - CRITEO
//  
//  CopyDataToNewFile(source_sheet,"m61:o61",dest_sheet,"m37:o37"); //COMPROVENDO - in-vendita
//  
//  CopyDataToNewFile(source_sheet,"m57:o57",dest_sheet,"m40:o40"); //SERVIZI - gnoccatravel
//  CopyDataToNewFile(source_sheet,"m56:o56",dest_sheet,"m41:o41"); //SERVIZI - gnoccaforum
//  CopyDataToNewFile(source_sheet,"m59:o59",dest_sheet,"m42:o42"); //SERVIZI - fb cartomanzia
//  
//  CopyDataToNewFile(source_sheet,"m45:o45",dest_sheet,"m45:o45"); //BRAND - libero
//  CopyDataToNewFile(source_sheet,"m46:o46",dest_sheet,"m53:o53"); //BRAND - Tiscali Campagne
//  CopyDataToNewFile(source_sheet,"m47:o47",dest_sheet,"m46:o46"); //BRAND - yahoo native
//  CopyDataToNewFile(source_sheet,"m49:o49",dest_sheet,"m47:o47"); //BRAND - criteo affinity
//  CopyDataToNewFile(source_sheet,"m48:o48",dest_sheet,"m48:o48"); //BRAND - criteo FB
//  
//  
//  CopyDataToNewFile(source_sheet,"m50:o50",dest_sheet,"m49:o49"); //BRAND - tuttitalia
//  CopyDataToNewFile(source_sheet,"m52:o52",dest_sheet,"m50:o50"); //BRAND - adw generico
//  CopyDataToNewFile(source_sheet,"m53:o53",dest_sheet,"m51:o51"); //BRAND - Splio
//  CopyDataToNewFile(source_sheet,"m55:o55",dest_sheet,"m52:o52"); //BRAND - Tiscali
//  CopyDataToNewFile(source_sheet,"m46:o46",dest_sheet,"m53:o53"); //BRAND - Tiscali campagne
//  CopyDataToNewFile(source_sheet,"m63:o63",dest_sheet,"m54:o54"); //BRAND - CriteoEmail
//
////  ts.getRange('l3:l12').setFormula("=c3/o3");
////  ts.getRange('l14:l25').setFormula("=c14/o14");
////  ts.getRange('l27:l32').setFormula("=c27/o27");
////  ts.getRange('l34:l35').setFormula("=c34/o34");
////  ts.getRange('l37:l37').setFormula("=c37/o37");
////  ts.getRange('l40:l43').setFormula("=c40/o40");
////  ts.getRange('l45:l52').setFormula("=c45/o45");
//  
//ts.getRange('o3:o12').setFormula("=m3+n3");
//  ts.getRange('o14:o25').setFormula("=m14+n14");
//  ts.getRange('o27:o32').setFormula("=m27+n27");
//  ts.getRange('o34:o35').setFormula("=m34+n34");
//  ts.getRange('o37:o37').setFormula("=m37+n37");
//  ts.getRange('o40:o43').setFormula("=m40+n40");
//  ts.getRange('o45:o54').setFormula("=m45+n45");
//  
//  ts.getRange('p3:p12').setFormula("=iferror(c3/o3)");
//  ts.getRange('p14:p25').setFormula("=iferror(c14/o14)");
//  ts.getRange('p27:p32').setFormula("=iferror(c27/o27)");
//  ts.getRange('p34:p35').setFormula("=iferror(c34/o34)");
//  ts.getRange('p37:p37').setFormula("=iferror(c37/o37)");
//  ts.getRange('p40:p43').setFormula("=iferror(c40/o40)");
//  ts.getRange('p45:p54').setFormula("=iferror(c45/o45)");
}


function getId() {
  Browser.msgBox('Spreadsheet key: ' + SpreadsheetApp.getActiveSpreadsheet().getId());
}