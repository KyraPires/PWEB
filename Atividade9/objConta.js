ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();


nPoupanca = new ContaPoupanca();
nCorrente = new ContaCorrente();


nCorrente.setNome('João da Silva');
nCorrente.setBanco('Brasil');
nCorrente.setNumConta('111111-1');
nCorrente.setSaldo(1,200);

nPoupanca.setNome('Maria da Graça');
nPoupanca.setBanco('Brasil');
nPoupanca.setNumConta('101010-1');
nPoupanca.setSaldo(3,899);

alert(nCorrente.setNome() + '\n' +
nCorrente.setBanco()  + '\n' +
nCorrente.setNumConta()  + '\n' +
nCorrente.setSaldo()
);

alert(nPoupanca.setNome() + '\n' +
nPoupanca.setBanco()  + '\n' +
nPoupanca.setNumConta()  + '\n' +
nPoupanca.setSaldo()
);


