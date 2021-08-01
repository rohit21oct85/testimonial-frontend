import {useState}  from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';

export default function useTestimonials(status) {
    let API_URL = 'https://testimonial-backend.herokuapp.com/api/';
    const [intervalMs] = useState(1500)
    return useQuery('testimonials', async () => {
      const result = await axios.get(`${API_URL}testimonial/view-all/testimonials/${status}`,{
            headers: {
                  'Content-Type': 'Application/json'
              }
      });
      return result.data.data; 
    },{
      refetchInterval: intervalMs
    });
}
