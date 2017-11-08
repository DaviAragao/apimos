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

    `GET` https://apimos.herokuapp.com/getLastMersenne
    
4. O último expoente calculado.

	`GET` https://apimos.herokuapp.com/getLastCalculated
	
5. O último expoente que começou a ser calculado.

	`GET` https://apimos.herokuapp.com/getLastCalculating
	
6. O estado de um número na base de dados.

	`GET` https://apimos.herokuapp.com/prime/:primeId
	
7. Calcula o número de mersenne com base no parâmetro.

	`GET` https://apimos.herokuapp.com/calcMersenne/:prime
