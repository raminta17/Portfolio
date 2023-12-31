import BG_battle from '../assets/BattleGame/battleArena.png'
import BG_prepare1 from '../assets/BattleGame/preparationPage1.png'
import BG_prepare2 from '../assets/BattleGame/prepare2.png'
import BG_register from '../assets/BattleGame/registerPage.png'
import BG_game2 from '../assets/buildGame/gam2.png'
import BG_game1 from '../assets/buildGame/game.png'
import EL_end from '../assets/elevator/end.png'
import EL_start from '../assets/elevator/start.png'
import GD_game from '../assets/golddigGame/game.png'
import HTML_first from '../assets/html/first.png'
import HTML_second from '../assets/html/second.png'
import HTML_third from '../assets/html/third.png'
import MONOP_game from '../assets/monopoly/game.png'
import MONOP_lost from '../assets/monopoly/lost.png'
import MONOP_start from '../assets/monopoly/start.png'
import MOV_seats from '../assets/movies/chooseSeats.png'
import MOV_login from '../assets/movies/login.png'
import MOV_movies from '../assets/movies/movies.png'
import MOV_profile from '../assets/movies/profile.png'
import SM_createPost from '../assets/socialMedia/createPostModal.png'
import SM_messageModal from '../assets/socialMedia/messagModal.png'
import SM_messages from '../assets/socialMedia/messages.png'
import SM_posts from '../assets/socialMedia/posts.png'
import SM_profileRes from '../assets/socialMedia/profileResponsive.png'
import SM_singlePost from '../assets/socialMedia/singlePost.png'
import SM_startPage from '../assets/socialMedia/startPAge.png'
import SM_usersRes from '../assets/socialMedia/usersResponsive.png'
import TAM_game from '../assets/tamagotchi/game.png'
import TAM_lost from '../assets/tamagotchi/lost.png'
import TAM_start from '../assets/tamagotchi/start.png'
import { ProjectType, TechType } from './types.tsx'

