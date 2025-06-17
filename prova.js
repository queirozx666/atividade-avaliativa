//criando os preços dos produtos
let precoPaoBatata = 1
let precoLeite = 7
let precoSalgado = 6

//mensagem de bem vindo e cardapio
alert('Bem-vindo a padaria Breaking Bread!🍞🥖')
alert('Cardápio\n===============================\n- Pão de Batata - R$1.00\n- Leite - R$7.00\n- Salgado - R$6.00\n===============================')

//criando variaveis dos pedidos
let pedidoPao = prompt('Quantos pães você deseja?')
let pedidoLeite = prompt('Quantos leites você deseja?')
let pedidoSalgado = prompt('Quantos salgados você quer?')

//convertendo string em number
let quantPao = parseInt(pedidoPao)
let quantLeite = parseInt(pedidoLeite)
let quantSalgado = parseInt(pedidoSalgado)

//calculando subtotal
let subtotalPao = pedidoPao*precoPaoBatata
let subtotalLeite = pedidoLeite*precoLeite
let subtotalSalgado = pedidoSalgado*precoSalgado

//somando os subtotais
let total = subtotalPao + subtotalLeite + subtotalSalgado

//mostrando recibo
console.log('======================================\nRECIBO - PADARIA BREAKING BREAD\n======================================\nITEM | QTD | PREÇO | SUBTOTAL\n--------------------------------------\nPão de Batata|', quantPao, '|R$ 1.00|', subtotalPao, '\nLeite (Litro)|', quantLeite, '|R$ 7.00|', subtotalLeite,'\nSalgado      |', quantSalgado, '|R$ 6.00|', subtotalSalgado, '\n--------------------------------------\nTOTAL A PAGAR: R$', total, '\n======================================')

//mostrando participantes do grupo
console.log('Participantes: Bryan Queiroz, Bruno Henrique, Alex Candido.')