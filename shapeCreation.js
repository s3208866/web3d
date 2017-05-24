/* SHAPE CREATION FILE */

function createHexagonalBipyramid(x,y,z) {
	var geometry = new THREE.Geometry();

	//Top Point
	geometry.vertices.push(new THREE.Vector3(0, y, 0));
	
	//Edge Points
	geometry.vertices.push(new THREE.Vector3(x, 0, z/2));
	geometry.vertices.push(new THREE.Vector3(0, 0, z));
	geometry.vertices.push(new THREE.Vector3(-x, 0, z/2));
	geometry.vertices.push(new THREE.Vector3(-x, 0, -z/2));
	geometry.vertices.push(new THREE.Vector3(0, 0, -z));
	geometry.vertices.push(new THREE.Vector3(x, 0, -z/2));
	
	//Bottom Point
	geometry.vertices.push(new THREE.Vector3(0, -y, 0));
	
	//Top Faces
	geometry.faces.push(new THREE.Face3(0, 6, 1));
	geometry.faces.push(new THREE.Face3(0, 1, 2));
	geometry.faces.push(new THREE.Face3(0, 2, 3));
	geometry.faces.push(new THREE.Face3(0, 3, 4));
	geometry.faces.push(new THREE.Face3(0, 4, 5));
	geometry.faces.push(new THREE.Face3(0, 5, 6));
	
	//Bottom Faces
	geometry.faces.push(new THREE.Face3(7, 6, 1));
	geometry.faces.push(new THREE.Face3(7, 1, 2));
	geometry.faces.push(new THREE.Face3(7, 2, 3));
	geometry.faces.push(new THREE.Face3(7, 3, 4));
	geometry.faces.push(new THREE.Face3(7, 4, 5));
	geometry.faces.push(new THREE.Face3(7, 5, 6));
	
	geometry.computeFaceNormals();

	var material = new THREE.MeshPhongMaterial({color: 0xff0000, specular: 0xffffff});
	material.side = THREE.DoubleSide;
	
	var hBiPyramid = new THREE.Mesh(geometry, material);
	
	return hBiPyramid;
	
}
function createSquareBipyramid(x,y,z){
	var geometry = new THREE.Geometry();

	//Face Coordinates
	geometry.vertices.push(new THREE.Vector3(-x, 0, 0));
	geometry.vertices.push(new THREE.Vector3(x, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 0, z));
	geometry.vertices.push(new THREE.Vector3(0, 0, -z));
	geometry.vertices.push(new THREE.Vector3(0, y, 0));
	geometry.vertices.push(new THREE.Vector3(0, -y, 0));
	
	// Faces
	geometry.faces.push(new THREE.Face3(0, 2, 4));
	geometry.faces.push(new THREE.Face3(0, 2, 5));

	geometry.faces.push(new THREE.Face3(1, 2, 4));
	geometry.faces.push(new THREE.Face3(1, 2, 5));

	geometry.faces.push(new THREE.Face3(0, 3, 4));
	geometry.faces.push(new THREE.Face3(0, 4, 5));

	geometry.faces.push(new THREE.Face3(1, 3, 4));
	geometry.faces.push(new THREE.Face3(1, 3, 5));

	geometry.computeFaceNormals();

	var material = new THREE.MeshPhongMaterial({color: 0xff0000, specular: 0xffffff});
	var sBiPyramid = new THREE.Mesh(geometry, material);
	material.side = THREE.DoubleSide;
	
	sBiPyramid.add(createAxes(0.5));
	
	return sBiPyramid;
}

function createTriangle(){
	var geometry = new THREE.Geometry();
	
	geometry.vertices.push(new THREE.Vector3(-0.5, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 0, -0.25));
	geometry.vertices.push(new THREE.Vector3(0, 0, 0.25));
	
	geometry.faces.push(new THREE.Face3(0, 1, 2));
	
	var material = new THREE.MeshBasicMaterial({color: 0xff0000});
	material.side = THREE.DoubleSide;
	var triangle = new THREE.Mesh(geometry, material);
	
	
	triangle.add(createAxes(0.5));
	
	return triangle;
}





