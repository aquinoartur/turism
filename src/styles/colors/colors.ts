type ColorPalette = {
 primary: string;
 primaryLight: string;
 primaryDark: string;
 secondary: string;
 secondaryLight: string;
 secondaryDark: string;
 background: string;
 text: string;
 error: string;
 warning: string;
 success: string;
 light: string;
 dark: string;
 regularGray: string;
};

const appColors: ColorPalette = {
 primary: '#4CAF50',       // Verde
 primaryLight: '#80E27E',  // Verde Claro
 primaryDark: '#087F23',   // Verde Escuro
 secondary: '#2196F3',     // Azul
 secondaryLight: '#6EC6FF',// Azul Claro
 secondaryDark: '#0069C0', // Azul Escuro
 background: '#FFFFFF',    // Branco
 light: '#FFFFFF',    // Branco
 dark: '#000000',    // Preto
 text: '#000000',          // Preto
 error: '#F44336',         // Vermelho
 warning: '#FF9800',       // Laranja
 success: '#4CAF50',        // Verde (mesmo da cor primária)
 regularGray: '#7A7B7A',    // Cinza
};

export default appColors;