const myMap = L.map('mapid').setView([52.9529021, -1.1504818], 12);
const stationInput = document.getElementById('stationInput');
const stationsFound = [];

let maxStations = 0;

function updateProgress() {
  const currentScore = stationsFound.length;
  const percentFound = ((currentScore / maxStations) * 100).toFixed(1);
  document.getElementById('progressOverview').innerText = `${currentScore} of ${maxStations} Stations (${percentFound}% found)`;
}

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 19,
    attribution: `
      &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>
      &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>
      &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
      &copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>`
  }
).addTo(myMap);

// Load the stations...
// TODO move this to a Cloudflare function.
const stationInfo = {
  "stations": [
    {
      "id": 1,
      "name": "Phoenix Park",
      "lines": [ 2 ],
      "latitude": 52.9888701,
      "longitude": -1.2294598,
      "spellings": [
        "phoenix park",
        "phoenix pk"
      ]
    },
    {
      "id": 2,
      "name": "Cinderhill",
      "lines": [ 2 ],
      "latitude": 52.989002,
      "longitude": -1.2032973,
      "spellings": [
        "cinderhill",
        "cinder hill"
      ]
    },
    {
      "id": 3,
      "name": "Highbury Vale",
      "lines": [ 2 ],
      "latitude": 52.9897871,
      "longitude": -1.1945399,
      "spellings": [
        "highbury vale"
      ]
    },
    {
      "id": 4,
      "name": "Queen's Walk",
      "lines": [ 2 ],
      "latitude": 52.9427018,
      "longitude": -1.1529373,
      "spellings": [
        "queen's walk",
        "queen's wlk",
        "queens walk",
        "queens wlk"
      ]
    },
    {
      "id": 5,
      "name": "Meadows Embankment",
      "lines": [ 2 ],
      "latitude": 52.9390042,
      "longitude": -1.1562377,
      "spellings": [
        "meadows embankment",
        "meadow's embankment",
        "the embankment",
        "embankment"
      ]
    },
    {
      "id": 6,
      "name": "Wilford Village",
      "lines": [ 2 ],
      "latitude": 52.9352505,
      "longitude": -1.1565327,
      "spellings": [
        "wilford village"
      ]
    },
    {
      "id": 7,
      "name": "Wilford Lane",
      "lines": [ 2 ],
      "latitude": 52.9259375,
      "longitude": -1.1575157,
      "spellings": [
        "wilford lane",
        "wilford ln"
      ]
    },
    {
      "id": 8,
      "name": "Compton Acres",
      "lines": [ 2 ],
      "latitude": 52.91909,
      "longitude": -1.1600833,
      "spellings": [
        "compton acres"
      ]
    },
    {
      "id": 9,
      "name": "Ruddington Lane",
      "lines": [ 2 ],
      "latitude": 52.9144632,
      "longitude": -1.1609714,
      "spellings": [
        "ruddington lane",
        "ruddington ln"
      ]
    },
    {
      "id": 10,
      "name": "Southchurch Drive",
      "lines": [ 2 ],
      "latitude": 52.9108988,
      "longitude": -1.172502,
      "spellings": [
        "southchurch drive",
        "southchurch dr",
        "south church drive",
        "south church dr"
      ]
    },
    {
      "id": 11,
      "name": "Rivergreen",
      "lines": [ 2 ],
      "latitude": 52.906933,
      "longitude": -1.1773169,
      "spellings": [
        "rivergreen",
        "river green"
      ]
    },
    {
      "id": 12,
      "name": "Clifton Centre",
      "lines": [ 2 ],
      "latitude": 52.9036867,
      "longitude": -1.179558,
      "spellings": [
        "clifton centre",
        "clifton ctr",
        "clifton center"
      ]
    },
    {
      "id": 13,
      "name": "Holy Trinity",
      "lines": [ 2 ],
      "latitude": 52.897312,
      "longitude": -1.1835562,
      "spellings": [
        "holy trinity"
      ]
    },
    {
      "id": 14,
      "name": "Summerwood Lane",
      "lines": [ 2 ],
      "latitude": 52.8969818,
      "longitude": -1.1928266,
      "spellings": [
        "summerwood lane",
        "summer wood lane",
        "summerwood ln",
        "summer wood ln"
      ]
    },
    {
      "id": 15,
      "name": "Clifton South",
      "lines": [ 2 ],
      "latitude": 52.896671,
      "longitude": -1.1952733,
      "spellings": [
        "clifton south",
        "clifton sth",
        "clifton s"
      ]
    },
    {
      "id": 16,
      "name": "Hucknall",
      "lines": [ 1 ],
      "latitude": 53.0387698,
      "longitude": -1.2005843,
      "spellings": [
        "hucknall"
      ]
    },
    {
      "id": 17,
      "name": "Butler's Hill",
      "lines": [ 1 ],
      "latitude": 53.0288049,
      "longitude": -1.1933195,
      "spellings": [
        "butler's hill",
        "butlers hill"
      ]
    },
    {
      "id": 18,
      "name": "Moor Bridge",
      "lines": [ 1 ],
      "latitude": 53.014484,
      "longitude": -1.1895743,
      "spellings": [
        "moor bridge",
        "moor brg",
        "moor br"
      ]
    },
    {
      "id": 19,
      "name": "Bulwell Forest",
      "lines": [ 1 ],
      "latitude": 53.0060014,
      "longitude": -1.1927724,
      "spellings": [
        "bulwell forest",
        "bullwell forest"
      ]
    },
    {
      "id": 20,
      "name": "Bulwell",
      "lines": [ 1 ],
      "latitude": 52.9992301,
      "longitude": -1.1981893,
      "spellings": [
        "bulwell",
        "bullwell"
      ]
    },
    {
      "id": 21,
      "name": "Highbury Vale",
      "lines": [ 1 ],
      "latitude": 52.9897872,
      "longitude": -1.1922439,
      "spellings": [
        "highbury vale"
      ]
    },
    {
      "id": 22,
      "name": "Meadows Way West",
      "lines": [ 1 ],
      "latitude": 52.9433398,
      "longitude": -1.1593675,
      "spellings": [
        "meadows way west",
        "meadow's way west",
        "meadows way w",
        "meadow's way w",
        "meadows way",
        "meadow's way"
      ]
    },
    {
      "id": 23,
      "name": "NG2",
      "lines": [ 1 ],
      "latitude": 52.9418269,
      "longitude": -1.1679038,
      "spellings": [
        "ng2",
        "ng 2"
      ]
    },
    {
      "id": 24,
      "name": "Gregory Street",
      "lines": [ 1 ],
      "latitude": 52.9438643,
      "longitude": -1.1796904,
      "spellings": [
        "gregory street",
        "gregory st",
        "gregory str"
      ]
    },
    {
      "id": 25,
      "name": "Queen's Medical Centre",
      "lines": [ 1 ],
      "latitude": 52.9425645,
      "longitude": -1.1861838,
      "spellings": [
        "queen's medical centre",
        "queen's medical center",
        "queens medical centre",
        "queens medical center",
        "queen's medical ctr",
        "queens medical ctr",
        "queens medical",
        "queens",
        "queen's"
      ]
    },
    {
      "id": 26,
      "name": "University of Nottingham",
      "lines": [ 1 ],
      "latitude": 52.9367003,
      "longitude": -1.1893979,
      "spellings": [
        "university of nottingham",
        "nottingham university",
        "nottm university",
        "university of nottm"
      ]
    },
    {
      "id": 27,
      "name": "University Boulevard",
      "lines": [ 1 ],
      "latitude": 52.932217,
      "longitude": -1.2047433,
      "spellings": [
        "university boulevard",
        "university blvd"
      ]
    },
    {
      "id": 28,
      "name": "Middle Street",
      "lines": [ 1 ],
      "latitude": 52.927868,
      "longitude": -1.2116373,
      "spellings": [
        "middle street",
        "middle str",
        "middle st"
      ]
    },
    {
      "id": 29,
      "name": "Beeston Centre",
      "lines": [ 1 ],
      "latitude": 52.925362,
      "longitude": -1.2173653,
      "spellings": [
        "beeston centre",
        "beeston center"
      ]
    },
    {
      "id": 30,
      "name": "Chilwell Road",
      "lines": [ 1 ],
      "latitude": 52.922718,
      "longitude": -1.2227823,
      "spellings": [
        "chilwell road",
        "chilwell rd",
        "chillwell road",
        "chillwell rd",
        "chil well road",
        "chil well rd",
        "chill well road",
        "chill well rd"
      ]
    },
    {
      "id": 31,
      "name": "High Road - Central College",
      "lines": [ 1 ],
      "latitude": 52.9212989,
      "longitude": -1.2281265,
      "spellings": [
        "high road - central college",
        "high rd - central college",
        "high road",
        "high rd",
        "central college",
        "beeston high road",
        "beeston high rd",
        "beeston college",
        "beeston central college"
      ]
    },
    {
      "id": 32,
      "name": "Cator Lane",
      "lines": [ 1 ],
      "latitude": 52.922626,
      "longitude": -1.2340283,
      "spellings": [
        "cator lane",
        "cator ln"
      ]
    },
    {
      "id": 33,
      "name": "Bramcote Lane",
      "lines": [ 1 ],
      "latitude": 52.921581,
      "longitude": -1.2387913,
      "spellings": [
        "bramcote lane",
        "bramcote ln",
        "bramcoat lane",
        "bramcoat ln"
      ]
    },
    {
      "id": 34,
      "name": "Eskdale Drive",
      "lines": [ 1 ],
      "latitude": 52.920286,
      "longitude": -1.2457754,
      "spellings": [
        "eskdale drive",
        "eskdale dr"
      ]
    },
    {
      "id": 35,
      "name": "Inham Road",
      "lines": [ 1 ],
      "latitude": 52.919582,
      "longitude": -1.2540263,
      "spellings": [
        "inham road",
        "inham rd",
        "innham road",
        "innham rd"
      ]
    },
    {
      "id": 36,
      "name": "Toton Lane",
      "lines": [ 1 ],
      "latitude": 52.9184276,
      "longitude": -1.2658761,
      "spellings": [
        "toton lane",
        "toton ln",
        "total la"
      ]
    },
    {
      "id": 37,
      "name": "David Lane",
      "lines": [ 1, 2 ],
      "latitude": 52.984894,
      "longitude": -1.1847373,
      "spellings": [
        "david lane",
        "david ln",
        "david la"
      ]
    },
    {
      "id": 38,
      "name": "Basford",
      "lines": [ 1, 2 ],
      "latitude": 52.981686,
      "longitude": -1.1811493,
      "spellings": [
        "basford",
        "bassford",
        "baseford"
      ]
    },
    {
      "id": 39,
      "name": "Wilkinson Street",
      "lines": [ 1, 2 ],
      "latitude": 52.972056,
      "longitude": -1.1807227,
      "spellings": [
        "wilkinson street",
        "wilkinson st",
        "wilkinson str"
      ]
    },
    {
      "id": 40,
      "name": "Shipstone Street",
      "lines": [ 1, 2 ],
      "latitude": 52.9715151,
      "longitude": -1.1762386,
      "spellings": [
        "shipstone street",
        "shipstone st",
        "shipstone str",
        "ship stone street",
        "ship stone st",
        "ship stone str",
        "shipston street",
        "shipston st",
        "shipston str"
      ]
    },
    {
      "id": 41,
      "name": "Beaconsfield Street",
      "lines": [ 1, 2 ],
      "latitude": 52.9702795,
      "longitude": -1.1730928,
      "spellings": [
        "beaconsfield street",
        "beaconsfield st",
        "beaconsfield str",
        "beacons field street",
        "beacons field st",
        "beacons field str"
      ]
    },
    {
      "id": 42,
      "name": "Noel Street",
      "lines": [ 1, 2 ],
      "latitude": 52.9674279,
      "longitude": -1.1713717,
      "spellings": [
        "noel street",
        "noel st",
        "noel str"
      ]
    },
    {
      "id": 43,
      "name": "Radford Road",
      "lines": [ 1, 2 ],
      "latitude": 52.9698488,
      "longitude": -1.1765246,
      "spellings": [
        "radford road",
        "radford rd"
      ]
    },
    {
      "id": 44,
      "name": "Hyson Green Market",
      "lines": [ 1, 2 ],
      "latitude": 52.9663272,
      "longitude": -1.1734862,
      "spellings": [
        "hyson green market",
        "hyson green mkt",
        "hyson green"
      ]
    },
    {
      "id": 45,
      "name": "The Forest",
      "lines": [ 1, 2 ],
      "latitude": 52.9653846,
      "longitude": -1.1698225,
      "spellings": [
        "the forest",
        "forest rec",
        "forest recreation",
        "forest recreation ground"
      ]
    },
    {
      "id": 46,
      "name": "High School",
      "lines": [ 1, 2 ],
      "latitude": 52.9622879,
      "longitude": -1.1641329,
      "spellings": [
        "high school",
        "high sch",
        "nottingham high school",
        "nottingham high sch",
        "nottingham high"
      ]
    },
    {
      "id": 47,
      "name": "Nottingham Trent University",
      "lines": [ 1, 2 ],
      "latitude": 52.957883,
      "longitude": -1.1598948,
      "spellings": [
        "nottingham trent university",
        "nottingham trent",
        "trent university",
        "trent uni",
        "ntu",
        "ntu campus"
      ]
    },
    {
      "id": 48,
      "name": "Royal Centre",
      "lines": [ 1, 2 ],
      "latitude": 52.9551982,
      "longitude": -1.1543968,
      "spellings": [
        "royal centre",
        "royal center",
        "theatre royal",
        "theater royal"
      ]
    },
    {
      "id": 49,
      "name": "Old Market Square",
      "lines": [ 1, 2 ],
      "latitude": 52.9531453,
      "longitude": -1.152568,
      "spellings": [
        "old market square",
        "old market sq",
        "market square",
        "market sq"
      ]
    },
    {
      "id": 50,
      "name": "Lace Market",
      "lines": [ 1, 2 ],
      "latitude": 52.9530064,
      "longitude": -1.1480968,
      "spellings": [
        "lace market",
        "lace mkt",
        "the lace market",
        "the lace mkt",
        "hockley",
        "hockly"
      ]
    },
    {
      "id": 51,
      "name": "Nottingham Station",
      "lines": [ 1, 2 ],
      "latitude": 52.9471816,
      "longitude": -1.1488292,
      "spellings": [
        "nottingham station",
        "nottingham stn",
        "railway station",
        "railway stn"
      ]
    }
  ]
};

