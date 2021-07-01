const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation((success) =>
    success({
      coords: {
        latitude: 50,
        longitude: 50,
      },
    })),
};

Object.defineProperty(window.navigator, 'geolocation', { value: mockGeolocation });

export {};
