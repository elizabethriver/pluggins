import Observer from "./observer";
import Subject from "./subject";


class ConcreteSubject implements  Subject {
    // public state: number
    private observers: Observer[] = [];
   
    constructor() {
        const el: HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', ()=>{
            this.notify(el.value)
        })
    }
    public attach(observer: Observer){
        console.log(this.observers)
        const attached = this.observers.includes(observer)
        if (attached) {
            return console.log('Observer attached already')
        }
        console.log('This observer will be attached')
        this.observers.push(observer)
        console.log(this.observers.push(observer))
        
    }
    public detach(observer: Observer) {
        const indexDetach = this.observers.indexOf(observer)
        console.log(indexDetach)
        if (indexDetach === -1) {
           return console.log('This observer doesnt exist') 
        }
        this.observers.splice(indexDetach, 1)
        // console.log('Observer detached')
        // const index = this.observers.findIndex((obs) => {
        //     return obs === observer
        // })
        // this.observers.splice(index, 1)
        console.log('Observers was unsubscribed')


    }
    public notify(data:any) {
        console.log("Subject: Notifying observers...");
        // for (const observer of this.observers) {
        //   observer.update(this);
        // }
        this.observers.forEach(observer => observer.update(data))
      }

}

class ConcreteObjetc implements Observer {
    private  el: HTMLElement;
    constructor() {
        this.el = document.querySelector("#price")
    }
    update(data: any){
        this.el.innerText = data
    };
}

const subject = new ConcreteSubject();
console.log(subject)
const observer1 = new ConcreteObjetc();
console.log(subject)
subject.attach(observer1);
setTimeout(()=> {
    console.log('new attached'),
    subject.detach(observer1)
}, 5000)
;
// subject.detach(observer1);

