import { n as u, o as l } from "./_commonjsHelpers-dNHJ2IQt.js";
function h(t, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(e, o);
          i && Object.defineProperty(t, o, i.get ? i : { enumerable: !0, get: () => e[o] });
        }
    }
  }
  return Object.freeze(t);
}
var n, d, s, m, _ = { exports: {} };
n = _, d = _.exports, s = function(t, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.default = { _decimalSeparator: ",", _thousandSeparator: " ", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date_millisecond: "mm:ss SSS", _date_second: "HH:mm:ss", _date_minute: "HH:mm", _date_hour: "HH:mm", _date_day: "MMM dd", _date_week: "ww", _date_month: "MMM", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "n.e.", _era_bc: "p.n.e.", A: "a", P: "p", AM: "AM", PM: "PM", "A.M.": "AM", "P.M.": "PM", January: "stycznia", February: "lutego", March: "marca", April: "kwietnia", May: "maja", June: "czerwca", July: "lipca", August: "sierpnia", September: "września", October: "października", November: "listopada", December: "grudnia", Jan: "sty", Feb: "lut", Mar: "mar", Apr: "kwi", "May(short)": "maj", Jun: "cze", Jul: "lip", Aug: "sie", Sep: "wrz", Oct: "paź", Nov: "lis", Dec: "gru", Sunday: "niedziela", Monday: "poniedziałek", Tuesday: "wtorek", Wednesday: "środa", Thursday: "czwartek", Friday: "piątek", Saturday: "sobota", Sun: "niedz.", Mon: "pon.", Tue: "wt.", Wed: "śr.", Thu: "czw.", Fri: "pt.", Sat: "sob.", _dateOrd: function(r) {
    var e = "th";
    if (r < 11 || r > 13)
      switch (r % 10) {
        case 1:
          e = "st";
          break;
        case 2:
          e = "nd";
          break;
        case 3:
          e = "rd";
      }
    return e;
  }, "Zoom Out": "Zmiana skali", Play: "Odtwarzanie", Stop: "Zatrzymaj", Legend: "Legenda", "Click, tap or press ENTER to toggle": "", Loading: "Wczytywanie", Home: "Strona główna", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "Drukuj", Image: "Obraz", Data: "Dane", Print: "Drukuj", "Click, tap or press ENTER to open": "", "Click, tap or press ENTER to print.": "", "Click, tap or press ENTER to export as %1.": "", 'To save the image, right-click this link and choose "Save picture as..."': "", 'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "Od %1 do %2", "From %1": "Od %1", "To %1": "Do %1", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "" };
}, (m = s(u, d)) !== void 0 && (n.exports = m);
const c = l(_.exports), y = Object.freeze(h({ __proto__: null, default: c }, [_.exports]));
export {
  y as p
};