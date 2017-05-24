//create bodyparts


function createTorso(){
	var sizeX = 0.866;
	var sizeY = 0.5;
	var sizeZ = 1;
	
	//need to add material still
	var torso = createHexagonalBipyramid(sizeX,sizeY,sizeZ);
	torso.add(createAxes(2));
	
	return torso;
}

function createJoint(name){
	//need to add material still
	var joint = new THREE.Object3D();
	joint.name = name;
	joint.add(createAxes(0.5));
	
	return joint;
}

function createLeg(){
	
	var sizeX = 0.5;
	var sizeY = 0.3;
	var sizeZ = 0.3;
	
	//Hip
	var hip = createJoint("hip");
	hip.rotation.z = -Math.PI / 6;
	
	//Upper Leg
	var upperLeg = createSquareBipyramid(sizeX,sizeY,sizeZ);
	upperLeg.position.x += 0.5;
	hip.add(upperLeg);
	
	//Knee
	var knee = createJoint("knee");
	knee.position.x += 0.5;
	knee.rotation.z = -Math.PI / 6;
	upperLeg.add(knee);
	
	//Lower Leg
	var lowerLeg = createSquareBipyramid(sizeX,sizeY,sizeZ);
	lowerLeg.position.x += 0.5;
	knee.add(lowerLeg);
	
	//Ankle
	var ankle = createJoint("ankle");
	ankle.position.x += 0.5;
	ankle.rotation.z = -Math.PI / 6;
	lowerLeg.add(ankle);
	
	//Foot
	var foot = createSquareBipyramid(sizeX,sizeY,sizeZ);
	foot.position.x += 0.5;
	
	ankle.add(foot);
	
	return hip;
}

function createHead(){
	var sizeX = 0.5;
	var sizeY = 0.3;
	var sizeZ = 0.3;
	
	var neck = createJoint("neck");
	var head = createSquareBipyramid(sizeX,sizeY,sizeZ);
	head.position.x += 0.5;
	neck.add(head);
	
	return neck;
}

function createTail(){
	var tail = createTriangle();
	tail.add(createAxes(0.5));
	
	return tail;
}

function createTurtle(){
	
	
	
	var body = createTorso();
	var head = createHead();
	var fRLeg = createLeg();
	var fLLeg = createLeg();
	var rRLeg = createLeg();
	var rLLeg = createLeg();
	var tail = createTail();
	
	head.position.x += 0.866;
	
	//front right leg
	fRLeg.position.x += 0.5;
	fRLeg.position.z += 0.707;
	fRLeg.rotation.y = -Math.PI / 3;
	
	//front left leg
	fLLeg.position.x += 0.5;
	fLLeg.position.z -= 0.707;
	fLLeg.rotation.y = Math.PI / 3;
	
	//rear right leg
	rRLeg.position.x -= 0.5;
	rRLeg.position.z += 0.707;
	rRLeg.rotation.y = -(Math.PI / 3)*2 ;
	
	//rear left leg
	rLLeg.position.x -= 0.5;
	rLLeg.position.z -= 0.707;
	rLLeg.rotation.y = (Math.PI / 3)*2 ;
	
	//tail
	tail.position.x -= 0.866;
	
	body.add(head);
	body.add(fRLeg);
	body.add(fLLeg);
	body.add(rRLeg);
	body.add(rLLeg);
	body.add(tail);

	return body;
}































