function sendDataTechnology(palavra,correta,resposta,nroPalavra,tentativas,venceu){
    var info = {};
    var path;

    if(window.location.hostname === "localhost" ) { // for localhost tests
        path = "/stats/saveChallengeStats"
    } else { // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
    }

    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = 1;
        info.word = palavra;
        info.correctAnswer = correta;
        info.answer = resposta;
        info.challengeId = nroPalavra;
        info.numberTries = tentativas;
        info.win = venceu;
        info.levelSize = 3;
        info.levelName = 'Tecnologia';
        info.challengeType = 'shuffleWord';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });

    console.log("Enviando a " + path)
    console.log(palavra);
    console.log(correta);
    console.log(resposta);
    console.log(nroPalavra);
    console.log(tentativas);
    console.log(venceu);
}

function sendDataGallery(arrastos,seqInicial,seqSubmetida,seqCorreta,win){
    var info = {};
    var path;
    if(window.location.hostname === "localhost" ) { // for localhost tests
        path = "/stats/saveChallengeStats"
    } else { // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = 2;
    info.numberMoves = arrastos;
    info.initialSequence = seqInicial;
    info.answer = seqSubmetida;
    info.correctAnswer = seqCorreta;
    info.win = win;
    info.levelSize = 1;
    info.challengeId = 1;
    info.levelName = 'Galeria';
    info.challengeType = 'dragPictures';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });

    console.log("Enviando a " + path)
    console.log(arrastos);
    console.log(seqInicial);
    console.log(seqSubmetida);
    console.log(seqCorreta);
    console.log(win);
}

function sendDataFinalLevel(pergunta,correta,nroPergunta,respostas,escolhida,acertou,tamanho,fase,nomeFase){
    var info = {};
    var path;
    if(window.location.hostname === "localhost" ) { // for localhost tests
        path = "/stats/saveChallengeStats"
    } else { // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveChallengeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.levelId = fase;
        info.question = pergunta;
        info.correctAnswer = correta;
        info.challengeId = nroPergunta;
        info.choices = respostas;
        info.answer = escolhida;
        info.win = acertou;
        info.levelSize = tamanho;
        info.levelName = nomeFase;
        info.challengeType = 'multipleChoice';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });

    console.log("Enviando a " + path)
    console.log(pergunta);
    console.log(correta);
    console.log(nroPergunta);
    console.log(respostas);
    console.log(escolhida);
    console.log(acertou);
    console.log(tamanho);
    console.log(fase);
    console.log(nomeFase);
}

function sendPlayDataGallery(terminou,nroDanos){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveDamageStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveDamageStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.finish = terminou;
        info.numberDamages = nroDanos;
        info.gameType = 'SantoGrauGallery';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log("Enviando a " + path)
    console.log(terminou);
    console.log(nroDanos);
}

function sendPlayDataFinalLevel(nroDanos,nivel){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveDamageStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveDamageStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.numberDamages = nroDanos;
        info.level = nivel;
        info.gameType = 'SantoGrauFinalLevel';
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log("Enviando a " + path)
    console.log(nroDanos);
    console.log(nivel);
}

function sendRankingData(pontos){
    var info = {};
    var path;
    if(window.location.hostname === "localhost" ) { // for localhost tests
        path = "/stats/saveRankingStats"
    } else { // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveRankingStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.score = pontos;
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log("Enviando a " + path)
    console.log(pontos);
}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,idDesafio,nomeFase){
    var info = {};
    var path;
    if(window.location.hostname === "localhost" ) { // for localhost tests
        path = "/stats/saveTimeStats"
    } else { // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/stats/saveTimeStats"
    }
    $.getJSON("remar.json", function(json) {
        info.exportedResourceId = json.exportedResourceId;
        info.time = tempo;
        info.timeType = tipo;
        info.gameName = idJogo;
        if (idNivel != null){
            info.levelId = idNivel;
            info.levelName = nomeFase;
        }
        if (idDesafio != null){
            info.challengeId = idDesafio;
        }
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });
    console.log("Enviando a " + path)
    console.log(tempo);
    console.log(tipo);
    console.log(idJogo);
    if (idNivel != null){
        console.log(idNivel);
    }
    if (idDesafio != null){
        console.log(idDesafio);
    }
    console.log(nomeFase);
}
