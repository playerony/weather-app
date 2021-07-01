const mockGeolocation = {
  geolocation: {
    getCurrentPosition: jest.fn().mockImplementation(() => ({
      coords: {
        latitude: 50,
        longitude: 50,
      },
    })),
  },
};

Object.defineProperty(window, 'navigator', { value: mockGeolocation });

export {};
