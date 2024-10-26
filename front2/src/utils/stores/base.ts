import { makeAutoObservable} from 'mobx'
class BaseStore{
    private _base: any[];

    constructor(){
        makeAutoObservable(this)
    }

    setBase(base: any){
        this._base=base;
    }

    getBase(){
        return this._base;
    }
}

export default new BaseStore()