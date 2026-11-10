export const CATEGORIES = [
    'All',
    'Frontend',
    'Backend',
    'Mobile',
    'DevOps',
    'UI/UX Design',
    'Database'
];

export const PRIORITIES = ['Low', 'Medium', 'High'];

export const STATUSES = ['All', 'To Do', 'In Progress', 'Completed'];

export const INITIAL_TASKS = [
    {
        id: '1',
        title: 'Design & Develop React Dashboard UI',
        category: 'Frontend',
        priority: 'High',
        status: 'Completed',
        dueDate: '2026-11-15',
        description: 'Implement dark mode, CRUD operations, and responsive grid layout.'
    },
    {
        id: '2',
        title: 'Optimize API Endpoint Latency',
        category: 'Backend',
        priority: 'Medium',
        status: 'In Progress',
        dueDate: '2026-11-20',
        description: 'Add Redis caching layer to speed up database query responses.'
    },
    {
        id: '3',
        title: 'Setup CI/CD Pipeline with GitHub Actions',
        category: 'DevOps',
        priority: 'High',
        status: 'To Do',
        dueDate: '2026-11-25',
        description: 'Automate build, test, and deployment workflows on merge.'
    },
    {
        id: '4',
        title: 'Figma Mobile App Wireframes',
        category: 'UI/UX Design',
        priority: 'Low',
        status: 'To Do',
        dueDate: '2026-11-28',
        description: 'Draft user journeys and mockups for iOS app onboard screens.'
    }
];