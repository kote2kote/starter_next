module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // --------------------------------------------------
      // my default
      // --------------------------------------------------
      // 根拠:https://hashimotosan.hatenablog.jp/entry/2020/12/06/182327

      maxtb: { max: '519px' },
      tb: '520px',
      tbpc: { min: '520px', max: '959px' },

      maxpc: { max: '959px' },
      pc: '960px',

      // --------------------------------------------------
      // tailwind default
      // --------------------------------------------------
      maxsm: { max: '639px' },
      sm: '640px',
      smmd: { min: '640px', max: '767px' },

      maxmd: { max: '767px' },
      md: '768px',
      mdlg: { min: '768px', max: '1023px' },

      maxlg: { max: '1023px' },
      lg: '1024px',
      lgxl: { min: '1024px', max: '1279px' },

      maxxl: { max: '1279px' },
      xl: '1280px',
      xlwide: { min: '1280px', max: '1535px' },

      maxwide: { max: '1535px' },
      wide: '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms')
    // 通常はタグにリセットをかけてるけど、強引なのでclassにリセットを掛ける。下のURLにリセットクラス名がある
    // https://github.com/tailwindlabs/tailwindcss-forms#using-classes-instead-of-element-selectors
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
