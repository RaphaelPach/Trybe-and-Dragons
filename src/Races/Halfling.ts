import Races from './Race';

export default class Halfling extends Races {
  private _maxLifePoints: number;
  static instancesCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancesCreated += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints; 
  }

  static createdRacesInstances(): number {
    return Halfling.instancesCreated;
  }
}