let update_snake = function(direction, snake, apple) {};

function update_code() {
  loadPyodide().then(function(pyodide) {
    pyodide.runPython(document.getElementById('code').value);
    update_snake = pyodide.globals.get('update_snake').toJs();
  });
}

document.getElementById('submit_button').addEventListener('click', update_code);