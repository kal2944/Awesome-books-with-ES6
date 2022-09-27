/* eslint-disable no-undef */
class Time {
  static setTime() {
    const dt = luxon.DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });

    document.querySelector('time').textContent = dt;
  }
}

export default Time;