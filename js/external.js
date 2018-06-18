// background images

var images= ['images/court1.jpg',
	'images/court2.jpg',
	'images/court3.jpg',
	'images/court4.jpg', 
	'images/court5.jpg',
	'images/court4.jpg',
	'images/court3.jpg',
	'images/court2.jpg',
]
// changes background colors
setInterval(function() {
	var url=images[Math.floor(Math.random() * images.length)];
	document.body.style.backgroundImage = 'url('+url+')';
},600);

// moves lebron
function move(){
	var bron = document.getElementById('bron');
	var pos = 0;
	var id = setInterval(left, 15);

	function left(){
		if (pos == 1600){
			clearInterval(id);
		}else{
			pos++;
			bron.style.left = pos + 'px';
			bron.style.right = pos + 'px';
			
		
		}
	}
}
function move2(){
	var drj = document.getElementById('drj');
	var pos = 0;
	var id = setInterval(right, 5);

	function right(){
		if (pos == 1600){
			clearInterval(id);
		}else{
			pos++;
			drj.style.right = pos + 'px';
			drj.style.bottom = pos + 'px';
			
		
		}
	}
}





