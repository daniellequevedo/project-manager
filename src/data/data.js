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
                task_assigned_to: "Hal",
                task_assigned_by: "Hatem",
                task_description: "Should be a quick intro covering navigation,  opening apps, etc."
            },
            {
                task_id: 2,
                task_name: "iTunes, QuickTime, etc.",
                task_status: "in-process",
                task_due_date: "02-17-19",
                task_end_date: "",
                task_assigned_to: "Hatem",
                task_assigned_by: "Hal",
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
                task_assigned_to: "Hal",
                task_assigned_by: "Hal",
                task_description: "The basics of Git."
            }
        ]
    }
];

export default data;