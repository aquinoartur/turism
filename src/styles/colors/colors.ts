type ColorPalette = {
 primary: string;
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
 lightGray: string;
 gray: string;
};

const appColors: ColorPalette = {
 primary: '#157367',       // Verde
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
 lightGray: '#E0E0E0',      // Cinza Claro
 gray: '#BDBDBD',           // Cinza

};

export default appColors;