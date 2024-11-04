$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botão-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const TarefaNova = $('#endereço-tarefa').val();
        const novoItem = $('<li"></li>');
        $(`<div class="checkbox-wrapper-15">
                <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none;"/>
                <label class="cbx" for="cbx-15">
                    <span>
                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                    </span>
                    <span>${TarefaNova}</span>
                </label>
                </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
        $('TarefaNova').val('')
    })
})