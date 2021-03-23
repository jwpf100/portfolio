// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faGithub,
  faLinkedin,
  faWordpress,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faEnvelopeSolid,
  faEnvelopeRegular,
  faGithub,
  faLinkedin,
  faWordpress,
  faWordpressSimple
  // more icons go here
)
