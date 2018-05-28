export class Curriculuns {
    _id?: string
    languages: [string]
    curriculum: [Curriculum]
    user: {
        name: string 
    }    
}

export class Curriculum {
    _id?: string
    created: string
    updated: string
    experiences: [
        {
            title: string
            local: string
            dates: {
                start: Date
                end: Date
            }
            content: string
        }
    ]
    educations: [
        {
            title: string
            local: string
            dates: {
                start: Date
                end: Date
            }
            content: string
        }
    ]
    languages: [
        {
            title: string
            nivel: number
        }
    ]
    skills: [
        {
            classes: [string]
            skills: [
                {
                    title: string
                    nivel: number
                    classes: [string]
                }
            ]
        }
    ]
    courses: {
        keywords: [string]
        courses: {
            title: string
            local: string
            dates: {
                start: Date
                end: Date
            }
            content: string
            url: string
            keywords: [string]
        }
    }
}