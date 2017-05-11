function sendPlayData(monstro,fase,setor){
	var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats" //VAI MUDAR
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats" //VAI MUDAR
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.monster = monstro;
        info.level = fase;
        info.sector = setor;
        info.gameType = 'gameStatsEscolaMagica';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
	/*console.log(monstro);
	console.log(fase);
	console.log(setor);*/
}
