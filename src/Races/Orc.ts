import Races from './Race';

export default class Orc extends Races {
  private _maxLifePoints: number;
  static instancesCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesCreated += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints; 
  }

  static override createdRacesInstances(): number {
    return Orc.instancesCreated;
  }
}