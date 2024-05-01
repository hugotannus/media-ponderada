/* TODO: Fix test file*/
// const { verificaSituacao, calculaMedia, verificaAprovacao } = "./media.js"

describe('Verifica Situação', () => {
    test('Caso de Teste #1', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #1.1', () => {
        let notas = [8, 8, 8, 8]

        let resultado = verificaSituacao(...notas);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = [1, 2, 3, 4]

        let resultado = verificaSituacao(...notas, ...pesos);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = ['1', '2', '3', '4']

        let resultado = verificaSituacao(...notas, ...pesos);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #2', () => {
        let notas = [8, 9, 5, 5]

        let resultado = verificaSituacao(...notas);

        expect(resultado).toBe("Reprovado")
    });


    test('Caso de Teste #2.1', () => {
        let notas = [7, 7, 7, 7]

        let media = verificaSituacao(...notas);

        expect(media).toBe("Aprovado")
    });

    test('Caso de Teste #3', () => {
        let notas = [8.5, 8, 7, 6]

        let resultado = verificaSituacao(...notas);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #4', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #5', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });
});

describe('Média Aritmética', () => {
    test('Caso de Teste #1', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).toBe(8)
    });

    test('Caso de Teste #1.1', () => {
        let notas = [8, 8, 8, 8]

        let media = calculaMedia(...notas);

        expect(media).toBe(8)
    });

    test('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = [1, 2, 3, 4]

        let media = calculaMedia(...notas, ...pesos);

        expect(media).toBe(8)
    });

    test('Caso de Teste #1.2', () => {
        let notas = [0, 8, 8, 8]
        let pesos = ['1', '2', '3', '4']

        let media = calculaMedia(...notas, ...pesos);

        expect(media).toBe(7.2)
    });

    test('Caso de Teste #2', () => {
        let notas = [8, 9, 5, 5]

        let media = calculaMedia(...notas);

        expect(media).toBe(6.75)
    });

    test('Caso de Teste #2.1', () => {
        let notas = [7, 7, 7, 7]

        let media = calculaMedia(...notas);

        expect(media).toBe(7)
    });

    test('Caso de Teste #3', () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).toBe(7.5)
    });

    test('Caso de Teste #4', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).toBe(8.5)
    });

    test('Caso de Teste #5', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '10';

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).toBe(3.25)
    });
});

describe('Verifica Aprovação', () => {
    test('Caso media maior que sete', () => {
        let media = 9;

        let resultado = verificaAprovacao(media);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso media menor que sete', () => {
        let media = 5;

        let resultado = verificaAprovacao(media);

        expect(resultado).toBe("Reprovado")
    });
    test('Caso media igual a sete', () => {
        let media = 7;

        let resultado = verificaAprovacao(media);

        expect(resultado).toBe("Aprovado")
    });
    test('Caso media igual a sete', () => {
        let media = 7;
        let presenca = 0.8

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).toBe("Aprovado")
    });
});