maxStations = stationInfo.stations.length;

// Initialise the found stations header.
updateProgress();

stationInput.addEventListener('animationend', () => {
  stationInput.classList.remove('animate__animated', 'animate__rubberBand');
  document.getElementById('wrongGuessIcon').classList.add('is-hidden');
  document.getElementById('subwayIcon').classList.remove('is-hidden');
});

stationInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      const guess = stationInput.value.trim().toLowerCase();
      
      // TODO move this to a Cloudflare function.
      // Check their guess...
      for (const station of stationInfo.stations) {
        if (station.spellings.includes(guess)) {
          if (stationsFound.includes(station.id)) {
            // Let the user know this has been found before...
            document.getElementById('subwayIcon').classList.add('is-hidden');
            document.getElementById('rightGuessIcon').classList.remove('is-hidden');

            setTimeout(() => {
              document.getElementById('rightGuessIcon').classList.add('is-hidden');
              document.getElementById('subwayIcon').classList.remove('is-hidden');
              stationInput.value = '';
            }, 750);

            return;
          }

          // First time finding it! Update the marker...
          myMap.removeLayer(station.marker);

          station.marker = L.circleMarker({ lat: station.latitude, lng: station.longitude }, { 
            radius: 5,
            color: '#00d1b2',
            fill: true,
            fillColor: '#00d1b2',
            fillOpacity: 1
          });

          station.marker.bindTooltip(station.name);
          station.marker.addTo(myMap);

          myMap.setView({ lat: station.latitude, lng: station.longitude }, 14, { 
            animate: true, 
            duration: 0.5
          });

          const foundStationsList = document.getElementById('foundStationsList');
          foundStationsList.innerHTML = `
            ${foundStationsList.innerHTML}
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-subway" aria-hidden="true"></i>
            </span>
            ${station.name}
            </a>
          `;

          stationInput.value = '';
          stationsFound.push(station.id);
          updateProgress();

          // All done.
          return;
        }
      }

      // Animate for an incorrect guess.
      document.getElementById('subwayIcon').classList.add('is-hidden');
      document.getElementById('wrongGuessIcon').classList.remove('is-hidden');
      stationInput.classList.add('animate__animated', 'animate__rubberBand');

  }
});

// Draw the station markers.
for (const station of stationInfo.stations) {
  const marker = L.circleMarker({ lat: station.latitude, lng: station.longitude }, { 
    radius: 5,
    color: '#ff0000'
  });

  marker.stationId = station.id;
  station.marker = marker;
  marker.addTo(myMap);
}