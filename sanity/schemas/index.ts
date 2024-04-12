import projects from "./projects";
import blockContent from './blockContent'
import category from './category'
import posts from './posts'
import author from './author'
import vacancies from './vacancies'
import offices from './offices'
import salesStaff from './sales-staff'
import pages from './pages'
import services from './services'
import {callToActionType} from '../../types/callToActionType'
import {formType} from '../../types/formType'
import {heroType} from '../../types/heroType'
import {imageGalleryType} from '../../types/imageGalleryType'
import {pageType} from '../../types/pageType'
import {textWithIllustrationType} from '../../types/textWithIllustrationType'
import {videoType} from '../../types/videoType'

const schemas = [ pageType,
    heroType,
    callToActionType,
    textWithIllustrationType,
    imageGalleryType,
    formType,
    videoType, 
    pages, 
    posts, 
    author, 
    category, 
    projects, 
    vacancies, 
    services, 
    salesStaff, 
    offices, 
    blockContent]

export default schemas;