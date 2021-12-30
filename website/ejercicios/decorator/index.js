console.log('eli');
var Field = /** @class */ (function () {
    function Field(input) {
        var _this = this;
        this.input = input;
        this.errors = [];
        var message = document.createElement('p');
        console.log(message);
        message.className = 'text-dangers';
        console.log(this.input.parentNode.insertBefore(message, this.input.nextSibling));
        this.input.parentNode.insertBefore(message, this.input.nextSibling);
        this.input.addEventListener('input', function () {
            _this.errors = [];
            _this.validate();
            console.log(_this.errors);
            message.innerText = _this.errors[0] || '';
        });
    }
    Field.prototype.validate = function () { };
    return Field;
}());
function RequiredDecorator(field) {
    console.log(field);
    var validate = field.validate;
    console.log(validate);
    field.validate = function () {
        validate();
        var value = field.input.value;
        if (!value) {
            field.errors.push('Require');
        }
    };
    return field;
}
function EmailDecorator(field) {
    console.log(field);
    var validate = field.validate;
    console.log(validate);
    field.validate = function () {
        validate();
        var value = field.input.value;
        if (value.indexOf("@") === -1) {
            field.errors.push('Must to be a email');
        }
    };
    return field;
}
var field = new Field(document.querySelector('#email'));
console.log(field);
EmailDecorator(RequiredDecorator(field));
