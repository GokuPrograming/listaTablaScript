document.addEventListener('DOMContentLoaded', function () {
    // significa que no se ejecute nada de java hasta que todo el html se cargue por completo
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id = 1;


    function removeTodo(id) {
      //  console.log(id);// ya que asignara un id a cada elemento de la tabla
    document.getElementById(id).remove();
    }
    // se crean las variables y se mandan llamaer con el get
    // si se especifica con const ya no se puede modificar
    const btn = document.getElementById('add');


    /*  btn.onclick = function () {
          console.log('title', title.value);
          console.log('description', description.value);
      }*/

    // se valida el campo de llenado 
    function addTodo() {
        if (title.value === '' || description === '') {
            //console.error('no se han llenado los parametros');
            // para mandar la alerta en el codigo HTML en la etiqueta de alerta pide qye este oculta
            // debido al bostrap, asi que lo que se va a tratar de  hacer es lograr 
            // que muestre la alerta 
            alert.classList.remove('d-none');
            alert.innerText = 'no se han llenado los parametros';
            // usar el return para que ahi acabe y no hacer un else gigante
            return;
        }
        // se agrega el d none para que pues solamente qiede bien establecido
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        // para hacer cadenas foormateadas
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
      <td class="text-center">
        <input type="checkbox">
      </td>
      <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
      </td>
        `;
        /// que el boton de borrar cargue como es y parezca en todas las colunas
        const removebtn = document.createElement('button');
        removebtn.classList.add('btn', 'btn-danger', 'mb-1', 'm1-1');
        removebtn.innerHTML = '<i class="fa fa-trash"></i>';
        removebtn.onclick = function (e) {
            //obtener el element padre del target para  saber en donde esta posicionado el click
           // console.log(e.target.parentNode);
            removeTodo(row.getAttribute('id'));
        }
        // hace qeu todas las columnas aparezaca el boton 
        row.children[3].appendChild(removebtn);
    }
    btn.onclick = addTodo;
    // se debe de enlazar el script al html

});




