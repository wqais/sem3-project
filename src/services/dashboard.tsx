import axios from './base'; // Adjust the path to your base.tsx file

export const fetchPlacementStats = async () => {
    try {
        const response = await axios.get('student/count');
        return response.data; // { total_count, placed_count }
    } catch (error) {
        console.error('Error fetching placement stats:', error);
        throw error;
    }
};

export const fetchEventCount = async () => {
    try {
        const response = await axios.get('calendar/upcoming');
        return response.data.length;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const fetchCompanies = async () => {
    try {
        const response = await axios.get('company');
        return response.data.length;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
}

export const fetchUserCount = async () => {
    try {
        const response = await axios.get('user/count');
        return response.data.total_users;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
}

export const fetchPlacementData = async () => {
    try {
        const response = await axios.get('student/placement-chart');
        console.log(response);

        return { companies: response.data.companies, student_count: response.data.student_count, package: response.data.package };
    } catch (error) {
        console.error('Error fetching placement data:', error);
        throw error;
    }
};

export const fetchInternshipData = async () => {
    try {
        const response = await axios.get('student/internship-chart');
        return { companies: response.data.companies, student_count: response.data.student_count, stipend: response.data.stipend };
    } catch (error) {
        console.error('Error fetching placement data:', error);
        throw error;
    }
};

export const fetchCAtegoryWiseData = async () => {
    try {
        const response = await axios.get('student/category-stats');
        return { categoryData: response.data.category };
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};