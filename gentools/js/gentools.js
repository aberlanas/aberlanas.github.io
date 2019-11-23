window.onload = function() {
    if (typeof window.FileReader !== "function") {
      alert("The file API isn't supported on this browser yet.");
    }
  };

  // Funciones de utilidad

  function cleanString(s) {
    s = s.replace(/\r/g, "");
    return s;
  }

  function limpiarResultados() {
    document.getElementById("result_1_title").innerHTML = "";
    document.getElementById("result_1_keys").innerHTML = "";
    document.getElementById("result_2_title").innerHTML = "";
    document.getElementById("result_2_keys").innerHTML = "";
    document.getElementById("result_3_title").innerHTML = "";
    document.getElementById("result_3_keys").innerHTML = "";
    document.getElementById("result_4_title").innerHTML = "";
    document.getElementById("result_4_keys").innerHTML = "";
    document.getElementById("result_5_title").innerHTML = "";
    document.getElementById("result_5_keys").innerHTML = "";
    document.getElementById("result_6_title").innerHTML = "";
    document.getElementById("result_6_keys").innerHTML = "";
  }

  function eliminarDiv(nameDiv) {
    nameDiv.parentNode.removeChild(nameDiv);
  }

  function limpiarInputFile() {
    document.querySelectorAll("input[type=file]").forEach(function(inaux) {
      inaux.value = "";
    });

    file_1 = {};
    file_2 = {};
    file_3 = {};
    file_4 = {};
    file_5 = {};
    file_6 = {};
  }

  var resultado = {};

  // TODO
  // Sinceramente esto es mejorable, pero me gustaría tener
  // una versión pronto de esto

  var file_1 = {};
  var file_2 = {};
  var file_3 = {};
  var file_4 = {};
  var file_5 = {};
  var file_6 = {};

  function readFile1(evt) {
    //falta excepcion dependiendo de el tipo de archivo o file le pasemos si le pasamos evt desde drog convertirlo en evt.
    let f = evt.target.files[0];

    //AÑADIDO
    file_1 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego y hacemos split con \n : txt_slp = array con contenido.
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_1[txt_spl[i]] == "undefined") {
              file_1[txt_spl[i]] = "";
            }

            file_1[txt_spl[i]] += txt_spl[i + 1];
          }
        }

        // Custom data

        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          //vaciamos elemento title para evitar duplicado de titulo
          // AÑADIDO
          document.querySelector("#result_1_title").innerHTML =
            " Fichero 1 Genes ";
            document.querySelector("#ocultado_1").style.display="block";
          //AÑADIDO
          document.getElementById("result_1_keys").innerHTML = "";
          Object.keys(file_1).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_1_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
          
        }
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  document
    .getElementById("file_1")
    .addEventListener("change", readFile1, false);

  function readFile2(evt) {
    var f = evt.target.files[0];
    //AÑADIDO
    file_2 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_2[txt_spl[i]] == "undefined") {
              file_2[txt_spl[i]] = "";
            }

            file_2[txt_spl[i]] += txt_spl[i + 1];
          }
        }

        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          document.querySelector("#result_2_title").innerHTML =
            "Fichero 2 Genes";
            document.querySelector("#ocultado_2").style.display="block";
          document.getElementById("result_2_keys").innerHTML = "";
          Object.keys(file_2).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_2_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
        }
        //document.getElementById('result_2').innerHTML=JSON.stringify(file_2);
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  document
    .getElementById("file_2")
    .addEventListener("change", readFile2, false);

  function readFile3(evt) {
    var f = evt.target.files[0];
    //AÑADIDO
    file_3 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_3[txt_spl[i]] == "undefined") {
              file_3[txt_spl[i]] = "";
            }

            file_3[txt_spl[i]] += txt_spl[i + 1];
          }
        }
        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          document.querySelector("#result_3_title").innerHTML =
          "Fichero 3 Genes";
          document.querySelector("#ocultado_3").style.display="block";

          document.getElementById("result_3_keys").innerHTML = "";
          Object.keys(file_3).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_3_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
        }
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  //AQUI ARREGLO DE COPI-PASTE XD
  document
    .getElementById("file_3")
    .addEventListener("change", readFile3, false);

  function readFile4(evt) {
    var f = evt.target.files[0];
    //AÑADIDO
    file_4 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_4[txt_spl[i]] == "undefined") {
              file_4[txt_spl[i]] = "";
            }

            file_4[txt_spl[i]] += txt_spl[i + 1];
          }
        }
        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          document.querySelector("#result_4_title").innerHTML =
          "Fichero 4 Genes";
          document.querySelector("#ocultado_4").style.display="block";
          document.getElementById("result_4_keys").innerHTML = "";
          Object.keys(file_4).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_4_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
        }
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  document
    .getElementById("file_4")
    .addEventListener("change", readFile4, false);

  function readFile5(evt) {
    var f = evt.target.files[0];
    //AÑADIDO
    file_5 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_5[txt_spl[i]] == "undefined") {
              file_5[txt_spl[i]] = "";
            }

            file_5[txt_spl[i]] += txt_spl[i + 1];
          }
        }
        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          document.querySelector("#result_5_title").innerHTML =
          "Fichero 5 Genes";
          document.querySelector("#ocultado_5").style.display="block";
          document.getElementById("result_5_keys").innerHTML = "";
          Object.keys(file_5).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_5_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
        }
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  document
    .getElementById("file_5")
    .addEventListener("change", readFile5, false);

  function readFile6(evt) {
    var f = evt.target.files[0];
    //AÑADIDO
    file_6 = {};

    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        contents = cleanString(contents);
        // TODO
        // Seguimos aqui luego
        var txt_spl = contents.split("\n");
        for (var i = 0; i < txt_spl.length; i++) {
          if (txt_spl[i].startsWith(">")) {
            if (typeof file_6[txt_spl[i]] == "undefined") {
              file_6[txt_spl[i]] = "";
            }

            file_6[txt_spl[i]] += txt_spl[i + 1];
          }
        }
        //AÑADIDO
        let showGensInFilesSetting = document.querySelector(
          "input[name='showGensInFiles']"
        ).checked;
        if (showGensInFilesSetting) {
          document.querySelector("#result_6_title").innerHTML =
          "Fichero 6 Genes";
          document.querySelector("#ocultado_6").style.display="block";
          document.getElementById("result_6_keys").innerHTML = "";
          Object.keys(file_6).forEach(function(key) {
            console.log(key);
            document.querySelector("#result_6_keys").innerHTML +=
              "<li>" + key + "</li>";
          });
        }
      }; // FIN del Onload

      r.readAsText(f);
    }
  }

  document
    .getElementById("file_6")
    .addEventListener("change", readFile6, false);

  // Don't define functions in functions in functions, when possible.

  function setup_reader(files, i) {
    var file = files[i];
    var name = file.name;

    var reader = new FileReader();
    reader.onload = function(e) {
      readerLoaded(e, files, i, name);
    };
    reader.readAsText(file);
    // After reading, read the next file.
  }

  function readerLoaded(e, files, i, name) {
    // get file content
    var txt = e.target.result;

    var txtspliteado = txt.split("\n");

    for (var i = 0; i < txtspliteado.length; i++) {
      console.log(txtspliteado[i]);
      if (txtspliteado[i].startsWith(">")) {
        if (typeof resultado[txtspliteado[i]] == "undefined") {
          resultado[txtspliteado[i]] = "";
        }
        resultado[txtspliteado[i]] += txtspliteado[i + 1];
      }
    }
    var li = document.createElement("li");
    li.innerHTML = name;
    var ul = document.querySelector("#bag>ul");
    ul.appendChild(li);

    // If there's a file left to load
    if (i < files.length - 1) {
      // Load the next file
      setup_reader(files, i + 1);
    }
  }

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function getFiles() {
    var files = [];
    if (JSON.stringify(file_1) != "{}") files.push(file_1);
    if (JSON.stringify(file_2) != "{}") files.push(file_2);
    if (JSON.stringify(file_3) != "{}") files.push(file_3);
    if (JSON.stringify(file_4) != "{}") files.push(file_4);
    if (JSON.stringify(file_5) != "{}") files.push(file_5);
    if (JSON.stringify(file_6) != "{}") files.push(file_6);
    return files;
  }

  var mergedResult = {};

  function fusiona() {
    mergedResult = {};
    var files = getFiles();
    let listOfIndex_file1 = new Set();
    let listOfIndex_file2 = new Set();
    let listOfIndex_file3 = new Set();
    let listOfIndex_file4 = new Set();
    let listOfIndex_file5 = new Set();
    let listOfIndex_file6 = new Set();
    let allClaves = new Set();
    var textoFinal = "";

    //ELIMINACION DE DIV ERROR
    if (document.getElementById("alert-error") != null) {
      eliminarDiv(document.getElementById("alert-error"));
    }

    //PARA COMPROBAR QUE NO HAY ARCHIVOS SELECCIONADOS.
    if (files.length == 0) {
      alert("No hay archivos");
      limpiarResultados();
    }

    for (var i = 0; i < files.length; i++) {
      console.log(" Recorremos los ficheros " + i);
      // RECORREMOS OBJETOS.

      for (var index in files[i]) {
        console.log(" Recorriendo las claves: " + index);

        if (mergedResult[index] == "undefined") {
          mergedResult[index] = "";
        }

        mergedResult[index] += files[i][index];

        // Save all Claves
        allClaves.add(index);

        if (i == 0) {
          listOfIndex_file1.add(index);
        } else if (i == 1) {
          listOfIndex_file2.add(index);
        } else if (i == 2) {
          listOfIndex_file3.add(index);
        } else if (i == 3) {
          listOfIndex_file3.add(index);
        } else if (i == 4) {
          listOfIndex_file4.add(index);
        } else if (i == 5) {
          listOfIndex_file5.add(index);
        } else if (i == 6) {
          listOfIndex_file6.add(index);
        }


      }
    }

    let tResult = document.createElement("table");
    tResult.classList.add("tResult");

    let tHeader = document.createElement("thead");

    let trHeader = document.createElement("tr");

    let tHeaderGen = document.createElement("th");

    tHeaderGen.innerHTML = "Claves";
    trHeader.appendChild(tHeaderGen);

    // Add columns as files selected
    for (let f = 0; f < files.length; f++) {
      let tHeaderFile = document.createElement("th");
      tHeaderFile.innerHTML = "File " + (f + 1) + "";
      trHeader.appendChild(tHeaderFile);
    }

    tHeader.appendChild(trHeader);
    tResult.appendChild(tHeader);

    let tBody = document.createElement("tbody");

    for (let clave of allClaves) {
      console.log(clave);
      let tClave = document.createElement("tr");
      let tClaveName = document.createElement("td");
      tClaveName.innerHTML = clave;
      tClave.appendChild(tClaveName);

      let claveIsOk = true;
      let claveRemainsIn = "";

      for (let f = 0; f < files.length; f++) {
        let auxFile = eval("listOfIndex_file" + (f + 1));
        let tFile = document.createElement("td");
        let tIcon = document.createElement("i");

        tIcon.classList.add("fas");

        if (auxFile.has(clave)) {
          tIcon.classList.add("fa-check");
          tIcon.classList.add("found");
        } else {
          tIcon.classList.add("fa-times");
          tIcon.classList.add("notFound");
          claveIsOk = false;
          claveRemainsIn += f + 1 + " ";
        }
        tFile.appendChild(tIcon);
        tClave.appendChild(tFile);
      }

      tBody.appendChild(tClave);

      if (!claveIsOk) {
        let msg = "La CLAVE " + clave + " no esta en :" + claveRemainsIn;
        document.querySelector("#messages").innerHTML+=
          '<div class="alert alert-warning" role="alert" id="alert-error">' +
            msg +
            "</div>"
        ;
        textoFinal += msg + "\r\n";
      }
    }

    tResult.appendChild(tBody);

    document.querySelector("#idTableResult").appendChild(tResult);
    //console.log(claves);

    // Recorremos ahora para crear el fichero txt
    for (var index in mergedResult) {
      textoFinal += index;
      textoFinal += "\r\n";
      textoFinal += mergedResult[index];
      textoFinal += "\r\n";
    }

    textoFinal = textoFinal.replace(/undefined/g, "");

    let d = new Date();
    let fileDate = d.toISOString().split('T')[0];

    fileDate += "_";

    fileDate += d.getHours();
    fileDate += d.getMinutes();
    fileDate += d.getSeconds();

    download("garen_" + fileDate + ".txt", textoFinal);
    let showFinalBuild = document.querySelector(
      "input[name='showFinalBuild']"
    ).checked;
    if (showFinalBuild) {
      document.getElementById("mergedResult").innerHTML = JSON.stringify(
        mergedResult
      );
    }
    
    limpiarInputFile();
  }