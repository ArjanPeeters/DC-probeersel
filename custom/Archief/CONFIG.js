
var _LANGUAGE 				= 'nl_NL'; //or: de_DE, en_US, fr_FR, hu_HU, it_IT, pt_PT, sv_SE
var _HOST_DOMOTICZ		  	= '192.168.2.3:8080';
var _DOMOTICZ_REFRESH		= 5; //in seconds
var _DASHTICZ_REFRESH		= 30; //in minutes
var _THEME 					= 'default'; // default = dashticz default theme
var _APP_TITLE 				= 'Dashticz';
/*
IF YOU HAVE A MEDIABOX FROM ZIGGO (HORIZON), COPY SWITCH_HORIZON.PHP ON A WEBSERVER INSIDE YOUR NETWORK AND CHANGE THE IP.
ENTER THE PATH TO THIS FILE BELOW.
*/
var _HOST_ZIGGO_HORIZON	  	= ''; //e.g. http://192.168.1.3/domoticz/switch_horizon.php';
var _APIKEY_WUNDERGROUND  	= 'af52b020647c1bc1';
var _WEATHER_CITY 			= 'Haarlem';
var _WEATHER_CITYNAME 		= ''; //show a different city name, leave empty if same as _WEATHER_CITY
var _WEATHER_COUNTRY 		= 'NL';
var _USE_AUTO_POSITIONING 	= false; //don't want to configure positions, use auto positioning
var _USE_FAVORITES			= true; //only used when using auto positioning
var _HIDE_SECONDS_IN_CLOCK  = false; //do not show the seconds in the clock
var _HIDE_MEDIAPLAYER_WHEN_OFF = false; //when you have a mediaplayer connected, hide it if nothing is playing
var _HIDE_TOPBAR			= false; //hide topbar with appname, clock and settings-icon
var _NEWS_RSSFEED			= 'http://www.nu.nl/rss/algemeen';
var _USE_FAHRENHEIT			= false;
var _USE_BEAUFORT 			= true; //Bft instead of m/s
var _TRANSLATE_SPEED 		= false; //windspeed, north northwest instead of NNW
var _STANDBY_AFTER_MINUTES  = 10; //enter amount of minutes like: 5 (5 minutes)
var _SCROLL_NEWS_AFTER 		= 7000; //milliseconds, so 7000 is 7 seconds
var _SHOW_LASTUPDATE 		= false;
var _LASTUPDATE_FORMAT 		= 'DD-MM-YY HH:mm';
var _SCREENSLIDER_EFFECT 	= 'slide'; //'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

var _APIKEY_MAPS			= '';
var _MAPS_LATITUDE			= '';
var _MAPS_LONGITUDE			= '';

var _AUTO_SWIPEBACK_TO		= 1; //when no activity, swipe back to main screen after x seconds
var _AUTO_SWIPEBACK_TIME	= 10; //seconds

var _SLIDE_PAGES			= false; //Loop all pages and change page every x (min. 5) seconds, set _AUTO_SWIPEBACK_TIME = 0
var _CLIENTID_SPOTIFY = '1112f16564cf4f4d93ccbe8b52c58a44';

var config = {}
config['domoticz_ip'] = 'http://192.168.2.3:8080';
config['app_title'] = 'PeeterSmit';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['default_news_url'] = 'http://www.nu.nl/rss/algemeen';
config['news_scroll_after'] = '7';
config['standby_after'] = 0;
config['auto_swipe_back_to'] = 1;
config['auto_swipe_back_after'] = '10';
config['auto_slide_pages'] = 0;
config['slide_effect'] = 'slide';
config['language'] = 'nl_NL';
config['timeformat'] = 'DD-MM-YY HH:mm';
config['calendarformat'] = 'dd DD.MM HH:mm';
config['calendarlanguage'] = 'en_US';
config['calendarurl'] = 0;
config['boss_stationclock'] = 'RedBoss';
config['gm_api'] = 0;
config['gm_zoomlevel'] = 0;
config['gm_latitude'] = 0;
config['gm_longitude'] = 0;
config['wu_api'] = 'af52b020647c1bc1';
config['wu_city'] = 'Haarlem';
config['wu_name'] = 0;
config['wu_country'] = 'NL';
config['idx_moonpicture'] = 0;
config['switch_horizon'] = 0;
config['host_nzbget'] = 0;
config['spot_clientid'] = 0;
config['selector_instead_of_buttons'] = 0;
config['auto_positioning'] = 0;
config['use_favorites'] = 1;
config['last_update'] = 0;
config['hide_topbar'] = 1;
config['hide_seconds'] = 1;
config['hide_seconds_stationclock'] = 0;
config['use_fahrenheit'] = 0;
config['use_beaufort'] = 0;
config['translate_windspeed'] = 1;
config['static_weathericons'] = 1;
config['hide_mediaplayer'] = 0;


// Scenes
var blocks = {}

blocks['s2'] = {
  width: 12,
  hide_data: true
}; // Alles uit

blocks['s3'] = {
  width: 12,
  hide_data: true
}; // TV kijken

blocks['s4'] = {
  width: 12,
  hide_data: true
}; // Aan tafel

blocks['s5'] = {
  width: 12,
  hide_data: true
}; // Alles Aan

blocks['s6'] = {
  width: 12,
  hide_data: true
}; // Koken

// Schakelaars

blocks[17] = {
  width: 12,
  hide_data: true
}; // Lichtkoof RGBW

blocks[51] = {
  width: 12,
  hide_data: true
}; // tafel

blocks[65] = {
  width: 12,
  hide_data: true
}; // Wand lampen

blocks[81] = {
  width: 12,
  hide_data: true
}; // schemer lampen

blocks[102] = {
  width: 12,
  hide_data: true
}; // Eiland

// sensoren
blocks[125] = {
  width: 12
}

blocks[130] = {
  width: 12
}

blocks[135] = {
  width: 12
}

blocks[140] = {
  width: 12
}

blocks[145] = {
  width: 12
}
// titels
blocks['blocktitle_1'] = {
  type: 'blocktitle',
  title: 'Scenes'
};

blocks['blocktitle_2'] = {
  type: 'blocktitle',
  title: 'Schakelaars'
};

blocks['blocktitle_3'] = {
  type: 'blocktitle',
  title: 'Sensors'
};

// kalenders
var calendars = {}
calendars.business = { maxitems: 5, url: 'https://calendar.google.com/calendar/', icalurl: 'https://calendar.google.com/calendar/' }
calendars.private = { maxitems: 5, icalurl: 'https://cors-anywhere.herokuapp.com/https://calendar.google.com/calendar/' }


//kolommen
var columns = {}
columns[1] = {
  width: 3,
  blocks: [
    'blocktitle_1',
    's2',
    's3',
    's4',
    's5',
    's6'
  ]
};

columns[2] = {
  width: 5,
  blocks: [
    'blocktitle_2',
    81,
    51,
    65,
    102,
    17
  ]
};

columns[3] = {
  width: 4,
  blocks: [
    'blocktitle_3',
    125,
    130,
    135,
    198,
    203
  ]
};

columns[4] = {
  width: 4,
  blocks: [
    'clock',
    'sunrise'
  ]
}

columns[5] = {
  width: 8,
  blocks: [
    calendars.business,
    calendars.private
  ]
}

var screens = {}
screens[1] = {}
screens[1]['background'] = 'bg12.jpg';
screens[1]['columns'] = [1,2,3]

screens[2] = {}
screens[2]['background'] = 'bg12.jpg';
screens[2]['columns'] = [4,5]
