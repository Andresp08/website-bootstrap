// Add Your Scripts here
(function(){
    window.addEventListener('load', function(){
        //seleccionamos el formulario a validar
        var forms = document.getElementsByClassName('needs-validation');
        //validar cada campo y prevenir que se envie
        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if(form.checkValidity()===false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();