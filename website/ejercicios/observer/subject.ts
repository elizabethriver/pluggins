import Observer from "./observer";

interface Subject {
    // *Attach an observer to the subject.
    attach(observer: Observer): void;

    // *Detach an observer from the subject.
    detach(observer: Observer): void;

    // // Notify all observers about an event.
    notify(data: any): void;
}

export default Subject;