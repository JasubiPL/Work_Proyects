const renderZone = document.getElementById("render_zone")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({ alpha:true })
renderer.setSize(350, 350)
renderZone.append(renderer.domElement)

const geometry =  new THREE.BoxGeometry(3, 3, 3)
const material = new THREE.MeshBasicMaterial({color: 0xf2f2f2})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5


function animate(){
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()