import { createServer } from "miragejs";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
	routes() {
		this.namespace = 'api';
		this.get('/locations', () => {
			return [
				{
					id: 0,
					title: 'Ubatuba',
					rating: 3.8,
					text: 'Ubatuba é um dos mais espetaculares e bem preservados destinos do Litoral Norte de São Paulo. E serão necessárias muitas viagens para conhecer as mais de cem praias que recheiam o cenário recortado desse pedacinho da Serra do Mar.',
					img: 'https://www.dicasdeviagem.com/wp-content/uploads/2019/04/praia-grande-ubatuba-1200x720.jpg',
					category: 'beach'
				},
				{
					id: 1,
					title: 'Salvador',
					rating: 5,
					text: 'Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia, música e arquitetura,[9] reconhecidas também internacionalmente.',
					img: 'http://proauto.org.br/assets/media/blog/b8a6d6a95b4368d23949081466597976.png',
					category: 'beach'
				},
				{
					id: 2,
					title: 'Ouro Preto',
					rating: 5,
					text: 'Tombada como Patrimônio Cultural da Humanidade pela Unesco, Ouro Preto guarda um conjunto arquitetônico inigualável. Nas inúmeras ladeiras do Centro Histórico enfileiram-se casarões do período colonial...',
					img: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/aosidu.jpeg?quality=70&strip=info&w=928',
					category: 'historical'
				},
				{
					id: 3,
					title: 'Chapada dos Veadeiros',
					rating: 5,
					text: 'A Chapada dos Veadeiros é um convite irrecusável aos amantes do ecoturismo. A região, que engloba oito municípios do interior de Goiás, tem como principais bases de apoio para os turistas a cidade de Alto Paraíso de Goiás, a Vila de São Jorge e Cavalcante.',
					img: 'https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/47811/show/cachoeiras-almecegas-i-e-ii.jpg',
					category: 'nature'
				},
				{
					id: 4,
					title: 'Paris',
					rating: 4.5,
					text: 'Habitada por pouco mais de 2 milhões de pessoas – sem contar a zona metropolitana –, a capital da França não foi presenteada com uma geografia que a diferenciasse especialmente por sua beleza natural',
					img: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg?quality=70&strip=info&resize=680,453',
					category: 'international'
				}
			]
		})
	}
})

ReactDOM.render(<App />, document.querySelector("#root"));
