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

    console.log("sendDataTechnology");
    console.log("Palavra mostrada: " + palavra);
    console.log("Palavra correta: " + correta);
    console.log("Resposta digitada: " + resposta);
    console.log("Palavra de número: " + nroPalavra);
    console.log("Tentativas: " + tentativas);
    console.log("Acertou? " + venceu);
    console.log("Fase da Tecnologia");

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

    console.log("sendDataTechnology");
    console.log("Número de arrastos: " + arrastos);
    console.log("Ordem mostrada: " + seqInicial);
    console.log("Ordem correta: " + seqCorreta);
    console.log("Resposta submetida: " + seqSubmetida);
    console.log("Acertou? " + win);
    console.log("Fase da Galeria");

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

    console.log("sendDataFinalLevel");
    console.log("Pergunta " + nroPergunta + ": " + pergunta);
    console.log("Resposta correta: " + correta);
    console.log("Alternativas: " + respostas);
    console.log("Resposta submetida: " + escolhida);
    console.log("Acertou? " + acertou);
    console.log("Tamanho: " + tamanho);
    console.log("Fase " + fase + " - " + nomeFase);

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

    console.log("sendPlayDataGallery");
    console.log("Terminou? " + terminou);
    console.log("Quantidade de dano: " + nroDanos);
    console.log("Fase da Galeria");

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

    console.log("sendPlayDataFinalLevel");
    console.log("Quantidade de dano: " + nroDanos);
    console.log("Fase Final de número: " + nivel);

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

    console.log("sendRankingData");
    console.log("Pontuação: " + pontos);

}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,nomeFase,idDesafio){
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

    console.log("sendPlaytimeData");
    console.log("Tempo: " + tempo + "s");
    console.log("Tipo: " + tipo);
    console.log("Nome do jogo: " + idJogo);
    if (idNivel != null){
        console.log("Fase " + idNivel + " - " + nomeFase);
    }
    if (idDesafio != null){
        console.log("Desafio: " + idDesafio);
    }
}
