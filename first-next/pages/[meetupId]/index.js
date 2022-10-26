import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
 
    title='Maasai Mara National Reserve'
    image=
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mara_River_Massai_Mara.jpg/1024px-Mara_River_Massai_Mara.jpg'
    address='Narok, Kenya'
    description= 'Mara River - Massai Mara'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'k1',
        },
      },
      {
        params: {
          meetupId: 'k2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
       title: 'Amboseli National Park, Kenya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kilimanjaro_from_Amboseli.jpg/1024px-Kilimanjaro_from_Amboseli.jpg',
    address: 'Kajiado, Kenya',
    description: 'Kilimanjaro from Amboseli',
      },
    },
  };
}

export default MeetupDetails;
