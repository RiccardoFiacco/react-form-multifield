import gto from './assets/gto2.jpg'
export const lenguage = ['html', 'css', 'js', 'php'] 
let max = 3;

function nRandom(max){
	const random = Math.floor(Math.random()*max)+1;
	return random
}

export function createArr(array){
	let finalArr = [];
	for(let i=0; i<4;i++){
		let num = nRandom(max);
		if(!finalArr.includes(array[num])){
			finalArr.push(array[num]);
		}
	}
	return finalArr;
}

export const posts = [
	{
		id: 1,
		title: 'Titolo del Post',
		image: gto,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: createArr(lenguage),
		published: true,
	},
	{
		id: 2,
		title: 'Titolo del Post',
		image: gto,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: createArr(lenguage),
		published: true,
	},
	{
		id: 3,
		title: 'Titolo del Post',
		image: '',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: createArr(lenguage),
		published: true,
	},
	{
		id: 4,
		title: 'Titolo del Post',
		image: gto,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: createArr(lenguage),
		published: false,
	},
]