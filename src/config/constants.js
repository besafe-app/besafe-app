export default {
  api: {
    identification: {
      create: 'users/create',
      validate: 'users/validateCode'
    },
    profile: {
      updateProfile: '/users/updateProfile'
    },
    symptoms: {
      list: '/symptoms',
      save: '/symptoms/create'
    },
    preConditions: {
      list: '/conditions',
      save: '/users/conditions'
    }
  }
};
