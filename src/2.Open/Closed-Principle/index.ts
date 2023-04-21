interface Database {
    getUserData(userId: string): UserData;
}

interface UserData {
    name: string;
    email: string;
    phone: string;
    // ... other user datas
}

class Users {
    constructor(private db: Database) {}
  
    public getUser(userId: string): UserData {
      return this.db.getUserData(userId);
    }
}
  


  
class MongoDatabase implements Database {
    public getUserData(userId: string): UserData {
        // ... logic to retrieve user data from our MongoDB database
        return {name: "name_from_mongo", email: "email", phone: "phone"}
    }
}
  
class PostgresDatabase implements Database {
    public getUserData(userId: string): UserData {
        // ... logic to retrieve user data from our PostgreSQL database
        return {name: "name_from_postgresql", email: "email", phone: "phone"}
    }
} 

// const user1 = new User(new MongoDatabase());
// console.log(user1.getUser("101A"));
// // { name: 'name_from_mongo', email: 'email', phone: 'phone' }

// const user2 = new User(new PostgresDatabase());
// console.log(user2.getUser("101B"));
// // { name: 'name_from_postgresql', email: 'email', phone: 'phone' }
