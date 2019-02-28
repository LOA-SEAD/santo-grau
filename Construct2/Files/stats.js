function sendDataTechnology(palavra,correta,resposta,nroPalavra,tentativas,venceu){
	var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";
    
    info.gameLevelId = 1;
    info.word = palavra;
    info.correctAnswer = correta;
    info.answer = resposta;
    info.challengeId = nroPalavra;
    info.numberTries = tentativas;
    info.win = venceu;
    info.size = 3;
    info.gameLevelName = 'Fase Tecnologia';
    info.gameType = 'shuffleWord';
    
    console.log("Enviando sendDataTechnology");
	console.log(info);
}

function sendDataGallery(arrastos,seqInicial){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.gameLevelId = 2;
    info.numberDrag = arrastos;
    info.initialSequence = seqInicial;
    info.win = true;
    info.size = 1;
    info.challengeId = 0;
    info.gameLevelName = 'Fase Galeria';
    info.gameType = 'dragPictures';

    console.log("Enviando sendDataGallery");
	console.log(info);
}

function sendDataFinalLevel(pergunta,correta,nroPergunta,respostas,escolhida,acertou,tamanho,fase,nomeFase){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.gameLevelId = fase;
    info.question = pergunta;
    info.correctAnswer = correta;
    info.challengeId = nroPergunta;
    info.choices = respostas;
    info.answer = escolhida;
    info.win = acertou;
    info.size = tamanho;
    info.gameLevelName = nomeFase;
    info.gameType = 'multipleChoice';

    console.log("Enviando sendDataFinalLevel");
	console.log(info);

}

function sendPlayDataGallery(terminou,nroDanos){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.finish = terminou;
    info.numberDamages = nroDanos;
    info.gameType = 'SantoGrauGallery';

    console.log("Enviando sendPlayDataGallery");
	console.log(info);
}

function sendPlayDataFinalLevel(nroDanos,nivel){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.numberDamages = nroDanos;
    info.level = nivel;
    info.gameType = 'SantoGrauFinalLevel';

    console.log("Enviando sendPlayDataFinalLevel");
    console.log(info);

}

function sendRankingData(pontos){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.score = pontos;

    console.log("Enviando sendRankingData");
	console.log(info);
}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,idDesafio){
    var info = {};
    var path = "http://alfa.remar.online/stats/salveValerio";

    info.time = tempo;
    info.type = tipo;
    info.gameId = idJogo;
    if (idNivel != null){
        info.gameLevel = idNivel;
    }
    if (idDesafio != null){
        info.challengeId = idDesafio;
    }

    info.gameType = 'ConclusionTime';

	console.log("Enviando sendRankingData");    
    console.log(info);
}