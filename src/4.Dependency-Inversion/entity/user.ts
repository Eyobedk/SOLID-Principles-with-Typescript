class User{
    static instance: any;
    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    // private readonly id : string;

    constructor(id:string,name:string, email:string, phone: string){
        // if(User.instance){
        //     console.log("holdsxs")
        //     return User.instance;
        // }

        // User.instance = this;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;

    }
}
export default User;