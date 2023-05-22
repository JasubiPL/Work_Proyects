//Scene
const renderZone = document.getElementById("render_zone")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({ alpha:true })
renderer.setSize(350, 350)
renderZone.append(renderer.domElement)

//cube
const geometry =  new THREE.BoxGeometry(3, 3, 3)
const material = new THREE.MeshStandardMaterial({color: 0x004cfa})
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true
scene.add(cube)

//light
const light = new THREE.DirectionalLight( 0xffffff, 1,50 );
light.position.set(0, 1, 1)
light.castShadow = true
scene.add(light)


camera.position.z = 5


function animate(){
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()