export interface ProjectLocation {
    source: String,
    medium: String,
    url: String,
    description: String,
}

export interface Project {
    name: String,
    gerund: String,
    type: String,
    src: Array<ProjectLocation>,
    image?: String,
    course?: String,
    assc?:String
}

export const Projects:Project[] = [
    {
        name: 'CB Track',
        gerund: 'Developing a certification tracking solution for future behavior analysts',
        type: 'code',
        src: [],
        assc: 'Finding Time, LLC'
    },
    {
        name: 'Fodiary',
        gerund: 'Expanding a to-do application into a meal planning solution',
        type: 'code',
        src: [{
            source: 'github',
            medium: 'repo',
            url: 'https://github.com/mmelines/todo',
            description: 'project github repository'
        }]
    },
    {
        name: 'Fyyur',
        gerund: 'Creating a gig matching application based on fake database data',
        type: 'code',
        src: [{
            source: 'github',
            medium: 'repo',
            url: 'https://github.com/mmelines/fyyur_fsnd',
            description: 'project github repository'
        }],
        course: 'Full Stack Nanodegree',
        assc: 'Udacity'
    },
    {
        name: 'Mollify',
        gerund: 'Developing a SQLAlchemy-based python module for seeding and organizing relational database information',
        type: 'code',
        src: [{
            source: 'github',
            medium: 'repo',
            url: 'https://github.com/mmelines/mollify',
            description: 'project github repository'
        }]
    }
]