export const techSkills: TechType[] = [
	{
		title: 'HTML',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
	},
	{
		title: 'CSS',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png',
	},
	{
		title: 'SCSS/SASS',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
	},
	{
		title: 'Bootstrap',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
	},
	{
		title: 'Javascript',
		link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
	},
	{
		title: 'TypeScript',
		link: 'https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp',
	},
	{
		title: 'React',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
	},
	{
		title: 'Redux',
		link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png',
	},
	{
		title: 'Rest API',
		link: 'https://dz2cdn1.dzone.com/storage/temp/14643633-tempsnip.png',
	},
	{
		title: 'Mongo DB',
		link: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
	},
	{
		title: 'Socket.io',
		link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png',
	},

	{
		title: 'Node.js',
		link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
	},
	{
		title: 'Git',
		link: 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png',
	},
]
export const softSkills: string[] = [
	'High sense of responsibility',
	'Adaptability',
	'Loyalty',
	'Professionalism',
	'Team player',
	'Problem-solving',
	'Communication and teaching',
	'Honesty',
]
export const projects: ProjectType[] = [
	{
		title: 'Social media website',
		techUsed: [
			{
				title: 'Mongo DB',
				link: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
			},
			{
				title: 'Socket.io',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png',
			},
			{
				title: 'React',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
			},
			{
				title: 'Node.js',
				link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
			},
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'Redux',
				link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png',
			},
			{
				title: 'Rest API',
				link: 'https://dz2cdn1.dzone.com/storage/temp/14643633-tempsnip.png',
			},
		],
		images: [
			SM_posts,
			SM_singlePost,
			SM_startPage,
			SM_messages,
			SM_createPost,
			SM_messageModal,
			SM_profileRes,
			SM_usersRes,
		],
		projectInfo: [
			'My final exam project at CodeAcademy',
			'CRUD application',
			'Users registration, hashed passwords',
			'Users, posts, conversations stored in MongoDb',
			'Auto login',
			'User authentication with JWT',
			'Live tracking of online users',
			'Live chats',
			'Live post updates',
			'Responsive design',
		],
		frontEnd: 'https://github.com/raminta17/final_boss_frontEnd',
		backEnd: 'https://github.com/raminta17/final_boss_backEnd',
		try: null,
	},
	{
		title: 'Online battle game',
		techUsed: [
			{
				title: 'Mongo DB',
				link: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
			},
			{
				title: 'Socket.io',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png',
			},
			{
				title: 'React',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
			},
			{
				title: 'Node.js',
				link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
			},
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'Redux',
				link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png',
			},
		],
		images: [BG_prepare1, BG_register, BG_prepare2, BG_battle],
		projectInfo: [
			'This was my Node.js+MongoDb+Socket.io assignment',
			'CRUD application',
			'Players registration, stored in MongoDb',
			'Random weapons, armour, potions generation',
			'Inventory management',
			'Select equipment for battle',
			'Live tracking of online players',
			'Live invitations to play',
			'Live battle arena',
			'Timer on players turn during battle',
			'Tracking of total victories and loses',
		],
		frontEnd: 'https://github.com/raminta17/battle_game_frontEnd',
		backEnd: 'https://github.com/raminta17/battle_game_backEnd',
		try: null,
	},
	{
		title: 'Monopoly like game (single player)',
		techUsed: [
			{
				title: 'React',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
			},
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Redux',
				link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png',
			},
		],
		images: [MONOP_game, MONOP_start, MONOP_lost],
		projectInfo: [
			'The game for React.js assignment',
			'Choose player figure',
			'Random roll dice',
			'Buy and sell streets',
			"Player's movement around the board (get money if you made a full circle)",
			'Random chance slots (win or loose money)',
			'Income tax slots',
			'Win the game if you bought all streets before running out of money',
		],
		frontEnd: 'https://github.com/raminta17/monopolyGame',
		backEnd: null,
		try: {
			title: '',
			link: 'https://monopoly-game-six.vercel.app/',
		},
	},
	{
		title: 'Tamagotchi like game',
		techUsed: [
			{
				title: 'Node.js',
				link: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
			},
			{
				title: 'React',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
			},
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Redux',
				link: 'https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png',
			},
		],
		images: [TAM_game, TAM_start, TAM_lost],
		projectInfo: [
			'Select your pet',
			'Take care of it before it runs out of health points',
			'Automatic status updates from back end',
			'Experience points and levels increases as the game progresses',
			'Random production of eggs to gain money',
		],
		frontEnd: 'https://github.com/raminta17/tamagotchi_Front-End',
		backEnd: 'https://github.com/raminta17/tamagotchi_Back-End',
		try: {
			title: '',
			link: 'https://tamagotchi-front-end.vercel.app',
		},
	},
	{
		title: 'Treasure dig & hunt game',
		techUsed: [
			{
				title: 'React',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
			},
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
		],
		images: [GD_game],
		projectInfo: [
			'Dig gold while you still have energy',
			'Sell gold for randomly generated price',
			'Buy upgrades (find more gold, regain energy, increase inventory slots)',
			'Upgrade prices increases after buying them',
		],
		frontEnd: 'https://github.com/raminta17/goldDigGame',
		backEnd: null,
		try: {
			title: '',
			link: 'https://gold-dig-game-ha69.vercel.app/',
		},
	},
	{
		title: 'Build game',
		techUsed: [
			{
				title: 'TypeScript',
				link: 'https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'HTML',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
			},
		],
		images: [BG_game1, BG_game2],
		projectInfo: [
			'Code written with TypeScript',
			'Buy buildings if you have enough resources',
			'Buildings gives or takes resources every second',
			'Buy city hall to win the game',
		],
		frontEnd: 'https://github.com/raminta17/build_game',
		backEnd: null,
		try: {
			title: '',
			link: 'https://build-game-mu.vercel.app/',
		},
	},
	{
		title: 'Movie reservation application',
		techUsed: [
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'HTML',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
			},
		],
		images: [MOV_seats, MOV_movies, MOV_profile, MOV_login],
		projectInfo: [
			'Project for JavaScript assignment',
			'User login',
			'Update username, profile photo, select gender',
			'Choose a movie and reserve available seats',
			'Seats reservation stored in local storage',
			'This project was my first universally written code - add new movie information to screens array and the code will do the rest to make a reservation possible',
		],
		frontEnd: 'https://github.com/raminta17/JS_assignement',
		backEnd: null,
		try: {
			title: '',
			link: 'https://js-assignement.vercel.app/',
		},
	},
	{
		title: 'Fun little elevator game',
		techUsed: [
			{
				title: 'Javascript',
				link: 'https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'HTML',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
			},
		],
		images: [EL_start, EL_end],
		projectInfo: [
			'Go to the floor where the person waits',
			'Take the person to the floor he wants',
			'New people with new requests keep coming',
			'Animated elevator door and person movement',
		],
		frontEnd: 'https://github.com/raminta17/liftas',
		backEnd: null,
		try: {
			title: '',
			link: 'https://liftas.vercel.app/',
		},
	},
	{
		title: 'My HTML and CSS assignment',
		techUsed: [
			{
				title: 'SASS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
			},
			{
				title: 'CSS',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
			},
			{
				title: 'Bootstrap',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
			},
			{
				title: 'HTML',
				link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
			},
		],
		images: [HTML_first, HTML_second, HTML_third],
		projectInfo: [
			'RegFood website clone',
			'Used SCSS for styling',
			'Full of details and animations',
			'Responsive design',
		],
		frontEnd: 'https://github.com/raminta17/HTML_CSS_assignment',
		backEnd: null,
		try: {
			title: '',
			link: 'https://html-css-assignment-chi.vercel.app/',
		},
	},
]
