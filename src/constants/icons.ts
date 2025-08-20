export const Icons = {
  // navigation
  profile: require('../assets/user_circle.png'),
  friends: require('../assets/users.png'),
  search: require('../assets/search.png'),
  home: require('../assets/Home.png'),
  magnifier: require('../assets/Magnifier.png'),
  navBarMainButton: require('../assets/NavBar Main Button.png'),

  // profile
  avatar: require('../assets/avatar.png'),
  edit: require('../assets/edit.png'),
  logo: require('../assets/logo.png'),

  // menu
  password: require('../assets/pass.png'),
  signOut: require('../assets/signout.png'),
  arrowRight: require('../assets/arrow-right.png'),

  // info cards
  copy: require('../assets/copy.png'),

  // decorative
  leftVector: require('../assets/left_vector.png'),
  rightVectorSmall: require('../assets/right_vector_small.png'),
} as const;

export type IconKey = keyof typeof Icons;
