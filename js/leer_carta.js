traerDatos();

function traerDatos() {


    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'data/akysushi.json', true)

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            

            let datos = JSON.parse(this.responseText)

            let tarjeta = document.querySelector('#tarjeta');
            tarjeta.innerHTML = '';
            

            for (let item of datos) {
                tarjeta.innerHTML += `
                <div class="col-sm-6 col-md-3 isotope-item ${item.Tipo}">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="${item.Imagen[0]}" alt="">
                                    <a class="overlay" data-toggle="modal" data-target="#${item.ID}">
                                        <i class="fa fa-search-plus"></i>

                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal"
                                    data-target="#${item.ID}">${item.ID}.- ${item.Titulo}</a>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="${item.ID}" tabindex="-1" role="dialog"
                                aria-labelledby="${item.ID}-label" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"><span
                                                    aria-hidden="true">&times;</span><span
                                                    class="sr-only">Cerrar</span></button>
                                            <h4 class="modal-title" id="${item.ID}-label">${item.ID}.-${item.Titulo}</h4>
                                        </div>
                                        <div class="modal-body">

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="${item.Imagen[0]}" alt="">
                                                    
                                                    
                                                </div>
                                                <div class="col-md-6">
                                                    <h3 class="text-uppercase">${item.Tipo}</h3>
                                                    <p>${item.Descripcion}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-sm btn-default"
                                                data-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal end -->
                        </div>
                `
            }

        }
    }
}