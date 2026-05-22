// Banco de dados com os 12 grupos alimentando o novo chaveamento completo
const dadosGrupos = {
  A: {
    times: ["Estados Unidos 🇺🇸", "México 🇲🇽", "Jamaica 🇯🇲", "Bolívia 🇧🇴"],
    jogo: ["Estados Unidos", "México"],
  },
  B: {
    times: ["Brasil 🇧🇷", "Croácia 🇭🇷", "Japão 🇯🇵", "Marrocos 🇲🇦"],
    jogo: ["Brasil", "Croácia"],
  },
  C: {
    times: ["Argentina 🇦🇷", "Polônia 🇵🇱", "Arábia Saudita 🇸🇦", "Canadá 🇨🇦"],
    jogo: ["Argentina", "Polônia"],
  },
  D: {
    times: ["França 🇫🇷", "Dinamarca 🇩🇰", "Tunísia 🇹🇳", "Austrália 🇦🇺"],
    jogo: ["França", "Dinamarca"],
  },
  E: {
    times: ["Espanha 🇪🇸", "Alemanha 🇩🇪", "Costa Rica 🇨🇷", "Nova Zelândia 🇳🇿"],
    jogo: ["Espanha", "Alemanha"],
  },
  F: {
    times: ["Bélgica 🇧🇪", "Canadá 🇨🇦", "Marrocos 🇲🇦", "Croácia 🇭🇷"],
    jogo: ["Bélgica", "Marrocos"],
  },
  G: {
    times: ["Portugal 🇵🇹", "Gana 🇬🇭", "Uruguai 🇺🇾", "Coreia do Sul 🇰🇷"],
    jogo: ["Portugal", "Uruguai"],
  },
  H: {
    times: ["Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Irã 🇮🇷", "País de Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Senegal 🇸🇳"],
    jogo: ["Inglaterra", "Senegal"],
  },
  I: {
    times: ["Itália 🇮🇹", "Peru 🇵🇪", "Argélia 🇩🇿", "Camarões 🇨🇲"],
    jogo: ["Itália", "Peru"],
  },
  J: {
    times: ["Holanda 🇳🇱", "Equador 🇪🇨", "Catar 🇶🇦", "Senegal 🇸🇳"],
    jogo: ["Holanda", "Equador"],
  },
  K: {
    times: ["Colômbia 🇨🇴", "Suécia 🇸🇪", "Egito 🇪🇬", "Nigéria 🇳🇬"],
    jogo: ["Colômbia", "Suécia"],
  },
  L: {
    times: ["Chile 🇨🇱", "Ucrânia 🇺🇦", "Áustria 🇦🇹", "Escócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿"],
    jogo: ["Chile", "Ucrânia"],
  },
};

// 1. INJEÇÃO AUTOMÁTICA DOS GRUPOS
const containerGrupos = document.getElementById("render-grupos");
Object.keys(dadosGrupos).forEach((g) => {
  const grupoInfo = dadosGrupos[g];
  const card = document.createElement("div");
  card.className = "card-grupo";
  card.id = `card-grupo-${g}`;
  card.innerHTML = `
        <h3>GRUPO ${g}</h3>
        <div class="tabela-mini">
            <table>
                <thead><tr><th>Seleção</th><th>Pnt</th></tr></thead>
                <tbody>
                    <tr><td>${grupoInfo.times[0]}</td><td class="pnt">0</td></tr>
                    <tr><td>${grupoInfo.times[1]}</td><td class="pnt">0</td></tr>
                </tbody>
            </table>
        </div>
        <div class="confronto">
            <span class="time casa">${grupoInfo.jogo[0]}</span>
            <input type="number" min="0" class="placar-input grupo-in" data-grupo="${g}" id="p-${g}-1-c">
            <span class="vs">x</span>
            <input type="number" min="0" class="placar-input grupo-in" data-grupo="${g}" id="p-${g}-1-f">
            <span class="time fora">${grupoInfo.jogo[1]}</span>
        </div>
    `;
  containerGrupos.appendChild(card);
});

// 2. ESCUTADORES
document.querySelectorAll(".grupo-in").forEach((input) => {
  input.addEventListener("input", function () {
    atualizarGrupo(this.getAttribute("data-grupo"));
  });
});

document.querySelectorAll(".mm-input").forEach((input) => {
  input.addEventListener("input", verificarEstruturaMataMata);
});

