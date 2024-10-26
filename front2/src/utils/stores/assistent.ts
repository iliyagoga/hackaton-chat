import { makeAutoObservable} from 'mobx'
class Assistent{
    private _message: string =''
    private _messagesChat: any=[]
    private _labels: any=[]
    private _room: string;
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
    clearMessages(){
        this._messagesChat=[]
    }
    setLabel(message: string, socketId: string){
        let c=0;
        for(let i=0; i< this._labels.length; i++){
            if(this._labels[i].socketId==socketId){
                this._labels[i].message=message;
                c++;
            }
        }
        if(c==0){
            this._labels.push({message,socketId})
        }
    }

    getLabels(){
       return this._labels
    }

    setRoom(room: string){
        this._room=room;
    }

    getRoom(){
       return this._room;
    }
}
export default new Assistent()