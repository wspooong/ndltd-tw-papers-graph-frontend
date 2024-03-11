interface Paper {
    uid: string
    layer:number | null
    title: string
    author: string
    degree: string
    graduated_academic_year: number
    url: string
    abstract: string
    institution: string
    department: string
    keywords: string[]
    narrow_field: string
    detailed_field: string
}

export default Paper