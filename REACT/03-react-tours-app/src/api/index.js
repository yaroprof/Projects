import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';


const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotel-filters/list',
  params: {
    location_id: '293919',
    adults: '1',
    rooms: '1',
    // nights: '2',
    // lang: 'en_US',
    // order: 'asc',
    // currency: 'USD',
    // sort: 'recommended'
  },
  headers: {
    'X-RapidAPI-Key': '29cd9b2112msha91ccbbff270d52p14e00ejsne86aecb56f46',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

// const options = {

//   params: {
//     latitude: '12.91285',
//     longitude: '100.87808',
//   },
//   headers: {
//     'X-RapidAPI-Key': '29cd9b2112msha91ccbbff270d52p14e00ejsne86aecb56f46',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

export const getPlacesData = async () => {
  try {
    const { data: {data}} = await axios.get(URL, options)
    return data
  }
  catch (error) {
    console.log(error);
  }
}