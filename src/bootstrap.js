import {fetchFromLocalStorage, setToLocalStorage} from "./utils";

if (!fetchFromLocalStorage()) {
  setToLocalStorage([
    {
      firstName: 'Ankur',
      lastName: 'Singhal',
      phoneNumber: 9686320087,
      email: 'ankusing@visa.com'
    },
    {
      firstName: 'Silky',
      lastName: 'Bhardwaj',
      phoneNumber: 9880199184,
      email: 'silkybhardwaj1947@gmail.com'
    },
    {
      firstName: 'Surbhi',
      lastName: 'Singhal',
      phoneNumber: 9582969018,
      email: 'surbhisinghal13@gmail.com'
    }
  ])
}
