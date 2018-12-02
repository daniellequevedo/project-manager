let data = [
    {
        project_id: 1,
        project_name: "Environment - Mac",
        project_tasks: [
            {
                task_id: 1,
                task_name: "Getting Started",
                task_status: "approved",
                task_due_date: "01-07-19",
                task_end_date: "",
                task_assigned_to: "Mike",
                task_assigned_by: "Gary",
                task_description: "Should be a quick intro covering navigation,  opening apps, etc."
            },
            {
                task_id: 2,
                task_name: "iTunes, QuickTime, etc.",
                task_status: "in-process",
                task_due_date: "02-17-19",
                task_end_date: "",
                task_assigned_to: "Joe",
                task_assigned_by: "Carl",
                task_description: "How to use the fun apps."
            }            
        ]
    },
    {
        project_id: 2,
        project_name: "Git",
        project_tasks: [
            {
                task_id: 3,
                task_name: "Introduction",
                task_status: "approved",
                task_due_date: "03-01-19",
                task_end_date: "",
                task_assigned_to: "Steve",
                task_assigned_by: "Susan",
                task_description: "The basics of Git. The course will start with command line interface, and move to creating a Github account. Course should finish with creation and merging of Pull Requests. Proper handling of merge conflicts should also be discussed as well as general best practices."
            }
        ]
    }
];

export default data;