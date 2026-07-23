document.querySelectorAll('form[data-form-type]').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const message = form.querySelector('.form-message');
        if (!form.checkValidity()) {
            form.classList.add('has-error');
            message.textContent = 'Revisa los campos marcados antes de continuar.';
            message.className = 'form-message is-error';
            form.reportValidity();
            return;
        }

        form.classList.remove('has-error');
        message.textContent = form.dataset.formType === 'contact'
            ? 'Gracias por escribirnos. Este formulario es una demostración local y no envía mensajes a un servidor.'
            : 'Suscripción registrada en esta demostración local. No se envió información a un servidor.';
        message.className = 'form-message is-success';
        form.reset();
    });
});
