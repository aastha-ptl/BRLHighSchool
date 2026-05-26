import event1Image1 from '../assets/images/events/26th_jan_2026/event1_1.webp'
import event1Image2 from '../assets/images/events/26th_jan_2026/event1_2.webp'
import event1Image3 from '../assets/images/events/26th_jan_2026/event1_3.webp'
import event1Image4 from '../assets/images/events/26th_jan_2026/event1_4.webp'
import achieversImage1 from '../assets/images/events/2026_result_celebration/img1.webp'
import achieversImage2 from '../assets/images/events/2026_result_celebration/img2.webp'
import achieversImage3 from '../assets/images/events/2026_result_celebration/img3.webp'
import achieversImage4 from '../assets/images/events/2026_result_celebration/img4.webp'

// Static events data. Add new events by updating this file and related image imports.
const eventsData = [
   {
  slug: 'ssc-hsc-achievers-2026',
  title: 'SSC & HSC 2026 Achievers',
  date: 'May 2026',
  shortDescription: 'Nar Kelavani Mandal proudly honors the outstanding achievements of SSC and HSC 2026 students.',
  fullDescription:
    'Nar Kelavani Mandal proudly recognizes the exceptional achievements of our SSC & HSC 2026 students. Their dedication, hard work, and commitment to excellence have brought pride to the entire institution. The Secretary of Nar Kelavani Mandal extends heartfelt congratulations to all achievers for their remarkable academic performance. These bright stars have set an inspiring example for future generations. We wish them continued success, happiness, and excellence in all their future endeavors.',
  coverImage: achieversImage2,
  images: [
    achieversImage1,
    achieversImage3,
    achieversImage4,
  ],
  upcoming: false,
},
  {
    slug: 'republic-day-celebration-2026',
    title: 'Republic Day Celebration 2026',
    date: 'January 26, 2026',
    shortDescription: 'A patriotic celebration featuring cultural performances, student awards, and special recognitions.',
    fullDescription:
      'The Republic Day Celebration 2026 was organized with great enthusiasm and patriotic spirit at our school. The program began with flag hoisting and the national anthem, followed by various cultural performances including patriotic dances, singing performances, speeches, and other entertaining activities by students. Gifts and prizes were distributed to students for their excellent achievements in academics and co-curricular activities. Academic toppers, sports achievers, and talented students from various fields were honored with awards and certificates. Special thanks to Mr. Vinu Bhai Chotabhai Patel for generously donating ₹2 lakh to Nar Kelavani Mandal for supporting school activities and student development programs. His valuable contribution is sincerely appreciated by the entire school family.',
    coverImage: event1Image4,
    images: [
      event1Image2,
      event1Image3,
      event1Image1,
    ],
    upcoming: false,
  }
 

  
]

export default eventsData
