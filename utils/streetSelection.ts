let loja: string = 'Lojas Roland Garros';

export function selectStreet(loja: string) {
    if (loja === 'Lojas Roland Garros') {
        console.log('Roland Garros');
    } else if (loja === 'Lojas Jardim Japão') {
        console.log('Jardim Japão');
    } else if (loja === 'Lojas Edu Chaves') {
        console.log('Edu Chaves');
    }
    return loja
}
