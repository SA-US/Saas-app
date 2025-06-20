export const subjectsColors = {
    Math: '#FF6B6B',
    Science: '#4ECDC4',
    English: '#A1C4FD',
    History: '#9B59B6',
    Geography: '#F7D794',
    Physics: '#95A5A6',
    Chemistry: '#3498DB',
    Biology: '#2ECC71',
    default: '#E74C3C'
};

export const getSubjectColor = (subject: string): string => {
    return subjectsColors[subject as keyof typeof subjectsColors] || subjectsColors.default;
};
