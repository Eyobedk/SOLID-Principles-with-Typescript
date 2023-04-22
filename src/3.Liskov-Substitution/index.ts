class User {
    constructor(private name: string) {}
  
    getName() {
      return this.name;
    }
}
  
class PremiumUser extends User {
    private rewardPoints: number;
  
    constructor(name: string, rewardPoints: number) {
      super(name);
      this.rewardPoints = rewardPoints;
    }
  
    getRewardPoints() {
      return this.rewardPoints;
    }
}  

const premiumUser = new PremiumUser("eyobed", 112);

console.log("reward:", premiumUser.getRewardPoints())
console.log("name:", premiumUser.getName());

