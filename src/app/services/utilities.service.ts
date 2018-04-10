import {Injectable} from "@angular/core";

@Injectable()
export class UtilitiesService {

    // Clona un objeto
    public deepCopy(oldObj: any) {
        var newObj = oldObj;
        if (oldObj && typeof oldObj === "object") {
            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
            for (var i in oldObj) {
                newObj[i] = this.deepCopy(oldObj[i]);
            }
        }
        return newObj;
    }

    public getPercent(all: number, numberPercent: number) {
        if (all === 0) {
            return 0;
        }
        return (numberPercent * 100) / all;
    }

}