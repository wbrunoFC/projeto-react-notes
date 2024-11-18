import { Container, Links, Content } from './styles.js';
import { Button } from '../../components/Button/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';

export function Details() {
	return (
		<Container>
			<Header />
			<main>
				<Content>
					<ButtonText title='Excluir nota' />

					<h1>Introdução ao React</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est sed arcu scelerisque
						semper. Nulla facilisi. Nullam vel est sed arcu scelerisque semper. Nulla facilisi. Sed non arcu
						id mauris vestibulum sagittis.
					</p>

					<Section title='Links Uteis'>
						<Links>
							<li>
								<a href='#'>http://localhost:5173/</a>
							</li>
							<li>
								<a href='#'>http://localhost:5173/</a>
							</li>
						</Links>
					</Section>

					<Section title='Marcadores'>
						<Tag title='express' />
						<Tag title='node' />
					</Section>
					<Button title='Voltar' />
				</Content>
			</main>
		</Container>
	);
}
