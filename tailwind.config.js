/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                apricot: {
                    50: '#FFF4E6',
                    100: '#FFE3BF',
                    200: '#FFCC85',
                    300: '#FFB04D',
                    400: '#FF9420',
                    500: '#F27A0A',
                    600: '#C45D00',
                    700: '#8A4100',
                },
                pomegranate: {
                    50: '#FDF1ED',
                    100: '#FBDDD5',
                    300: '#E97862',
                    500: '#C73E1D',
                    700: '#8C2613',
                },
                // "accent" замість "teal", щоб не конфліктувати з вбудованим Tailwind teal
                accent: {
                    50: '#ECF6F4',
                    100: '#D5EBE7',
                    300: '#5FA89E',
                    500: '#2D5F5D',
                    700: '#1A3D3C',
                },
                cream: {
                    50: '#FFFCF7',
                    100: '#FAF6EE',
                    200: '#F1EADC',
                    300: '#E5DCC9',
                },
                ink: {
                    300: '#A89484',
                    500: '#6E5949',
                    700: '#3D2A20',
                    900: '#1F140E',
                },
                // success — теж не "green", бо хочемо своє ім'я
                grass: {
                    50: '#F2FAE2',
                    200: '#DEF0BD',
                    500: '#7CB518',
                    700: '#56800C',
                },
            },
            fontFamily: {
                display: ['"Fraunces"', 'Georgia', 'serif'],
                sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
                hy: ['"Noto Sans Armenian"', 'sans-serif'],
            },
            boxShadow: {
                // teплі тіні замість дефолтних сірих
                'soft': '0 1px 2px rgba(120, 70, 30, 0.06), 0 1px 3px rgba(120, 70, 30, 0.10)',
                'card': '0 4px 8px rgba(120, 70, 30, 0.07), 0 8px 16px rgba(120, 70, 30, 0.06)',
                'card-lg': '0 12px 24px rgba(120, 70, 30, 0.10), 0 24px 48px rgba(120, 70, 30, 0.06)',

                // "3D press" — нижня тінь темнішого тону для кнопок
                'press-apricot': '0 4px 0 #C45D00, 0 4px 8px rgba(120, 70, 30, 0.07)',
                'press-apricot-sm': '0 2px 0 #C45D00',
                'press-pom': '0 4px 0 #8C2613, 0 4px 8px rgba(120, 70, 30, 0.07)',
                'press-pom-sm': '0 2px 0 #8C2613',
                'press-grass': '0 4px 0 #56800C, 0 4px 8px rgba(120, 70, 30, 0.07)',
                'press-grass-sm': '0 2px 0 #56800C',
                'press-ghost': '0 4px 0 #E5DCC9, 0 1px 3px rgba(120, 70, 30, 0.10)',
                'press-ghost-sm': '0 2px 0 #E5DCC9',
                'press-dark': '0 4px 0 rgba(0,0,0,0.15)',
                'press-dark-sm': '0 2px 0 rgba(0,0,0,0.15)',
            },
            borderRadius: {
                'card': '20px',
                'card-lg': '28px',
            },
        },
    },
    plugins: [],
}