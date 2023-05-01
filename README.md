# Cadastro de Carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro cadastrado.
O carro deve ser cadastrado como disponível por padrão.
O usuário responsável pelo cadastro deve ser administrador.

# Listagem de Carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pela categoria.
Deve ser possível listar todos os carros disponíveis por nome do carro.


**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro
**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro inexistente.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser administrador.

# Cadastro de imagens do carro
**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload de arquivos.

**RN**
O usuário pode cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser administrador.

# Aluguel de carro
**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24h.
Não deve ser possível cadastrar um novo aluguel caso já exista um para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um para o mesmo carro.