// 3. PROCESSAR RESULTADOS DA FASE DE GRUPOS
function atualizarGrupo(grupo) {
  const c = document.getElementById(`p-${grupo}-1-c`).value;
  const f = document.getElementById(`p-${grupo}-1-f`).value;
  const pntNodes = document.querySelectorAll(`#card-grupo-${grupo} .pnt`);

  if (c !== "" && f !== "") {
    const resC = parseInt(c),
      resF = parseInt(f);
    if (resC > resF) {
      pntNodes[0].innerText = "3";
      pntNodes[1].innerText = "0";
      passarParaOitavas(
        grupo,
        dadosGrupos[grupo].times[0],
        dadosGrupos[grupo].times[1],
      );
    } else if (resC < resF) {
      pntNodes[0].innerText = "0";
      pntNodes[1].innerText = "3";
      passarParaOitavas(
        grupo,
        dadosGrupos[grupo].times[1],
        dadosGrupos[grupo].times[0],
      );
    } else {
      pntNodes[0].innerText = "1";
      pntNodes[1].innerText = "1";
      passarParaOitavas(
        grupo,
        dadosGrupos[grupo].times[0],
        dadosGrupos[grupo].times[1],
      );
    }
  }
  verificarEstruturaMataMata();
}

// MAPEAMENTO DO RETORNO DE TODOS OS GRUPOS PARA AS OITAVAS
function passarParaOitavas(grupo, primeiro, segundo) {
  if (grupo === "A") {
    document.getElementById("oit-1").innerText = primeiro;
    document.getElementById("oit-4").innerText = segundo;
  } else if (grupo === "B") {
    document.getElementById("oit-3").innerText = primeiro;
    document.getElementById("oit-2").innerText = segundo;
  } else if (grupo === "C") {
    document.getElementById("oit-5").innerText = primeiro;
    document.getElementById("oit-8").innerText = segundo;
  } else if (grupo === "D") {
    document.getElementById("oit-7").innerText = primeiro;
    document.getElementById("oit-6").innerText = segundo;
  } else if (grupo === "E") {
    document.getElementById("oit-9").innerText = primeiro;
    document.getElementById("oit-12").innerText = segundo;
  } else if (grupo === "F") {
    document.getElementById("oit-11").innerText = primeiro;
    document.getElementById("oit-10").innerText = segundo;
  } else if (grupo === "G") {
    document.getElementById("oit-13").innerText = primeiro;
    document.getElementById("oit-16").innerText = segundo;
  } else if (grupo === "H") {
    document.getElementById("oit-15").innerText = primeiro;
    document.getElementById("oit-14").innerText = segundo;
  }
  // Obs: Grupos I, J, K, L alimentam as vagas extras de repescagem/melhores terceiros na lógica de torneio real
}

