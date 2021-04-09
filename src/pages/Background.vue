<template>
    <div id="container"></div>
</template>

<script>
import Vue from 'vue';
import * as THREE from 'three';
import oc from 'three-orbit-controls';

Vue.use({
  install (Vue) {
    Vue.protoype.$THREE = THREE;
  }
});

import {
    OBJLoader,
    MTLLoader
} from 'three-obj-mtl-loader';
// import MTLLoader from  'three-mtl-loader';
// import OBJLoader from  'three-obj-loader';
import {
    CSS2DRenderer,
    CSS2DObject
} from 'three-css2drender';

// const OrbitControls = require('three-orbit-controls')(THREE);
const OrbitControls = oc(THREE);

export default {
    name: 'Background',
    data () {
        return {
            scene: '',
            renderer: '',
            spotLight: '',
            camera: '',
            controls: '',
            light_ambient: '',
            geometry: '',
            material: '',
            mesh: '',
            cylinder_group: '',
            box_group: '',
            spotLight_box: '',
            spotLight_box_top: '',
            offset: 0,
            offset_momentum: 0,
            skip: '',
            document: '',
            event: '',
            preScreenY: 0,
            deltaScreenY: 0,
            deltaEventY: 0
        };
    },

    mounted () {
        this.init();
        this.animate();
    },

    methods: {
        where_you_want (i) {
            abs_half = Math.abs(half_divide - i);
            where_i_want = cylinder_radius / (half_divide);
            return [
                abs_half * 10,
                abs_half * (where_i_want + 13),
                -abs_half * 10
            ];
        },

        set_cylinder_position (offset = 0) {
            for (i = 0; i < divide; i++) {
                cylinder_group[i].position.set(...where_you_want(i + offset));
            }
        },

        init () {
            const container = document.getElementById('container');

            const width = window.innerWidth;
            const height = window.innerHeight;

            this.renderer = new THREE.WebGLRenderer({
                setClearColor: 0x000000
            });
            this.document.body.appendChild(this.renderer.domElement);
            this.renderer.setSize(width, height);

            this.scene = new THREE.Scene();

            this.light_ambient = new THREE.AmbientLight(0xb5b5b5); // 0xeef2ff
            this.scene.add(this.light_ambient);

            this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);

            this.camera.position.set(10.245126496820145, 244.4408261363762, -52.437908013976546);
            this.camera.rotation.set(-1.6591961412803802, 0.08212393176606579, 2.3948431028045545);

            this.scene.add(this.camera);

            cylinder_radius = 100;
            this.cylinder_group = new THREE.Group();
            divide = 45;

            half_divide = divide;

            for (i = 0; i < divide; i++) {
                geometry_cy = new THREE.CylinderGeometry(cylinder_radius * 3, cylinder_radius * 3, 2, 100);
                material_cy = new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    transparent: true
                });

                tempGeo = new THREE.Mesh(geometry_cy, material_cy);

                mesh_test_group = new THREE.Group();
                mesh_test_group.add(tempGeo);

                add_box = new THREE.BoxGeometry(300, 2, 300, 32); // 縮減 geometry 大小
                add_box_mesh = new THREE.Mesh(add_box, material_cy);
                add_box_mesh.rotation.y -= Math.PI / 4;
                add_box_mesh.position.x = 9;
                add_box_mesh.position.z = 220;
                mesh_test_group.add(add_box_mesh);

                this.cylinder_group[i] = mesh_test_group;

                this.cylinder_group[i].receiveShadow = true;
                this.cylinder_group[i].castShadow = true;
                this.cylinder_group.add(this.cylinder_group[i]);
            }

            set_cylinder_position();

            this.cylinder_group.position.set(-219.2, -263.3, 266.1);
            this.cylinder_group.rotation.set(-0.407, 0.009, -0.823);

            this.scene.add(this.cylinder_group);

            this.box_group = new THREE.Group();
            divide_2 = 50; // 縮減 geometry 數量
            for (i = 0; i < divide_2; i++) {
                geometry_bx = new THREE.BoxGeometry(255, 1, 300, 200);
                material_bx = new THREE.MeshLambertMaterial({
                    color: 0xffffff
                });

                this.box_group[i] = new THREE.Mesh(geometry_bx, material_bx);

                this.box_group[i].rotation.z = i * (Math.PI / divide_2);
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

            point_light = new THREE.PointLight(0x909090, 1, 500);
            point_light.castShadow = true;
            point_light.position.set(300, 100, 50);
            this.scene.add(point_light);

            point_light_top = new THREE.PointLight(0xffffff, 1, 500);
            point_light_top.castShadow = true;
            point_light_top.position.set(-200, 550, -300);
            this.scene.add(point_light_top);

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
            scene.add(targetObject2);

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

            this.document.body.appendChild(this.renderer.domElement);

            window.addEventListener('touchmove', this.onTouchMove);
            window.addEventListener('wheel', this.onWheelMove);
//            window.addEventListener('touchmove', this.event => {
//                this.deltaScreenY = this.event.touches[0].screenY - this.preScreenY;
//                if (this.deltaScreenY < 0) {
//                    this.offset_momentum -= 0.005;
//                } else {
//                    this.offset_momentum += 0.005;
//                }
//                this.preScreenY = this.event.touches[0].screenY;
//            });

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
            this.deltaScreenY = this.event.touches[0].screenY - this.preScreenY;
            if (this.deltaScreenY < 0) {
                this.offset_momentum -= 0.005;
            } else {
                this.offset_momentum += 0.005;
            }
            this.preScreenY = this.event.touches[0].screenY;
        },

        onWheelMove () {
            this.deltaEventY = Math.sign(this.event.deltaY);
            if (this.deltaEventY === -1) {
                this.offset_momentum -= 0.05;
            } else {
                this.offset_momentum += 0.05;
            }
        },

        animate () {
            offset += offset_momentum;
            offset_momentum *= 0.9;
            this.box_group.rotation.z = -offset * PI / divide_2;
            set_cylinder_position(offset % 1); // 這邊的取餘數是關鍵，因為 offset 的週期是1 (offset=1與offset=2畫面看起來相同)
            // requestAnimationFrame(animate);
            render(animate); // 效能提升，渲染次數減半
        },

        render (animate) {
            if (this.skip !== 0) {
                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(animate);
                this.skip = ++this.skip % 2;
                return;
            } else {
                this.skip = ++this.skip % 2;
            }
        }
    }
};

</script>
