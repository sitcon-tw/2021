<template>
  <div class="bg-container">
    <canvas ref="bgCanvas"></canvas>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'; // WARNING " should be '
// import Vue from 'vue';
import * as THREE from 'three'; // WARNING " should be '
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  name: 'background', // WARNING " should be '
  data () { // WARNING Missing whitespace before function parens
    return {
      resize_timeout: null,
      alive: true,
      scene: null,
      renderer: null,
      spotLight: null,
      camera: null,
      controls: null,
      light_ambient: null,
      geometry: null,
      material: null,
      mesh: null,
      cylinder_group: null,
      box_group: null,
      spotLight_box: null,
      spotLight_box_top: null,
      offset: 0,
      offset_momentum: 0,
      skip: null,
      event: null,
      preScreenY: 0,
      deltaScreenY: 0,
      deltaEventY: 0,
      cylinder_radius: 100,
      divide: 45,
      half_divide: 45,
      divide_2: 50,
      LOWER_BOUND_FPS: 1 / 45,
      clock: null// WARNING Unnecessary trailing comma
    };
  },
  mounted () {
    const clock = new THREE.Clock();
    this.init();
    // addEventListener("touchmove", this.onTouchMove);
    // addEventListener("wheel", this.onWheelMove);
    addEventListener('resize', this.resize);
    this.animate();
  },
  destroyed () {
    this.alive = false;
    // removeEventListener("touchmove", this.onTouchMove);
    // removeEventListener("wheel", this.onWheelMove);
    removeEventListener('resize', this.resize);
  },
  methods: {
    where_you_want (i) {
      const absHalf = Math.abs(this.half_divide - i);
      const whereIWant = this.cylinder_radius / this.half_divide;
      return [absHalf * 10, absHalf * (whereIWant + 13), -absHalf * 10];
    },
    set_cylinder_position (offset = 0) {
      let i = 0;
      for (i = 0; i < this.divide; i++) {
        this.cylinder_group[i].position.set(...this.where_you_want(i + offset));
      }
    },
    init () {
      // const container = document.getElementById('container');
      this.clock = new THREE.Clock();
      const canvas = this.$refs['bgCanvas'];
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas
      });
      this.renderer.setSize(width, height);
      this.scene = new THREE.Scene();
      this.light_ambient = new THREE.AmbientLight(0xb5b5b5); // 0xeef2ff
      this.scene.add(this.light_ambient);
      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.set(
        10.245126496820145,
        244.4408261363762,
        -52.437908013976546
      );
      this.camera.rotation.set(
        -1.6591961412803802,
        0.08212393176606579,
        2.3948431028045545
      );
      this.scene.add(this.camera);
      this.cylinder_group = new THREE.Group();
      let i = 0;
      for (i = 0; i < this.divide; i++) {
        const geometryCy = new THREE.CylinderGeometry(
          this.cylinder_radius * 3,
          this.cylinder_radius * 3,
          2,
          100
        );
        const materialCy = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          transparent: true
        });
        const tempGeo = new THREE.Mesh(geometryCy, materialCy);
        const meshTestGroup = new THREE.Group();
        meshTestGroup.add(tempGeo);
        const addBox = new THREE.BoxGeometry(300, 2, 300, 32); // 縮減 geometry 大小
        const addBoxMesh = new THREE.Mesh(addBox, materialCy);
        addBoxMesh.rotation.y -= Math.PI / 4;
        addBoxMesh.position.x = 9;
        addBoxMesh.position.z = 220;
        meshTestGroup.add(addBoxMesh);
        this.cylinder_group[i] = meshTestGroup;
        this.cylinder_group[i].receiveShadow = true;
        this.cylinder_group[i].castShadow = true;
        this.cylinder_group.add(this.cylinder_group[i]);
      }
      this.set_cylinder_position();
      this.cylinder_group.position.set(-219.2, -263.3, 266.1);
      this.cylinder_group.rotation.set(-0.407, 0.009, -0.823);
      this.scene.add(this.cylinder_group);
      this.box_group = new THREE.Group();
      // divide_2 = 50; // 縮減 geometry 數量
      for (i = 0; i < this.divide_2; i++) {
        const geometryBx = new THREE.BoxGeometry(255, 1, 300, 200);
        const materialBx = new THREE.MeshLambertMaterial({
          color: 0xffffff
        });
        this.box_group[i] = new THREE.Mesh(geometryBx, materialBx);
        this.box_group[i].rotation.z = i * (Math.PI / this.divide_2);
        this.box_group[i].receiveShadow = true;
        this.box_group[i].castShadow = true;
        this.box_group.add(this.box_group[i]);
      }
      this.box_group.rotation.set(-0.269, -0.961, 0);
      this.box_group.position.set(-64.8, 133.7, -197.1);
      this.scene.add(this.box_group);
      this.spotLight = new THREE.SpotLight(0xb9b9b9);
      this.spotLight.position.set(864.4, 1327.5, -525.2);
      const targetObject = new THREE.Object3D();
      targetObject.position.set(250, 50, 50);
      this.scene.add(targetObject);
      this.spotLight.target = targetObject;
      this.scene.add(this.spotLight.target);
      this.spotLight.angle = 0.85;
      this.spotLight.penumbra = 0.8;
      this.spotLight.distance = 1500;
      this.spotLight.castShadow = true;
      this.spotLight.shadow.mapSize.width = 1024;
      this.spotLight.shadow.mapSize.height = 1024;
      this.spotLight.shadow.camera.near = 100;
      this.spotLight.shadow.camera.far = 50;
      this.spotLight.shadow.camera.fov = 30;
      this.scene.add(this.spotLight);
      const pointLight = new THREE.PointLight(0x909090, 1, 500);
      pointLight.castShadow = true;
      pointLight.position.set(300, 100, 50);
      this.scene.add(pointLight);
      const pointLightTop = new THREE.PointLight(0xffffff, 1, 500);
      pointLightTop.castShadow = true;
      pointLightTop.position.set(-200, 550, -300);
      this.scene.add(pointLightTop);
      this.spotLight_box = new THREE.SpotLight(0xcccccc);
      this.spotLight_box.castShadow = true;
      this.spotLight_box.position.set(-2113.3, -1253.56, 1062.8);
      this.spotLight_box.shadow.mapSize.width = 50;
      this.spotLight_box.shadow.mapSize.height = 50;
      this.spotLight_box.target = this.box_group;
      this.spotLight_box.angle = 0.25;
      this.spotLight_box.shadow.camera.near = 250;
      this.spotLight_box.shadow.camera.far = 150;
      this.spotLight_box.shadow.camera.fov = 50;
      this.scene.add(this.spotLight_box);
      this.spotLight_box_top = new THREE.SpotLight(0xcccccc);
      this.spotLight_box_top.castShadow = true;
      const targetObject2 = new THREE.Object3D();
      targetObject2.position.set(-350, 50, -250);
      this.scene.add(targetObject2);
      this.spotLight_box_top.target = targetObject2;
      this.scene.add(this.spotLight_box_top.target);
      this.spotLight_box_top.position.set(-1716.2, -1253.56, 798.18);
      this.spotLight_box_top.shadow.mapSize.width = 50;
      this.spotLight_box_top.shadow.mapSize.height = 50;
      this.spotLight_box_top.target = this.box_group;
      this.spotLight_box_top.angle = 0.25;
      this.spotLight_box_top.shadow.camera.near = 250;
      this.spotLight_box_top.shadow.camera.far = 150;
      this.spotLight_box_top.shadow.camera.fov = 50;
      this.scene.add(this.spotLight_box_top);
      //   document.body.appendChild(this.renderer.domElement);
      //            window.addEventListener('touchmove', this.event => {
      //                this.deltaScreenY = this.event.touches[0].screenY - this.preScreenY;
      //                if (this.deltaScreenY < 0) {
      //                    this.offset_momentum -= 0.005;
      //                } else {
      //                    this.offset_momentum += 0.005;
      //                }
      //                this.preScreenY = this.event.touches[0].screenY;
      //            });
      //
      //            window.addEventListener('wheel', this.event => {
      //                this.deltaEventY = Math.sign(this.event.deltaY);
      //                if (this.deltaEventY === -1) {
      //                    this.offset_momentum -= 0.05;
      //                } else {
      //                    this.offset_momentum += 0.05;
      //                }
      //            });
      // addDatGui(); // 移除右上 gui control 面板
      // controls = new THREE.OrbitControls( camera, renderer.domElement);
      // for 旋轉各角度方便調整整體
    },
    onTouchMove () {
      this.deltaScreenY = event.touches[0].screenY - this.preScreenY;
      if (this.deltaScreenY < 0) {
        this.offset_momentum -= 0.005;
      } else {
        this.offset_momentum += 0.005;
      }
      this.preScreenY = event.touches[0].screenY;
    },
    onWheelMove () {
      this.deltaEventY = Math.sign(event.deltaY);
      if (this.deltaEventY === -1) {
        this.offset_momentum -= 0.05;
        // console.log("up");
      } else {
        this.offset_momentum += 0.05;
        // console.log("down");
      }
    },
    animate () {
      if (!this.alive) {
          return;
      }

      let delta = this.clock.getDelta();
      console.log(delta);
      if (delta == 0) delta = 1 / 30;
      

      if (delta <= this.LOWER_BOUND_FPS) {
        console.log('here');
        requestAnimationFrame(this.animate);
        this.offset += (pageYOffset / 200 - this.offset) * 0.1;
        //   this.offset_momentum *= 0.9;
        this.box_group.rotation.z = (-this.offset * Math.PI) / this.divide_2;
        this.set_cylinder_position(this.offset % 1); // 這邊的取餘數是關鍵，因為 offset 的週期是1 (offset=1與offset=2畫面看起來相同)
        this.renderer.render(this.scene, this.camera);
        //   this.render(this.animate); // 效能提升，渲染次數減半
      }
      else{
        requestAnimationFrame(this.animate);
      }
      
    },
    // render() {
    //   if (this.skip !== 0) {
    //     this.renderer.render(this.scene, this.camera);
    //     requestAnimationFrame(this.animate);
    //     this.skip = ++this.skip % 2;
    //     return;
    //   } else {
    //     this.skip = ++this.skip % 2;
    //   }
    // },
    resize () {
      clearTimeout(this.resize_timeout);
      this.resize_timeout = setTimeout(() => {
        const width = innerWidth;
        const height = innerHeight;
        //   this.$refs["bgCanvas"].width = width;
        //   this.$refs["bgCanvas"].height = height;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
      }, 20);
    }
  }
};
</script>
<style scoped>
canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* z-index: 0; */
}
</style>