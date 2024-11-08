const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask_question",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
