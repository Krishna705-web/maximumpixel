const fs = require("fs");
const path = "d:/maximumpixel/public/assets/studio-backdrop.glb";
const data = fs.readFileSync(path);
const chunk0Length = data.readUInt32LE(12);
const jsonStr = data.toString("utf8", 20, 20 + chunk0Length);
const json = JSON.parse(jsonStr);

console.log("=== GLTF SCENE GRAPH ===");
console.log("Scene:", json.scene);
console.log("Nodes:", JSON.stringify(json.nodes, null, 2));
console.log("Meshes:", JSON.stringify(json.meshes, null, 2));
console.log("Materials:", JSON.stringify(json.materials, null, 2));
