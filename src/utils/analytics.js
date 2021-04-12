import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize([{trackingId: process.env.NEXT_PUBLIC_GA_ID}])
  ReactGA.set({checkProtocolTask: 'testing'});
}

export const logPageView = () => {
  ReactGA.set({page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({category, action})
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({description, fatal})
  }
}
