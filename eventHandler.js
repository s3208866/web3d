//functions for keyboard events

document.onkeydown = handleKeyDown;
//document.onkeyup = handleKeyUp;

function handleKeyDown(event){
	switch(event.keyCode){
		//left
		case 37:
			scene.rotation.y += 2*Math.PI/180;
			break;
			
		//right	
		case 39:
			scene.rotation.y -= 2*Math.PI/180;
			break;
			
		//up
		case 38:
			scene.rotation.x += 2*Math.PI/180;
			break;
			
		//down
		case 40:
			scene.rotation.x -= 2*Math.PI/180;
			break;
			
		//animate stuff
		case 78:
			turtle.getObjectByName("neck",true).rotation.z +=2*Math.PI/90;
			break;
			
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














