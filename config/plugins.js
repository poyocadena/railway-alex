module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dud6zutl8'),
          api_key: env('316849558635844'),
          api_secret: env('***************************'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
