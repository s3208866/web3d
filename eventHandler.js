//functions for keyboard events

document.onkeydown = handleKeyDown;
var currentJoint;
var direction;
function handleKeyDown(event){
	
	switch(event.keyCode){
		//TURTLE CONTROLS-------------------------------
		//Front/Back/Left/Right selection
		case 37:
			direction = "left";
			break;
		case 39:
			direction = "right";
			break;
		case 38:
			direction = "front";
			break;
		case 40:
			direction = "rear";
			break;
			
		//Joint selection
		case 78:
			currentJoint = "neck";
			break;
			
		case 84:
			currentJoint = "tail";
			break;
		
		case 72:
			currentJoint = "hip";
			break;
			
		case 75:
			currentJoint = "knee";
			break;
			
		case 65:
			currentJoint = "ankle";
			break;
			
		//Leg/head/tail joint movements
		//Up
		case 187:
			
			if(currentJoint == "neck" || currentJoint == "tail"){
				upJoint(currentJoint);
			}
			
			else if(currentJoint && direction){
				legJointUp(currentJoint,direction);
			}
			break;
			
		//Down	
		case 189:
		
			if(currentJoint == "neck" || currentJoint == "tail"){
				downJoint(currentJoint);
			}
			
			else if(currentJoint && direction){
				legJointDown(currentJoint,direction);
			}
			break;

			
		//TOGGLE CASES----------------------------------	
		//Toggle wireframe
		case 77:
			turtle.traverse(function(obj){
				if(obj instanceof THREE.Mesh){
					if(!obj.material.wireframe){
						obj.material.wireframe=true;
					}
					else{
						obj.material.wireframe=false;
					}
				}
			});
			break;
			
		//Toggle Axes
		case 88:
			turtle.traverse(function(obj){
				if(obj.name=="axes"){
					if(obj.visible){
						obj.visible = false;
					}
					else{
						obj.visible = true;
					}
				}
			})
			break;
			
		//Toggle Light
		case 76:
			if(light.visible){
				light.visible = false;
			}
			else{
				light.visible = true;
				}
			break;
	}
}

//Move leg joints up
function legJointUp(joint,direction){
	var maxRotation;
	if(joint=="hip"){maxRotation = Math.PI*0.5;}
	if(joint=="knee"){maxRotation = 0;}
	if(joint=="ankle"){maxRotation = 1.05;}

	for(var x=0; x<turtle.children.length; x++){
		if(direction == "right"){
			if(turtle.children[x].name == "fr" || turtle.children[x].name == "rr"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z <= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z += Math.PI/180;
				}
			}
		}
		if(direction == "left"){
			if(turtle.children[x].name == "fl" || turtle.children[x].name == "rl"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z <= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z += Math.PI/180;
				}
			}
		}
		if(direction == "front"){
			if(turtle.children[x].name == "fl" || turtle.children[x].name == "fr"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z <= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z += Math.PI/180;
				}
			}
		}
		if(direction == "rear"){
			if(turtle.children[x].name == "rl" || turtle.children[x].name == "rr"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z <= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z += Math.PI/180;
				}
			}
		}
	}
}

//Move leg joint down
function legJointDown(joint,direction){
	var maxRotation;
	if(joint=="hip"){maxRotation = -Math.PI*0.5;}
	if(joint=="knee"){maxRotation = -Math.PI*0.5;}
	if(joint=="ankle"){maxRotation = -1.05;}

	for(var x=0; x<turtle.children.length; x++){
		if(direction == "right"){
			if(turtle.children[x].name == "fr" || turtle.children[x].name == "rr"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z >= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z -= Math.PI/180;
				}
			}
		}
		if(direction == "left"){
			if(turtle.children[x].name == "fl" || turtle.children[x].name == "rl"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z >= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z -= Math.PI/180;
				}
			}
		}
		if(direction == "front"){
			if(turtle.children[x].name == "fr" || turtle.children[x].name == "fl"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z >= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z -= Math.PI/180;
				}
			}
		}
		if(direction == "rear"){
			if(turtle.children[x].name == "rr" || turtle.children[x].name == "rl"){
				if(turtle.children[x].getObjectByName(joint,true).rotation.z >= maxRotation){
					turtle.children[x].getObjectByName(joint,true).rotation.z -= Math.PI/180;
				}
			}
		}
	}
}

//Head & Neck movements
function upJoint(joint){
	if(turtle.getObjectByName(joint,true).rotation.z <= Math.PI*0.5){
		turtle.getObjectByName(joint,true).rotation.z += Math.PI/180;
	}
}

function downJoint(joint){
	if(turtle.getObjectByName(joint,true).rotation.z >= -Math.PI*0.5){
		turtle.getObjectByName(joint,true).rotation.z -= Math.PI/180;
	}
}















