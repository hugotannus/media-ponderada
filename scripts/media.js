function calculaMedia(n1, n2, n3, n4, p1 = 1, p2 = 1, p3 = 1, p4 = 1) {
    return (n1 * p1 + n2 * p2 + n3 * p3 + n4 * p4) / (p1 * 1 + p2 * 1 + p3 * 1 + p4 * 1);
}

function verificaAprovacao(media, presenca = 0.75) {
    return media >= 7 && presenca >= 0.75 ? "Aprovado" : "Reprovado"
}
