import girlLaptop from '../../images/about.svg'
import  questionMark from '../../images/discover.svg'
import  signUp from '../../images/signup.svg'

export const homeObjOne= {

    id: 'about',
    pageId: '/about',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topline: 'WELCOME  TO EVE',
    headline: 'Unlimited Resources for Entrepreneurs',
    description: 'We bring key resources to entrepreneurs enabling them to realise their visions and build social capital.',
    buttonLabel: 'Learn more',
    imgStart: false, 
    img: girlLaptop,
    alt: 'Laptop',
    dark: true,
    primary: true,
    darkText: false

};

export const homeObjTwo= {

    id: 'discover',
    pageId: '/discover',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topline: 'Discover yourself',
    headline: 'WANT TO KNOW HOW EVE WORKS?',
    description: 'Sign up as a member or a sponsor to access EVE',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: questionMark,
    alt: 'Laptop',
    dark: false,
    primary: true,
    darkText: true

};

export const homeObjFour= {

    id: 'signup',
    pageId: '/signup',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topline: 'Join our team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're good to go.",
    buttonLabel: 'Start Now',
    imgStart: false, 
    img: signUp,
    alt: 'Laptop',
    dark: false,
    primary: true,
    darkText: true

};
