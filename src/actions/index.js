import uuidv4 from 'uuid/v4';
import { ADD_PROJECT } from './types';

export const addProject = ({ project }) => ({
    type: ADD_PROJECT,
    payload: {
        id: uuidv4(),
        project_name: project,
        project_status: "in-consideration",
        project_category: "environments",
        project_due_date: "03-01-19",
        project_end_date: "",
        project_assigned_to: "Michael",
        project_assigned_by: "Pam",
        project_resource_link: "https://www.apple.com",
        project_final_link: "",
        project_description: "Something",
        project_notes: "Wow, look at him go.",
        project_tasks: []
    }
});