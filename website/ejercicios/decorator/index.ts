console.log('eli')
class Field {
    errors: string[]
    input: HTMLInputElement
    constructor(input: HTMLInputElement) {
        this.input = input 
        this.errors = [];
        const message = document.createElement('p')
        console.log(message)
        message.className = 'text-dangers'
       console.log(this.input.parentNode.insertBefore(message, this.input.nextSibling))
        this.input.parentNode.insertBefore(message, this.input.nextSibling)
        this.input.addEventListener('input', ()=> {
            this.errors = []
            this.validate()
            console.log(this.errors)
            message.innerText = this.errors[0] || ''
            
        })

        
        
    }
    validate(){}
}
function RequiredDecorator(field:Field): Field {
    console.log(field)
    let validate = field.validate
    console.log(validate)
    field.validate = ()=>{
        validate()
        let value = field.input.value
        if (!value) {
           field.errors.push('Require') 
        }
    }
    return field
}
function EmailDecorator (field:Field): Field {
    console.log(field)
    let validate = field.validate
    console.log(validate)
    field.validate = ()=>{
        validate()
        let value = field.input.value
        if (value.indexOf("@")===-1) {
           field.errors.push('Must to be a email') 
        }
    }
    return field
}

let field = new Field(document.querySelector('#email'))
console.log(field)
EmailDecorator(RequiredDecorator(field))





