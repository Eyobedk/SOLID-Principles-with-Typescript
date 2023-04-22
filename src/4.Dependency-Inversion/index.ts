import User from "./entity/user";

interface UserRepository {
    saveUser(user: User): Promise<void>;
    getUserById(userId: string): Promise<User | undefined>;
    updateUser(user: User): Promise<void>;
    deleteUser(userId: string): Promise<void>;
  }
  
class InMemoryUserRepository implements UserRepository {
    private users: User[];
  
    constructor() {
      this.users = [];
    }
  
    async saveUser(user: User): Promise<void> {
      this.users.push(user);
    }
  
    async getUserById(userId: string): Promise<User | undefined> {
      return this.users.find(user => user.id === userId);
    }
  
    async updateUser(user: User): Promise<void> {
      const existingUser = await this.getUserById(user.id);
      if (existingUser) {
        Object.assign(existingUser, user);
      }
    }
  
    async deleteUser(userId: string): Promise<void> {
      this.users = this.users.filter(user => user.id !== userId);
    }
}
  
class UserManagementService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(user: User): Promise<void> {
        // Do some validation or other business logic
        await this.userRepository.saveUser(user);
    }

    async getUserById(userId: string): Promise<User | undefined> {
        // Do some validation or other business logic
        return await this.userRepository.getUserById(userId);
    }

    async updateUser(user: User): Promise<void> {
        // Do some validation or other business logic
        await this.userRepository.updateUser(user);
    }

    async deleteUser(userId: string): Promise<void> {
        // Do some validation or other business logic
        await this.userRepository.deleteUser(userId);
    }
}
  

async function run(){
    const userService = new UserManagementService(new InMemoryUserRepository());

    await userService.createUser(new User("101A", "eyobed", "eyobedkebded@gmail.com","09XXXXX"));
   
    console.log( await userService.getUserById("101A"))
    // User {
    //      id: '101A',
    //      name: 'eyobed',
    //      email: 'eyobedkebded@gmail.com',
    //      phone: '09XXXXX'
    //    }
}

run();