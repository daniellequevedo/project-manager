let data = [
    {
        project_id: 1,
        project_name: "Environment - Mac",
        project_status: "in-process",
        project_category: "environments",
        project_due_date: "03-01-19",
        project_end_date: "",
        project_assigned_to: "Michael",
        project_assigned_by: "Pam",
        project_tasks: [
            {
                task_id: 1,
                task_name: "Getting Started",
                task_status: "approved",
                task_due_date: "01-07-19",
                task_end_date: "",
                task_assigned_to: "Jim",
                task_assigned_by: "Dwight",
                task_description: "Should be a quick intro covering navigation,  opening apps, etc."
            },
            {
                task_id: 2,
                task_name: "iTunes, QuickTime, etc.",
                task_status: "in-process",
                task_due_date: "02-17-19",
                task_end_date: "",
                task_assigned_to: "Creed",
                task_assigned_by: "Daryl",
                task_description: "How to use the fun apps."
            }            
        ]
    },
    {
        project_id: 2,
        project_name: "Git",
        project_status: "approved",
        project_category: "tools",
        project_due_date: "04-01-19",
        project_end_date: "",
        project_assigned_to: "Phyllis",
        project_assigned_by: "Creed",        
        project_tasks: [
            {
                task_id: 3,
                task_name: "Introduction",
                task_status: "approved",
                task_due_date: "03-01-19",
                task_end_date: "",
                task_assigned_to: "Hank",
                task_assigned_by: "David",
                task_description: "The basics of Git. The course will start with command line interface, and move to creating a Github account. Course should finish with creation and merging of Pull Requests. Proper handling of merge conflicts should also be discussed as well as general best practices."
            }
        ]
    },
    {
        project_id: 3,
        project_name: "VS Code",
        project_status: "in-consideration",
        project_category: "tools",
        project_due_date: "05-04-19",
        project_end_date: "",
        project_assigned_to: "Meredith",
        project_assigned_by: "Oscar",        
        project_tasks: []
    },
    {
        project_id: 4,
        project_name: "Tic-Tac-Toe",
        project_status: "approved",
        project_category: "general",
        project_due_date: "05-25-19",
        project_end_date: "",
        project_assigned_to: "Kevin",
        project_assigned_by: "Angela",        
        project_tasks: []
    },
    {
        project_id: 5,
        project_name: "Environment - Windows",
        project_status: "complete",
        project_category: "environments",
        project_due_date: "10-05-18",
        project_end_date: "09-20-18",
        project_assigned_to: "Andy",
        project_assigned_by: "Stanley",        
        project_tasks: []
    },
    {
        project_id: 6,
        project_name: "React-Redux Thunk Series",
        project_status: "complete",
        project_category: "liberries",
        project_due_date: "08-10-18",
        project_end_date: "07-30-18",
        project_assigned_to: "Toby",
        project_assigned_by: "Kelly",
        project_tasks: []
    }
];

export default data;