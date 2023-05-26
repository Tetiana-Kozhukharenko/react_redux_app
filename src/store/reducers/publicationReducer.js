const initialState = {
  publications: [
    {
      id: 1,
      author: 'Т-800',
      avatarUrl: 'https://www.vokrug.tv/pic/news/3/8/c/3/rsz300x300_38c3f49dbd3ae32889c8c9103fae9ecf.jpg',
      authorNickname: 'terminator',
      publicationDate: '2023-05-20',
      text: "I'll be back!",
      authorImage: 'https://odessa-life.od.ua/wp-content/uploads/2021/10/terminator-1024x658.jpg',
      likes: 1023,
      comments: 146,
      reposts: 122,
    },
    {
      id: 2,
      author: 'Darth Vader',
      avatarUrl: 'https://hips.hearstapps.com/hmg-prod/images/darth-vader-hayden-christensen-obi-wan-kenobi-1656074706.jpg?crop=0.414xw:0.984xh;0.252xw,0.0155xh&resize=1200:*',
      authorNickname: 'darth_vader',
      publicationDate: '2023-05-21',
      text: 'The power in me is strong!',
      authorImage: 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720',
      likes: 1543,
      comments: 343,
      reposts: 132,
    },
    {
      id: 3,
      author: 'Thomas Anderson',
      avatarUrl: 'https://www.film.ru/sites/default/files/filefield_paths/keanu-reeves_2.jpg',
      authorNickname: 'hacker_Neo',
      publicationDate: '2023-05-23',
      text: 'Can you stop it?',
      authorImage: 'https://inspired.com.ua/wp-content/uploads/2020/02/fylm-kopyya.jpg',
      likes: 1056,
      comments: 256,
      reposts: 189,
    },
  ],
};


const publicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, likes: publication.likes + 1 } : publication
        ),
      };
    case 'DECREMENT_LIKES':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, likes: publication.likes - 1 } : publication
        ),
      };
    case 'INCREMENT_COMMENTS':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, comments: publication.comments + 1 } : publication
        ),
      };
    case 'DECREMENT_COMMENTS':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, comments: publication.comments - 1 } : publication
        ),
      };
    case 'INCREMENT_REPOSTS':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, reposts: publication.reposts + 1 } : publication
        ),
      };
    case 'DECREMENT_REPOSTS':
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.id === action.payload ? { ...publication, reposts: publication.reposts - 1 } : publication
        ),
      };
      case 'ADD_PUBLICATION':
        const newPublication = {
          id: action.payload.id,
          authorImage: action.payload.authorImage,
          authorNickname: action.payload.authorNickname,
          avatarUrl: action.payload.avatarUrl,
          author: action.payload.author,
          text: action.payload.text,
          publicationDate: action.payload.publicationDate,
          likes: 0,
          comments: 0,
          reposts: 0,
        };
      
        return {
          ...state,
          publications: [...state.publications, newPublication],
        };
    default:
      return state;
  }
};

export default publicationReducer;