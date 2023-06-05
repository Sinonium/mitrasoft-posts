import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.scss';

const About = () => {
	return (
		<Row className='justify-content-center mt-3'>
			<Col xs={12} sm={8}>
				<h1>Обо мне</h1>
				<p>
					Ранее из любопытства и собственной заинтересованности занимался разработкой игр
					на разных движках, начиная от языков написанных специально для редакторов карт и
					прочих gui, заканчивая C# Unity.
				</p>
				<p>
					Во фронтенд пришел 3 года назад, закончил полугодичные курсы HTML/CSS, JS,
					React, Vue, по результатам которых стал лучшим студентом и сразу же был принят
					на работу в местную компанию.
				</p>
				<p>
					В работе использую различные библиотеки: Redux, Redux-toolkit, RTK Query, Next,
					UI-framework'и: Mui, Antd, rsuite, но в случае необходимости могу писать и
					собственные реализации тех или иных фич, от верстки на "чистом" css, до
					различных алгоритмов.
				</p>
				<p>
					Иногда решаю алгоритмические задачи: <br />
					<ul>
						<li>
							<a
								href='https://leetcode.com/sinoniumx/'
								target='_blank'
								rel='noopener noreferrer'>
								Leetcode
							</a>
						</li>
						<li>
							<a
								href='https://www.codewars.com/users/sinoniumx'
								target='_blank'
								rel='noopener noreferrer'>
								CodeWars
							</a>
						</li>
					</ul>
				</p>
				<p style={{ fontSize: '12px' }}>
					Веду здоровый, активный образ жизни, читаю "программисткую" литературу, быстро
					обучаюсь, имею живой интерес к тому, чем занимаюсь, стараюсь постоянно
					совершенствоваться, познавать новое.
				</p>
        <p>
          Спасибо за уделенное время и внимание!
        </p>
			</Col>
		</Row>
	);
};

export default About;
