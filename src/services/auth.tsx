import axiosInstance from './base'; // Import the Axios instance configured in base.tsx

export interface AuthResponse {
    token?: string;
    username?: string;
    role?: string;
    message?: string;
    email?: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export const register = async (data: RegisterData): Promise<AuthResponse> => {
    try {
        const response = await axiosInstance.post<AuthResponse>('register', data);
        return response.data;
    } catch (error: any) {
        console.error('Error during registration:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
    try {
        const response = await axiosInstance.post<AuthResponse>('login', data);
        const { token, username, role, email } = response.data;

        // Save the token to localStorage for subsequent requests
        if (token) {
            localStorage.setItem('access_token', token);
        }

        return { token, username, role, email };
    } catch (error: any) {
        console.error('Error during login:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const logout = async (): Promise<{ type: string }> => {
    try {
        const response = await axiosInstance.post<{ type: string }>('logout');
        // Remove token from localStorage after logout
        localStorage.removeItem('access_token');
        return response.data;
    } catch (error: any) {
        console.error('Error during logout:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const getUser = async () => {
    try {
        const response = await axiosInstance.get('me');
        return response.data;
    } catch (error: any) {
        console.error('Error during get user:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};