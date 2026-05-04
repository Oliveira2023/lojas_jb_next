"use strict";
const fetchLojas = require('./fetchLojas');
// import fetchLojas from "./fetchLojas";
async function manipulaMongoTeste() {
    const lojas = await fetchLojas();
    console.log(lojas);
}
manipulaMongoTeste();
