function sendDataTecnology(palavra,nroPalavra,erros){
	/*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
	}
	$.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.word = palavra;
        info.wordId = nroPalavra;
        info.numberMistake = erros;
        info.gameType = 'shuffleWord';
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
	console.log(erros);
}

function sendDataGallery(arrastos,seqInicial){
    /*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.numberDrag = arrastos;
        info.initialSequence = seqInicial;
        info.gameType = 'dragPictures';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });*/
    console.log(arrastos);
    console.log(seqInicial);
}

function sendDataFinalLevel(correta,pergunta,nroPergunta,respostas,escolhida,acertou,tamanho){
    /*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.question = correta;
        info.answer = pergunta;
        info.levelId = nroPergunta;
        info.choices = respostas;
        info.choice = escolhida;
        info.win = acertou;
        info.size = tamanho;
        info.gameType = 'multipleChoice';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });*/
    console.log(pergunta);
    console.log(correta);
    console.log(nroPergunta);
    console.log(respostas);
    console.log(escolhida);
    console.log(acertou);
    console.log(tamanho);
}

function sendPlayDataGallery(terminou,nroDanos){
    /*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.finish = terminou;
        info.numberDamages = nroDanos;
        info.gameType = 'gameStatsSantoGrauGallery';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });*/
    console.log(terminou);
    console.log(nroDanos);
}

function sendPlayDataFinalLevel(nroDanos){
    /*var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.numberDamages = nroDanos;
        info.gameType = 'gameStatsSantoGrauFinalLevel';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });*/
    console.log(nroDanos);
}