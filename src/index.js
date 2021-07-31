import React from 'react';
import ReactDOM from 'react-dom';
import CallOfAction from './components/CallOfAction.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import Header from './components/Header.jsx';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Testimonial from './components/Testimonial.jsx';
import { QueryClient, QueryClientProvider, } from 'react-query'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Header />
    <Service />
    <Pricing />
    <CallOfAction />
    <Testimonial />
    <Clients />
    <GetInTouch />
    <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
