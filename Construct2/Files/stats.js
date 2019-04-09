function sendDataTechnology(palavra,correta,resposta,nroPalavra,tentativas,venceu){
	var info = {};
    var path = "/exported-resource/saveStats";

    info.gameLevelId = 1;
    info.word = palavra;
    info.correctAnswer = correta;
    info.answer = resposta;
    info.challengeId = nroPalavra;
    info.numberTries = tentativas;
    info.win = venceu;
    info.size = 3;
    info.gameLevelName = 'Tecnologia';
    info.gameType = 'shuffleWord';
    
    console.log("sendDataTechnology");
    console.log("palavra: " + palavra);
	console.log("correta: " + correta);
    console.log("resposta: " + resposta);
	console.log("nroPalavra: " + nroPalavra);
	console.log("tentativas: " + tentativas);
    console.log("venceu: " + venceu);
}

function sendDataGallery(arrastos,seqInicial,seqSubmetida,seqCorreta,win){
    var info = {};
    var path = "/exported-resource/saveStats";

    
    info.gameLevelId = 2;
    info.numberDrag = arrastos;
    info.word = seqInicial;
    info.answer = seqSubmetida;
    info.correctAnswer = seqCorreta;
    info.win = win;
    info.size = 1;
    info.challengeId = 0;
    info.gameLevelName = 'Galeria';
    info.gameType = 'dragPictures';

    console.log("sendDataGallery");
    console.log("arrastos: " + arrastos);
    console.log("seqInicial: " + seqInicial);
    console.log("seqSubmetida: " + seqSubmetida);
    console.log("seqCorreta: " + seqCorreta);
    console.log("win: " + win);
}

function sendDataFinalLevel(pergunta,correta,nroPergunta,respostas,escolhida,acertou,tamanho,fase,nomeFase){
    var info = {};
    var path = "/exported-resource/saveStats";

    
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

    console.log("sendDataFinalLevel");
    console.log("pergunta: " + pergunta);
    console.log("correta: " + correta);
    console.log("nroPergunta: " + nroPergunta);
    console.log("respostas: " + respostas);
    console.log("escolhida: " + escolhida);
    console.log("acertou: " + acertou);
    console.log("tamanho: " + tamanho);
    console.log("fase: " + fase);
    console.log("nomeFase: " + nomeFase);
}

function sendPlayDataGallery(terminou,nroDanos){
    var info = {};
    var path = "/exported-resource/saveDamageStats";

    
    info.finish = terminou;
    info.numberDamages = nroDanos;
    info.gameType = 'SantoGrauGallery';

    console.log("sendPlayDataGallery");
    console.log("terminou: " + terminou);
    console.log("nroDanos: " + nroDanos);
}

function sendPlayDataFinalLevel(nroDanos,nivel){
    var info = {};
    var path = "/exported-resource/saveDamageStats";

    
    info.numberDamages = nroDanos;
    info.level = nivel;
    info.gameType = 'SantoGrauFinalLevel';

    console.log("sendPlayDataFinalLevel");
    console.log("nroDanos: " + nroDanos);
    console.log("nivel: " + nivel);
}

function sendRankingData(pontos){
    var info = {};
    var path = "/exported-resource/saveScore";

    
    info.score = pontos;

    console.log("sendRankingData");
    console.log("pontos: " + pontos);
}

function sendPlaytimeData(tempo,tipo,idJogo,idNivel,idDesafio,nomeFase){
    var info = {};
    var path = "/exported-resource/saveTimeStats";

    
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
    info.gameLevelName = nomeFase;

    console.log("sendPlaytimeData");
    console.log("tempo: " + tempo);
    console.log("tipo: " + tipo);
    console.log("idJogo: " + idJogo);
    if (idNivel != null){
        console.log("idNivel: " + idNivel);
    }
    if (idDesafio != null){
        console.log("idDesafio: " + idDesafio);
    }
    console.log("nomeFase: " + nomeFase);
}