var formulaire = require('formulaire');

var myForm = formulaire({
    //options
});

var formulario = formulaire({
    formClass : 'form',
    formId : 'formulario_ID',
    action: '/send',
    method: 'post',
    fieldClassWrapper: 'form-group',
    fieldClass: 'form-control',
    submit: { 
        type: 'link',
        clase: 'btn btn-primary sender',
        href: 'javascript:void(0)',
        onclick: null,
        value: 'Enviar'
    },
    fields: {
        name: { type: 'text', required: true },
        surname: { type: 'text', required: true},
        email: { type: 'email', required: true},
        age: { type: 'number'},
        country: {
            type: 'select',
            default: 'Select your country',
            required: true,
            options: {
                spain: { label: 'Spain', selected: true},
                usa: { label: 'USA'}
            }
        },
        sex: {
            type: 'radio',
            options: {
                m: { label: 'Male'},
                f: { label: 'Female'}
            }
        },
        preferences: {
            type: 'checkbox',
            options: {
                soccer: { label: 'Soccer', checked: true },
                basket: { label: 'Basket'},
                tennis: { label: 'Tennis'},
                volley: { label: 'Volley'},
                hockey: { label: 'Hockey'},
            }
        },
        observations: { type: 'textarea', required: true }
    }
});