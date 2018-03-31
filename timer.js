class Timer {
    constructor(interval){
        this.time = Date.now() + interval;
        this.interval = interval;
    }

    isIntervalFinished() {
        if(Date.now() > this.time) {
            this.time = Date.now() + this.interval;
            return true;
        } else {
            return false;
        }
    } 
}