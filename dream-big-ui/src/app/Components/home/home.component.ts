import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WizardDialogComponent } from 'src/app/wizard-dialog/wizard-dialog.component';
import { StarMapComponent } from '../StarMap/star-map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(StarMapComponent) starmap: StarMapComponent = {} as StarMapComponent;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public addStarSystem() {
    const dialogRef = this.dialog.open(WizardDialogComponent, {
      // width: '100',
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public viewStarSystem() {
    setTimeout(() => {
      this.starmap.isSolarView = true;
      this.starmap.drawScene();
    });
  }

  public viewStarMap() {
    setTimeout(() => {
      this.starmap.isSolarView = false;
      this.starmap.isViewingSystem = false;
      if (this.starmap.hasClickedPlanet) {
        this.starmap.resetCircleStroke(this.starmap.viewPlanet.circle);
        this.starmap.hasClickedPlanet = false;
      }
      this.starmap.viewSystem.star = this.starmap.saveStar;

      this.starmap.drawScene();
    });
  }
}