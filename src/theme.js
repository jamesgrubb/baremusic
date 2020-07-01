const baseTheme = {
    colors: {
    grayDark : '#515151',
    grayLight: '#F5F5F5',
    gray: '#C4C4C4',
    blue: '#438FF4',
    green: '#3EC8BA',
    greenLight: '#EFFAEF'
    },
    fontSizes: [12, 16, 18, 24, 32]
    
}

export const theme =  {
    ...baseTheme,
    bg: baseTheme.colors.grayDark,
    color: baseTheme.colors.greenLight,
    sizeHeadline: baseTheme.fontSizes[4],
    textSizeSmall: baseTheme.fontSizes[0],
}