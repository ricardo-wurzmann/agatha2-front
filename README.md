# agatha2-front

O frontend esta dividido tem v;arias paginas:
    App.js:
        A pagina principal para as rotas das paginas. Então, começa na pagina de Matérias e tem o caminho para as demais. 

    MateriaisComponent.js:
        Carrega a api do backend que devolve todas as materias da base de dados e devolve na pagina todo o conteudo da api, sendo todos clicáveis.

    SubmateriasPage.js:
        Faz a mesma que a página descrita acima, mas com submaterias.

    QuestõesPage.js:
        Carrega e retorna 5 questões aleatórias da submatéria selecionada e caso selecione o botão no final da página aparece todos as questões da submatéria previamente selecionada.

    Header.js:
        Uma página que tem os botoões de Home que volta a página inicial que dispõe as matérias e uma que volta para a página anterior. Além de ter em que página o usuário se encontra e uma pequena caixa de pesquisa que pode pesquisar o nome de alguma matéria (para funcionar é preciso digitar de forma correta o nome da submateria, com maiusculas e acentos). 
    
    App.css:
        Nessa página é feito o estilo de todas as páginas e seus elementos.

Para rodar:
    Baixe o repositório
    Faça os seguintes comandos:
        cd .\meu-app\
        npm start
    
    Certifique que o backend está rodando também