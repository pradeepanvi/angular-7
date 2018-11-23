export class UserService {
    token:string = '';

    setToken(a){
        this.token = 'Bearer ' + a;
    }
}