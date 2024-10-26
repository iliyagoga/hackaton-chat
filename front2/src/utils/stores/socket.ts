import { makeAutoObservable} from 'mobx'
class SocketStore{
    private _socket: any=null;

    constructor(){
        makeAutoObservable(this)
    }

    setSocket(socket: any){
        this._socket=socket;
    }

    getSocket(){
       return this._socket;
    }
}
export default new SocketStore()