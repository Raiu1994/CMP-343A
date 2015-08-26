horsePrototype = makeMammal ({
	has_tail : true,
	hello_text: 'Neigh'
});

makeHorse = function( arg_map) {
	var horse = Object.create( horsePrototype );
	extendObject ( horse, arg_map);
	return horse;
};

chesterHorse = makeHorse ({
	name	   : 'Chester',
	weight_lbs : 100
});

chesterHorse.say_hello();
chesterHorse.say_text('Clomp clomp clomp');
