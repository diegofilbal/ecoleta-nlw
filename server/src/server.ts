import express from 'express'; 
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);



/**
 * Rota: Endereco completo da requisicao
 * Recurso: Qual entidade estamos acessando do sistema
 * 
 * GET: Buscar uma ou mais informacoes do back-end
 * POST: Criar uma nova informacao no back-end
 * PUT: Atualizar uma informacao existente no back-end
 * DELETE: Remover uma informacao do back-end 
 * 
 * POST http://localhost:3333/users = Criar um usuario
 * GET http://localhost:3333/users = Listar usuarios
 * GET http://localhost:3333/users/5 = Buscar dados do usuario com ID 5
 * 
 * Request param: Parametros que vem na propria rota que identificam um recurso
 * Query param: Parametros que vem na propria rota geralmente opcionais para filtros, paginacao
 * Request body: Parametros para criacao/atualizacao de informacoes 
 * 
 * Request - obter dados da requisicao
 * Response -  devolver uma resposta pro browser
 */