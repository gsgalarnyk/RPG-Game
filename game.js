var cutepwr; 
var btlwns = 0 ;
var lose = false ;
var won = false ;
var myTsun;
var enmTsun;
var waifu;
var enmArray;
var haveWaifu = false;

 

function arraySet() {		//Sets all of the variable values


 		myWaifu = [];
 		enmArray = [ {
 			id: 0,
			name: "Haruhi",
			pic: 'https://cdn.discordapp.com/attachments/138117898177609728/337368299916754964/latest.png',
			HP: 150,
			AD: 5
		}, 	{ 
			id: 1,
			name: "Rin",
			pic: 'https://cdn.discordapp.com/attachments/138117898177609728/337653853539270666/latest.png',
			HP: 150,
			AD: 5
		}

		
		];

// 		$("#picking").html(choices);
// 		$("#todo").html("Click to choose your house");

// 		$('.babe').remove();
// 		$('.fighting').remove();
// 		$('#whathappens').html("");


	};

function attachWaifu() {
var myWaifu = "<img " + "src='https://cdn.discordapp.com/attachments/138117898177609728/337368299916754964/latest.png' " + "class='bttlbox'" + " >"
$('#myWaifu').html(myWaifu);
console.log(myWaifu);
}


$('.pWaifu').click(function() {
if (!haveWaifu) {
$('#myWaifu').html($(this).show('slow'));
haveWaifu = true ;


}
else if (!haveenm & haveWaifu = true) {
	
}
//"<img " + "src='https://cdn.discordapp.com/attachments/138117898177609728/337368299916754964/latest.png' " + " >"


});

	
$('#restart').click(function(){
	arraySet();
	console.log(enmArray);
});