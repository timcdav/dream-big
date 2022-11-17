import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CachedEntityService, Entity, EntityMapping } from 'ngx-entity-service';
import API_URL from 'src/app/config/constants/apiURL';
import { Journey } from 'src/app/model/journey';

export type IloStats = {
  median: number;
  lower: number;
  upper: number;
  min: number;
  max: number;
}[];

@Injectable()
export class JourneyService extends CachedEntityService<Journey> {
  protected readonly endpointFormat = 'journeys/:id:';
  public readonly rolloverEndpoint = 'journeys/:id:/rollover';

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, API_URL);
  
  this.mapping.addKeys(
    'id',
    'student_id',
    'assessment_id'
  );
  }
  public override createInstanceFrom(json: any, other?: any): Journey {
    return new Journey();
  }
}