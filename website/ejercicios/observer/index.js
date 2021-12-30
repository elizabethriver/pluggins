"use strict";
exports.__esModule = true;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        var _this = this;
        // public state: number
        this.observers = [];
        var el = document.querySelector('#value');
        el.addEventListener('input', function () {
            _this.notify(el.value);
        });
    }
    ConcreteSubject.prototype.attach = function (observer) {
        console.log(this.observers);
        var attached = this.observers.includes(observer);
        if (attached) {
            return console.log('Observer attached already');
        }
        console.log('This observer will be attached');
        this.observers.push(observer);
        console.log(this.observers.push(observer));
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var indexDetach = this.observers.indexOf(observer);
        console.log(indexDetach);
        if (indexDetach === -1) {
            return console.log('This observer doesnt exist');
        }
        this.observers.splice(indexDetach, 1);
        // console.log('Observer detached')
        // const index = this.observers.findIndex((obs) => {
        //     return obs === observer
        // })
        // this.observers.splice(index, 1)
        console.log('Observers was unsubscribed');
    };
    ConcreteSubject.prototype.notify = function (data) {
        console.log("Subject: Notifying observers...");
        // for (const observer of this.observers) {
        //   observer.update(this);
        // }
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return ConcreteSubject;
}());
var ConcreteObjetc = /** @class */ (function () {
    function ConcreteObjetc() {
        this.el = document.querySelector("#price");
    }
    ConcreteObjetc.prototype.update = function (data) {
        this.el.innerText = data;
    };
    ;
    return ConcreteObjetc;
}());
var subject = new ConcreteSubject();
console.log(subject);
var observer1 = new ConcreteObjetc();
console.log(subject);
subject.attach(observer1);
setTimeout(function () {
    console.log('new attached'),
        subject.detach(observer1);
}, 5000);
// subject.detach(observer1);
