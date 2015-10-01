//This needs to be added to the end of the animal code to work.
//This is a test commit.
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
