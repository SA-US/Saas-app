export const getSubjectColor = (subject: string): string => {
    const colorMap = {
        'Math': '#FF6B6B',
        'Science': '#4ECDC4',
        'English': '#A1C4FD',
        'History': '#9B59B6',
        'Geography': '#F7D794',
        'Physics': '#95A5A6',
        'Chemistry': '#3498DB',
        'Biology': '#2ECC71',
        'default': '#E74C3C'
    };
    
    return colorMap[subject as keyof typeof colorMap] || colorMap['default'];
};
