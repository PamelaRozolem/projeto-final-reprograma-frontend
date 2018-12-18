import React from 'react'
import './Sobre.css'

function Sobre() {
  return (
    <main className="sobre">
      <div className="conteiner">
        <h1>O que é uma Wallet ?</h1>
        <p>Carteiras ou Wallets, é um aplicativo, site ou dispositivo que gerencia chaves privadas para você. Porém, existem alguns tipos de carteiras e um mundo de informação sobre.</p>
        
        <h3>O que é uma carteira?</h3>
        <p>“Uma wallet não armazena necessariamente uma criptomoeda, ela armazena apenas as chaves públicas e privadas que te dão acesso aos registros da blockchain de uma criptomoeda. E o item mais valioso em uma wallet é sua chave privada.</p>
        <p>Usar uma carteira de alguma cripto é um dos primeiros passos que todo iniciante dá, sem uma carteira você não pode receber, armazenar ou gastar uma determinada moeda. Uma carteira é como uma interface pessoal para a rede de uma criptomoeda, como sua conta bancária online, que é uma interface para o sistema monetário comum ou, simplificando, é um software para enviar e receber criptomoedas.</p>
        <p>A Chave privada é uma sequência de caracteres, que seu uso permite manipular o saldo de uma wallet, funcionando como uma senha da wallet, e não preciso ressaltar que por se tratar de uma senha, essa não deve ser compartilhada. Ela funciona como uma coordenada para localizar o saldo de suas criptomoedas que foram registrados na blockchain.</p>
        <p>Com a chave privada também é gerado o endereço público que você usará para transacionar suas criptomoedas, ela é a chave pública. Essa sim não tem perigo em alguém saber, para falar a verdade é até bom vai que alguém manda algo.</p>
      
        <h3>A primeira Carteira</h3>
        <p>O primeiro software de carteira se chama Bitcoin Core e foi lançado em 2009 por Satoshi Nakamoto. É um software de código-aberto, e originalmente se chamava bitcoind. Às vezes chamado de “cliente Satoshi”, também é conhecido como o cliente de referência para implementações, pois serve para definir o protocolo bitcoin atuando como padrão.</p>
        </div>
    </main>
  )
}

export default Sobre