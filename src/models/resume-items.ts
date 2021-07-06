
export interface IContact {
    type: string
    value: string
}
export interface IEducational {
    id: string
    name: string
    organization: string
    result?: string
    year: number
}
export interface Ilanguage {
    id: string
    name: string
    level: string
}
export interface IJob {
    id: string
    company: string
    area: string
    position: string
    start: string
    end: string
    description: string
}