// 4. CHAVEAMENTO DE DEPENDÊNCIA FLUIDO COMPLETO
function verificarEstruturaMataMata() {
  // CAPTURA DOS INPUTS DAS OITAVAS
  const o1c = document.getElementById("moit-1-c").value,
    o1f = document.getElementById("moit-1-f").value;
  const o2c = document.getElementById("moit-2-c").value,
    o2f = document.getElementById("moit-2-f").value;
  const o3c = document.getElementById("moit-3-c").value,
    o3f = document.getElementById("moit-3-f").value;
  const o4c = document.getElementById("moit-4-c").value,
    o4f = document.getElementById("moit-4-f").value;
  const o5c = document.getElementById("moit-5-c").value,
    o5f = document.getElementById("moit-5-f").value;
  const o6c = document.getElementById("moit-6-c").value,
    o6f = document.getElementById("moit-6-f").value;
  const o7c = document.getElementById("moit-7-c").value,
    o7f = document.getElementById("moit-7-f").value;
  const o8c = document.getElementById("moit-8-c").value,
    o8f = document.getElementById("moit-8-f").value;

  // --- ENTRADA DAS QUARTAS (8 TIMES -> 4 JOGOS) ---
  if (o1c !== "" && o1f !== "")
    document.getElementById("qua-1").innerText =
      parseInt(o1c) >= parseInt(o1f)
        ? document.getElementById("oit-1").innerText
        : document.getElementById("oit-2").innerText;
  if (o2c !== "" && o2f !== "")
    document.getElementById("qua-2").innerText =
      parseInt(o2c) >= parseInt(o2f)
        ? document.getElementById("oit-3").innerText
        : document.getElementById("oit-4").innerText;
  if (o3c !== "" && o3f !== "")
    document.getElementById("qua-3").innerText =
      parseInt(o3c) >= parseInt(o3f)
        ? document.getElementById("oit-5").innerText
        : document.getElementById("oit-6").innerText;
  if (o4c !== "" && o4f !== "")
    document.getElementById("qua-4").innerText =
      parseInt(o4c) >= parseInt(o4f)
        ? document.getElementById("oit-7").innerText
        : document.getElementById("oit-8").innerText;
  if (o5c !== "" && o5f !== "")
    document.getElementById("qua-5").innerText =
      parseInt(o5c) >= parseInt(o5f)
        ? document.getElementById("oit-9").innerText
        : document.getElementById("oit-10").innerText;
  if (o6c !== "" && o6f !== "")
    document.getElementById("qua-6").innerText =
      parseInt(o6c) >= parseInt(o6f)
        ? document.getElementById("oit-11").innerText
        : document.getElementById("oit-12").innerText;
  if (o7c !== "" && o7f !== "")
    document.getElementById("qua-7").innerText =
      parseInt(o7c) >= parseInt(o7f)
        ? document.getElementById("oit-13").innerText
        : document.getElementById("oit-14").innerText;
  if (o8c !== "" && o8f !== "")
    document.getElementById("qua-8").innerText =
      parseInt(o8c) >= parseInt(o8f)
        ? document.getElementById("oit-15").innerText
        : document.getElementById("oit-16").innerText;

  // LIBERAÇÃO INDIVIDUAL DE INPUTS DAS QUARTAS
  travaInput(o1c, o1f, o2c, o2f, "mqua-1-c", "mqua-1-f");
  travaInput(o3c, o3f, o4c, o4f, "mqua-2-c", "mqua-2-f");
  travaInput(o5c, o5f, o6c, o6f, "mqua-3-c", "mqua-3-f");
  travaInput(o7c, o7f, o8c, o8f, "mqua-4-c", "mqua-4-f");

  // --- ENTRADA DAS SEMIFINAIS (4 TIMES -> 2 JOGOS) ---
  const q1c = document.getElementById("mqua-1-c").value,
    q1f = document.getElementById("mqua-1-f").value;
  const q2c = document.getElementById("mqua-2-c").value,
    q2f = document.getElementById("mqua-2-f").value;
  const q3c = document.getElementById("mqua-3-c").value,
    q3f = document.getElementById("mqua-3-f").value;
  const q4c = document.getElementById("mqua-4-c").value,
    q4f = document.getElementById("mqua-4-f").value;

  if (q1c !== "" && q1f !== "")
    document.getElementById("semi-1").innerText =
      parseInt(q1c) >= parseInt(q1f)
        ? document.getElementById("qua-1").innerText
        : document.getElementById("qua-2").innerText;
  if (q2c !== "" && q2f !== "")
    document.getElementById("semi-2").innerText =
      parseInt(q2c) >= parseInt(q2f)
        ? document.getElementById("qua-3").innerText
        : document.getElementById("qua-4").innerText;
  if (q3c !== "" && q3f !== "")
    document.getElementById("semi-3").innerText =
      parseInt(q3c) >= parseInt(q3f)
        ? document.getElementById("qua-5").innerText
        : document.getElementById("qua-6").innerText;
  if (q4c !== "" && q4f !== "")
    document.getElementById("semi-4").innerText =
      parseInt(q4c) >= parseInt(q4f)
        ? document.getElementById("qua-7").innerText
        : document.getElementById("qua-8").innerText;

  travaInput(q1c, q1f, q2c, q2f, "msemi-1-c", "msemi-1-f");
  travaInput(q3c, q3f, q4c, q4f, "msemi-2-c", "msemi-2-f");

  // --- ENTRADA DA GRANDE FINAL (2 TIMES -> 1 JOGO) ---
  const s1c = document.getElementById("msemi-1-c").value,
    s1f = document.getElementById("msemi-1-f").value;
  const s2c = document.getElementById("msemi-2-c").value,
    s2f = document.getElementById("msemi-2-f").value;

  if (s1c !== "" && s1f !== "")
    document.getElementById("fin-1").innerText =
      parseInt(s1c) >= parseInt(s1f)
        ? document.getElementById("semi-1").innerText
        : document.getElementById("semi-2").innerText;
  if (s2c !== "" && s2f !== "")
    document.getElementById("fin-2").innerText =
      parseInt(s2c) >= parseInt(s2f)
        ? document.getElementById("semi-3").innerText
        : document.getElementById("semi-4").innerText;

  travaInput(s1c, s1f, s2c, s2f, "mfin-1-c", "mfin-1-f");

  // --- DEFINIÇÃO DO CAMPEÃO ---
  const f1c = document.getElementById("mfin-1-c").value,
    f1f = document.getElementById("mfin-1-f").value;
  if (f1c !== "" && f1f !== "") {
    document.getElementById("campeao-final").innerText =
      parseInt(f1c) >= parseInt(f1f)
        ? document.getElementById("fin-1").innerText
        : document.getElementById("fin-2").innerText;
  } else {
    document.getElementById("campeao-final").innerText = "?";
  }
}

// Função auxiliar para gerenciar as travas por ramificação da chave de forma limpa
function travaInput(v1, v2, v3, v4, idInputC, idInputF) {
  if (v1 !== "" && v2 !== "" && v3 !== "" && v4 !== "") {
    document.getElementById(idInputC).disabled = false;
    document.getElementById(idInputF).disabled = false;
  } else {
    const iC = document.getElementById(idInputC),
      iF = document.getElementById(idInputF);
    iC.disabled = true;
    iC.value = "";
    iF.disabled = true;
    iF.value = "";
  }
}
