export default {
  api: {
    identification: {
      create: 'users/create',
      validate: 'users/validateCode'
    },
    profile: {
      updateProfile: '/users/updateProfile'
    },
    preConditions: {
      list: '/conditions',
      save: '/users/conditions'
    }
  }
};
