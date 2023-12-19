import React from 'react';
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Avatar,
} from '@mui/material';

const ContentWithPaddingXl = (sx) => <div {...sx} />;

const ComponentsType = (props) => (
	<Typography
		variant='h3'
		component='div'
		my={4}
		borderBottom={4}
		borderColor='primary.main'
		display='inline-block'
		{...props}
	/>
);

const Text = (props) => (
	<Typography variant='body1' color='text.primary' {...props} />
);

const About = () => {
	return (
		<Container>
			<ContentWithPaddingXl
				sx={{ maxWidth: 'screen-xl', mx: 'auto', py: 20, lg: { py: 24 } }}>
				<ComponentsType>Elit nostrud ullamco commodo do ipsum?</ComponentsType>
				<Text>
					<p>
						Ipsum non ullamco amet ullamco nulla. Sint consectetur eiusmod enim
						aliqua labore. Nulla esse eiusmod esse deserunt sunt eu mollit culpa
						tempor adipisicing dolor enim laborum. Sint adipisicing sit fugiat
						velit sint ipsum eiusmod sint. Pariatur est culpa incididunt minim
						est. Eu veniam pariatur consequat culpa enim. Labore dolore
						reprehenderit aliquip labore ad nulla sit duis. Duis officia dolore
						adipisicing in exercitation non adipisicing. Cupidatat irure mollit
						non excepteur esse magna non incididunt ad voluptate adipisicing
						dolore dolore id. Nostrud ea quis commodo commodo id anim nostrud et
						aliqua id minim magna exercitation.
					</p>

					<p>
						Ea et deserunt est aliqua consectetur Lorem. Duis sunt cupidatat do
						irure nostrud id velit labore. Nostrud culpa et officia anim ullamco
						esse consectetur sint incididunt duis magna exercitation eiusmod.
						Quis elit culpa aute do reprehenderit. Velit consequat nisi
						consequat irure commodo do ex. Aute consectetur tempor fugiat
						voluptate ea amet sint eiusmod. Magna pariatur voluptate consectetur
						ea. Officia sint officia occaecat deserunt deserunt est.
						Reprehenderit id in dolor ullamco qui deserunt quis magna. Mollit
						nulla anim duis irure anim sint.
					</p>

					<p>
						Nulla eu officia veniam nulla. Qui sunt irure ex magna et amet
						commodo Lorem sint reprehenderit elit. Fugiat voluptate est cillum
						proident qui magna esse ut. Do veniam do culpa cillum aliqua duis
						dolore Lorem ea ipsum eiusmod qui. Aute deserunt pariatur laboris
						excepteur veniam. Et cillum qui tempor reprehenderit reprehenderit.
						Magna adipisicing sit adipisicing excepteur cillum.
					</p>

					<p>
						Reprehenderit aliquip nostrud culpa magna pariatur. Eiusmod commodo
						sunt sit quis cillum sit voluptate ex. Ut tempor quis labore duis
						nisi. Nisi quis ea dolor Lorem fugiat elit consequat dolore aute in
						veniam. Aliqua anim dolore dolore Lorem elit dolore est qui anim
						cupidatat quis enim mollit. Amet aliqua id aliqua culpa. Proident
						enim tempor sit esse.
					</p>

					<p>
						Dolor ipsum amet nostrud reprehenderit id excepteur aliqua
						excepteur. Culpa dolor amet minim elit fugiat eu dolor sunt ut.
						Dolore minim dolore sint deserunt ex laboris officia esse mollit
						dolor. Elit officia culpa exercitation adipisicing nulla. Enim nulla
						anim sit occaecat eu cupidatat ullamco minim culpa sunt esse minim.
						Proident quis sint officia voluptate veniam. Ut officia cillum non
						ea. Mollit irure fugiat anim consequat nulla cupidatat in. Anim id
						consequat aute et excepteur deserunt officia officia nisi esse
						excepteur. Ullamco elit aliqua velit velit commodo deserunt id
						dolore consectetur id aliquip adipisicing culpa fugiat. Laboris
						aliquip sit officia ea aute id duis incididunt mollit minim ea.
						Mollit non est aliquip irure incididunt ullamco mollit ipsum
						incididunt exercitation duis sit. Mollit laboris sint eu excepteur
						quis est eiusmod.
					</p>
				</Text>
				<ComponentsType>Id veniam dolore velit amet occaecat?</ComponentsType>
				<Text>
					<p>
						Cillum culpa occaecat minim pariatur nostrud mollit incididunt
						nostrud sit aliqua ipsum. Ullamco nulla ea ex fugiat commodo velit
						et mollit eu sunt. Magna sunt ullamco esse anim consectetur aliquip
						est magna labore. Nostrud ut ut consectetur sunt aliquip labore
						consequat dolor consequat laboris. Et est aute consectetur nostrud
						labore fugiat ex laborum ipsum proident minim non.
					</p>
					<p>
						Dolore nulla irure eiusmod laborum non cillum consequat amet et
						veniam magna deserunt. Tempor pariatur sunt duis est cupidatat
						adipisicing est eiusmod reprehenderit sunt. Consequat quis anim enim
						mollit. Occaecat esse tempor sint aute. Id ea tempor incididunt
						tempor reprehenderit non sunt nulla.
					</p>
					<p>
						Reprehenderit proident eiusmod labore qui Lorem id qui aliquip sunt
						consectetur anim. Sint cillum ex in irure veniam Lorem est elit
						consectetur ut ipsum pariatur. Incididunt culpa reprehenderit tempor
						fugiat duis magna.
					</p>
					<p>
						Mollit ad magna deserunt dolore dolore consequat sint exercitation
						mollit adipisicing ut ad cupidatat. Eu fugiat ullamco fugiat in
						nostrud irure consequat commodo irure. Culpa commodo consectetur sit
						amet deserunt commodo nulla aliqua reprehenderit veniam laborum
						occaecat. Fugiat cillum qui aliqua dolor commodo aliqua enim.
						Commodo voluptate eu ex in. Cupidatat irure magna mollit id dolor
						amet. Magna do amet non cupidatat Lorem ut velit laborum nostrud
						minim pariatur. Enim irure amet aliqua laboris dolore anim nulla
						irure labore dolor cupidatat. Qui quis mollit ex exercitation
						consectetur ut magna amet ea culpa. Reprehenderit ut voluptate
						cupidatat quis do sit. Magna nostrud consectetur fugiat anim nulla.
						Id pariatur velit voluptate mollit aliquip anim aliquip labore culpa
						proident. Reprehenderit et nulla irure aliqua cupidatat voluptate
						est sint.
					</p>
					<p>
						Ullamco est exercitation fugiat cillum anim occaecat ipsum laborum
						dolore elit dolor nisi aliquip. Ut officia amet proident elit.
						Reprehenderit fugiat non ea proident aliquip voluptate ea dolore non
						exercitation enim deserunt sunt ea. Quis ipsum fugiat quis minim
						aliquip irure elit mollit consectetur sint Lorem laboris minim
						Lorem. Cillum do irure irure minim sint consectetur id magna. Aute
						voluptate voluptate cillum ad ullamco exercitation aute enim fugiat
						tempor.
					</p>
					<ol>
						<li>Qui nulla proident nisi fugiat culpa nulla dolor.</li>
						<li>Eu do elit irure non consequat.</li>
						<li>
							Duis reprehenderit excepteur aute eu aliquip ullamco ipsum anim
							occaecat esse ea.
						</li>
						<li>
							Ea ipsum ullamco sint elit non elit esse nisi laborum Lorem
							ullamco minim dolore.
						</li>
						<li>
							Pariatur do aliqua ex dolore consectetur qui dolor aliqua ipsum
							deserunt dolor do.
						</li>
						<li>Esse Lorem incididunt id ipsum qui sit dolor ea cillum.</li>
					</ol>
					<p>
						Lorem mollit laborum sint irure anim occaecat et et aliqua duis anim
						aliqua reprehenderit amet quis.
					</p>
					<p>
						Labore enim consectetur ut veniam ipsum. Occaecat id nulla nisi sit
						consequat aute sunt incididunt deserunt magna est. Nulla irure dolor
						incididunt enim. Non do laborum veniam ex reprehenderit irure elit
						deserunt anim veniam magna consequat dolore. Velit aliquip officia
						tempor aute cupidatat mollit minim do id Lorem est excepteur ipsum
						duis. Cupidatat sit dolore id ad dolore dolor magna fugiat ad qui.
						Eu voluptate aliqua pariatur culpa sunt tempor velit nulla in ea.
					</p>
					<p>
						Do eiusmod cillum nulla officia anim deserunt. Voluptate occaecat id
						nisi in occaecat qui non. Ea ipsum esse eu id enim laborum sint.
						Aliquip labore sit eu in nulla qui labore in elit. Occaecat elit
						laboris sint enim duis ad occaecat nisi nisi tempor. Magna ea qui id
						enim in est est et velit. Aute enim eiusmod mollit id amet do
						commodo enim esse pariatur. Aliqua est irure exercitation labore ex
						ullamco deserunt. Laboris cupidatat pariatur non ut aliquip.
					</p>
				</Text>
			</ContentWithPaddingXl>
		</Container>
	);
};

export default About;
