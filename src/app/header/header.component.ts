import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  pageTitle = '';
  currentRoute: string = '';

  constructor(private router: Router, private sharedService: SharedService) {
    this.sharedService.pageTitle$.subscribe((title) => {
      this.pageTitle = title;
    });
  }

  ngOnInit() {}

  /**
   * The function is used to check if the route is active and changes the background color in the header
   * @param route
   */
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  /**
   * The function is used to navigate to the home page
   */
  toHome() {
    this.router.navigate(['/home']);
  }

  /**
   * The function is used to navigate to the home page
   */
  toDienst() {
    this.router.navigate(['/dienstplan']);
  }

  /**
   * The function is used to navigate to the calendar page
   */
  toCalendar() {
    this.router.navigate(['/Kalender']);
  }

  /**
   * The function is used to navigate to the holidays page
   */
  toHolidays() {
    this.router.navigate(['/urlaubsantrag']);
  }

  /**
   * The function is used to navigate to the holidays page
   */
  toHolidaysResum() {
    this.router.navigate(['/urlaubsuebersicht']);
  }

  /**
   * The function is used to navigate to the workshop page
   */
  toWorkShopRequest() {
    this.router.navigate(['/werkstattanfrage']);
  }

  /**
   * The function is used to navigate to the information page
   */
  toInformation() {
    this.router.navigate(['/information']);
  }

  /**
   * The function is used to navigate to the documents page
   */
  toDocument() {
    this.router.navigate(['/dokumente']);
  }

  /**
   * The function is used to navigate to the profil page
   */
  toProfil() {
    this.router.navigate(['/profil']);
  }

  /**
   * The function is used to sign out the user and redirect to login page
   */
  signOut() {
    //implement sign out functionality here
    this.router.navigate(['/login']);
  }
}
