export default abstract class Races {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  public get name() : string {
    return this.name;
  }

  public get dexterity() : string {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}