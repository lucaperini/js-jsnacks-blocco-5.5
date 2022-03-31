/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const mieZucchine = [
    {
        tipo: 'romanesco',
        peso: 40,
        lunghezza: 10,

    },
    {
        tipo: 'romanesco',
        peso: 20,
        lunghezza: 15,

    },
    {
        tipo: 'fiorentino',
        peso: 60,
        lunghezza: 18,

    },
    {
        tipo: 'trombetta',
        peso: 10,
        lunghezza: 8,

    },
    {
        tipo: 'romanesco',
        peso: 58,
        lunghezza: 26,

    },
    {
        tipo: 'fiorentino',
        peso: 38,
        lunghezza: 16,

    },
    {
        tipo: 'marchigiano',
        peso: 40,
        lunghezza: 27,

    },
    {
        tipo: 'napoletano',
        peso: 30,
        lunghezza: 16,

    },
    {
        tipo: 'romanesco',
        peso: 70,
        lunghezza: 21,

    },
    {
        tipo: 'trombetta',
        peso: 60,
        lunghezza: 31,

    },

]
let pesoTot
zucchine.forEach((element) => {
    let pesoTot;
    pesoTot += mieZucchine.[peso];
    console.log(pesoTot);
});


