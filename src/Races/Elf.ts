import Races from './Race';

export default class Elf extends Races {
  private _maxLifePoints: number;
  static instancesCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instancesCreated += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints; 
  }

  static createdRacesInstances(): number {
    return Elf.instancesCreated;
  }
}