class User {
    private name : string;
    private email: string;
    
    constructor(name: string, email:string){
        this.name = name;
        this.email = email;
    }

    public getName():string {
        return this.name;
    }

    public getEmail():string {
        return this.email;
    }

    public sendEmail(message: string){
        //our code for sending email to user
    }
}

const user = new User("eyobed", "eyobedkbede10@gmail.com");

user.getName()
user.getEmail()
user.sendEmail("eyobedkebde10@gamil.com")