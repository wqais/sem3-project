import React, { useState } from 'react';
import Calendar from 'react-awesome-calendar';
import Breadcrumb from '../components/Breadcrumb';

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      color: '#fd3153',
      from: '2024-10-05T00:00:00+00:00',
      to: '2024-10-05T23:59:59+00:00',
      title: 'Neenopal Process',
    },
    {
      id: 2,
      color: '#1ccb9e',
      from: '2024-09-10T00:00:00+00:00',
      to: '2024-09-10T23:59:59+00:00',
      title: 'Oracle Process',
    },
    {
      id: 3,
      color: '#1ccb9e',
      from: '2024-09-19T00:00:00+00:00',
      to: '2024-09-19T23:59:59+00:00',
      title: 'DataPhi Process',
    },
    {
      id: 4,
      color: '#1ccb9e',
      from: '2024-09-16T00:00:00+00:00',
      to: '2024-09-18T23:59:59+00:00',
      title: 'Accolite Process',
    },
    {
      id: 5,
      color: '#3c78ef',
      from: '2024-10-04T00:00:00+00:00',
      to: '2024-10-04T23:59:59+00:00',
      title: 'MSCI Session',
    },
  ]);


  return (
    <>
      <Breadcrumb pageName="Events" />

      {/* Calendar Section */}
      <div className="flex flex-wrap justify-between gap-5">
        {/* Calendar Component */}
        <div className="w-full max-w-full lg:w-8/12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 text-black dark:text-white">
          <Calendar
            events={events}
            onEventClick={(event) => {
              // Handle event click if needed
              console.log(event);
            }}
          />
        </div>

        {/* Upcoming Events Section */}
        <div className="w-full max-w-full lg:w-3/12 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Upcoming Events
          </h2>

          {/* Show upcoming events */}
          {events.length > 0 ? (
            <ul className="mt-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="mb-4 rounded-lg border border-primary bg-gray p-3 dark:bg-meta-4"
                >
                  <span className="block text-sm font-semibold text-black dark:text-white">
                    {event.title}
                  </span>
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {new Date(event.from).toLocaleDateString()} -{' '}
                    {new Date(event.to).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              No upcoming events this month.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
