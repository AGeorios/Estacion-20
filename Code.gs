function doGet(e) {


  return HtmlService.createTemplateFromFile("Index").evaluate();
}


function userClicked(userInfo){
    var url = "https://docs.google.com/spreadsheets/d/1kc6Zza9Ms2hAfmoZs0WcezVae_Ew3QrFSNfC0k34dRE/edit#gid=0/view";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");

    ws.appendRow([userInfo.firstName,userInfo.lastName,userInfo.app,new Date()]);

  //Logger.log(name + " Clicked the Button");
}

function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

