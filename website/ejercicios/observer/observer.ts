import Subject from "./subject";
interface Observer {
    // *Receive update from subject.
    update(data: any): void;
}

export default Observer