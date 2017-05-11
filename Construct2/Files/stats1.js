function sendData(palavra,nroPalavra,erros){
	/*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.question = palavra;
        info.questionId = nroPalavra;
        info.erros = erros;
        info.gameType = 'multipleChoice';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
	});*/
	console.log(palavra);
	console.log(nroPalavra);
	console.log(erros);;
}
