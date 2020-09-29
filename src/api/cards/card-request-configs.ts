import { AxiosRequestConfig } from 'axios';

export const cardRequestConfigs = {
    addCardConfig: (id: string, description: string): AxiosRequestConfig => ({
        method: 'POST',
        url: `/card`,
        data: { id, description }
    }),

    deleteCardConfig: (id: string): AxiosRequestConfig => ({
        method: 'DELETE',
        url: `/card/${id}`,
        data: { id }
    }),

    updateCardConfig: (id: string, description: string): AxiosRequestConfig => ({
        method: 'PUT',
        url: `/card/${id}`,
        data: { id, description }
    }),
}