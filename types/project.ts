export interface Project {
    name: string
    images: string[]
    fullImages?: string[]
    description: string
    type: string
    technologies: string
    completedDate: string
    features?: string[];

  }
  
  export interface ProjectCategories {
    [key: string]: Project[]
  }
  
  