describe('calculaMedia', () => {
    it('Caso de Teste #1', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).to.equal(8)
    });

    it('Caso de Teste #1.1', () => {
        let notas = [8, 8, 8, 8]

        let media = calculaMedia(...notas);

        expect(media).to.equal(8)
    });

    it('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = [1, 2, 3, 4]

        let media = calculaMedia(...notas, ...pesos);

        expect(media).to.equal(8)
    });

    it('Caso de Teste #1.2', () => {
        let notas = [0, 8, 8, 8]
        let pesos = ['1', '2', '3', '4']

        let media = calculaMedia(...notas, ...pesos);

        expect(media).to.equal(7.2)
    });

    it('Caso de Teste #2', () => {
        let notas = [8, 9, 5, 5]

        let media = calculaMedia(...notas);

        expect(media).to.equal(6.75)
    });

    it('Caso de Teste #2.1', () => {
        let notas = [7, 7, 7, 7]

        let media = calculaMedia(...notas);

        expect(media).to.equal(7)
    });

    it('Caso de Teste #3', () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).to.equal(7.5)
    });

    it('Caso de Teste #4', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).to.equal(8.5)
    });

    it('Caso de Teste #5', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '10';

        let media = calculaMedia(n1, n2, n3, n4);

        expect(media).to.equal(3.25)
    });
});

describe('verificaAprovacao', () => {
    it('Caso media seja maior que 7.0 e presença maior que 75%', () => {
        let media = 9;
        let presenca = 0.9;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(true)
    });

    it('Caso media seja maior que 7.0 e presença igual a 75%', () => {
        let media = 9;
        let presenca = 0.75;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(true)
    });

    it('Caso media seja maior que 7.0 e presença menor que 75%', () => {
        let media = 9;
        let presenca = 0.6;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(false)
    });

    it('Caso media seja menor que 7.0 e presença maior que 75%', () => {
        let media = 5;
        let presenca = 0.9;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(false)
    });

    it('Caso media seja menor que 7.0 e presença igual a 75%', () => {
        let media = 5;
        let presenca = 0.75;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(false)
    });

    it('Caso media seja menor que 7.0 e presença menor que 75%', () => {
        let media = 5;
        let presenca = 0.6;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(false)
    });

    it('Caso media seja igual a 7.0 e presença maior que 75%', () => {
        let media = 7.0;
        let presenca = 0.9;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(true)
    });

    it('Caso media seja igual a 7.0 e presença igual a 75%', () => {
        let media = 7.0;
        let presenca = 0.75;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(true)
    });

    it('Caso media seja igual a 7.0 e presença menor que 75%', () => {
        let media = 7.0;
        let presenca = 0.6;

        let resultado = verificaAprovacao(media, presenca);

        expect(resultado).to.equal(false)
    });
});

describe('verificaSituacao', () => {
    it('Caso de Teste #1', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).to.eql({ media: 8, aprovado: true })
    });

    it('Caso de Teste #1.1', () => {
        let notas = [8, 8, 8, 8]

        let resultado = verificaSituacao(...notas);

        expect(resultado).to.eql({ media: 8, aprovado: true })
    });

    it('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = [1, 2, 3, 4]

        let resultado = verificaSituacao(...notas, ...pesos);

        expect(resultado).to.eql({ media: 8, aprovado: true })
    });

    it('Caso de Teste #1.2', () => {
        let notas = [8, 8, 8, 8]
        let pesos = ['1', '2', '3', '4']

        let resultado = verificaSituacao(...notas, ...pesos);

        expect(resultado).to.eql({ media: 8, aprovado: true })
    });

    it('Caso de Teste #2', () => {
        let notas = [8, 9, 5, 5]

        let resultado = verificaSituacao(...notas);

        expect(resultado).to.eql({ media: 6.75, aprovado: false })
    });


    it('Caso de Teste #2.1', () => {
        let notas = [7, 7, 7, 7]

        let media = verificaSituacao(...notas);

        expect(media).to.eql({ media: 7, aprovado: true })
    });

    it('Caso de Teste #3', () => {
        let notas = [8.5, 8, 7, 6]

        let resultado = verificaSituacao(...notas);

        expect(resultado).to.eql({ media: 7.375, aprovado: true })
    });

    it('Caso de Teste #4', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).to.eql({ media: 8.5, aprovado: true })
    });

    it('Caso de Teste #5', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).to.eql({ media: 3.25, aprovado: false })
    });
});
