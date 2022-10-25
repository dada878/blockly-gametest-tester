// see FileSaver.js

function generate() {
  var generate_code = Blockly.JavaScript.workspaceToCode(workspace);
  var init_code = `import * as Minecraft from 'mojang-minecraft';\nconst log = function(message) {let okay_message = message.toString().replaceAll('\\"',"''").replaceAll('\\\\',"/");Minecraft.world.getDimension("overworld").runCommand(\`tellraw @a {"rawtext":[{"text":"\${okay_message}"}]}\`)}\n`
  return init_code + generate_code
}
function check() {
  alert(generate())
}
function saveBlocks() {
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);

  localStorage.setItem('workSpace', xml_text);
}

function download_project() {
  let xml = Blockly.Xml.workspaceToDom(workspace);
  let xml_text = Blockly.Xml.domToText(xml);

  let project_name = prompt("輸入專案名稱");

  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/gbs;charset=utf-8,' + encodeURIComponent(xml_text));
  element.setAttribute('download', `${project_name}.gbs`);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function upload_project() {
  let element = document.createElement('input');
  element.setAttribute('type', 'file');
  element.setAttribute('data-target', 'file-uploader');
  element.setAttribute('accept', '.gbs');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.addEventListener('change', (e) => {
    let blob = e.target.files[0];

    const reader = new FileReader();

    reader.readAsText(blob, "UTF-8")
    reader.onload = function (e) {
      const fileString = e.target.result

      var xml = Blockly.Xml.textToDom(fileString);
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, workspace);
    }

    document.body.removeChild(element);
  });

  element.click();
}

function loadBlocks() {
  var check = confirm('載入專案將不會保存目前進度，你確定要載入嗎？');
  if (check) importBlocks();
}
function importBlocks() {
  try {
    // var xml_text = prompt("Please enter XML code", "");
    var xml_text = localStorage.getItem('workSpace')

    var xml = Blockly.Xml.textToDom(xml_text);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, workspace);
  } catch (e) {
    alert(e);
  }
}
function importBlocks2() {
  try {
    var xml_text = prompt("輸入方塊資料");

    var xml = Blockly.Xml.textToDom(xml_text);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, workspace);
  } catch (e) {
    alert(e);
  }
}

function uuid() {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
//try刪除一下uuid()
function download_pack(packName, code) {
  const manifest = {
    "format_version": 2,
    "header": {
      "description": "§e此附加包使用§bGametest生成器§e製作！",
      "name": packName,
      "uuid": "ee649bcf-256c-4013-9068-6a802b89d756",
      "version": [0, 0, 1],
      "min_engine_version": [1, 19, 30]
    },
    "modules": [
      {
        "description": "Plugin Module",
        "type": "javascript",
        "uuid": "fa6e90c8-c925-460f-8155-c8a60b753caa",
        "version": [0, 0, 1],
        "entry": "blockly-gametest/main.js"
      }
    ],
    "dependencies": [
        {
            "uuid": "66c6e9a8-3093-462a-9c36-dbb052165822",
            "version": [0, 0, 1]
        }
    ]
  }

  let mcpack = new JSZip();
  //添加文字檔案
  mcpack.file("manifest.json", JSON.stringify(manifest));
  //添加資料夾
  let script = mcpack.folder("blockly-gametest");
  script.file("main.js", code);

  mcpack.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, packName + '.mcpack');
  });
}

function download_js(code) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/js;charset=utf-8,' + encodeURIComponent(code));
  element.setAttribute('download', 'script.js');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
