
import {LitElement, html, css} from 'lit';

// TODO add in a singelton calendar separate from this, perhaps with a default
// - singleton should provide method to calculate current period from web page

import calendar from './calendar.js';

// Get this from the calendar singleton
const CURRENT_PERIOD = '3205';

export class UniversityDate extends LitElement {

	// TODO think more about styles
  static get styles() {
    return css`
      :host {
        display: inline;
        /*padding: 25px; 
        color: var(--university-date-text-color, #444);
        background: var(--university-date-background-color, #000); */
      }
    `;
  }

  static get properties() {
    return {
	/**
	 * Current period used to calculate dates
	 */
      period: { type: String },
    };
  }

  constructor() {
    super();
    this.period = CURRENT_PERIOD;
  }

  render() {
    this.parseDate();

    //return html`<span class="university-date">${this.innerHTML} (${this.dateString})</span>`;
    return html`${this.innerHTML} (${this.dateString})`;
  }

  parseDate() {
    let dateText = this.innerHTML;

    // extract the day and week
    // Wednesday Week 5 becomes
    // - day = Wednesday
    // - week = 5
    // and convert it to a date string
    //  date = March 12, 2019
    let day = '', week = '', date = '';
    let m = dateText.match(
      /.*\b(((mon|tues|wed(nes)?|thur(s)?|fri|sat(ur)?|sun)(day)?))\b[,]*[ ]*week *\b([0-9]*)/i);
    if (m) {
      // TODO need to convert the short days to long days?
      day = m[1];
      week = m[m.length - 1];
      date = this.getPeriodDate(week, day);
    } else {
      // couldn't match the date, finish up
      return false;
    }
  }

  //*********************
  // getPeriodDate( week, day )
  // - given a week and a day of Griffith semester return actual
  //   date for matching that study period
  // - weeks start on Monday
  getPeriodDate(week, dayOfWeek='Monday') {
    dayOfWeek = dayOfWeek.toLowerCase();
    let start;

    // if the week is not within the term return empty string
    if (typeof calendar[this.period][week] === 'undefined') {
        return "";
    }

    // else calculate the date and generate usable string
    start = calendar[this.period][week].start;
    var d = new Date(start);

    // if dayOfWeek is not Monday, add some days to the start of the week
    if (dayOfWeek !== 'monday') {
        var dayToNum = { 'tuesday': 1, 'wednesday': 2, 'thursday': 3, 'friday': 4, 'saturday': 5, 'sunday': 6 };
        if (dayOfWeek in dayToNum) {
            d.setDate(d.getDate() + dayToNum[dayOfWeek.toLowerCase()]);
        }
    }
    // generate string from date with given options
    const options = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' };
    this.dateString = d.toLocaleDateString(undefined, options);
  }
}

customElements.define('university-date', UniversityDate);
