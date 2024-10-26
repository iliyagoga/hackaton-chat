import { makeAutoObservable} from 'mobx'
class Client{
    private _message: string =''
    private _messagesChat: any=[]

    constructor(){
        makeAutoObservable(this)
    }

    setMessage(message: string){
        this._message=message;
    }

    getMessage(){
       return this._message;
    }

    setmessagesChat(c: number, messageChat: string){
        this._messagesChat.push({c,messageChat})
    }

    getmessagesChat(){
       return this._messagesChat
    }
}
export default new Client()