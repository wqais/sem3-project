import axios from './base'; // Adjust the path to your base.tsx file

export const fetchAllEvents = async () => {
    try {
        const response = await axios.get('calendar');
        return { events: response.data };
    } catch (error) {
        console.error('Error fetching eveents:', error);
        throw error;
    }
};

export const fetchUpcomingEvents = async () => {
    try {
        const response = await axios.get('calendar/upcoming');
        return { upcoming: response.data };
    } catch (error) {
        console.error('Error fetching upcoming events:', error);
        throw error;
    }
};