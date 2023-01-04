[![wakatime](https://wakatime.com/badge/user/a381f7d8-18fa-4772-9aa0-ab9ca63cab2f/project/5c30c24d-eb12-45a8-b357-6c8cc0551a9a.svg)](https://wakatime.com/badge/user/a381f7d8-18fa-4772-9aa0-ab9ca63cab2f/project/5c30c24d-eb12-45a8-b357-6c8cc0551a9a)

# Travelport Technical Test
## First exercise, React app.

This exercise has multiple parts, we will need to create a branch for each of the parts (part 1 in a branch, then once that is done create, branch 2 and do part 2 there, etc), that way while we are reviewing the code, we will be able to see the evolution and not only the end result.

The exercise will be done in a repository that you will need to create in your github account, and we will need to [create an empty react app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), with this we should have all the basic tools to start the exercise.

The objective of this exercise is rendering a react app that renders a list of users from a call to an API.

### Part 1

This screen will need to be rendered from the following data array.

We will not need to have react components for this, but we will need to have styles according to the screenshot.

```js
const data = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Hans-J.",
      last: "Kania"
    },
    location: {
      street: {
        number: 3619,
        name: "Schützenstraße"
      },
      city: "Kevelaer",
      state: "Brandenburg",
      country: "Germany",
      postcode: 47826,
      coordinates: {
        latitude: "-51.3338",
        longitude: "-125.1798"
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran"
      }
    },
    email: "hans-j..kania@example.com",
    login: {
      uuid: "6695e636-65f6-4259-a30d-9d1e9f66e0e6",
      username: "beautifulsnake644",
      password: "chrissy",
      salt: "At8xlwJQ",
      md5: "bece76a996b50969cbb5b180b4d2b786",
      sha1: "974dab51aeec788077924a982de1fc3a1909f881",
      sha256: "099c4d43510ca6f2b69a43a8f100d528eacae2de6bb4e1410bd3b989f3d46a52"
    },
    dob: {
      date: "1992-10-17T12:37:38.897Z",
      age: 29
    },
    registered: {
      date: "2004-09-02T19:28:00.220Z",
      age: 17
    },
    phone: "0594-4909418",
    cell: "0171-3649590",
    id: {
      name: "SVNR",
      value: "53 171092 K 095"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg"
    },
    nat: "DE"
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Milla",
      last: "Kivela"
    },
    location: {
      street: {
        number: 4110,
        name: "Satakennankatu"
      },
      city: "Keitele",
      state: "Northern Savonia",
      country: "Finland",
      postcode: 55669,
      coordinates: {
        latitude: "-66.3883",
        longitude: "112.4712"
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa"
      }
    },
    email: "milla.kivela@example.com",
    login: {
      uuid: "25b7f8f0-8295-4895-986c-47877bb458a0",
      username: "yellowmouse709",
      password: "098765",
      salt: "DERSqwGN",
      md5: "23d6545014211418c7ce9e751f6da2cb",
      sha1: "ed9197bd313bc3fee9b0f6990df0276c527f85ee",
      sha256: "4ac59511cbdb83f7f6e12c7360f60b5ebeb125cf811d68fdf346103b4cfd8455"
    },
    dob: {
      date: "1974-12-20T02:21:40.118Z",
      age: 47
    },
    registered: {
      date: "2003-02-23T01:07:54.630Z",
      age: 19
    },
    phone: "03-467-353",
    cell: "044-250-33-15",
    id: {
      name: "HETU",
      value: "NaNNA176undefined"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
    },
    nat: "FI"
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Javier",
      last: "Wood"
    },
    location: {
      street: {
        number: 1432,
        name: "Washington Ave"
      },
      city: "Nowra",
      state: "Northern Territory",
      country: "Australia",
      postcode: 5515,
      coordinates: {
        latitude: "88.3250",
        longitude: "52.5100"
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
      }
    },
    email: "javier.wood@example.com",
    login: {
      uuid: "a80727ac-5957-4481-9528-1bb067fe2f95",
      username: "browngoose161",
      password: "jesse",
      salt: "MjJs8SOL",
      md5: "4855cf89892ce083f0d7180a93554ec4",
      sha1: "5fa4c1fc4bb467065cb2f964b5fa399e52834f11",
      sha256: "e49ffefabce366354545352802b8652e295acc123112dbba21ae3354ad7231a2"
    },
    dob: {
      date: "1981-12-08T02:38:26.744Z",
      age: 40
    },
    registered: {
      date: "2013-09-16T17:09:58.966Z",
      age: 8
    },
    phone: "03-2688-2618",
    cell: "0451-323-227",
    id: {
      name: "TFN",
      value: "320246750"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
    },
    nat: "AU"
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Arpitha",
      last: "Patil"
    },
    location: {
      street: {
        number: 7650,
        name: "Somwar Peth"
      },
      city: "Mangalore",
      state: "Andhra Pradesh",
      country: "India",
      postcode: 52391,
      coordinates: {
        latitude: "-3.7433",
        longitude: "24.3135"
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City"
      }
    },
    email: "arpitha.patil@example.com",
    login: {
      uuid: "a4038629-b1dd-458e-9a73-ce9076304189",
      username: "blackbear442",
      password: "bmw325",
      salt: "xnbrhFL2",
      md5: "01a4af7ead5382f006e228ffde4ba6ce",
      sha1: "d71211638844f1e86a2bd6d381bad04f341a2ed1",
      sha256: "60b116fa932cc7016ce69fca434ff5b4aca95c3c0350724915efc1083e997c6b"
    },
    dob: {
      date: "1975-12-25T15:35:35.851Z",
      age: 46
    },
    registered: {
      date: "2007-09-11T23:13:19.615Z",
      age: 14
    },
    phone: "9254780555",
    cell: "7473244636",
    id: {
      name: "UIDAI",
      value: "929683179772"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg"
    },
    nat: "IN"
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Séléna",
      last: "Sanchez"
    },
    location: {
      street: {
        number: 4467,
        name: "Place des 44 Enfants D'Izieu"
      },
      city: "Avignon",
      state: "Orne",
      country: "France",
      postcode: 62318,
      coordinates: {
        latitude: "-34.1370",
        longitude: "-101.8534"
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    email: "selena.sanchez@example.com",
    login: {
      uuid: "047ab918-870a-493e-a644-2efc22b63f12",
      username: "redelephant134",
      password: "robotech",
      salt: "9mw7wdLU",
      md5: "96a0587344013b0dfca27936ac203d4a",
      sha1: "877fa5ddd51a4e692677c34e3797b47f40789c98",
      sha256: "40375c00bd16051f57db6a793a5d681ebeb891e6bf53be89d5a3d270e2d4e0b1"
    },
    dob: {
      date: "1976-05-14T07:38:43.567Z",
      age: 46
    },
    registered: {
      date: "2011-03-13T04:46:11.771Z",
      age: 11
    },
    phone: "03-61-59-35-04",
    cell: "06-68-38-02-16",
    id: {
      name: "INSEE",
      value: "2760451643212 96"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
    },
    nat: "FR"
  }
];
```

### Part 2

Now we will need to modify our initial app, instead of having all the users render at the same time, we will have a button that each time it’s pressed will render a new user, starting from 0 users, up to the limit.

Once the limit has been reached we will need to start anew.

### Part 3

We will modify where are we getting our information from, instead of using the fixed data array, we will call [this API](https://randomuser.me/api/?results=5), that returns a list of users with the same structure we’ve been using up until now

## Second Exercise, Fibonacci sequence

The objective of this exercise is to implement a function that given a position (integer), will return the corresponding position of the [Fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html).

This will be done in [this codesandbox](https://codesandbox.io/s/fibonacci-exercise-1pipgu), and you will notice we have multiple files:

- index.js where the code will need to be added

```jsx
export default function getFibonacciNumberFromPosition(position) {
  // Implement your function here.
}
```

- index.spec.js this is the file testing the function that we previously implemented, and they all should pass, feel free to add any tests that you think that can be helpful to verify the code

Note that to see if the tests are passing (or not), we should go to the Tests tab in the right, instead of the browser one.
