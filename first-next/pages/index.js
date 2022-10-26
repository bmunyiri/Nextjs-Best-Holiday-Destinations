import MeetupList from '../components/meetups/MeetupList';


const ANIMALS_RESERVES = [
  {
    id: 'k1',
    title: 'Maasai Mara National Reserve',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mara_River_Massai_Mara.jpg/1024px-Mara_River_Massai_Mara.jpg',
    address: 'Narok, Kenya',
    description: 'Mara River - Massai Mara',
  },
  {
    id: 'k2',
    title: 'Amboseli National Park, Kenya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kilimanjaro_from_Amboseli.jpg/1024px-Kilimanjaro_from_Amboseli.jpg',
    address: 'Kajiado, Kenya',
    description: 'Kilimanjaro from Amboseli',
  },
    {
    id: 'k3',
    title: 'Tsavo National Parks, Kenya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/ElephantsInTsavo.jpg/1024px-ElephantsInTsavo.jpg',
    address: 'Tsavo , Kenya',
    description: 'Tsavo East / West National Parks',
  },
     {
    id: 'k3',
    title: 'Malindi Marine National Park, Kenya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Malindi_-_Reef_e_bassa_marea_-_panoramio.jpg/1280px-Malindi_-_Reef_e_bassa_marea_-_panoramio.jpg',
    address: 'Malindi , Kenya',
    description: 'Malindi Marine National Park',
  },
];

function HomePage( props ) {

  return (
 
    <MeetupList meetups={props.meetups} />

  )
}



export async function getStaticProps() {

  return {
    props: {
      meetups: ANIMALS_RESERVES 
    },
    revalidate: 1
  }; 
}

export default HomePage;