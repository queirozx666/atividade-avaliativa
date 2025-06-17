//criando os preços dos produtos
let precoPaoBatata = 1
let precoLeite = 7
let precoSalgado = 6

//mensagem de bem vindo e cardapio
alert('Bem-vindo a padaria Breaking Bread!🍞🥖')
alert('Cardápio:\n\n- Pão de Batata - R$1.00\n- Leite - R$7.00\n- Salgado - R$6.00')

//criando variaveis dos pedidos
let pedidoPao = prompt('Quantos pães você deseja?')
let pedidoLeite = prompt('Quantos leites você deseja?')
let pedidoSalgado = prompt('Quantos salgados você quer?')

//convertendo string em number
let Pao = parseInt(pedidoPao)
let Leite = parseInt(pedidoLeite)
let Salgado = parseInt(pedidoSalgado)

//calculando subtotal
let subtotal1 = pedidoPao*precoPaoBatata
let subtotal2 = pedidoLeite*precoLeite
let subtotal3 = pedidoSalgado*precoSalgado

//somando os subtotais
let total = subtotal1 + subtotal2 + subtotal3

//mostrando recibo
console.log('======================================\nRECIBO - PADARIA BREAKING BREAD\n======================================\nITEM | QTD | PREÇO | SUBTOTAL\n--------------------------------------\nPão de Batata|', Pao, '|R$ 1.00|', subtotal1, '\nLeite (Litro)|', Leite, '|R$ 7.00|', subtotal2,'\nSalgado      |', Salgado, '|R$ 6.00|', subtotal3, '\n--------------------------------------\nTOTAL A PAGAR: R$', total, '\n======================================')

//mostrando participantes do grupo
console.log('Participantes: Bryan Queiroz, Bruno Henrique, Alex Candido.')