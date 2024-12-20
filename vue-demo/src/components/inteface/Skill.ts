
export interface Skill {
    Name: string,
    ImageSrc: string,
    BtnSetting: Array<SkillBtn>
}

export interface SkillBtn {
    ToolName: string,
    Class: string | string[],
    Style?: Record<string, string>[]
}

export const MySkills: Array<Skill> =
    [
        {
            Name: '前端開發',
            ImageSrc: new URL('../../assets/vuejs.jpg', import.meta.url).href,
            BtnSetting: [{ ToolName: 'Vue.js', Class: ['btn', 'btn-primary'] }],
        },
        {
            Name: '後端RestfulApi',
            ImageSrc: new URL('../../assets/restful.png', import.meta.url).href,
            BtnSetting: [
                {
                    ToolName: '.Net Core',
                    Class: 'btn btn-warning'
                },
                {
                    ToolName: 'Ef Core',
                    Class: ['btn'],
                    Style: [
                        { 'backgroundColor': '#FFE153' }
                    ]
                },
                {
                    ToolName: 'Oracle SQL',
                    Class: 'btn'
                },
                {
                    ToolName: 'SQLServer',
                    Class: 'btn',
                    Style: [
                        { 'backgroundColor': '#9999CC' }
                    ]
                },
            ]
        },
        {
            Name: '自動化程式開發',
            ImageSrc: new URL('../../assets/aspNet.png', import.meta.url).href,
            BtnSetting: [{ ToolName: '.Net C#', Class: ['btn', 'btn-primary'] }],
        },
        {
            Name: '數據分析呈現',
            ImageSrc: new URL('../../assets/Python.jpg', import.meta.url).href,
            BtnSetting: [{ ToolName: 'Python', Class: ['btn', 'btn-primary'] }],
        },
    ];