export class IPlacementDrive{
    // p_id: number;
    // name: string;
    // employment_type: string
    // job_title: string
    // job_description: string
    
    // stipend: string
    // location: string
    // duration: string
    // degree: string
    // batch: string
        
    // branch: string
    // min_cgpa: string
    // min_X_marks: string
    // min_Xii_marks: string
    // diploma_cgpa: string
    
    // active_backlogs: number
    // dead_backlogs: number
    // gap_years: number
    // required_skills: string
    // optional_skills: string

    // requirement_remarks: string
    // form_link: string
    // form_deadline: string

    constructor(
        public p_id: number,
        public name: string,
        public employment_type: string,
        public job_title: string,
        public job_description: string,
    
        public stipend: string,
        public location: string,
        public duration: string,
        public degree: string,
        public batch: string,
        
        public branch: string,
        public min_cgpa: string,
        public min_X_marks: string,
        public min_Xii_marks: string,
        public diploma_cgpa: string,
    
        public active_backlogs: number,
        public dead_backlogs: number,
        public gap_years: number,
        public required_skills: string,
        public optional_skills: string,

        public requirement_remarks: string,
        public form_link: string,
        public form_deadline: string
    ){}
}