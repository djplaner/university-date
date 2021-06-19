//import {LitElement, html, css} from 'lit';
import {LitElement, html, css} from 'https://jspm.dev/lit-element@2.4.0';

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
      period: {type: String},
    };
  }

  constructor() {
    super();
    this.dateString = '';
    this.period = null;

    if (typeof window.UniversityDateCalendarBroker !== "undefined") {
      this.calendarBroker = window.UniversityDateCalendarBroker.requestAvailability();
    }
  }

  render() {
    if (typeof this.calendarBroker === "undefined") {
      return html`${this.innerHTML}`;
    }

    this.currentPeriod = this.calendarBroker.getCurrentPeriod();
    this.parseDate();

    if (this.dateString === '') {
      // couldn't get date
      return html`${this.innerHTML}`;
    }
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
    let day = '',
      week = '';
    let m = dateText.match(
      /.*\b(((mon|tues|wed(nes)?|thur(s)?|fri|sat(ur)?|sun)(day)?))\b[,]*[ ]*week *\b([0-9]*)/i
    );
    if (m) {
      // TODO need to convert the short days to long days?
      day = m[1];
      week = m[m.length - 1];
      this.setDateString(week, day);
    } else {
      // couldn't match the date, finish up
      return false;
    }
  }

  /**
   * @function setDateString
   * @param {String} week
   * @param {String} dayOfWeek
   * - this.period contains the university period
   * - calculate the specific date from that period for the parameters
   *   week and dayofWeek
   * - set this.dateString to that specific date
   */

  setDateString(week, dayOfWeek = 'Monday') {
    dayOfWeek = dayOfWeek.toLowerCase();
    let start;

    // decide which period to use
    // by default use the hardcoded period (this.period)
    let period = this.period;
    // but if it's null, then use the current period
    if (period === null) {
      period = this.currentPeriod;
    }

    let weekStartStop = this.calendarBroker.getWeekDetails(period, week);

    if (weekStartStop === null) {
      return false;
    }
    start = weekStartStop.start;

    var d = new Date(start);

    // if dayOfWeek is not Monday, increment the date from the start of the week
    if (dayOfWeek !== 'monday') {
      var dayToNum = {
        tuesday: 1,
        wednesday: 2,
        thursday: 3,
        friday: 4,
        saturday: 5,
        sunday: 6,
      };
      if (dayOfWeek in dayToNum) {
        d.setDate(d.getDate() + dayToNum[dayOfWeek.toLowerCase()]);
      }
    }
    // generate string from date with given options
    const options = {
      weekday: undefined,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    this.dateString = d.toLocaleDateString(undefined, options);
  }
}

customElements.define('university-date', UniversityDate);
