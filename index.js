import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Marcele", 11122233370);
const cliente2 = new Cliente("Mia", 88822233370);

const contaCorrenteMarcele = new ContaCorrente(1001, cliente1);
contaCorrenteMarcele.depositar(500);
const conta2 = new ContaCorrente(101, cliente2);

let valor = 200;
contaCorrenteMarcele.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);