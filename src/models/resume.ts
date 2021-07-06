import { IContact, IEducational, IJob, Ilanguage } from "./resume-items";

export interface IResumePreview {
    id: string
    photo: string
    name: string
}

export interface IResume {
    id: string
    name: string
    age: number
    birth_date: string
    gender: 'male' | 'female'
    area: string
    title: string
    contacts: Array<IContact> | null
    photo: {
        small: string
        medium: string
    }
    education: Array<IEducational> | null
    language: Array<Ilanguage> | null
    experience: Array<IJob> | null
    skill_set: Array<string> | null
}
