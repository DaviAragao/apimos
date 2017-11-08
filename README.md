# apimos
API para gerênciar a distribuição dos números primos.

### Métodos da API
1. Recuperar o próximo número primo não calculado `calc: 0`.

    `GET` https://apimos.herokuapp.com/prime

2. Atualizar a informação do número primo já calculado.

    `PUT` https://apimos.herokuapp.com/prime/:primeId
    
    Exemplo do corpo da requisição:
    
		`{
			"calc": 0,
			"machine": {
				"clientType": 1,
				"macAddres": "34:64:a9:00:d0:23",
				"name": "aragao"
			},
			"mersenne": 1
		 }`
     
3. O último primo de mersenne encontrado pela aplicação.

    `GET` https://apimos.herokuapp.com/prime/getLastMersenne
