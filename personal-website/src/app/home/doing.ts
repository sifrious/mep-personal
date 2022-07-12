export interface doing_item {
    'name': string,
    'verb': string,
    'grammar': Array<string>,
    'link_url': string,
    'link_text': string
}

export const doing_items:Array<doing_item> = [
    {'name': 'certification tracking solution',
    'verb': 'Developing',
    'grammar': ['', ' a ', 'for future behavior analysts'],
    'link_url': '',
    'link_text': ''},
    {'name': 'to-do application',
    'verb': 'Expanding',
    'grammar': ['', ' a ', ' into a meal planning solution'],
    'link_url': '',
    'link_text': ''},
    {'name': 'gig matching application',
    'verb': '',
    'grammar': ['Creating a ', '', ' based on fake database data'],
    'link_url': '',
    'link_text': ''},
    {'name': 'python module',
    'verb': 'Developing',
    'grammar': ['', ' a SQLAlchemy-based ', ' for seeding and organizing relational database information'],
    'link_url': '',
    'link_text': ''}
]