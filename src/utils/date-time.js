import moment from 'moment-hijri';
import 'moment/locale/id';
import AppConfig from './app-config';

// CUSTOM LABEL Moment
const idWeekdays = [
  'Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'
];

const idHijriMonths = [
  'Muharram',
  'Safar',
  'Rabiul Awal',
  'Rabiul Akhir',
  'Jumadil Awal',
  'Jumadil Akhir',
  'Rajab',
  "Sya'ban",
  'Ramadhan',
  'Syawwal',
  "Dzulqa'dah",
  'Dzulhijjah'
];

moment.updateLocale('id', {
  weekdays: idWeekdays,
  iMonths: idHijriMonths
});

// APP CONFIG
const appConfig = new AppConfig();
const formatTime = appConfig.get('time_format') ?? 'h:mm A';

export const getTime = (format = formatTime) => {
  return moment().format(format);
}
export const getTimeRaw = (date) => {
  return moment(date);
}

export const getDayOfTheWeek = (date) => moment(date).format('dddd')
export const getDate = (date) => moment(date).format('D MMMM YYYY')
export const getHijriDate = (date) => moment(date).format('iD iMMMM iYYYY')
