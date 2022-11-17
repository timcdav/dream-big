import { Entity } from 'ngx-entity-service';

const KEYS =
  [
    'id',
    'name',
    'journey_id'
  ];

export class Planet extends Entity {
  id: number = -1;
  name: string = "";
  journey_id: number = -1;

  /**
   * Indicates that the Unit has yet to be stored in the database
   */
  public get isNew(): boolean {
    return this.id === -1;
  }
}