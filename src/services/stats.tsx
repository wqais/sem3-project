import axios from './base'; // Adjust the path to your base.tsx file

export const fetchPlacementStats = async () => {
    try {
        const response = await axios.get('student/placed');
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching placement stats:', error);
        throw error;
    }
};

export const fetchInternshipStats = async () => {
    try {
        const response = await axios.get('student/internship');
        return response.data;
    } catch (error) {
        console.error('Error fetching placement stats:', error);
        throw error;
    }
};