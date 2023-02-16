import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _instancesCreated = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Warrior._instancesCreated += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Warrior._instancesCreated;
  }
}