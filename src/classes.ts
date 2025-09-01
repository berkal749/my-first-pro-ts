class user {
  // protected  email:string;
  //private readonly name:number;

  constructor(public readonly email: string, public name: number) {}
  get getEmail(): string {
    return `lol is ${this.email}`;
  }
  set setName(name: number) {
    if (name < 1) {
      throw new Error("lol");
    }
    this.name = name;
  }
}

const me = new user("ok", 77);
me.name;
