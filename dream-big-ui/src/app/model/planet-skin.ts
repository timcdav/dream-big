import { Entity } from 'ngx-entity-service';

const KEYS = 
[
  'id',
  'asset',
  'color'
]

export class PlanetsSkin extends Entity {
  id: number = -1;
  asset: string = "";
  color: string = "";

  /**
   * Indicates that the planet skin has yet to be stored in the database
   */
  public get isNew(): boolean {
    return this.id === -1;
  }
}