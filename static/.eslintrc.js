module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": ["js", "jsx"] }],
        "import/prefer-default-export": ["off"],
        "react/jsx-props-no-spreading": ["warn"],
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
