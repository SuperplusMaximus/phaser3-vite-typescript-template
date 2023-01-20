import './style.css'
import Phaser from 'phaser';
import Scene from './Scene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [Scene],
  title: 'Shock and Awesome',
  url: 'http://shockandawe.io'
};

export default new Phaser.Game(config);