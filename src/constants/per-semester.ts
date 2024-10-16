export const STAFF_IMAGE_FOLDER = '/images/staff'

export const STAFF = [
  {
    name: 'Tuneer Roy',
    role: 'Lecturer',
    email: 'tuneer@seas.upenn.edu',
    oh: [{
      location: 'Levine 501',
      time: 'Wednesday 12-1:30pm',
    }],
    description:
      "Hey! I'm Tuneer, a senior studying CS. I used to teach JavaScript and was formerly a team lead for Penn Mobile @ Penn Labs, so if the app ever breaks... it wasn't me.",
    image: 'tuneer.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'TA',
    email: 'singhvik@seas.upenn.edu',
    oh: [{
      location: 'Levine 601',
      time: 'Tuesday 5-6:30pm',
    },
    {
      location: 'Virtual',
      time: 'Sunday 8-9pm'
    }
  ],
    description:
      "Hi! I’m Vikram, a CS submat from Hong Kong. I finished my undergrad last spring and I love sports (F1/tennis), house music, and YouTube rabbit holes.",
    image: 'vikram.jpg',
  },
  {
    name: 'Roshan Bellary',
    role: 'TA',
    email: 'rbellary@seas.upenn.edu',
    oh: [{
      location: 'Levine 601',
      time: 'Friday 12-1:30pm',
    },
    {
      location: 'Virtual',
      time: 'Wednesday 5:30-6:30pm'
    }
  ],
    description:
      "Hi! I'm Roshan, a sophomore studying Computer Science and Finance. I like shopping vinyls and playing soccer in my free time. On campus, I'm involved with Penn Moviegoers and Hack4Impact. Feel free to reach out for anything!",
    image: 'roshan.png',
  },
] as const

export const DAY = 'Wednesdays from 3:30 to 5pm'

export const LOCATION = 'Towne 337'
