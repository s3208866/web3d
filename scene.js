// Scene File


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
var renderer = new THREE.WebGLRenderer();

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 2, 0);


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xf0f0f0, 1);
document.body.appendChild(renderer.domElement); 

//Camera controls
var controls = new THREE.TrackballControls(camera);

controls.addEventListener('change', render);
animate();

function render() {
    renderer.render(scene, camera); 
}

//-----------------------------testing shit
var x1 = 0,
	y1 =0, 
	x2 = 0.75,
	y2= 3.14,
	k= 0.5;

var keys = [0,0.75,1];
var values = [0,3.14,6.28];

function lerp(k1, v1, k2, v2, k){
	var v = (k-k1)/(k2-k1)*(v2-v1)+v1;
	
	return v;
}

function findInterval(keys, key){
	for(var i=0; i<keys.length; i++){
		if(keys[i] > key){
			console.log(i);
			return i;
		}
	}
	console.log("no valid value found");
}

function interpolator(keys, values, key){
	//find value between two keys eg. 0,2 = 

}
//findInterval(keys, k);
console.log(lerp(x1,y1,x2,y2,k));

//-----------------------------end testing shit

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}





//Set up variables
//Hexagonal Pyramid

//Scene creation/filling
var turtle = createTurtle();

scene.add(turtle);
scene.add(light);
camera.position.z = 4;
renderer.render(scene, camera);
console.log(light.intensity);
handleKeyDown(event);




